---
name: unalias
summary: Remove shell aliases.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`unalias` is a shell command used to remove shell aliases. It removes aliases defined with `alias`, which is useful for restoring default command behavior.

`unalias -a` removes all aliases. This is useful in non-interactive scripts where aliases might cause unexpected behavior.

## Syntax

```bash
unalias [arguments]
```

## Parameters

- `options`: Flags that change how `unalias` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
unalias --help
man unalias
```

## Practical Notes

Options can vary by distribution and package version. Use `man unalias`, `unalias --help`, or the package documentation for exact syntax.
