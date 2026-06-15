---
name: date
summary: Print or set the system date and time.
category: System
tags: time, date, format, system, timestamp
popular: false
---

## Additional Notes

`date` prints the current date and time. It can also format timestamps, parse date expressions, show UTC, and set the system time when run with enough privileges.

It is commonly used in scripts to create timestamped filenames and logs.

## Syntax

```bash
date [options] [+FORMAT]
```

## Parameters

- `options`: Flags that change how `date` behaves.
- `'+FORMAT'`: Custom output format string prefixed with `+`.

## Common Options

- `-u`, `--utc`: Use UTC.
- `-d TEXT`, `--date=TEXT`: Display a parsed date expression.
- `-r FILE`: Show the last modification time of a file.
- `-s TEXT`, `--set=TEXT`: Set the system date/time.
- `+FORMAT`: Print using a custom format.

## Common Format Codes

- `%Y`: Four-digit year.
- `%m`: Month number.
- `%d`: Day of month.
- `%H`: Hour, 00-23.
- `%M`: Minute.
- `%S`: Second.
- `%F`: Date as `YYYY-MM-DD`.
- `%T`: Time as `HH:MM:SS`.
- `%s`: Unix timestamp seconds.

## Examples

```bash
date
```

Show current local date and time.

```bash
date -u
```

Show current UTC time.

```bash
date +"%Y-%m-%d %H:%M:%S"
```

Print a custom timestamp.

```bash
date +%s
```

Print Unix timestamp seconds.

```bash
date -d "tomorrow"
```

Parse a human date expression.

```bash
date -r file.txt
```

Show a file's modification time.

```bash
backup="backup-$(date +%F-%H%M%S).tar.gz"
```

Create a timestamped filename in a shell script.

## Practical Notes

- Setting system time usually requires `sudo`.
- Many systems sync time automatically with NTP or systemd-timesyncd.
- Use UTC for logs and servers when comparing events across time zones.
- Quote format strings that contain spaces.
