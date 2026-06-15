---
name: iptables-restore
summary: Restore IPv4 firewall rules from a saved rule set.
category: Network
tags: ipv4, firewall, netfilter, restore, rules
popular: false
---

## Additional Notes

`iptables-restore` loads and applies IPv4 firewall rules from a file or standard input in the format produced by `iptables-save`. It is the standard way to apply a complete set of `iptables` rules atomically.

The command reads rules for all tables, flushes existing rules (unless `--noflush` is used), and populates the tables exactly as specified. It is significantly faster than executing individual `iptables` commands for complex configurations and is the standard method for loading firewall rules at boot time.

## Syntax

```bash
iptables-restore [options] [file]
```

## Parameters

- `file`: A file containing rules in `iptables-save` format. If omitted, reads from standard input.

## Common Options

- `-c`, `--counters`: Restore packet and byte counters along with the rules.
- `-n`, `--noflush`: Do not flush existing rules before loading. Append new rules to existing ones.
- `-t`, `--test`: Test the rule set for syntax errors without loading.
- `-T table`, `--table table`: Restore only the specified table.
- `-h`, `--help`: Display help.

## Examples

```bash
sudo iptables-restore < /etc/iptables.rules
```

Restore IPv4 firewall rules from a saved file.

```bash
sudo iptables-restore -c /etc/iptables.rules
```

Restore rules with packet and byte counters.

```bash
sudo iptables-restore -n < /etc/iptables.rules
```

Append saved rules to the current rule set without flushing.

```bash
sudo iptables-restore -t /etc/iptables.rules
```

Test the syntax of a rules file without applying it.

## Practical Notes

- The input format is: `*table-name`, then chain lines (`:CHAIN POLICY [packets:bytes]`), then rule lines, and `COMMIT`.
- Always test new rule files with `-t` on a non-production system before deployment.
- The `-n` flag is useful for adding rules to a running system without interrupting existing traffic flows.
- On many distributions, `iptables-restore` is called from systemd units or network init scripts to load firewall rules at boot.
- Use `iptables-save` to create the rules file to be restored.
- `iptables-restore` only affects IPv4 rules. Use `ip6tables-restore` for IPv6.
