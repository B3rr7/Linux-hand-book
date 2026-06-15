---
name: ethtool
summary: Display or change Ethernet device settings.
category: Network
tags: network, connectivity, admin
popular: false
---

## Additional Notes

`ethtool` is a network command used to display or change Ethernet device settings. It queries and controls network adapter settings such as link speed, duplex mode, auto-negotiation, and offload features. Changes do not persist across reboots unless configured elsewhere.

## Syntax

```bash
ethtool [options] interface
```

## Parameters

- `options`: Flags that change how `ethtool` behaves.
- `interface`: Network interface name (e.g., `eth0`).

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
ethtool --help
man ethtool
```

## Practical Notes

Options can vary by distribution and package version. Use `man ethtool`, `ethtool --help`, or the package documentation for exact syntax.
