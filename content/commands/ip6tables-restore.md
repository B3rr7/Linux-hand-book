---
name: ip6tables-restore
summary: Restore IPv6 firewall rules from a saved rule set.
category: Network
tags: ipv6, firewall, netfilter, restore, rules
popular: false
---

## Additional Notes

`ip6tables-restore` loads and applies IPv6 firewall rules from a file or standard input. The input must be in the format produced by `ip6tables-save`. It is commonly used in system boot scripts and network service restarts to apply saved `ip6tables` configurations.

The command reads rules for all tables (`filter`, `nat`, `mangle`, `raw`, `security`), flushes existing rules, and sets the default policies and rules exactly as specified in the input file. This is faster than running individual `ip6tables` commands for a complex rule set.

## Syntax

```bash
ip6tables-restore [options] [file]
```

## Parameters

- `file`: A file containing rules in `ip6tables-save` format. If omitted, reads from standard input.

## Common Options

- `-c`, `--counters`: Restore the packet and byte counters along with the rules.
- `-n`, `--noflush`: Do not flush the existing table contents before restoring. New rules are appended to existing ones.
- `-t`, `--test`: Test the rule set without actually loading it. Check for syntax errors.
- `-T table`, `--table table`: Restore only the specified table.
- `-h`, `--help`: Display help.

## Examples

```bash
sudo ip6tables-restore < /etc/ip6tables.rules
```

Restore IPv6 firewall rules from a saved rules file.

```bash
cat /etc/ip6tables.rules | sudo ip6tables-restore
```

Same as above, using a pipe to read from standard input.

```bash
sudo ip6tables-restore -c /etc/ip6tables.rules
```

Restore rules and the associated packet/byte counters.

```bash
sudo ip6tables-restore -n < /etc/ip6tables.rules
```

Append the saved rules to the existing rule set without flushing.

## Practical Notes

- The input file format starts with `*table-name`, followed by chain policies and rules, and ends with `COMMIT`.
- Use `ip6tables-save` to generate a compatible rules file.
- The command flushes all existing `ip6tables` rules by default. Use `-n` to preserve existing rules.
- On many distributions, `ip6tables-restore` is called from systemd service files or init scripts at boot time.
- Always test a rules file with `-t` before applying it to a production system.
- The `ip6tables-restore` command only affects IPv6 rules. IPv4 rules must be managed separately with `iptables-restore`.
