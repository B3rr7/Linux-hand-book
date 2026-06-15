---
name: arptables
summary: Manage legacy ARP packet filtering rules.
category: Network
tags: arp, firewall, packet filter, network
popular: false
---

## Additional Notes

`arptables` manages filtering rules for ARP packets. It is a specialized legacy tool, similar in style to `iptables`, but focused on ARP traffic.

It is mostly used in bridge, virtualization, anti-spoofing, or older network security setups. Modern systems may use nftables or bridge filtering instead.

## Syntax

```bash
arptables [options] -A chain rule
arptables [options] -L [chain]
```

## Parameters

- `chain`: ARP filtering chain such as `INPUT`, `OUTPUT`, or `FORWARD`.
- `rule`: Match and target expression.
- `options`: List, append, delete, flush, and policy controls.

## Common Options

- `-L`: List rules.
- `-n`: Numeric output.
- `-v`: Verbose output.
- `-A CHAIN`: Append a rule.
- `-D CHAIN NUM`: Delete a rule by number.
- `-F`: Flush rules.
- `-P CHAIN TARGET`: Set default policy.

## Examples

```bash
sudo arptables -L -n -v
```

List ARP filtering rules.

```bash
sudo arptables -F
```

Flush ARP rules. Use carefully.

```bash
sudo arptables -A INPUT --source-ip 192.168.1.10 -j DROP
```

Drop ARP packets matching a source IP.

## Practical Notes

- This is a specialized firewall tool; most users do not need it.
- Rule mistakes can break local network communication.
- Check whether your distribution expects nftables instead.
