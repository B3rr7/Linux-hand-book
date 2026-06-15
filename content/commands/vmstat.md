---
name: vmstat
summary: Report memory, process, paging, block IO, and CPU activity.
category: System
tags: performance, memory, cpu, monitoring
popular: true
---

## Additional Notes

`vmstat` reports system processes, memory, paging, block I/O, traps, and CPU activity. With a delay argument, it repeats at the specified interval, providing a live view of system performance.

The first report shows averages since boot. Subsequent reports show activity since the previous interval.

## Syntax

```bash
vmstat [options] [arguments]
```

## Parameters

- `options`: Flags that change how `vmstat` behaves.
- `delay`: Update interval in seconds.
- `count`: Number of reports. Only used with delay.

## Common Options

- `-a`: Show active and inactive memory.
- `-f`: Show number of forks since boot.
- `-s`: Show event counters and memory statistics.
- `-d`: Show disk statistics.
- `-p PARTITION`: Show partition-specific statistics.
- `-S UNIT`: Set display unit (k, K, m, M).
- `-s`: Show event counters.
- `-d`: Show disk statistics.

## Examples

```bash
vmstat
vmstat 1
vmstat 2 5
vmstat -s
```

## Practical Notes

`vmstat 1` is a quick way to watch memory pressure, CPU wait, and system activity.
