---
name: iostat
summary: Report CPU and disk IO statistics.
category: System
tags: performance, disk, cpu, monitoring
popular: false
---

## Additional Notes

`iostat` is a system command used to report CPU and disk IO statistics. It helps diagnose performance issues by showing CPU utilization and per-device I/O statistics.

`iostat` is typically provided by the `sysstat` package. Running it repeatedly with an interval (e.g., `iostat 1`) produces continuous monitoring output.

## Syntax

```bash
iostat [options] [arguments]
```

## Parameters

- `options`: Flags that change how `iostat` behaves.
- `'interval'`: Seconds between reports.
- `'count'`: Number of reports (optional).

## Common Options

- `-x`: Extended disk statistics.
- `-d`: Device utilization report.
- `-c`: CPU report.
- `N`: Repeat every N seconds.

## Examples

```bash
iostat
iostat -xz 1
iostat -d 2 5
```

## Practical Notes

`iostat` is often provided by the `sysstat` package.
