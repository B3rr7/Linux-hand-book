---
name: iostat
summary: Report CPU and disk IO statistics.
category: System
tags: performance, disk, cpu, monitoring, sysstat
popular: false
---

## Additional Notes

`iostat` reports CPU utilization and device I/O statistics such as read/write throughput and the number of operations per second. It comes from the `sysstat` package and is a standard tool for spotting disk bottlenecks.

With no interval it prints since-boot averages; with an interval it prints live updates, which is how you watch current load.

## Syntax

```bash
iostat [options] [interval [count]]
```

## Parameters

- `options`: Flags that choose what to report.
- `interval`: Seconds between reports when watching live.
- `count`: Number of reports to print, then exit.

## Common Options

- `-x`: Extended, more detailed device statistics.
- `-d`: Show device (disk) statistics only.
- `-p [DEVICE]`: Include per-partition statistics.
- `-m`: Show rates in megabytes per second.
- `-k`: Show rates in kilobytes per second.
- `-c`: Show CPU statistics only.
- `-N`: Show device mapper names when available.
- `-t`: Add a timestamp to each report.
- `-z`: Omit devices with no activity during the interval.

## Examples

```bash
iostat
```

Show since-boot CPU and device summary.

```bash
iostat -x 1
```

Print detailed device stats every second until stopped.

```bash
iostat -xz 2 5
```

Print five extended reports, two seconds apart, skipping idle devices.

```bash
iostat -d sda 1
```

Watch only the `sda` device once per second.

```bash
iostat -m -p ALL 1 3
```

Show per-partition throughput in MB/s, three times.

## Practical Notes

- Without an interval, numbers are averages since boot, not current load.
- Use `-x` to see `await`, `util`, and `svctm` for real bottleneck clues.
- High `%util` near 100% with high `await` often means the disk is saturated.
- Install `sysstat` first if the command is missing; enable its collector for history.
