---
name: reboot
summary: Restart the system.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`reboot` is a system command used to restart the system. It triggers a clean system shutdown and reboot via systemd or the sysvinit mechanism.

In systemd-based systems, `reboot` is a symbolic link to `systemctl reboot`. Use `--force` or `shutdown -r` for more control over the shutdown process.

## Syntax

```bash
reboot [options] [arguments]
```

## Parameters

- `options`: Flags that change how `reboot` behaves.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
reboot --help
man reboot
```

## Practical Notes

Options can vary by distribution and package version. Use `man reboot`, `reboot --help`, or the package documentation for exact syntax.
