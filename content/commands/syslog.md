---
name: syslog
summary: System logging and syslog daemon management.
category: Administration
tags: log, syslog, rsyslog, syslog-ng, logging
popular: false
---

## Additional Notes

`syslog` refers to both the standard system logging protocol and the traditional syslog daemon that collects, processes, and stores log messages from the kernel, services, and applications. On modern Linux systems, `rsyslogd` or `syslog-ng` typically provide the syslog service, with `journald` (part of systemd) often running alongside for structured logging.

Log messages are categorized by facility (kern, user, mail, daemon, auth, syslog, lpr, news, uucp, cron, local0-local7, etc.) and priority (emerg, alert, crit, err, warning, notice, info, debug). Configuration files (typically `/etc/rsyslog.conf` and `/etc/rsyslog.d/`) define where different message categories are logged.

## Syntax

```bash
# Traditional syslog commands
logger [options] message
```

## Key Concepts

**Facilities:** kern, user, mail, daemon, auth, syslog, lpr, news, uucp, cron, authpriv, ftp, local0-local7.

**Priorities:** emerg (0), alert (1), crit (2), err (3), warning (4), notice (5), info (6), debug (7).

## Commands

The primary user-facing command for syslog is `logger`, which sends messages to the syslog system.

## logger Options

- `-p facility.priority`: Specify the facility and priority (default: `user.notice`).
- `-t tag`: Mark the message with a specific tag.
- `-i`: Include the PID of the logger process.
- `-f file`: Log the contents of a file.
- `-s`: Also output the message to stderr.
- `-n server`: Send the message to a remote syslog server.
- `-P port`: Specify the remote syslog server port (default: 514).
- `--id`: Include the current process PID.
- `--rfc3164`: Use the older BSD syslog format.
- `--rfc5424`: Use the newer RFC 5424 syslog format.

## Parameters

- `options`: Flags that change how `syslog` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Examples

```bash
logger "Backup completed successfully"
```

Send a simple log message.

```bash
logger -p mail.info -t sendmail "Queue processed"
```

Send a log message with mail facility and info priority, tagged as `sendmail`.

```bash
logger -s -p local0.err -t myapp "Application error occurred"
```

Log an error on local0 facility tagged `myapp`, also printing to stderr.

```bash
logger -n logserver.example.com -P 514 "Remote log entry"
```

Send a log message to a remote syslog server.

```bash
logger -f /var/log/audit.log -t audit-restore
```

Send the contents of a file to syslog.

## Practical Notes

- `journalctl` reads the systemd journal; `tail -f /var/log/syslog` or `tail -f /var/log/messages` reads traditional syslog files.
- Syslog-ng and rsyslog both support TCP transport, TLS encryption, and database logging.
- Log rotation is handled by `logrotate` to prevent logs from filling the disk.
- The syslog protocol uses UDP port 514 by default, but TCP port 6514 is common for encrypted syslog.
- Centralized logging architectures forward logs from multiple hosts to a dedicated syslog server.
- Modern logging infrastructure often combines syslog with tools like Logstash, Graylog, or Splunk.
