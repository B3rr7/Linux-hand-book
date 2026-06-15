---
name: prtstat
summary: Display process statistics from the proc filesystem.
category: Processes
tags: process, statistics, proc, status, monitoring
popular: false
---

## Additional Notes

`prtstat` displays detailed statistics about a running process by reading information from the `/proc` filesystem. It shows the process name, PID, parent PID, state, user and system CPU time, priority, nice value, memory usage, I/O counters, signal masks, and scheduling information.

System administrators and developers use `prtstat` to get a comprehensive snapshot of a process's state and resource usage. It provides more detail than `ps -p PID` in a single consolidated view, though much of the same information is available from `/proc/PID/stat` and `/proc/PID/status`.

## Syntax

```bash
prtstat [options] [pid...]
```

## Parameters

- `pid`: One or more process IDs to examine.

## Common Options

- `-r`, `--raw`: Output in raw format (machine-parseable).
- `-n`, `--nocolumns`: Suppress column headers.
- `-h`, `--help`: Show help and exit.
- `-v`, `--version`: Show version information.

## Examples

```bash
prtstat 1234
```

Display statistics for PID 1234.

```bash
prtstat $$ 
```

Show statistics for the current shell process.

```bash
prtstat 1
```

Show statistics for the init or systemd process.

```bash
prtstat -r 1234 > stats.txt
```

Save raw process statistics to a file.

```bash
prtstat $(pidof nginx)
```

Show statistics for all nginx processes.

```bash
prtstat -n 1234
```

Show statistics without column headers.

## Practical Notes

- `prtstat` reads from `/proc/PID/stat`. If the process terminates before `prtstat` reads it, an error is returned.
- Most of the same information is available from `ps -p PID -o pid,ppid,stat,etime,time,%cpu,%mem,rss,vsz` or by reading `/proc/PID/status` directly.
- `prtstat` is part of the `psmisc` package on some distributions. Install with `sudo apt install psmisc`.
- For continuous monitoring, use `top`, `htop`, or `pidstat` from the `sysstat` package.
- The raw output (`-r`) is useful for parsing in scripts, though directly reading `/proc/PID/stat` may be simpler.
