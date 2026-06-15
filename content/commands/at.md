---
name: at
summary: Schedule a command to run once at a later time.
category: System
tags: schedule, job, time, automation
popular: false
---

## Additional Notes

`at` schedules one-time jobs to run in the future. It is useful for delayed commands, reminders, maintenance tasks, or simple automation that should run once rather than repeatedly.

For recurring jobs, use `cron` or systemd timers. For one-time jobs, `at` is simpler.

## Syntax

```bash
at TIME
at [options] TIME
```

## Parameters

- `TIME`: Time expression such as `now + 5 minutes`, `10:30 PM`, or `tomorrow`.
- `command`: Command lines typed into the interactive prompt or read from a file.
- `options`: Queue, file, listing, and removal controls.

## Common Options

- `-f FILE`: Read commands from FILE.
- `-q QUEUE`: Use a specific queue letter.
- `-l`: List pending jobs. Same idea as `atq`.
- `-r JOB`: Remove a pending job. Same idea as `atrm`.
- `-m`: Send mail when the job completes, if mail is configured.

## Examples

```bash
at now + 5 minutes
```

Open an interactive prompt for a job five minutes from now. Press Ctrl+D when finished entering commands.

```bash
echo "touch /tmp/at-test" | at now + 1 minute
```

Schedule a command from standard input.

```bash
at -f backup.sh 02:00
```

Run commands from a script at 02:00.

```bash
atq
atrm 3
```

List jobs and remove job 3.

## Practical Notes

- The `atd` service must be running for jobs to execute.
- Output may be mailed to the user if local mail is configured.
- The job runs with a snapshot of much of the current environment, but scripts should still use absolute paths for reliability.
