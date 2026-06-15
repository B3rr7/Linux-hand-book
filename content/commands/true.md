---
name: true
summary: Return a successful exit status.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`true` is a shell command used to return a successful exit status. It always exits with a zero (success) status, useful as a no-op or for infinite loops.

`true` is specified by POSIX. It is commonly used in `while true` loops or as a placeholder command during script development.

## Syntax

```bash
true [arguments]
```

## Parameters

- `options`: Flags that change how `true` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
true --help
man true
```

## Practical Notes

Options can vary by distribution and package version. Use `man true`, `true --help`, or the package documentation for exact syntax.
