---
name: hping3
summary: Craft and send custom TCP/IP packets.
category: Network
tags: network, connectivity, admin
popular: false
---

## Additional Notes

`hping3` is a network command used to craft and send custom TCP/IP packets. It supports crafting packets with custom TCP flags, payloads, and timing. It is used for firewall testing, port scanning, and network diagnostics beyond basic ICMP ping.

## Syntax

```bash
hping3 [options] host
```

## Parameters

- `options`: Flags that change how `hping3` behaves.
- `host`: Target hostname or IP address.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
hping3 --help
man hping3
```

## Practical Notes

Options can vary by distribution and package version. Use `man hping3`, `hping3 --help`, or the package documentation for exact syntax.
