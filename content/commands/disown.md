---
name: disown
summary: Remove shell jobs from the current shell's job table.
category: Processes
tags: shell, jobs, background, logout, long-running
popular: false
---

## Additional Notes

`disown` removes one or more background jobs from the current shell's job table so they are not sent a SIGHUP when the shell exits. It lets a long-running job keep going after you log out, much like `nohup` but applied later.

Jobs are referenced by number (such as `%1`) or by name. Run `jobs` first to see the current list.

## Syntax

```bash
disown [options] [job ...]
```

## Parameters

- `options`: Flags that choose which jobs or what happens on logout.
- `job`: Job spec such as `%1`, `%2`, or `%name`; omit to use the current job.

## Common Options

- `-a`, `--all`: Act on all jobs.
- `-r`, `--running`: Act only on running jobs.
- `-h`: Mark jobs so they keep getting SIGHUP on logout (but stay in the table).
- `-r` with no `-h`: Default behavior removes the jobs from the table.

## Examples

```bash
sleep 600 &
disown
jobs
```

Start a background job, remove it from the table, and confirm it is gone.

```bash
long-task.sh &
disown %1
exit
```

Let `long-task.sh` survive shell logout.

```bash
disown -a
```

Remove every job from the table at once.

```bash
disown -a -h
```

Keep all jobs in the table but stop SIGHUP from killing them on exit.

```bash
make &
disown -h %1
```

Mark the make job to ignore hangup signals.

## Practical Notes

- Use `jobs` to list job numbers before `disown`.
- `disown` without `-h` removes the job; with `-h` it stays listed but ignores SIGHUP.
- For jobs you start knowingly, `nohup command &` is often simpler than `disown`.
- A disowned job is still a child until it exits; closing the terminal no longer kills it via hangup.
- Prefer `screen` or `tmux` when you also want to reattach and watch the job later.
