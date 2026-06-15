---
name: batch
summary: Run commands later when system load permits.
category: System
tags: schedule, load, at, jobs
popular: false
---

## Additional Notes

`batch` schedules commands to run when system load drops below a configured threshold. It is related to `at`, but instead of a specific time, it waits for a suitable load condition.

Use it for non-urgent background work on systems where load should be respected.

## Syntax

```bash
batch
batch [options]
```

## Parameters

- `command`: Commands entered at the prompt or piped through standard input.
- `options`: Queue and file options depending on implementation.

## Common Options

- `-f FILE`: Read commands from FILE on many systems.
- `-q QUEUE`: Use a specific queue.
- `-m`: Send mail when done if mail is configured.

## Examples

```bash
batch
```

Open a prompt for commands. Press Ctrl+D when finished.

```bash
echo "updatedb" | batch
```

Schedule `updatedb` for later when load allows.

```bash
batch -f long-report.sh
```

Queue commands from a script.

```bash
atq
```

List pending `at` and `batch` jobs.

## Practical Notes

- The `atd` service must be running.
- Load threshold behavior depends on system configuration.
- Use `cron` or systemd timers for recurring jobs.
