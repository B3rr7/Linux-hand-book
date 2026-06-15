---
name: atq
summary: List queued jobs scheduled with at.
category: System
tags: schedule, at, queue, jobs
popular: false
---

## Additional Notes

`atq` lists pending one-time jobs scheduled with `at` or `batch`. It shows job IDs, run times, queues, and owners.

Use it before removing jobs with `atrm`, or when checking whether a delayed command is still waiting to run.

## Syntax

```bash
atq
atq -q queue
```

## Parameters

- `queue`: Optional queue letter to filter jobs.
- `options`: Queue filtering and help/version flags depending on implementation.

## Common Options

- `-q QUEUE`: Show jobs from one queue.
- `-V`: Show version information on some systems.

## Examples

```bash
atq
```

List all pending jobs for the current user.

```bash
atq -q a
```

List jobs in queue `a`.

```bash
atrm 4
```

Remove job 4 after finding it with `atq`.

## Practical Notes

- Normal users usually see their own jobs; root can see more.
- If no jobs are pending, `atq` may print nothing.
- The `atd` service must be running for queued jobs to execute.
