---
name: read
summary: Read input into shell variables.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`read` is a shell command used to read input into shell variables. It reads a line of input and splits it into variables, making it fundamental for interactive scripts and parsing.

Use `-r` (raw mode) to prevent backslash escapes from being interpreted. `read` splits input by `$IFS` and is specified by POSIX.

## Syntax

```bash
read [arguments]
```

## Parameters

- `options`: Flags that change how `read` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
read --help
man read
```

## Practical Notes

Options can vary by distribution and package version. Use `man read`, `read --help`, or the package documentation for exact syntax.
