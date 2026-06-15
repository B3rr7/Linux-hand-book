---
name: init
summary: Initialize or change system runlevel on init systems.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`init` is a system command used to initialize or change system runlevel on init systems. It is used to switch between runlevels (e.g., single-user or multi-user mode) or to shut down and reboot the system.

Most modern Linux distributions use systemd instead of SysV init. On those systems, `systemctl` replaces `init` for managing runlevels and system state.

## Syntax

```bash
init [options] [arguments]
```

## Parameters

- `options`: Flags that change how `init` behaves.
- `'runlevel'`: Target runlevel (0-6, S/s, or equivalent).

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
init --help
man init
```

## Practical Notes

Options can vary by distribution and package version. Use `man init`, `init --help`, or the package documentation for exact syntax.
