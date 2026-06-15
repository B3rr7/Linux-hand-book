---
name: false
summary: Return an unsuccessful exit status.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`false` is a shell command used to return an unsuccessful exit status. It always exits with status 1 and produces no output. It is frequently used in shell scripts as a no-op command that signals failure, or in while loops to create infinite loops that must be broken explicitly.

## Syntax

```bash
false [arguments]
```

## Parameters

- `options`: Flags that change how `false` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
false --help
man false
```

## Practical Notes

Options can vary by distribution and package version. Use `man false`, `false --help`, or the package documentation for exact syntax.
