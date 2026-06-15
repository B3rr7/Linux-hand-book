---
name: pidstat
summary: Report statistics for Linux processes and threads.
category: Processes
tags: monitoring, performance, cpu, memory, io, process, threads
popular: false
---

## Additional Notes

`pidstat` is a monitoring tool from the `sysstat` package that reports statistics for individual processes and threads. It can show CPU usage, memory usage, I/O statistics, context switches, stack reports, and more, per-process and over time.

System administrators and performance analysts use `pidstat` to identify resource-intensive processes, diagnose performance issues, monitor thread behavior, and track I/O bottlenecks. Unlike `top` which shows a dynamic screen, `pidstat` produces timestamped output suitable for logging, graphing, and retroactive analysis.

## Syntax

```bash
pidstat [options] [interval] [count]
```

## Parameters

- `interval`: Sampling interval in seconds. If omitted, reports statistics since boot.
- `count`: Number of reports to generate. If omitted, reports indefinitely (when interval is given).

## Common Options

- `-p pid`: Report only for the specified PID. Use `-p ALL` for all PIDs (default).
- `-u`: Report CPU utilization (default).
- `-r`: Report page faults and memory utilization.
- `-d`: Report I/O statistics (reads, writes, I/O time).
- `-w`: Report context switches (voluntary and involuntary).
- `-t`: Show statistics for threads in addition to processes.
- `-T TASK|CHILD|ALL`: Specify which processes to report: `TASK` (current), `CHILD` (child tasks), `ALL`.
- `-C command`: Filter by command name (supports pattern matching).
- `-G process-name`: Filter by process name (exact match).
- `-R`: Report realtime priority and scheduling policy.
- `-S`: Report scheduling policy (SCHED_OTHER, SCHED_FIFO, SCHED_RR).
- `-v`: Report kernel tables (FDSIZE, threads, etc.).
- `-h`: Show horizontally aligned output without headers.
- `-e program`: Execute a program and monitor it until completion.
- `-l`: Show the full command name with arguments.
- `-s`: Report stack utilization.
- `--human`: Show values in human-readable format.
- `--interval=ms`: Set interval in milliseconds.

## Examples

```bash
pidstat 2 5
```

Show CPU usage for all processes every 2 seconds, 5 times.

```bash
pidstat -u -p 1234 2
```

Show CPU usage for PID 1234 every 2 seconds indefinitely.

```bash
pidstat -r 2 10
```

Show memory and page fault statistics every 2 seconds, 10 times.

```bash
pidstat -d 1
```

Show I/O statistics for all processes every second.

```bash
pidstat -w -p ALL 5
```

Show context switch statistics every 5 seconds.

```bash
pidstat -C nginx 2 10
```

Show CPU statistics for processes whose command name contains `nginx`.

```bash
pidstat -t -p 5678 2
```

Show per-thread statistics for PID 5678.

```bash
pidstat -e ./myprogram
```

Run `myprogram` and monitor its resource usage until it exits.

```bash
pidstat -ruv 5
```

Show CPU, memory, and kernel table statistics together.

```bash
pidstat -p ALL -l 3
```

Show statistics with full command-line arguments.

## Practical Notes

- `pidstat` is part of the `sysstat` package. Install with `sudo apt install sysstat` or `sudo yum install sysstat`.
- The first report shows statistics since boot. Subsequent reports show delta between intervals.
- Use `-t` to see thread-level statistics. Without it, threads are grouped into their parent process.
- For disk I/O monitoring, `pidstat -d` shows read/write throughput and I/O wait time per process.
- Combine with `sar` (also from sysstat) for system-wide historical performance analysis.
- Output is CSV-friendly, making it easy to import into spreadsheets or time-series databases.
