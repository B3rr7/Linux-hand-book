---
name: bg
summary: Resume a suspended shell job in the background.
category: Processes
tags: shell, jobs, background, process
popular: false
---

## Additional Notes

`bg` is a shell job-control builtin. It resumes a stopped job and lets it continue running in the background.

Use it after suspending a foreground command with Ctrl+Z when you want the command to keep running while you continue using the shell.

## Syntax

```bash
bg [job]
```

## Parameters

- `job`: Job spec such as `%1`, shown by the `jobs` command. If omitted, the current job is used.

## Common Commands

- `jobs`: List shell jobs.
- `bg %1`: Resume job 1 in the background.
- `fg %1`: Bring job 1 to the foreground.
- Ctrl+Z: Suspend the current foreground job.

## Examples

```bash
sleep 100
# press Ctrl+Z
bg
```

Suspend a command, then resume it in the background.

```bash
jobs
bg %2
```

Resume job 2 in the background.

```bash
fg %2
```

Bring the job back to the foreground.

## Practical Notes

- `bg` is managed by the current shell, not a separate executable.
- Background jobs that read from the terminal may stop again.
- Use `nohup`, `disown`, `tmux`, or `systemd-run` for jobs that must survive logout.
