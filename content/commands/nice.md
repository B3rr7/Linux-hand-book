---
name: nice
summary: Run a command with adjusted scheduling priority.
category: Processes
tags: process, priority, cpu, scheduling
popular: false
---

## Additional Notes

`nice` is a process-management command used to run a command with adjusted scheduling priority. It allows users to influence CPU scheduling by setting a niceness value.

Nice values range from -20 (highest priority) to 19 (lowest priority). Higher nice values mean lower CPU priority. Only root can set negative nice values to increase priority.

## Syntax

```bash
nice [options] command [arguments ...]
```

## Parameters

- `options`: Flags that change how `nice` behaves.
- `command`: Command to run with adjusted niceness.

## Common Options

- `-n N`: Set niceness value.

## Examples

```bash
nice -n 10 backup.sh
sudo nice -n -5 important-job
```

## Practical Notes

Higher nice values mean lower CPU priority. Negative values usually require administrator privileges.
