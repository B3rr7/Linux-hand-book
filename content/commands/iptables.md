---
name: iptables
summary: Inspect and manage legacy Linux packet filtering rules.
category: Network
tags: firewall, packets, network, security
popular: false
---

## Additional Notes

`iptables` manages legacy Linux packet filtering rules. It works with tables such as `filter` and `nat`, chains such as `INPUT`, `OUTPUT`, and `FORWARD`, and rules that match packets then choose targets such as `ACCEPT`, `DROP`, or `REJECT`.

Many modern distributions use nftables directly or provide iptables compatibility backed by nftables. Still, `iptables` remains common in older servers, scripts, containers, and documentation.

## Syntax

```bash
iptables [-t table] command chain [match-options] -j target
iptables -L [chain] [options]
```

## Parameters

- `table`: Rule table such as `filter`, `nat`, `mangle`, or `raw`.
- `chain`: Chain such as `INPUT`, `OUTPUT`, `FORWARD`, `PREROUTING`, or `POSTROUTING`.
- `target`: Action such as `ACCEPT`, `DROP`, `REJECT`, `LOG`, or `MASQUERADE`.
- `match-options`: Protocol, port, source, destination, interface, and state matches.

## Common Options

- `-L`: List rules.
- `-n`: Show numeric addresses and ports.
- `-v`: Show verbose counters.
- `--line-numbers`: Show rule numbers for deletion or insertion.
- `-A CHAIN`: Append a rule.
- `-I CHAIN [N]`: Insert a rule at a position.
- `-D CHAIN N`: Delete rule number N from a chain.
- `-F [CHAIN]`: Flush rules. Dangerous on remote systems.
- `-P CHAIN TARGET`: Set default policy.
- `-t TABLE`: Select a table other than `filter`.

## Examples

```bash
sudo iptables -L -n -v --line-numbers
```

List filter rules with counters and rule numbers.

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

Allow incoming TCP traffic to port 80.

```bash
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

Allow packets that belong to existing connections.

```bash
sudo iptables -D INPUT 3
```

Delete rule number 3 from the INPUT chain.

```bash
sudo iptables -t nat -L -n -v
```

List NAT table rules.

## Practical Notes

- Always list rules with `--line-numbers` before deleting by number.
- Be careful editing firewalls over SSH. Add an allow rule for SSH before applying restrictive policies.
- Rules may not persist after reboot unless saved by your distribution's firewall tooling.
- Prefer `nft`, `firewalld`, or `ufw` on systems that standardize on those tools.
