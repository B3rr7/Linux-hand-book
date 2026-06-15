---
name: lspci
summary: List PCI devices.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`lspci` is a system command used to list PCI devices. It enumerates PCI buses and connected devices, providing vendor, device, and driver information.

Use `lspci -v` for verbose output showing IRQ, memory addresses, and driver details. Use `lspci -nn` to show numeric vendor and device IDs for hardware identification.

## Syntax

```bash
lspci [options] [arguments]
```

## Parameters

- `options`: Flags that change how `lspci` behaves.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
lspci --help
man lspci
```

## Practical Notes

Options can vary by distribution and package version. Use `man lspci`, `lspci --help`, or the package documentation for exact syntax.
