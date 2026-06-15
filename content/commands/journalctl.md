---
name: journalctl
summary: Read and filter systemd journal logs.
category: Logs
tags: logs, systemd, service, boot, troubleshoot
popular: true
---

## Additional Notes

`journalctl` reads logs collected by `systemd-journald`. It is used to troubleshoot services, boot problems, kernel messages, authentication issues, and system events.

It pairs naturally with `systemctl`: use `systemctl status service` for a quick view, then `journalctl -u service` for deeper logs.

## Syntax

```bash
journalctl [options]
journalctl -u UNIT [options]
```

## Parameters

- `options`: Flags that change how `journalctl` behaves.
- `unit-or-file`: Service name, log file, or log source to inspect.
- `time-range`: Optional time filter for narrowing log output.

## Common Options

- `-u UNIT`: Show logs for a systemd unit.
- `-f`: Follow new log entries live.
- `-n N`: Show the last `N` lines.
- `-b`: Show logs from the current boot.
- `-b -1`: Show logs from the previous boot.
- `--since TIME`: Show logs since a time.
- `--until TIME`: Show logs until a time.
- `-p PRIORITY`: Filter by priority such as `err`, `warning`, or `info`.
- `-k`: Show kernel messages.
- `--no-pager`: Print directly without opening a pager.
- `-o short-iso`: Use readable ISO-style timestamps.

## Examples

```bash
journalctl -xe
```

Show recent logs with extra explanation where available.

```bash
journalctl -u ssh
```

Show logs for the SSH service.

```bash
journalctl -u nginx -f
```

Follow `nginx` logs live.

```bash
journalctl -b
```

Show logs from the current boot.

```bash
journalctl -b -1
```

Show logs from the previous boot.

```bash
journalctl --since "today"
```

Show logs from today.

```bash
journalctl --since "2026-06-08 10:00" --until "2026-06-08 11:00"
```

Show logs from a specific time range.

```bash
journalctl -p err -b
```

Show errors from the current boot.

```bash
journalctl -k
```

Show kernel log messages.

## Practical Notes

- Use `-u service` when troubleshooting one service.
- Use `-f` when reproducing a problem live.
- Logs can be large. Combine `--since`, `-n`, and `-p` to narrow output.
- Some systems do not keep persistent logs unless journald persistence is enabled.
- If output opens in `less`, press `q` to quit.
