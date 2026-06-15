---
name: atrm
summary: Remove jobs scheduled with at.
category: System
tags: schedule, at, remove, jobs
popular: false
---

## Additional Notes

`atrm` removes pending jobs created by `at` or `batch`. It uses job IDs shown by `atq`.

Use it when a delayed command is no longer needed or was scheduled incorrectly.

## Syntax

```bash
atrm job-id...
```

## Parameters

- `job-id`: Job number shown by `atq`.
- `options`: Some implementations support help or version flags.

## Common Commands

- `atq`: List pending jobs.
- `atrm JOB`: Remove one pending job.
- `atrm JOB1 JOB2`: Remove multiple jobs.

## Examples

```bash
atq
```

Find scheduled job IDs.

```bash
atrm 3
```

Remove job 3.

```bash
atrm 3 4 5
```

Remove several pending jobs.

## Practical Notes

- Removing a job does not undo commands that already started.
- Root can remove other users' jobs; normal users usually manage only their own.
- Use `atq` immediately before `atrm` to avoid deleting the wrong job.
