---
name: nohup
summary: Run a command immune to hangups after logout.
category: Processes
tags: background, process, logout, long-running
popular: true
---

## Additional Notes

`nohup` is a process-management command used to run a command immune to hangups after logout. It ensures a command keeps running after the user logs out or the terminal session ends.

Output that is not redirected goes to `nohup.out` in the current directory. For managing long-running sessions interactively, consider `screen` or `tmux` instead.

## Syntax

```bash
nohup command [arguments ...]
```

## Parameters

- `options`: Flags that change how `nohup` behaves.
- `command`: Command to keep running after hangup.

## Common Options

`nohup` is usually used by placing it before another command. Output defaults to `nohup.out` if not redirected.

## Examples

```bash
nohup ./backup.sh &
nohup python worker.py > worker.log 2>&1 &
```

## Practical Notes

For interactive long-running sessions, `screen` or `tmux` is often easier to manage.
