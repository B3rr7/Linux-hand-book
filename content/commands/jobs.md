---
name: jobs
summary: List jobs running in the current shell.
category: Processes
tags: shell, jobs, background, process
popular: false
---

## Additional Notes

`jobs` is a process-management command used to list jobs running in the current shell. It lists background and suspended jobs with their job numbers and states.

`jobs` is a shell builtin, not a standalone executable. Its behavior is defined by the shell (bash, zsh, etc.) and may vary slightly between shells.

## Syntax

```bash
jobs [options] [job ...]
```

## Parameters

- `options`: Flags that change how `jobs` behaves.
- `job`: Shell job ID such as `%1` when job control is involved.

## Common Options

- `-l`: Show process IDs.
- `-p`: Show only process IDs.
- `%N`: Refer to job number N in shell job commands.

## Examples

```bash
jobs
jobs -l
fg %1
bg %2
```

## Practical Notes

`jobs`, `fg`, and `bg` are shell job-control tools. They only know about jobs started from the current shell.
