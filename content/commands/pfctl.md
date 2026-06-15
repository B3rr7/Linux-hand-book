---
name: pfctl
summary: Control the OpenBSD Packet Filter firewall.
category: Network
tags: firewall, packet filter, bsd, openbsd, network security
popular: false
---

## Additional Notes

`pfctl` is the command-line tool for controlling the Packet Filter (PF) firewall on BSD systems (OpenBSD, FreeBSD, macOS). PF is a stateful firewall that provides packet filtering, network address translation (NAT), traffic shaping, and bandwidth management.

While `pfctl` is native to BSD systems, it may appear on Linux systems that use the pf kernel module (via `pf-kernel` or similar projects) or on macOS. The tool controls firewall rules, displays state tables, logs traffic, and manages the PF configuration. On Linux, `iptables`/`nftables` are more common, but understanding `pfctl` is useful for cross-platform network administration.

## Syntax

```bash
pfctl [options] [ruleset-file]
```

## Parameters

- `options`: Flags that change how `pfctl` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-e`: Enable the Packet Filter firewall.
- `-d`: Disable the Packet Filter firewall.
- `-f file`: Load rules from a configuration file.
- `-N`: Load only the NAT rules.
- `-R`: Load only the filter rules.
- `-s`: Show PF status information. Combined with keywords like `rules`, `nat`, `states`, `queue`.
- `-sr`: Show the currently loaded filter rules.
- `-sn`: Show the currently loaded NAT rules.
- `-ss`: Show the current state table.
- `-si`: Show interface statistics.
- `-sa`: Show all PF information.
- `-F`: Flush PF components. Combined with `states`, `rules`, `nat`, `info`, `all`.
- `-k host`: Kill all states matching the specified host.
- `-K host`: Kill all states matching the specified gateway.
- `-t table`: Operate on a PF table (add, delete, replace, test, show).
- `-T add/delete/replace/test/show`: Table operations.
- `-v`: Verbose output.
- `-o`: Enable optimization (skip rules when possible).
- `-q`: Quiet mode (less output).
- `-p device`: Specify the alternate device for /dev/pf.

## Examples

```bash
pfctl -e
```

Enable the PF firewall.

```bash
pfctl -d
```

Disable the PF firewall.

```bash
pfctl -f /etc/pf.conf
```

Load firewall rules from the default configuration file.

```bash
pfctl -sr
```

Display currently loaded filter rules.

```bash
pfctl -sn
```

Display currently loaded NAT rules.

```bash
pfctl -ss
```

Show the current state table (active connections tracked by PF).

```bash
pfctl -sa
```

Show all PF information (stats, rules, states, queues, tables).

```bash
pfctl -F all
```

Flush all states, rules, NAT rules, and queue definitions.

```bash
pfctl -F states
```

Flush all connection states without changing rules.

```bash
pfctl -t blocked_hosts -T add 192.168.1.100
```

Add an IP address to a table named `blocked_hosts`.

```bash
pfctl -t blocked_hosts -T show
```

Show all entries in the `blocked_hosts` table.

```bash
pfctl -k 10.0.0.5
```

Kill all states involving the host `10.0.0.5`.

## Practical Notes

- `pfctl` requires root privileges. Use `sudo` or run as root.
- On macOS, PF is built-in and managed with `pfctl`, but it is disabled by default. Enable with `pfctl -e`.
- The PF configuration file is typically `/etc/pf.conf`. Always test configuration with `pfctl -nf /etc/pf.conf` before loading.
- After making changes to `pf.conf`, load the new rules with `pfctl -f /etc/pf.conf`.
- On Linux, the equivalent functionality is provided by `iptables` or `nftables`. `pfctl` is not installed by default on most Linux distributions.
