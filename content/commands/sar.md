---
name: sar
summary: Collect and report historical system activity.
category: System
tags: performance, monitoring, cpu, history
popular: false
---

## Additional Notes

`sar` is a system command used to collect and report historical system activity. It collects and reports system activity data such as CPU, memory, IO, and network usage over time.

`sar` is part of the `sysstat` package. Historical data collection must be enabled via `sysstat` cron jobs or systemd timers.

## Syntax

```bash
sar [options] [arguments]
```

## Parameters

- `options`: Flags that change how `sar` behaves.
- `'interval'`: Seconds between samples.
- `'count'`: Number of samples (optional).

## Common Options

- `-u`: CPU usage.
- `-r`: Memory usage.
- `-b`: IO statistics.
- `-n DEV`: Network device statistics.

## Examples

```bash
sar
sar -u 1 5
sar -r
sar -n DEV 1 3
```

## Practical Notes

`sar` is part of `sysstat` and is useful when historical performance data collection is enabled.
