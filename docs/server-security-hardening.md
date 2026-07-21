# Server Security: Incident Report & Hardening Runbook

**Status:** Reference document · Applies to all self-managed VPS projects (ThinkChinese, ThinkFrench, and any future server)
**First written:** 2026-07-21, after the ThinkChinese SMTP-spam incident
**Owner:** Frederic Simon

This document has two purposes:

1. **Part A** — a written record of the ThinkChinese incident (what happened, what we found, what we couldn't prove).
2. **Part B onward** — a reusable checklist to harden this and every other server so it doesn't happen again.

---

## Part A — Incident Report: ThinkChinese SMTP spam (July 2026)

### Summary

Contabo sent an abuse alert warning that our VPS (`45.137.194.237`, hostname `vmi3186124`, hosting `thinkchinese.com`) was making an unusually high volume of outbound SMTP connections on **port 25**, and that the port would be blocked if it continued. This server does **not** send email as part of normal operation, so the traffic was not legitimate — the server had been abused to send spam.

### The server

- **Provider/host:** Contabo VPS, Ubuntu (kernel 6.8.0), IP `45.137.194.237`
- **Stack:** Next.js app (`thinkchinese.com`, Next `16.1.6`, next-auth `5.0.0-beta.30`, Prisma + SQLite) running under **PM2** behind **nginx**
- **App runs as:** unprivileged `thinkchinese` user (good — not root)

### Timeline (reconstructed from logs)

| When (server time, CEST) | Event |
|---|---|
| Ongoing, for months | Relentless SSH brute-force against `root` and random usernames from many IPs (e.g. `91.92.47.140`, `91.92.42.7`, `175.100.126.138`). `/var/log/btmp` held ~238 MB of **failed** logins. |
| Jul 18, 03:00 | Last successful nightly DB backup (`prod-20260718.db`). |
| Jul 18, until 16:44 | nginx access log normal — only scanner noise and legitimate visitors. No successful exploit request identified. |
| Jul 18, ~16:49–16:51 | **All disk logging dies at once** (rsyslog "omfile suspended" loop; journald, sysstat stop). Last real event at **16:51:11** is an SSH brute-force attempt from `91.92.42.7`. No kernel EXT4 / I/O / OOM / segfault errors. |
| Jul 18 16:51 → Jul 21 17:26 | **Logging blackout (~2.5 days).** The spam was sent during this window. |
| ~Jul 20 | Contabo detects the outbound SMTP spike and sends the abuse alert. |
| Jul 21 | Server paused; replied to Contabo; Contabo panel password changed. Then powered back on, blocked outbound port 25, and investigated. |

### What we ruled OUT

- **Attacker SSH login on record:** the only `Accepted` SSH logins were from the owner's own IPs (`47.157.x` / `47.159.x`) on Jul 9 and Jul 21. *(Caveat: a successful login during the blackout would not have been recorded — see below.)*
- **Malicious cron jobs:** none. Only the legitimate nightly DB backup.
- **Planted SSH keys:** none in `/root/.ssh/authorized_keys` or the app user's.
- **Rogue systemd services / timers:** none.
- **Persistent on-disk malware:** none found. `/tmp`, `/var/tmp`, `/dev/shm` clean after reboot; no rogue processes; no mail server (postfix/exim/sendmail) even installed.
- **Database tampering:** the `User` table held only 5 legitimate accounts, newest created **June 9** — **no injected admin or junk accounts** around the incident.
- **The critical Next.js RCE** ([CVE-2025-55182 / CVE-2025-66478](https://github.com/vercel/next.js/security/advisories/GHSA-9qr9-h5gf-34mp), CVSS 10.0): the app's Next `16.1.6` **already includes the fix** (patched in `16.1.0-canary.12`+). Not the vector.
- **next-auth email-spoofing vuln** ([GHSA-5jpx-9hw9-2fx4](https://github.com/advisories/GHSA-5jpx-9hw9-2fx4)): the app has no email/mail code, so it does not apply.

### What we CONFIRMED as problems

- **Root SSH login with a password was enabled and internet-exposed** — and hammered by brute-force for months (~238 MB of failed attempts). This is the most exploitable weakness on the box.
- **A GitHub personal access token (`ghp_…`) was stored in plaintext** in `/root/.bash_history` and the app's `.git/config`. **(Revoked during the investigation.)**
- **`.env` on the server holds live secrets** (Stripe secret key, auth secret, DB URL). Must be assumed read by the attacker → rotate.
- The spam tool ran from **memory / `/tmp`** and was destroyed by the reboot, so its exact payload is gone from the live system.

### Root-cause assessment (honest)

**We cannot prove the exact entry vector**, because the spam tooling lived in memory/`/tmp` and the attack coincided with a total logging blackout. The reboot (necessary to stop the spam) destroyed the volatile evidence.

- **Most likely:** SSH root-password brute-force that finally succeeded during the blackout — consistent with the enormous failed-login history and the fact that password login for root was enabled.
- **Less likely:** an application or dependency exploit (the app was patched against the known critical RCE).

**If certainty is ever required**, the only remaining evidence is the **pre-reboot Contabo snapshot** (if one was taken). Mount it read-only and inspect `/tmp`, the tail of `/root/.bash_history`, and the final journal entries.

### Impact

- Server used to relay spam for ~2.5 days → risk of the IP being blacklisted.
- Secrets present on the box (`.env`, GitHub PAT) must be assumed exposed.
- No evidence of customer-data exfiltration or database tampering.
- Site was offline after the reboot (PM2 process did not auto-resurrect).

---

## Part B — Immediate remediation for ThinkChinese

> Order matters. Do **not** disable SSH passwords until key login is proven to work, or you can lock yourself out.

### 1. Make the outbound port-25 block permanent

The manual `iptables` rule added during the incident does **not** survive a reboot. `ufw` is already active on this box, so use it:

```bash
ufw status verbose            # confirm ufw is active; note inbound rules
ufw deny out 25/tcp           # persistent block on outbound SMTP
ufw reload
```

### 2. Add your SSH key BEFORE disabling passwords

Run on your **Mac**, not the server:

```bash
# Create a key if you don't have one:
ls ~/.ssh/id_ed25519.pub || ssh-keygen -t ed25519 -C "frederic@thinkchinese"

# Copy it to the server (uses your current password one last time):
ssh-copy-id root@45.137.194.237

# In a NEW terminal, confirm key login works WITHOUT a password prompt:
ssh root@45.137.194.237
```

### 3. Disable SSH password login (keep your current session open as a safety net)

On the server:

```bash
sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin prohibit-password/' /etc/ssh/sshd_config
# Some Ubuntu images re-enable passwords in a drop-in — check and fix:
grep -R "PasswordAuthentication" /etc/ssh/sshd_config.d/ 2>/dev/null
sshd -t && systemctl restart ssh
```

Open one more fresh SSH session to confirm it still works **before** closing your current one.

### 4. Install fail2ban

```bash
apt update && apt install -y fail2ban
systemctl enable --now fail2ban
```

### 5. Bring the site back up

The reboot already killed the in-memory spam bot, and no persistent malware was found — so "cleanup" here is really "restart cleanly, then patch."

```bash
# See what PM2 has saved for the app user, then restore it:
su - thinkchinese -c 'pm2 list'
su - thinkchinese -c 'pm2 resurrect'

# If nothing is saved, start it fresh (adjust to how the app is launched):
su - thinkchinese -c 'cd ~/app && pm2 start npm --name thinkchinese -- start'
su - thinkchinese -c 'pm2 save'

# Make sure it auto-starts on boot (it did NOT this time):
env PATH=$PATH pm2 startup systemd -u thinkchinese --hp /home/thinkchinese
```

Verify:

```bash
systemctl status nginx --no-pager
curl -I https://thinkchinese.com
```

### 6. Update the framework (do this soon after the site is confirmed up)

`16.1.6` is patched against the critical RCE but is behind on the 2026 patches — move to the latest 16.x:

```bash
su - thinkchinese -c 'cd ~/app && npm install next@16 eslint-config-next@16 next-auth@latest'
su - thinkchinese -c 'cd ~/app && npx next --version'          # confirm >= 16.2.x
su - thinkchinese -c 'cd ~/app && npx prisma generate && npx next build'
su - thinkchinese -c 'pm2 restart thinkchinese'
```

### 7. Rotate every secret that was on the box

- **Stripe** secret key — roll in the Stripe dashboard.
- **`AUTH_SECRET` / `NEXTAUTH_SECRET`** — regenerate and update `.env`.
- **Database credentials** — if any real credentials are used (SQLite is a local file, so mainly relevant when you move to a networked DB).
- **GitHub** — the exposed PAT is revoked; replace it with a **read-only, per-repo deploy key** (see Part C).

---

## Part C — Reusable hardening checklist (ThinkFrench + all projects)

> ThinkFrench (`66.94.114.146`) runs the same codebase, which means the same doors. Apply this to it **today**, and to every server you run.

### SSH

- [ ] Key-based auth only: `PasswordAuthentication no`
- [ ] `PermitRootLogin prohibit-password` (or `no`, logging in as a sudo user instead)
- [ ] `fail2ban` installed and enabled
- [ ] Check `/etc/ssh/sshd_config.d/` drop-ins don't silently re-enable passwords

### Firewall (ufw)

- [ ] Default deny incoming, allow outgoing
- [ ] Allow inbound only `22`, `80`, `443`
- [ ] **Block outbound `25`** (and `465`/`587` unless the box legitimately sends mail) — this is what stops a compromised box from being a spam relay
- [ ] Confirm rules are persistent (ufw is; raw `iptables` rules are not)

### Secrets

- [ ] **Never** put tokens in shell commands — they land in `~/.bash_history`. Use a credential helper or env var that isn't logged.
- [ ] **Never** store a long-lived, broadly-scoped GitHub PAT on a server. Use a **read-only deploy key** per repository, or a short-lived token.
- [ ] `.env` is `chmod 600`, owned by the app user (ThinkChinese already did this correctly)
- [ ] Have a documented secret-rotation procedure; rotate on any suspicion of compromise

### Application & dependencies

- [ ] Run the app as a **non-root** user (ThinkChinese does — good)
- [ ] Keep Next.js / next-auth patched (Next `>= 16.2.6`, next-auth `>= 5.0.0-beta.31`)
- [ ] Enable `npm audit` / Dependabot alerts on the repo
- [ ] **Rate-limit or CAPTCHA** public endpoints (`/register`, `/login`, `/forgot-password`) to prevent abuse and enumeration

### Mail

- [ ] If the app doesn't send mail, keep outbound `25` blocked
- [ ] If it does, use an **authenticated relay** (Postmark / SendGrid / Brevo) over `587` with an API key — never direct port-25 delivery

### Backups & monitoring (this incident exposed real gaps)

- [ ] **Off-server backups.** ThinkChinese's DB backups live on the same box — if it's wiped, they're gone. Copy the nightly DB to object storage or another host.
- [ ] **`pm2 save` + `pm2 startup`** so the app survives a reboot (it didn't this time — the site stayed down).
- [ ] **Uptime monitor** (e.g. UptimeRobot) so you learn the site is down before customers do.
- [ ] **Outbound-traffic / disk alerts.** A traffic-spike alert would have caught this spam days before Contabo did.
- [ ] **Log headroom.** Ensure journald/rsyslog have sane size caps and free disk so logging survives an incident — this time logging died at the critical moment and cost us forensic evidence.

### If a server is ever compromised — response order

1. **Snapshot first** (while powered off) to preserve evidence, *then* investigate.
2. Contain: block outbound `25`, isolate, or power off.
3. Check for persistence: cron, systemd units/timers, `authorized_keys`, `~/.bash_history`, `/tmp` `/dev/shm` `/var/tmp`, listening/outbound sockets, the app's own logs and DB.
4. **Rotate every credential** that touched the box.
5. Prefer **rebuild from a known-good state** (fresh image + `git clone` + restore data from a *pre-incident* backup) over trusting a cleaned box — especially when the app is stateless and rebuildable.
6. Reply to the provider with findings.

---

## Appendix — Draft email to Contabo

> Send after the hardening steps above are done, since it states them as complete. Reply on the original abuse thread so it stays linked.

```
Subject: Re: outbound SMTP alert — 45.137.194.237 (thinkchinese)

Hello,

Following your alert about outbound SMTP traffic from 45.137.194.237, I
investigated the server. My findings:

- This server does not send email as part of its normal operation, so the
  traffic was not legitimate. The server appears to have been abused to send
  spam, most likely following brute-force attempts against SSH (root
  password login was enabled and the server had a very high volume of failed
  SSH login attempts).
- I found no persistent malware, backdoor, cron job, or unauthorized SSH key
  on the running system. The malicious activity appears to have run in memory
  and stopped when the server was powered off.

Actions taken:
- Blocked outbound port 25 permanently.
- Disabled SSH password authentication (key-based login only) and installed
  fail2ban.
- Rotated all credentials that were present on the server.
- Updated the application and its dependencies.

Outbound SMTP is not needed on this server, so please feel free to keep
port 25 restricted on this IP. Please let me know if the IP needs delisting
from any blacklist or if you need anything further.

Thank you for the heads-up.

Best regards,
Frederic Simon
```
