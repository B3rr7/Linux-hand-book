---
name: arping
summary: Send ARP requests to a host on the local network.
category: Network
tags: arp, ping, network, local link
popular: false
---

## Additional Notes

`arping` tests local-link reachability with ARP packets. Unlike `ping`, it does not need IP-layer replies from a remote network; it checks whether a host responds to ARP on the same broadcast domain.

Use it to detect duplicate IPs, confirm local neighbor reachability, or troubleshoot address resolution.

## Syntax

```bash
arping [options] host
```

## Parameters

- `host`: IPv4 address or hostname to probe on the local network.
- `interface`: Network interface to send from when selected with `-I`.
- `options`: Count, interface, duplicate-address, and output controls.

## Common Options

- `-I IFACE`: Send from a specific interface.
- `-c COUNT`: Stop after COUNT replies or probes.
- `-D`: Duplicate address detection mode.
- `-q`: Quiet output.
- `-w SECONDS`: Stop after a deadline.

## Examples

```bash
arping -c 3 192.168.1.1
```

Send three ARP probes to a gateway.

```bash
sudo arping -I eth0 -c 4 192.168.1.50
```

Probe from a specific interface.

```bash
sudo arping -D -I eth0 192.168.1.50
```

Check whether an address appears to be in use.

## Practical Notes

- ARP works only on the local network segment.
- Some uses require root because raw packets are involved.
- A successful ARP response does not prove higher-level services are available.
