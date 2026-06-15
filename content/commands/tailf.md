---
name: tailf
summary: Follow the growth of a log file in real time.
category: Text
tags: log, follow, tail, real-time, monitoring
popular: false
---

## Additional Notes

`tailf` displays the last 10 lines of a file and then waits for new content to be appended, displaying it as it is written. It is a simpler version of `tail -f` that uses inotify (or similar file monitoring) to detect changes rather than polling, making it more efficient.

`tailf` is designed for monitoring log files. It does not support options for different starting line counts or other `tail` features. It has been deprecated in favor of `tail -f` or `tail --follow=name` on most modern systems.

## Syntax

```bash
tailf file
```

## Parameters

- `file`: The file to monitor for new content.

## Examples

```bash
tailf /var/log/syslog
```

Display the last 10 lines of `/var/log/syslog` and follow new content.

```bash
tailf /var/log/apache2/access.log
```

Monitor Apache access logs in real time.

## Practical Notes

- `tailf` is deprecated. Use `tail -f` or `tail --follow=name` instead.
- `tail -f` polls the file every second; `tailf` uses filesystem monitoring for efficiency.
- `tail -F` (follow with retry) handles log rotation better than `tailf`.
- The `less` command with `+F` also provides follow-mode (`shift+F` while in `less`).
- On modern systems, `journalctl -f` provides real-time journal log following.
