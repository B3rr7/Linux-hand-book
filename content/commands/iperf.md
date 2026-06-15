---
name: iperf
summary: Measure network throughput.
category: Network
tags: network, connectivity, admin
popular: false
---

## Additional Notes

`iperf` is a network command used to measure network throughput. It benchmarks network performance between two hosts running in client-server mode.

Two major versions exist: `iperf` (version 2) and `iperf3` (version 3), which are not compatible with each other. `iperf3` is the actively maintained version.

## Syntax

```bash
iperf [options]
```

## Parameters

- `options`: Flags that change how `iperf` behaves.
- `server`: Hostname or IP address of the iperf server.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
iperf --help
man iperf
```

## Practical Notes

Options can vary by distribution and package version. Use `man iperf`, `iperf --help`, or the package documentation for exact syntax.
