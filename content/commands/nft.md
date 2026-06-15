---
name: nft
summary: Manage nftables firewall rules.
category: Network
tags: firewall, nftables, packets, security
popular: false
---

## Additional Notes

`nft` manages nftables firewall rules in the Linux kernel. Use it to inspect, load, add, delete, and test firewall rules.

nftables is the modern Netfilter firewall framework. It can replace many older `iptables`, `ip6tables`, `arptables`, and `ebtables` workflows.

## Syntax

```bash
nft [options] [command]
nft -f rules.nft
```

## Parameters

- `options`: Flags that change how `nft` behaves.
- `command`: A ruleset, table, chain, rule, set, or monitor command.
- `family`: Packet family such as `ip`, `ip6`, `inet`, `arp`, `bridge`, or `netdev`.
- `table`: A container for chains, sets, maps, and rules.
- `chain`: A list of rules. Base chains attach to packet hooks such as `input`, `forward`, or `output`.

## Common Options

- `-f FILE`: Read rules from a file.
- `-c`: Check commands without applying changes.
- `-a`: Show rule handles, useful when deleting exact rules.
- `-n`: Print numeric output.
- `-j`: Print JSON output.
- `list ruleset`: Show the active ruleset.
- `flush ruleset`: Remove the active ruleset.
- `add table`: Create a table.
- `add chain`: Create a chain.
- `add rule`: Add a rule.
- `monitor`: Watch nftables events.

## Examples

```bash
sudo nft list ruleset
```

Show all active nftables rules.

```bash
sudo nft -c -f /etc/nftables.conf
```

Check a rules file without loading it.

```bash
sudo nft add table inet filter
```

Create a table that can hold IPv4 and IPv6 rules.

```bash
sudo nft 'add chain inet filter input { type filter hook input priority 0; policy drop; }'
```

Create an input base chain with a default drop policy.

```bash
sudo nft flush ruleset
```

Remove all active nftables tables, chains, and rules.

## Practical Notes

- Start with `sudo nft list ruleset` before changing anything.
- `flush ruleset` removes all nftables rules. Use it carefully, especially over SSH.
- Use `-c -f FILE` before loading a new firewall file.
- `inet` tables are useful when one ruleset should handle both IPv4 and IPv6.
- `list ruleset` output can be saved and loaded again with `nft -f`.
