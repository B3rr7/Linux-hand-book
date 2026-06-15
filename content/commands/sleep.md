---
name: sleep
summary: Pause for a specified amount of time.
category: Shell
tags: delay, wait, script, time
popular: false
---

## Additional Notes

`sleep` is a shell command used to pause for a specified amount of time. It introduces a delay in script execution, commonly used for retry logic, throttling, or timed sequences.

`sleep` accepts suffixes like `s` (seconds), `m` (minutes), `h` (hours), and `d` (days). It is part of POSIX and GNU coreutils.

## Syntax

```bash
sleep [arguments]
```

## Parameters

- `options`: Flags that change how `sleep` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `s`: Seconds.
- `m`: Minutes.
- `h`: Hours.
- `d`: Days.

## Examples

```bash
sleep 5
sleep 2m
sleep 1h
```

## Practical Notes

`sleep` is commonly used in scripts and loops to wait between retries.
