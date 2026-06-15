---
name: fg
summary: Bring a background or suspended job to the foreground.
category: Processes
tags: shell, jobs, foreground, process
popular: false
---

## Additional Notes

`fg` is a process-management command used to bring a background or suspended job to the foreground. It resumes a background or suspended job and brings it to the foreground of the terminal. Use jobs to list available jobs before using fg.

## Syntax

```bash
fg [job]
```

## Parameters

- `job`: Shell job ID such as `%1` when job control is involved.

## Common Options

- `%N`: Bring a specific job number to the foreground.

## Examples

```bash
fg
fg %2
jobs
```

## Practical Notes

Use `jobs` first when more than one job is active in the current shell.
