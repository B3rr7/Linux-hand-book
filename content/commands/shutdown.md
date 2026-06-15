---
name: shutdown
summary: Shut down or reboot the system.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`shutdown` is a system command used to shut down or reboot the system. It performs a clean system shutdown with optional delay, broadcast message, and power-off or reboot.

In systemd-based systems, `shutdown` is a symbolic link to `systemctl`. Use `shutdown -h now` to halt immediately or `shutdown -r +5` to reboot in 5 minutes.

## Syntax

```bash
shutdown [options] [arguments]
```

## Parameters

- `options`: Flags that change how `shutdown` behaves.
- `'time'`: When to shut down (now, +minutes, hh:mm).
- `'message'`: Broadcast warning message (optional).

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
shutdown --help
man shutdown
```

## Practical Notes

Options can vary by distribution and package version. Use `man shutdown`, `shutdown --help`, or the package documentation for exact syntax.
