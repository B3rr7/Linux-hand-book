---
name: arpd
summary: User-space ARP cache daemon for Linux neighbor entries.
category: Network
tags: arp, daemon, neighbor, network
popular: false
---

## Additional Notes

`arpd` is a specialized daemon related to ARP and neighbor-cache handling. It is not commonly used on ordinary desktops or servers, but may appear in advanced networking setups or older documentation.

Most administrators use `ip neigh`, kernel neighbor settings, and normal network-manager tooling instead.

## Syntax

```bash
arpd [options]
```

## Parameters

- `options`: Daemon, debug, interface, and database-related settings depending on the implementation.
- `interface`: Network interface when supported by the installed version.

## Common Options

- `-h`: Show help when supported.
- `-d`: Debug or foreground mode on some implementations.
- `-l`: Log activity on some implementations.

## Examples

```bash
arpd -h
```

Show supported options for the installed version.

```bash
ip neigh show
```

Inspect current neighbor entries with the modern tool.

## Practical Notes

- `arpd` behavior and availability vary by distribution.
- Do not enable ARP-related daemons without understanding your network design.
- For normal troubleshooting, start with `ip addr`, `ip route`, and `ip neigh`.
