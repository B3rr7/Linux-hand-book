---
name: logger
summary: Write messages to the system log.
category: Logs
tags: logs, system, troubleshoot
popular: false
---

## Additional Notes

`logger` is a log command used to write messages to the system log. It is useful for adding custom messages to syslog from scripts or for testing log forwarding.

Use `logger -t TAG` to label messages with a custom tag. Use `logger -p facility.level` to control which syslog facility and severity the message is sent to.

## Syntax

```bash
logger [options] [arguments]
```

## Parameters

- `options`: Flags that change how `logger` behaves.
- `unit-or-file`: Service name, log file, or log source to inspect.
- `time-range`: Optional time filter for narrowing log output.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
logger --help
man logger
```

## Practical Notes

Options can vary by distribution and package version. Use `man logger`, `logger --help`, or the package documentation for exact syntax.
