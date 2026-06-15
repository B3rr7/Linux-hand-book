---
name: hwclock
summary: Read or set the hardware clock.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`hwclock` is a system command used to read or set the hardware clock. It accesses the hardware clock (RTC) on the motherboard. Use --systohc to set the hardware clock from system time and --hctosys to set system time from the hardware clock.

## Syntax

```bash
hwclock [options] [arguments]
```

## Parameters

- `options`: Flags that change how `hwclock` behaves.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
hwclock --help
man hwclock
```

## Practical Notes

Options can vary by distribution and package version. Use `man hwclock`, `hwclock --help`, or the package documentation for exact syntax.
