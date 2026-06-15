---
name: ip6tables
summary: Configure IPv6 firewall rules using netfilter.
category: Network
tags: ipv6, firewall, netfilter, security, network
popular: false
---

## Additional Notes

`ip6tables` is the IPv6 counterpart of `iptables`. It manages the netfilter firewall rules for IPv6 traffic on the Linux kernel. It operates on tables of chains containing rules that filter, modify, or redirect IPv6 packets based on criteria such as source/destination address, protocol, port, and interface.

The main tables are `filter` (default, for allowing or blocking packets), `nat` (for network address translation on IPv6), `mangle` (for packet header modification), `raw` (for connection tracking exemptions), and `security` (for SELinux marking). Each table contains built-in chains (`INPUT`, `OUTPUT`, `FORWARD`, `PREROUTING`, `POSTROUTING`) and user-defined chains for custom rule organization.

## Syntax

```bash
ip6tables [options] command [chain] [match] [target/jump]
```

## Parameters

- `command`: Operation such as `-A` (append), `-D` (delete), `-I` (insert), `-R` (replace), `-L` (list), `-F` (flush), `-P` (policy), `-N` (new chain), `-X` (delete chain).
- `chain`: The chain to operate on (`INPUT`, `OUTPUT`, `FORWARD`, `PREROUTING`, `POSTROUTING`, or a user-defined chain).
- `match`: Packet matching criteria (protocol, source/destination, interface, state, etc.).
- `target/jump`: Action to take (`ACCEPT`, `DROP`, `REJECT`, `LOG`, `RETURN`, or a user-defined chain).

## Common Commands

- `-A chain`: Append a rule to a chain.
- `-D chain rule-num`: Delete a rule by number.
- `-I chain [num]`: Insert a rule at the top (or at position `num`).
- `-R chain num`: Replace a rule.
- `-L [chain]`: List rules in a chain or all chains.
- `-F [chain]`: Flush (delete) all rules in a chain or all chains.
- `-P chain target`: Set the default policy for a chain.
- `-N chain`: Create a new user-defined chain.
- `-X [chain]`: Delete a user-defined chain.
- `-S [chain]`: Show the rules as they would be entered on the command line.
- `-Z [chain]`: Zero packet and byte counters.

## Common Match Options

- `-p protocol`: Match protocol (`tcp`, `udp`, `icmpv6`, `esp`, `ah`, `all`).
- `-s address[/mask]`: Source IPv6 address.
- `-d address[/mask]`: Destination IPv6 address.
- `-i interface`: Input interface (for INPUT, FORWARD, PREROUTING).
- `-o interface`: Output interface (for OUTPUT, FORWARD, POSTROUTING).
- `--sport port[:port]`: Source port (with `-p tcp` or `-p udp`).
- `--dport port[:port]`: Destination port (with `-p tcp` or `-p udp`).
- `-m state --state states`: Match connection state (`NEW`, `ESTABLISHED`, `RELATED`, `INVALID`).
- `-m mac --mac-source address`: Match source MAC address.
- `-m limit --limit rate`: Rate-limit matching.
- `-m multiport --sports ports`: Match multiple source ports.
- `-m set --match-set setname`: Match against an ipset.
- `-j target`: Jump to target (`ACCEPT`, `DROP`, `REJECT`, `LOG`, `RETURN`, or a chain).

## Common Targets

- `ACCEPT`: Allow the packet.
- `DROP`: Silently discard the packet.
- `REJECT`: Discard and send an ICMPv6 error back.
- `LOG`: Log the packet and continue to the next rule.
- `RETURN`: Return from the current chain to the calling chain.

## Examples

```bash
sudo ip6tables -L
```

List all rules in the filter table.

```bash
sudo ip6tables -P INPUT DROP
```

Set the default policy for INPUT to DROP.

```bash
sudo ip6tables -A INPUT -p tcp --dport 22 -j ACCEPT
```

Allow SSH (port 22) inbound.

```bash
sudo ip6tables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
```

Allow packets belonging to established connections.

```bash
sudo ip6tables -A FORWARD -i eth0 -o eth1 -j ACCEPT
```

Allow forwarding between interfaces.

```bash
sudo ip6tables -A INPUT -p icmpv6 -j ACCEPT
```

Allow all ICMPv6 traffic, which is essential for IPv6 neighbor discovery and autoconfiguration.

```bash
sudo ip6tables -A INPUT -s 2001:db8::/32 -j DROP
```

Drop all traffic from a specific IPv6 subnet.

## Practical Notes

- IPv6 firewall configuration is critical because every globally routable IPv6 address can be reached directly. Without a firewall, all services are exposed.
- ICMPv6 is essential for IPv6 operation (NDP, autoconfiguration, path MTU discovery). Do not block all ICMPv6 indiscriminately. Allow `icmpv6` with specific type/code filters or allow all ICMPv6.
- `ip6tables` rules are separate from `iptables` (IPv4) rules. Both must be configured independently.
- Rules are processed in order. The first match wins (for the target), unless the target does not terminate.
- Rules are not persistent across reboots unless saved with `ip6tables-save` and restored at boot.
- Tools like `ufw` and `firewalld` provide higher-level interfaces to `ip6tables` and can manage both IPv4 and IPv6 rules together.
- Connection tracking (`-m state`) works for IPv6 similarly to IPv4 and is strongly recommended for stateful firewalls.
- IPv6 neighbor discovery uses multicast addresses (`ff02::1`, `ff02::2`, etc.) and ICMPv6 types 133-137. Blocking these will break network communication.
