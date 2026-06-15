---
name: tail
summary: Print the end of files and follow growing logs.
category: Text
tags: text, file, logs, follow, end
popular: true
---

## Additional Notes

`tail` prints the last part of a file. By default, it shows the last 10 lines.

It is especially useful for logs because `tail -f` follows new lines as they are written.

## Syntax

```bash
tail [options] [file...]
```

## Parameters

- `options`: Flags that change how `tail` behaves.
- `file`: Text file to read or process.

## Common Options

- `-n N`, `--lines=N`: Print the last `N` lines.
- `-c N`, `--bytes=N`: Print the last `N` bytes.
- `-f`, `--follow`: Keep watching the file for new lines.
- `-F`: Follow by filename and retry if the file is rotated or recreated.
- `-q`, `--quiet`: Do not print file headers.
- `-v`, `--verbose`: Always print file headers.

## Examples

```bash
tail app.log
```

Show the last 10 lines.

```bash
tail -n 50 app.log
```

Show the last 50 lines.

```bash
tail -f /var/log/syslog
```

Follow a log file live.

```bash
tail -F /var/log/nginx/access.log
```

Follow a log even if it is rotated.

```bash
journalctl -u ssh -f
```

For systemd services, this is often a better live-log command.

## Practical Notes

- Press `Ctrl+C` to stop `tail -f`.
- Use `tail -F` for logs that may rotate.
- Use `grep` with `tail` to filter live logs: `tail -f app.log | grep error`.
- Use `head` to view the start of a file.
