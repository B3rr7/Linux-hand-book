---
name: logwatch
summary: Summarize and report system log activity.
category: Administration
tags: log, report, monitoring, audit, security
popular: false
---

## Additional Notes

`logwatch` is a log analysis tool that scans system logs and produces a summarized report. It parses logs from services such as SSH, sudo, kernel, cron, mail, and many others, then generates a concise daily report highlighting important events.

It is often configured as a cron job that runs daily and emails the report to the system administrator. Logwatch is highly configurable through service-specific configuration files, allowing you to control which services are monitored, the level of detail, and the output format.

## Syntax

```bash
logwatch [options]
```

## Parameters

- `options`: Flags that change how `logwatch` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--service service`: Analyze logs for a specific service (e.g., `sshd`, `sudo`, `cron`). Use `--service All` for all services.
- `--detail level`: Set the detail level (`Low`, `Med`, `High`, or a number 0-10).
- `--logfile logfile`: Specify the log file to analyze.
- `--output output`: Output format (`mail`, `file`, `stdout`, `html`).
- `--format format`: Output format style (`text`, `html`).
- `--mailto address`: Email the report to the specified address.
- `--range range`: Specify the time range (`yesterday`, `today`, `all`, or a custom date range).
- `--archives`: Include archived (rotated) log files.
- `--debug level`: Enable debugging (levels 1-100).

## Examples

```bash
logwatch
```

Generate a report for the previous day with default settings.

```bash
logwatch --service sshd --detail High
```

Get a detailed SSH login report.

```bash
logwatch --range today --output stdout
```

Show today's log activity on the terminal.

```bash
logwatch --service All --detail Med --mailto admin@example.com
```

Email a medium-detail report for all services.

```bash
logwatch --range "2025-01-01" --range "2025-01-07"
```

Generate a report for a custom date range.

## Practical Notes

- Logwatch configuration files are in `/etc/logwatch/conf/` and service-specific configurations are in `/etc/logwatch/conf/services/`.
- The script-based log processing uses Perl modules located in `/usr/share/logwatch/scripts/`.
- For daily emails, most distributions include a cron job at `/etc/cron.daily/0logwatch`.
- Logwatch does not modify log files; it only reads them.
- For real-time log monitoring, consider `journalctl -f`, `tail -f /var/log/syslog`, or `lnav`.

