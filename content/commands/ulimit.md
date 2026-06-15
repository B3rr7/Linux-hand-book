---
name: ulimit
summary: Show or set shell resource limits.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`ulimit` is a shell command used to show or set shell resource limits. It controls the resources available to the shell and its child processes, such as open file limits and stack size.

Use `ulimit -n` to view or set the maximum number of open file descriptors, which is commonly increased for database servers and web servers.

## Syntax

```bash
ulimit [arguments]
```

## Parameters

- `options`: Flags that change how `ulimit` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
ulimit --help
man ulimit
```

## Practical Notes

Options can vary by distribution and package version. Use `man ulimit`, `ulimit --help`, or the package documentation for exact syntax.
