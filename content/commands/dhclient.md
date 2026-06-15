---
name: dhclient
summary: Request or renew an IP address using DHCP.
category: Network
tags: network, connectivity, admin
popular: false
---

## Additional Notes

`dhclient` is a network command used to request or renew an IP address using DHCP. It obtains, renews, and releases IP addresses from DHCP servers, and is typically run automatically at boot by network managers. You can run it manually when troubleshooting connectivity issues.

## Syntax

```bash
dhclient [options] [interface]
```

## Parameters

- `options`: Flags that change how `dhclient` behaves.
- `interface`: Network interface to configure (e.g., `eth0`, `wlan0`).

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
dhclient --help
man dhclient
```

## Practical Notes

Options can vary by distribution and package version. Use `man dhclient`, `dhclient --help`, or the package documentation for exact syntax.
