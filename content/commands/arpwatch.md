---
name: arpwatch
summary: Monitor ARP activity and detect MAC address changes.
category: Network
tags: arp, monitoring, mac, network, security
popular: false
---

## Additional Notes

`arpwatch` monitors ARP traffic and records IP-to-MAC address pairings. It can help notice new devices, changed MAC addresses, and possible ARP spoofing or network inventory changes.

It is normally run as a daemon by a service manager, but it can also be started manually for monitoring on an interface.

## Syntax

```bash
arpwatch [options]
```

## Parameters

- `interface`: Network interface to monitor, often selected with `-i`.
- `options`: Email, file, interface, and foreground/debug controls.

## Common Options

- `-i IFACE`: Listen on a specific interface.
- `-f FILE`: Use a specific database file.
- `-n NETWORK`: Specify a local network.
- `-d`: Debug or foreground mode on many builds.
- `-u USER`: Drop privileges to a user when supported.

## Examples

```bash
sudo arpwatch -i eth0
```

Monitor ARP activity on `eth0`.

```bash
systemctl status arpwatch
```

Check daemon status when installed as a service.

```bash
sudo journalctl -u arpwatch
```

Review service logs on systemd systems.

## Practical Notes

- ARP changes can be normal: DHCP leases, device replacements, virtual machines, and Wi-Fi roaming can all change observations.
- Treat alerts as investigation leads, not proof by themselves.
- Monitoring requires visibility into the local network segment.
