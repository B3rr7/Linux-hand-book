---
name: mailstat
summary: Show mail statistics from the mail log.
category: Administration
tags: mail, stats, log, postfix, sendmail
popular: false
---

## Additional Notes

`mailstat` parses the system mail log (typically `/var/log/maillog` or `/var/log/mail.log`) and displays summary statistics about mail delivery. It shows counts of messages sent, received, bounced, forwarded, and rejected.

It is useful for monitoring mail server activity, detecting problems like excessive bounces or spam rejection, and generating daily mail statistics.

## Syntax

```bash
mailstat [options] [logfile]
```

## Parameters

- `logfile`: Path to the mail log file. Defaults to the system mail log.

## Common Options

- `-a`: Show all statistics, including individual recipient details.
- `-d`: Show daily summary breakdown.
- `-f`: Show only failed deliveries.
- `-h`: Show summary by hour.
- `-k`: Keep a running total across invocations.
- `-l`: Show only local deliveries.
- `-m`: Show statistics for the current month.
- `-o`: Show only remote deliveries.
- `-p`: Show statistics in a parsable format.
- `-r`: Reset the running total.
- `-s`: Show simple one-line summary.
- `-t`: Show statistics for the current day (today).

## Examples

```bash
mailstat
```

Show a summary of mail activity from the default log.

```bash
mailstat -t
```

Show mail statistics for today only.

```bash
mailstat -a /var/log/mail.log
```

Show detailed per-recipient statistics.

```bash
mailstat -f
```

Show only failed deliveries.

```bash
mailstat -s
```

Show a one-line summary suitable for monitoring.

## Practical Notes

- `mailstat` is commonly available as a Perl script on systems using Sendmail or Postfix.
- The specific log file path varies by distribution: `/var/log/maillog` on RHEL/CentOS, `/var/log/mail.log` on Debian/Ubuntu.
- Running `mailstat -k` after `-r` allows tracking cumulative statistics over time.

