---
name: mpstat
summary: Report CPU usage statistics, per-processor if available.
category: Processes
tags: cpu, performance, monitoring, processor, stats
popular: false
---

## Additional Notes

`mpstat` displays CPU usage statistics, including per-processor breakdown on multi-core systems. It is part of the `sysstat` package and reports values such as user time, system time, idle time, I/O wait, soft IRQ, and steal time (in virtualized environments).

It is useful for identifying CPU bottlenecks, unbalanced load across cores, excessive I/O wait, or CPU saturation. It provides both instantaneous snapshots and continuous monitoring at configurable intervals.

## Syntax

```bash
mpstat [options] [interval [count]]
```

## Parameters

- `interval`: The time in seconds between reports.
- `count`: The number of reports to generate. If not specified, reports continue indefinitely.

## Common Options

- `-A`: Show all CPU statistics (equivalent to `-u -I ALL -P ALL`).
- `-P cpu`: Show statistics for a specific CPU or CPU range (e.g., `-P 0`, `-P 0-3`, `-P ALL`).
- `-u`: Show CPU utilization statistics (default).
- `-I`: Show interrupt statistics.
- `-I SUM`: Show total interrupt count per processor.
- `-I CPU`: Show interrupts per CPU.
- `-I ALL`: Show all interrupt statistics.
- `-o JSON`: Output in JSON format.
- `-o JSON-PRETTY`: Output in pretty-printed JSON.

## Examples

```bash
mpstat
```

Show a single report of overall CPU statistics.

```bash
mpstat -P ALL
```

Show per-processor statistics for all CPUs.

```bash
mpstat 2 5
```

Show CPU statistics every 2 seconds, 5 times.

```bash
mpstat -P 0 1
```

Monitor only CPU 0 every second.

```bash
mpstat -A
```

Show all available CPU statistics.

```bash
mpstat -I ALL
```

Show all interrupt statistics.

## Output Fields

- `CPU`: Processor number (or `all` for aggregate).
- `%usr`: User-level CPU time percentage.
- `%nice`: Time spent running nice'd user processes.
- `%sys`: System/kernel CPU time.
- `%iowait`: Time waiting for I/O to complete.
- `%irq`: Time servicing hardware interrupts.
- `%soft`: Time servicing software interrupts.
- `%steal`: Time stolen by the hypervisor (in virtualized environments).
- `%guest`: Time running a virtual processor.
- `%gnice`: Time running a nice'd guest.
- `%idle`: Idle time.

## Practical Notes

- High `%iowait` indicates disk or storage bottlenecks, not CPU saturation.
- High `%sys` suggests driver, system call, or interrupt overhead.
- `%steal` above 5% in virtual machines suggests the host is overcommitted.
- `mpstat` is part of the `sysstat` package; install with `apt install sysstat` or equivalent.

