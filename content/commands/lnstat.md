---
name: lnstat
summary: Show Linux kernel network statistics.
category: Network
tags: network, stats, kernel, routing, cache
popular: false
---

## Additional Notes

`lnstat` displays Linux kernel network statistics from various subsystems, including routing cache, neighbor cache (ARP), and network statistics. It reads data from `/proc/net/stat/` and presents it in a configurable table format.

It is useful for monitoring network performance, debugging routing issues, and tracking neighbor discovery activity. Unlike `netstat -s`, `lnstat` can show real-time updates at configurable intervals, making it suitable for continuous monitoring.

## Syntax

```bash
lnstat [options]
```

## Parameters

- `options`: Flags that change how `lnstat` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-h`: Show help message.
- `-V`: Show version information.
- `-c count`: Print statistics `count` times then exit.
- `-d delay`: Update interval in seconds (can be fractional, e.g., `0.5`).
- `-s subject`: Set the statistics subject (`arp_cache`, `rt_cache`, `rt_stat`, or `net_stat`).
- `-i mod`: Select fields of each statistic.
- `-w width`: Set field width for each statistic.

## Examples

```bash
lnstat
```

Show all network statistics, updating every second.

```bash
lnstat -s rt_cache -c 5
```

Show routing cache statistics 5 times and exit.

```bash
lnstat -s arp_cache -d 2
```

Show ARP cache statistics, updating every 2 seconds.

```bash
lnstat -s net_stat -i 1,2,3 -w 10
```

Show net statistics with only the first 3 fields, each 10 characters wide.

## Practical Notes

- `lnstat` reads from `/proc/net/stat/` files, which must be available and readable.
- Each kernel subsystem exposes different fields; use `lnstat --help` or check the relevant `/proc` file to see available fields.
- For one-shot statistics, use `cat /proc/net/stat/<subsystem>` directly.

