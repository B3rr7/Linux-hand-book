---
name: arp
summary: Display or modify the ARP neighbor cache.
category: Network
tags: arp, network, neighbors, ethernet
popular: false
---

## Additional Notes

`arp` displays or modifies the IPv4 ARP cache, which maps IP addresses to MAC addresses on a local Ethernet-style network.

It is a legacy net-tools command. Modern Linux systems usually prefer `ip neigh` for neighbor-cache inspection.

## Syntax

```bash
arp [options]
arp -a
arp -n
```

## Parameters

- `host`: Hostname or IP address whose ARP entry should be shown or changed.
- `options`: Output and cache-management flags.

## Common Options

- `-a`: Show ARP entries.
- `-n`: Show numeric addresses without name lookup.
- `-v`: Verbose output.
- `-d HOST`: Delete an ARP entry.
- `-s HOST MAC`: Add a static ARP entry.

## Examples

```bash
arp -a
```

Show ARP cache entries.

```bash
arp -n
```

Show numeric ARP entries.

```bash
sudo arp -d 192.168.1.10
```

Delete one ARP cache entry.

```bash
ip neigh show
```

Modern equivalent for inspecting neighbor entries.

## Practical Notes

- ARP applies to local-link IPv4 communication, not remote routed networks.
- Use `ip neigh` on modern Linux systems.
- Unexpected MAC changes can indicate normal DHCP/device changes or a security problem; investigate context.
