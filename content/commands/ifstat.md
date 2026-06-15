---
name: ifstat
summary: Show network interface statistics.
category: Network
tags: network, connectivity, admin
popular: false
---

## Additional Notes

`ifstat` is a network command used to show network interface statistics. It helps identify network bottlenecks and monitor throughput on specific interfaces in real time.

`ifstat` is not always installed by default. It is typically provided by the `ifstat` package or is available from EPEL on RHEL-based systems.

## Syntax

```bash
ifstat [options] [interface ...]
```

## Parameters

- `options`: Flags that change how `ifstat` behaves.
- `interface`: Network interface to monitor (e.g., `eth0`).

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
ifstat --help
man ifstat
```

## Practical Notes

Options can vary by distribution and package version. Use `man ifstat`, `ifstat --help`, or the package documentation for exact syntax.
