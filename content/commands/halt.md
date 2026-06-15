---
name: halt
summary: Stop the system.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`halt` is a system command used to stop the system. It halts the CPU but may leave the power on. It is one of several system shutdown commands along with poweroff and reboot.

## Syntax

```bash
halt [options] [arguments]
```

## Parameters

- `options`: Flags that change how `halt` behaves.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
halt --help
man halt
```

## Practical Notes

Options can vary by distribution and package version. Use `man halt`, `halt --help`, or the package documentation for exact syntax.
