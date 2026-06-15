---
name: dstat
summary: Display combined system resource statistics.
category: System
tags: performance, monitoring, cpu, disk, network
popular: false
---

## Additional Notes

`dstat` is a system command used to display combined system resource statistics. It combines data from vmstat, iostat, netstat, and ifstat into a single real-time view. It supports plugins for extending its monitoring capabilities.

## Syntax

```bash
dstat [options] [arguments]
```

## Parameters

- `options`: Flags that change how `dstat` behaves.
- `'delay'`: Seconds between updates.
- `'count'`: Number of updates to show (optional).

## Common Options

- `-c`: CPU stats.
- `-d`: Disk stats.
- `-n`: Network stats.
- `-m`: Memory stats.
- `--top-cpu`: Show top CPU process.

## Examples

```bash
dstat
dstat -cdnm
dstat --top-cpu
```

## Practical Notes

`dstat` combines several resource views into one terminal display. Some systems use alternatives such as `vmstat`, `iostat`, or `sar`.
