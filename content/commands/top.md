---
name: top
summary: Monitor processes and system resource usage live.
category: Processes
tags: process, monitor, cpu, memory, load, live
popular: true
---

## Additional Notes

`top` shows a live updating view of system load, CPU usage, memory usage, tasks, and processes. It is useful when a system feels slow or when you need to see which process is consuming resources.

`top` is interactive. You can press keys while it runs to sort, filter, kill, or change the display.

## Syntax

```bash
top [options]
```

## Parameters

- `options`: Flags that change how `top` behaves.
- `pid`: Process ID to inspect or signal.
- `job`: Shell job ID such as `%1` when job control is involved.
- `command`: Command name or pattern to match.

## Common Options

- `-p PID`: Monitor specific process IDs.
- `-u USER`: Show processes for one user.
- `-d SECONDS`: Set refresh delay.
- `-n COUNT`: Exit after a number of updates.
- `-b`: Batch mode for scripts or log capture.

## Useful Interactive Keys

- `q`: Quit.
- `P`: Sort by CPU usage.
- `M`: Sort by memory usage.
- `T`: Sort by running time.
- `k`: Kill a process by PID.
- `r`: Renice a process.
- `1`: Toggle per-CPU display.
- `c`: Toggle full command line.
- `h`: Show help.

## Examples

```bash
top
```

Start live process monitoring.

```bash
top -u rani
```

Show processes owned by user `rani`.

```bash
top -p 1234
```

Monitor one process.

```bash
top -d 1
```

Refresh every second.

```bash
top -b -n 1
```

Print one batch-mode snapshot and exit.

## Reading the Header

- Load average: Roughly shows runnable work over 1, 5, and 15 minutes.
- Tasks: Total, running, sleeping, stopped, and zombie processes.
- CPU line: User, system, idle, wait, and other CPU categories.
- Memory line: Total, free, used, and cache/buffer memory.
- Swap line: Swap usage.

## Practical Notes

- High CPU from one process may be normal during builds, compression, scans, or updates.
- High memory usage is not always bad because Linux uses memory for cache.
- CPU wait time can point to disk or storage bottlenecks.
- Use `htop` if installed for a friendlier interface.
- Use `ps` for a static snapshot and `top` for live behavior.
