---
name: exit
summary: Exit the current shell or script.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`exit` is a shell command used to exit the current shell or script. It terminates the current shell or script with a given exit status code. A status of 0 conventionally means success; any non-zero value indicates an error.

## Syntax

```bash
exit [arguments]
```

## Parameters

- `options`: Flags that change how `exit` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
exit --help
man exit
```

## Practical Notes

Options can vary by distribution and package version. Use `man exit`, `exit --help`, or the package documentation for exact syntax.
