---
name: ifdown
summary: Bring a network interface down.
category: Network
tags: network, connectivity, admin
popular: false
---

## Additional Notes

`ifdown` is a network command used to bring a network interface down. It is useful for taking interfaces offline during maintenance, troubleshooting, or reconfiguration.

`ifdown` and `ifup` are part of the ifupdown package on Debian-based systems. Other distributions may use NetworkManager or netplan instead.

## Syntax

```bash
ifdown [options] interface
```

## Parameters

- `options`: Flags that change how `ifdown` behaves.
- `interface`: Network interface to bring down (e.g., `eth0`).

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
ifdown --help
man ifdown
```

## Practical Notes

Options can vary by distribution and package version. Use `man ifdown`, `ifdown --help`, or the package documentation for exact syntax.
