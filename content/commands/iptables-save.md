---
name: iptables-save
summary: Save current IPv4 firewall rules for later restoration.
category: Network
tags: ipv4, firewall, netfilter, save, rules
popular: false
---

## Additional Notes

`iptables-save` dumps the current IPv4 netfilter firewall rules to standard output in a format that can be read back by `iptables-restore`. It outputs all tables with their chain policies, rules, and optional packet/byte counters.

The output format consists of table headers (`*filter`, `*nat`, `*mangle`, `*raw`, `*security`), each with chain policy lines and rule lines, terminated by `COMMIT`. This format is used by firewall management tools, boot scripts, and packaging systems to persist `iptables` configurations across reboots.

## Syntax

```bash
iptables-save [options]
```

## Parameters

- `options`: Flags that change how `iptables-save` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-c`, `--counters`: Include current packet and byte counters in the output.
- `-t table`, `--table table`: Save only the specified table.
- `-M`, `--modprobe command`: Use a specific modprobe command.
- `-h`, `--help`: Display help.

## Examples

```bash
sudo iptables-save
```

Dump all current IPv4 rules to stdout.

```bash
sudo iptables-save > /etc/iptables.rules
```

Save the current firewall rules to a file.

```bash
sudo iptables-save -t nat
```

Save only the NAT table rules.

```bash
sudo iptables-save -c | head -20
```

View the first 20 lines of the rules with counters.

## Practical Notes

- Redirect the output to a file to create a backup of your current firewall configuration.
- The `-c` option includes byte and packet counts, which can be useful for traffic analysis.
- The output is machine-parseable and can be used in scripts to generate firewall reports.
- Restore saved rules with `iptables-restore < file`.
- On Debian/Ubuntu, `iptables-persistent` uses `iptables-save` and `iptables-restore` to save and load rules automatically.
- IPv6 rules must be saved separately using `ip6tables-save`.
