---
name: ip6tables-save
summary: Save current IPv6 firewall rules for later restoration.
category: Network
tags: ipv6, firewall, netfilter, save, rules
popular: false
---

## Additional Notes

`ip6tables-save` dumps the current IPv6 netfilter rules to standard output in a format that can be read back by `ip6tables-restore`. It outputs rules for all tables with counters and policy information.

The saved output is a structured text format that includes table headers (`*filter`, `*nat`, etc.), chain default policies (`:INPUT ACCEPT [0:0]`), individual rules with their full specifications, and `COMMIT` markers. This format is the standard way to persistently store and distribute `ip6tables` configurations.

## Syntax

```bash
ip6tables-save [options]
```

## Parameters

- `options`: Flags that change how `ip6tables-save` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-c`, `--counters`: Include the current packet and byte counters in the output.
- `-t table`, `--table table`: Save only the specified table instead of all tables.
- `-M`, `--modprobe command`: Use a specific modprobe command for loading kernel modules.
- `-h`, `--help`: Display help.

## Examples

```bash
sudo ip6tables-save
```

Dump all current IPv6 rules to stdout.

```bash
sudo ip6tables-save > /etc/ip6tables.rules
```

Save the current IPv6 firewall rules to a file.

```bash
sudo ip6tables-save -t filter
```

Save only the filter table rules.

```bash
sudo ip6tables-save -c | less
```

View the current rules with packet and byte counters.

## Practical Notes

- Use `ip6tables-save > file` to create a backup before making changes.
- Rules saved with `-c` include counter data that help with debugging traffic patterns.
- The output of `ip6tables-save` is designed to be machine-readable; use `ip6tables -L -v` for human-readable output.
- Combine with `ip6tables-restore` in init scripts to make firewall rules persistent.
- On Debian/Ubuntu, the `iptables-persistent` package automates saving and restoring for both `iptables` and `ip6tables`.
- IPv4 rules must be saved separately using `iptables-save`.
