---
name: ps
summary: Show running processes.
category: Processes
tags: process, pid, inspect, system, troubleshoot
popular: true
---

## Additional Notes

`ps` shows a snapshot of running processes. It helps you find process IDs, owners, commands, CPU usage, memory usage, and process state.

Unlike `top` or `htop`, `ps` does not keep updating. It prints a point-in-time view.

## Syntax

```bash
ps [options]
```

Different Unix styles exist, so you will see options with and without dashes.

## Parameters

- `options`: Flags that change how `ps` behaves.
- `pid`: Process ID to inspect or signal.
- `job`: Shell job ID such as `%1` when job control is involved.
- `command`: Command name or pattern to match.

## Common Options

- `aux`: Show processes for all users with useful details.
- `-ef`: Show all processes in full-format listing.
- `-u USER`: Show processes for a user.
- `-p PID`: Show a specific process ID.
- `-o FORMAT`: Choose output columns.
- `--sort FIELD`: Sort output.
- `f`: Show process tree style in some formats.

## Useful Columns

- `USER`: Process owner.
- `PID`: Process ID.
- `%CPU`: CPU usage.
- `%MEM`: Memory usage.
- `VSZ`: Virtual memory size.
- `RSS`: Resident memory in RAM.
- `TTY`: Terminal associated with the process.
- `STAT`: Process state.
- `START`: Start time.
- `TIME`: CPU time used.
- `COMMAND`: Command that started the process.

## Examples

```bash
ps
```

Show processes attached to the current terminal.

```bash
ps aux
```

Show a broad list of running processes.

```bash
ps -ef
```

Show all processes in full format.

```bash
ps aux | grep nginx
```

Find processes related to `nginx`.

```bash
ps -p 1234 -o pid,ppid,user,stat,cmd
```

Show selected columns for one process.

```bash
ps aux --sort=-%mem | head
```

Show memory-heavy processes.

```bash
ps aux --sort=-%cpu | head
```

Show CPU-heavy processes.

## Practical Notes

- Use `ps aux` for a quick full-system view.
- Use `pgrep` when you only need process IDs by name.
- Use `kill PID` to signal a process after confirming the PID.
- Process names can be misleading; inspect the full command when possible.
- For live monitoring, use `top` or `htop`.
