---
name: nethogs
summary: Monitor per-process network bandwidth usage.
category: Network
tags: network, monitor, bandwidth, process, traffic
popular: false
---

## Additional Notes

`nethogs` breaks down network traffic by process, showing which programs are using the most bandwidth in real time. Unlike tools that show aggregate interface statistics, `nethogs` associates each connection with its owning process (PID and program name).

It is invaluable for identifying which application is saturating the network connection, detecting unauthorized network activity, and debugging bandwidth-hungry processes. It updates the display in real time and supports filtering by interface.

## Syntax

```bash
nethogs [options] [interface...]
```

## Parameters

- `interface`: The network interface to monitor (e.g., `eth0`, `wlan0`). If omitted, all interfaces are monitored.

## Common Options

- `-d seconds`: Set the refresh interval in seconds (default is 1).
- `-v level`: Set the display mode: `0` (KB/s), `1` (total MB), `2` (combined), `3` (KB/s per device).
- `-p`: Enable promiscuous mode.
- `-t`: Trace mode; print text output instead of the interactive display.
- `-c`: Only count TCP traffic (not UDP).
- `-a`: Monitor all devices, including loopback.
- `-f`: Show total traffic (send + receive) instead of separate columns.
- `-C`: Colorize output.
- `-b`: Use bandwidth in bits/sec instead of bytes/sec.

## Interactive Controls

- `m`: Cycle through display modes (KB/s, total, combined).
- `r`: Sort by received traffic.
- `s`: Sort by sent traffic.
- `q`: Quit.

## Examples

```bash
nethogs
```

Monitor all interfaces, showing bandwidth per process.

```bash
nethogs eth0
```

Monitor only the `eth0` interface.

```bash
nethogs -d 2 wlan0
```

Update every 2 seconds on the Wi-Fi interface.

```bash
nethogs -t -c 5 > log.txt
```

Run in trace mode for 5 updates and save to a file (for logging or scripting).

```bash
nethogs -v 1
```

Show total data transferred (MB) instead of transfer rate.

```bash
nethogs -a
```

Include loopback traffic in the display.

## Practical Notes

- Nethogs requires root privileges to read `/proc` data and capture packets.
- The displayed PIDs may disappear if processes start and stop quickly.
- Use `-t` mode to log bandwidth usage by process over time.
- On modern systems with many concurrent connections, nethogs can have high CPU usage.

