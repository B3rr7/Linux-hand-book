---
name: times
summary: Show shell and child process times.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`times` is a shell command used to show shell and child process times. It displays accumulated process times for the shell and its child processes.

`times` is a Bash builtin that reports user and system CPU time. It is useful for profiling shell script performance.

## Syntax

```bash
times [arguments]
```

## Parameters

- `options`: Flags that change how `times` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
times --help
man times
```

## Practical Notes

Options can vary by distribution and package version. Use `man times`, `times --help`, or the package documentation for exact syntax.
