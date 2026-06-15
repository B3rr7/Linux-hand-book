---
name: iptstate
summary: Display IP connection state table from netfilter.
category: Network
tags: netfilter, connection, tracking, state, network
popular: false
---

## Additional Notes

`iptstate` (IP Table State) displays the current IP connection tracking table maintained by the netfilter connection tracking system. It shows all active connections that the kernel is tracking, including protocol, source/destination addresses, ports, connection state, and packet/byte counts.

The display updates in real time, similar to `top`. You can filter by protocol, source, destination, or state. It is useful for monitoring active network connections, debugging firewall rules, and understanding how connection tracking affects traffic flow.

## Syntax

```bash
iptstate [options]
```

## Parameters

- `options`: Flags that change how `iptstate` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-b`: Do not show the sorting and filtering prompt bar (brief mode).
- `-d`: Do not resolve IP addresses to hostnames.
- `-f filter`: Set an initial filter expression.
- `-o`: Show output in a single-shot format and exit (batch mode).
- `-s source-address`: Filter by source address.
- `-S`: Sort output by source address.
- `-D`: Sort output by destination address.
- `-P protocol`: Filter by protocol number or name.
- `-L`: Display the license information.
- `-h`, `--help`: Show help.

## Examples

```bash
sudo iptstate
```

Display the connection tracking table with real-time updates.

```bash
sudo iptstate -o
```

Print a single snapshot of the connection tracking table and exit.

```bash
sudo iptstate -s 192.168.1.1
```

Filter connections by source address.

```bash
sudo iptstate -P tcp
```

Show only TCP connections.

```bash
sudo iptstate -d
```

Display connections without resolving hostnames.

## Practical Notes

- `iptstate` reads from `/proc/net/nf_conntrack` (or `/proc/net/ip_conntrack` on older kernels).
- The connection tracking table has a fixed size; if it fills up, new connections may be dropped.
- Use `sysctl net.netfilter.nf_conntrack_max` to view or change the maximum number of tracked connections.
- The `-o` flag is useful for scripts that need a one-time snapshot of active connections.
- For a simpler view of connections, use `conntrack -L` from the `conntrack-tools` package.
- Run `iptstate` as root to see all tracked connections; unprivileged users may see limited information.
