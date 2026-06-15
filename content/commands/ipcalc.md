---
name: ipcalc
summary: Calculate IP network information.
category: Network
tags: network, connectivity, admin
popular: false
---

## Additional Notes

`ipcalc` is a network command used to calculate IP network information. It computes network addresses, broadcast addresses, subnet masks, and host ranges from a CIDR notation.

Multiple implementations of `ipcalc` exist. The one from the `ipcalc` package supports both IPv4 and IPv6 and can display binary representations of addresses.

## Syntax

```bash
ipcalc [options] address[/prefix]
```

## Parameters

- `options`: Flags that change how `ipcalc` behaves.
- `address`: IP address or CIDR notation to calculate.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
ipcalc --help
man ipcalc
```

## Practical Notes

Options can vary by distribution and package version. Use `man ipcalc`, `ipcalc --help`, or the package documentation for exact syntax.
