# yousuli.co DNS: state of record

Snapshot taken 2026-08-31, verified by live dig against the authoritative
nameservers (not just the Wix panel). Update this file whenever a record
changes; at cutover it becomes the checklist of what must move.

**DNS is hosted by Wix** (nameservers `ns10/ns11.wixdns.net`, not editable in
the panel). Every record below is managed in Wix Studio: Billing &
Subscriptions -> Domains -> yousuli.co.

## Records as they resolve today

| Record | Type | Value | Serves |
|---|---|---|---|
| `yousuli.co` | A | 185.230.63.107 / .171 / .186 | Wix site (apex) |
| `www.yousuli.co` | CNAME chain | cdn1.wixdns.net -> 34.149.87.45 | Wix site (the live site) |
| `new.yousuli.co` | A | **94.72.125.157** | **The new Contabo VPS (beta), added 2026-08-31** |
| `hub.yousuli.co` | A | 66.94.127.96 | Legacy Hub address (Hub now lives at grepiac.com) |
| MX x5 | MX | aspmx.l.google.com + alt1-4 (prio 10-50) | **Google Workspace email** |
| TXT | SPF | `v=spf1 include:_spf.google.com ~all` | Google sending authorisation |
| TXT | verification | `google-site-verification=a_3og...` | Search Console / Workspace proof |

## What this means for the migration

- **Email already lives at Google Workspace.** The MX and SPF point at Google,
  Wix is only the DNS host and (likely) the billing channel. The December
  "move email off Wix" project is therefore about billing/DNS custody, not a
  mailbox migration: mail itself does not move.
- **The beta VPS is reachable and certified.** new.yousuli.co serves HTTPS via
  Caddy/Let's Encrypt (cert auto-issued 2026-08-31, renews itself), with
  `X-Robots-Tag: noindex, nofollow` so the beta cannot dilute www's SEO.
  Remove that header at cutover.
- **At cutover**, www/apex repoint from Wix to the VPS. Because Wix's own
  nameservers hold the zone, leaving Wix entirely also means moving the zone
  (e.g. to Cloudflare): plan MX/TXT records to move with it, and lower TTLs
  the day before. hub.yousuli.co should get a 301 to grepiac.com or be
  retired at the same time.
- The sending-domain project (Resend on `send.yousuli.co`: SPF, DKIM, DMARC)
  adds records HERE in the Wix panel until the zone moves.
