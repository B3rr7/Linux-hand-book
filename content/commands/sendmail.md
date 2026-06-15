---
name: sendmail
summary: Sendmail Mail Transfer Agent (MTA).
category: Administration
tags: mail, mta, sendmail, smtp, email
popular: false
---

## Additional Notes

`sendmail` is a general-purpose internetwork email routing facility that supports many kinds of mail-transfer and delivery methods. It is one of the oldest and most widely used Mail Transfer Agents (MTAs) on Unix systems. Sendmail handles message routing, queuing, aliasing, forwarding, and delivery using the Simple Mail Transfer Protocol (SMTP).

Sendmail is known for its flexibility and power, but also for its complex configuration. The primary configuration file is `/etc/mail/sendmail.cf`, which is typically generated from the macro-based `sendmail.mc` file using `m4`. This design allows advanced routing rules, masquerading, virtual hosting, and spam filtering through a rich set of features and milter (mail filter) support.

## Syntax

```bash
sendmail [options] [address...]
```

## Parameters

- `address`: Recipient email address(es) for message delivery.

## Common Options

- `-bd`: Run as a daemon, listening for incoming SMTP connections on port 25.
- `-bi`: Initialize the aliases database (rebuild `/etc/mail/aliases.db`).
- `-bm`: Deliver mail in the usual way (default mode).
- `-bp`: Print the mail queue (list queued messages).
- `-bs`: Run an SMTP server on standard input/output (for debugging).
- `-bt`: Run in address test mode.
- `-bv`: Verify email addresses without sending mail.
- `-q`: Process the mail queue immediately.
- `-q[time]`: Process the queue at regular intervals (e.g., `-q30m` for every 30 minutes).
- `-C file`: Use an alternative configuration file.
- `-F name`: Set the full name of the sender.
- `-f sender`: Set the sender address (envelope from).
- `-i`: Ignore dots on lines by themselves in messages.
- `-t`: Extract recipients from the message headers (To:, Cc:, Bcc:).
- `-v`: Verbose mode (show SMTP conversation).
- `-X file`: Log all SMTP traffic to a file for debugging.

## Examples

```bash
sendmail -bd -q30m
```

Start sendmail in daemon mode, processing the queue every 30 minutes.

```bash
sendmail -bp
```

Display the current mail queue.

```bash
sendmail -v user@example.com < message.txt
```

Send the contents of `message.txt` to `user@example.com` with verbose output.

```bash
echo "Subject: test" | sendmail -t user@example.com
```

Send a simple email with a subject line.

```bash
sendmail -bv alice@example.com
```

Verify that `alice@example.com` is a valid recipient.

```bash
sendmail -q
```

Process the queue immediately, delivering any queued messages.

## Practical Notes

- The main configuration is done via `/etc/mail/sendmail.mc`, compiled to `/etc/mail/sendmail.cf` using `m4`.
- Run `newaliases` or `sendmail -bi` after modifying `/etc/aliases` to rebuild the alias database.
- Sendmail's log output goes to syslog, typically `/var/log/maillog`.
- Many modern distributions use Postfix or Exim instead of Sendmail by default.
- The `sendmail` binary is also a compatibility interface provided by other MTAs like Postfix.
- For simple outbound-only mail, a lightweight MTA like `msmtp` or `ssmtp` may be easier.
- Milters (mail filters) provide a plugin interface for spam checking, virus scanning, and custom processing.
