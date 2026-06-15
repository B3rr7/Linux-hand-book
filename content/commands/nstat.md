---
name: nstat
summary: Display network statistics from kernel SNMP counters.
category: Network
tags: network, snmp, statistics, kernel, counters, monitoring
popular: false
---

## Additional Notes

`nstat` reads and displays network statistics from the kernel's SNMP (Simple Network Management Protocol) MIB (Management Information Base) counters. These counters are maintained by the Linux kernel networking stack and include information about IP, TCP, UDP, ICMP, and other protocol-level events.

System administrators use `nstat` to monitor network health, diagnose packet loss, track retransmissions, detect routing errors, and identify network performance issues. Unlike `netstat` which gives current connection state, `nstat` shows accumulated counters since boot or since the last counter reset.

## Syntax

```bash
nstat [options] [pattern]
```

## Parameters

- `pattern`: Optional filter to show only matching counters (supports shell wildcards).

## Common Options

- `-a`, `--ignore`: Show all counters, including those that are zero.
- `-n`, `--nozero`: Show only non-zero counters (default).
- `-r`, `--reset`: Reset counters after displaying them.
- `-s`, `--snmp`: Show only SNMP MIB-II counters.
- `-p`, `--pretty`: Human-readable formatting with aligned columns.
- `-z`, `--zeros`: Show zero-value counters explicitly.
- `--help`: Show help and exit.
- `--version`: Show version information.

## Examples

```bash
nstat
```

Show non-zero kernel network counters.

```bash
nstat -a
```

Show all counters, including those currently at zero.

```bash
nstat -s
```

Show only standard SNMP MIB-II counters.

```bash
nstat Tcp*
```

Show only counters matching the pattern `Tcp*`.

```bash
nstat -p
```

Display counters with human-readable formatting.

```bash
nstat -r && sleep 60 && nstat
```

Reset counters, wait 60 seconds, then display new counts.

## Practical Notes

- `nstat` provides cumulative counters. To measure rates over an interval, reset with `-r`, wait, then display again.
- Key counters to watch: `TcpRetransSegs` (TCP retransmissions), `TcpOutSegs` and `TcpInSegs` (throughput), `IpInDiscards` and `IpOutDiscards` (packet drops), `UdpInErrors` and `UdpNoPorts` (UDP issues).
- `nstat` reads from `/proc/net/netstat` and `/proc/net/snmp` in recent Linux kernels.
- The `-s` flag restricts output to the standard SNMP MIB-II variables, which are most commonly used for cross-platform monitoring.
- For persistent monitoring, use `sar -n SOCK, TCP, UDP` from the `sysstat` package or configure SNMP daemon polling.
