# Turning on real email

Right now every email the system produces is written to the log instead of
sent, because there is no `RESEND_API_KEY`. That is deliberate: `lib/email.ts`
runs in "dry mode" without a key, so the whole booking and referral flow can be
exercised end to end without mailing real athletes. The moment a key exists,
the same code sends for real.

Nothing in the app changes. This is an account + DNS job.

## What is waiting on this

- Booking request acknowledgement (to the athlete) and notification (to Fred)
- Booking confirmed / rescheduled
- All six referral emails, including the 60/60/150-day triggers the daily cron
  is already firing (it runs, finds nothing to send, and logs)

## Step 1: Resend account and domain

1. Create the account at resend.com. Free tier is 3,000 emails/month,
   100/day, which is far above current volume.
2. Add the domain **`send.yousuli.co`**, not `yousuli.co`.

   This matters. A *subdomain* for sending keeps the reputation of your
   marketing/transactional mail separate from your Google Workspace mailboxes
   on the root domain. If a send ever goes wrong, it does not damage
   `fred@yousuli.co` deliverability. It also means **none of this touches your
   existing MX records**: incoming mail keeps going to Google, untouched.

## Step 2: DNS records

Resend will show three records to add. They go in **Wix Studio -> Billing &
Subscriptions -> Domains -> yousuli.co**, since Wix hosts the zone
(see `dns-yousuli.md`). Roughly:

| Type | Host | Value |
|---|---|---|
| MX | `send` | `feedback-smtp.<region>.amazonses.com` (priority 10) |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` |
| TXT | `resend._domainkey` | the long DKIM public key Resend gives you |

Copy the exact values from Resend rather than these; the region and key are
account-specific.

**The MX record on `send` does not affect mail to `@yousuli.co`.** It applies
only to the `send` subdomain, and exists so bounces come back. Your Google MX
records on the root domain stay exactly as they are.

Consider adding DMARC once DKIM verifies:

| Type | Host | Value |
|---|---|---|
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:fred@yousuli.co` |

`p=none` only asks for reports, it does not reject anything. Tighten later.

## Step 3: Give the server the key

Resend -> API Keys -> create one with **Sending access** only.

```bash
ssh root@94.72.125.157
# paste the key when prompted; it is never echoed or stored in shell history
read -rs -p "Resend API key: " K && echo "RESEND_API_KEY=$K" >> /home/yousuli/app/.env && unset K
# the From address must be on the verified domain
sed -i 's|^EMAIL_FROM=.*|EMAIL_FROM=Coach Fred <fred@send.yousuli.co>|' /home/yousuli/app/.env
systemctl restart yousuli-web
```

Note the From address moves to `@send.yousuli.co` so it matches the verified
sending domain. Set a **Reply-To of `fred@yousuli.co`** in Resend (or later in
code) so replies land in the normal inbox.

## Step 4: Prove it works

Submit a real booking request at `https://new.yousuli.co/book` using your own
address. Two emails should arrive: the athlete acknowledgement and the admin
notification to `info@yousuli.co`. Then check the audit trail:

```bash
ssh root@94.72.125.157 'sudo -u postgres psql yousuli -c "SELECT to_address, template, status, created_at FROM email_events ORDER BY id DESC LIMIT 5;"'
```

Every attempt is recorded there with `sent` or `failed`, which is how you
answer "did that athlete actually get their confirmation" without trusting a
provider dashboard.

## Warming up

Send the transactional mail (bookings, referrals) for a couple of weeks before
any bulk send. A brand-new sending domain that starts with a large broadcast
looks exactly like a spammer. The 52-week drip idea should wait for that
reputation to build, and needs its own unsubscribe handling first.
