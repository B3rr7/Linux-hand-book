---
name: grub2-mkconfig
summary: Generate a GRUB 2 bootloader configuration.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`grub2-mkconfig` is a system command used to generate a GRUB 2 bootloader configuration. It scans installed kernels and generates the GRUB configuration file (/boot/grub2/grub.cfg). Run it after installing a new kernel or changing GRUB options in /etc/default/grub.

## Syntax

```bash
grub2-mkconfig [options] [arguments]
```

## Parameters

- `options`: Flags that change how `grub2-mkconfig` behaves.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
grub2-mkconfig --help
man grub2-mkconfig
```

## Practical Notes

Options can vary by distribution and package version. Use `man grub2-mkconfig`, `grub2-mkconfig --help`, or the package documentation for exact syntax.
