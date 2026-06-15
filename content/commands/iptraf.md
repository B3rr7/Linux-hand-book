---
name: iptraf
summary: Real-time IP traffic monitoring and statistics.
category: Network
tags: traffic, monitor, network, statistics, bandwidth
popular: false
---

## Additional Notes

`iptraf` (IP Traffic Monitor) is an interactive, ncurses-based network monitoring tool that displays real-time traffic statistics by protocol, interface, port, and host. It provides detailed views of IP traffic including TCP connections, UDP traffic, ICMP details, and Ethernet load.

The tool features a menu-driven interface that allows you to start various monitors: IP traffic monitor, general interface statistics, detailed interface statistics, statistical breakdowns by protocol, and LAN station monitoring. It is useful for diagnosing network issues, identifying bandwidth hogs, and understanding traffic patterns.

## Syntax

```bash
iptraf [options]
```

## Parameters

- `options`: Flags that change how `iptraf` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-i interface`: Start the IP traffic monitor immediately on the specified interface.
- `-g`: Start the general interface statistics display immediately.
- `-d interface`: Start detailed statistics on a specific interface.
- `-s interface`: Start TCP/UDP service statistics on a specific interface.
- `-z interface`: Show packet size breakdowns on an interface.
- `-l interface`: Start the LAN station monitor on an interface.
- `-t timeout`: Run for the specified number of minutes, then exit (for scripting).
- `-B`: Run in background (daemon mode).
- `-f`: Clear all locks and counters (use if `iptraf` crashes).
- `-L`: Display the license information.
- `-h`, `--help`: Show help.

## Examples

```bash
sudo iptraf
```

Start the menu-driven interface.

```bash
sudo iptraf -i eth0
```

Start monitoring IP traffic on `eth0` immediately.

```bash
sudo iptraf -t 5
```

Run for 5 minutes and then exit.

```bash
sudo iptraf -g
```

Display general interface statistics immediately.

## Practical Notes

- `iptraf` must be run as root to access network interfaces in promiscuous mode.
- Use arrow keys and Enter to navigate the menu interface. Press `X` or `Esc` to exit a view.
- The daemon mode (`-B`) logs statistics to log files in `/var/log/iptraf/`.
- For command-line, non-interactive monitoring, consider `nload`, `iftop`, `bmon`, or `nethogs`.
- Log files can be configured via the `Configure` menu option and are useful for long-term traffic analysis.
- `iptraf-ng` is a modern fork that continues development on newer systems.
