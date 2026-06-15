---
name: shift
summary: Shift shell positional parameters.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`shift` is a shell command used to shift shell positional parameters. It drops the first positional parameter ($1) and shifts the remaining ones down, used for iterating through script arguments.

`shift` is specified by POSIX. Optionally pass a number like `shift 2` to remove multiple parameters at once.

## Syntax

```bash
shift [arguments]
```

## Parameters

- `options`: Flags that change how `shift` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
shift --help
man shift
```

## Practical Notes

Options can vary by distribution and package version. Use `man shift`, `shift --help`, or the package documentation for exact syntax.
