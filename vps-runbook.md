# Yousuli VPS runbook

The beta site, `https://new.yousuli.co`, built 2026-08-31. Companion to
`vps-architecture.md` (the plan) and `dns-yousuli.md` (the DNS record).
This file is the operational record: what is on the box, how to change it,
and how to get it back.

## The box

| | |
|---|---|
| Host | Contabo Cloud VPS 4, `94.72.125.157` |
| Spec | 4 vCPU, 8 GB RAM, 100 GB SSD, US-West |
| OS | Ubuntu 24.04.4 LTS |
| Cost | ~$8.20/month (server $6.60 + US-West $1.60), monthly term |
| Access | SSH key only, as `root`. Passwords are disabled. |

## What runs on it

| Service | Unit | Notes |
|---|---|---|
| Next.js + Payload | `yousuli-web.service` | Port 3000, localhost only, restarts on failure and on boot |
| PostgreSQL 16 | `postgresql.service` | Database `yousuli`, user `yousuli`, localhost only |
| Caddy 2.11 | `caddy.service` | Owns 443, auto TLS, reverse proxy to 3000 |
| Referral triggers | `yousuli-referral-cron.timer` | Daily 08:05 America/Los_Angeles |
| Database backup | `yousuli-backup.timer` | Daily 02:30 LA, 14-day retention |

Firewall: UFW, inbound 22/80/443 only. `fail2ban` and unattended security
upgrades are on.

The app is **not** exposed directly. Only Caddy is public; the app listens on
localhost. That is why there is no HTTPS config in the app itself.

## Layout

```
/home/yousuli/app          the application (git checkout, owner: yousuli)
/home/yousuli/app/.env     secrets: DB URI, PAYLOAD_SECRET, CRON_SECRET  (chmod 600)
/etc/caddy/Caddyfile       TLS, noindex header, create-first-user redirect
/usr/local/bin/yousuli-deploy.sh    pull, build, restart, health-check
/usr/local/bin/yousuli-backup.sh    nightly pg_dump
/var/backups/yousuli/      dumps, yousuli-YYYY-MM-DD.sql.gz
```

## Deploying

Push to `main`, and (once the GitHub Actions secrets are set) CI typechecks and
then triggers the server to pull, build, restart and health-check itself.

To deploy by hand at any time:

```bash
ssh root@94.72.125.157 /usr/local/bin/yousuli-deploy.sh
```

The script is idempotent, fails loudly, and prints the service status if the
health check does not return 200. Build happens **on the server** so the
artifact matches that machine's glibc and architecture; the 8 GB absorbs the
2-4 GB build spike.

CI authenticates as the `deploy` user, which can run exactly one command as
root (`/etc/sudoers.d/deploy`) and nothing else. It cannot read `.env`.

## Common operations

```bash
# logs, live
ssh root@94.72.125.157 'journalctl -u yousuli-web -f'

# restart the app
ssh root@94.72.125.157 'systemctl restart yousuli-web'

# database shell
ssh root@94.72.125.157 'sudo -u postgres psql yousuli'

# run the referral job now (normally 08:05 daily)
ssh root@94.72.125.157 'systemctl start yousuli-referral-cron.service'

# back up now
ssh root@94.72.125.157 '/usr/local/bin/yousuli-backup.sh && ls -la /var/backups/yousuli/'

# when do the timers next fire?
ssh root@94.72.125.157 'systemctl list-timers | grep yousuli'
```

## Restoring the database

```bash
ssh root@94.72.125.157
DBURI=$(grep ^DATABASE_URI /home/yousuli/app/.env | cut -d= -f2-)
gunzip -c /var/backups/yousuli/yousuli-YYYY-MM-DD.sql.gz | psql "$DBURI"
systemctl restart yousuli-web
```

**Restore has not yet been rehearsed on a throwaway database.** A backup you
have never restored is a hope, not a backup. Do this once before the site
carries real bookings.

## Rebuilding from nothing

Everything needed is in three places: this file, the GitHub repo
(`d8cq6m7ywb-commits/ysl`), and a backup dump. Order: provision Ubuntu 24.04,
install Node 22 / PostgreSQL / Caddy, create the `yousuli` user and database,
clone the repo to `/home/yousuli/app`, write `.env` (new secrets), restore the
dump, install the systemd units above, point DNS.

If the database is empty on a rebuild, the admin bootstrap page is needed once:
comment out the `redir /admin/create-first-user*` line in the Caddyfile,
reload Caddy, create the first account at `/admin/create-first-user`, then put
the line back. Payload only allows that page while zero users exist.

## Admin accounts

The first account was created through the browser bootstrap and then flagged
`staff` (that flag is what grants admin panel access; it cannot be set by the
account holder). To grant staff to someone else:

```sql
UPDATE athletes SET staff = true WHERE email = 'them@example.com';
```

## Known gaps

- **Email is in dry mode.** No `RESEND_API_KEY`, so booking confirmations and
  referral mail are logged, not sent. See `email-setup.md`.
- **Backups are local only.** A dump on the same disk as the database does not
  survive losing the disk. Offsite copy to Cloudflare R2 or Backblaze B2 is the
  next backup task. Contabo's $2/mo Auto Backup is a reasonable stopgap.
- **Restore untested** (see above).
- **No uptime monitoring.** UptimeRobot on `https://new.yousuli.co` is five
  minutes of work and tells you before an athlete does.
- **The `noindex` header must be removed at cutover**, and the DNS record for
  www/apex repointed. Both are noted in the Caddyfile and `dns-yousuli.md`.
