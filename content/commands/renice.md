---
name: renice
summary: Change the priority of running processes.
category: Processes
tags: process, priority, cpu, scheduling
popular: false
---

## Additional Notes

`renice` is a process-management command used to change the priority of running processes. It adjusts the scheduling priority (nice value) of already-running processes.

Users can only increase the nice value (lower priority) of their own processes; root can set any value. The range is typically -20 (highest priority) to 19 (lowest).

## Syntax

```bash
renice priority [options] target
```

## Parameters

- `options`: Flags that change how `renice` behaves.
- `pid`: Process ID whose niceness should change.
- `priority`: New nice value to apply.

## Common Options

- `-p PID`: Change by process ID.
- `-u USER`: Change processes owned by a user.
- `-g GROUP`: Change processes by group.

## Examples

```bash
renice 10 -p 1234
sudo renice -5 -p 1234
renice 5 -u deploy
```

## Practical Notes

Use `ps` or `top` to find the process before changing its scheduling priority.
