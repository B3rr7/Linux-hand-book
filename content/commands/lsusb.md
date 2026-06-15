---
name: lsusb
summary: List USB devices.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`lsusb` is a system command used to list USB devices. It enumerates USB buses and connected devices, showing vendor IDs, product IDs, and driver details.

Use `lsusb -v` for verbose output including endpoint descriptors and interface details. Use `lsusb -t` to show the USB device tree in a hierarchical view.

## Syntax

```bash
lsusb [options] [arguments]
```

## Parameters

- `options`: Flags that change how `lsusb` behaves.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
lsusb --help
man lsusb
```

## Practical Notes

Options can vary by distribution and package version. Use `man lsusb`, `lsusb --help`, or the package documentation for exact syntax.
