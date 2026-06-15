---
name: logrotate
summary: Rotate, compress, and manage log files.
category: Logs
tags: logs, system, troubleshoot
popular: false
---

## Additional Notes

`logrotate` is a log command used to rotate, compress, and manage log files. It automates log rotation, compression, and removal to prevent logs from filling up disk space.

Configuration files live in `/etc/logrotate.conf` and `/etc/logrotate.d/`. Run `logrotate -d CONFIG` for a dry run that shows what would happen without making changes.

## Syntax

```bash
logrotate [options] [arguments]
```

## Parameters

- `options`: Flags that change how `logrotate` behaves.
- `unit-or-file`: Service name, log file, or log source to inspect.
- `time-range`: Optional time filter for narrowing log output.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
logrotate --help
man logrotate
```

## Practical Notes

Options can vary by distribution and package version. Use `man logrotate`, `logrotate --help`, or the package documentation for exact syntax.
