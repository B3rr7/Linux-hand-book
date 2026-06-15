---
name: disown
summary: Remove shell jobs from the current shell's job table.
category: Processes
tags: shell, jobs, background, logout
popular: false
---

## Additional Notes

`disown` is a process-management command used to remove shell jobs from the current shell's job table. It prevents background jobs from receiving the SIGHUP signal when the shell exits, making them survive terminal closure. This is useful for long-running tasks started in an SSH session.

## Syntax

```bash
disown [options] [job ...]
```

## Parameters

- `options`: Flags that change how `disown` behaves.
- `job`: Shell job ID such as `%1` when job control is involved.

## Common Options

- `-h`: Keep the job in the table but prevent hangup signals.
- `-a`: Apply to all jobs.
- `-r`: Apply to running jobs.

## Examples

```bash
long-command &
disown
disown %1
```

## Practical Notes

`disown` is useful when you started a long-running command and do not want it tied to the current shell.
