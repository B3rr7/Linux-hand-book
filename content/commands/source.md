---
name: source
summary: Run shell commands from a file in the current shell.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`source` is a shell command used to run shell commands from a file in the current shell. It reads and executes commands from a file in the current shell environment, not in a subshell.

`source` is a Bash builtin; its POSIX equivalent is `.` (dot). Use it to reload configuration files like `~/.bashrc` or to import script libraries.

## Syntax

```bash
source [arguments]
```

## Parameters

- `options`: Flags that change how `source` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
source --help
man source
```

## Practical Notes

Options can vary by distribution and package version. Use `man source`, `source --help`, or the package documentation for exact syntax.
