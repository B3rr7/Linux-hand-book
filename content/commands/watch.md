---
name: watch
summary: Run a command repeatedly and display the output.
category: Processes
tags: monitor, repeat, command, terminal
popular: true
---

## Additional Notes

`watch` is a process-management command used to run a command repeatedly and display the output. It runs a command repeatedly and displays its output, highlighting differences between runs.

Use `-n` to set the interval in seconds and `-d` to highlight what changed between updates. Commands with pipes or redirects should be quoted.

## Syntax

```bash
watch [options] command
```

## Parameters

- `options`: Flags that change how `watch` behaves.
- `command`: Command to rerun repeatedly.

## Common Options

- `-n N`: Run every N seconds.
- `-d`: Highlight differences between updates.
- `-t`: Hide the header.

## Examples

```bash
watch df -h
watch -n 1 "ss -tuln"
watch -d "ls -l"
```

## Practical Notes

Quote commands that contain pipes, redirects, or multiple arguments.
