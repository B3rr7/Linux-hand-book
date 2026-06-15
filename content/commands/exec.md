---
name: exec
summary: Replace the shell with another command.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`exec` is a shell command used to replace the shell with another command. It replaces the current shell process with a new command without creating a child process. This is useful in scripts to avoid leaving a shell process running after the command completes.

## Syntax

```bash
exec [arguments]
```

## Parameters

- `options`: Flags that change how `exec` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
exec --help
man exec
```

## Practical Notes

Options can vary by distribution and package version. Use `man exec`, `exec --help`, or the package documentation for exact syntax.
