---
name: time
summary: Measure command execution time.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`time` is a shell command used to measure command execution time. It measures how long a command takes to execute, reporting real, user, and system CPU time.

The Bash builtin `time` and the standalone `/usr/bin/time` differ in output format. Use `/usr/bin/time -v` for detailed resource usage statistics.

## Syntax

```bash
time [arguments]
```

## Parameters

- `options`: Flags that change how `time` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
time --help
man time
```

## Practical Notes

Options can vary by distribution and package version. Use `man time`, `time --help`, or the package documentation for exact syntax.
