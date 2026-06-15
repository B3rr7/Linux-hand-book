---
name: popd
summary: Remove a directory from the shell directory stack.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`popd` is a shell command used to remove a directory from the shell directory stack. It removes the top entry from the directory stack, navigating back to the previous directory.

Used with `pushd` and `dirs`, these commands let you navigate multiple directories without retyping paths. `popd` works in both interactive Bash sessions and scripts.

## Syntax

```bash
popd [arguments]
```

## Parameters

- `options`: Flags that change how `popd` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
popd --help
man popd
```

## Practical Notes

Options can vary by distribution and package version. Use `man popd`, `popd --help`, or the package documentation for exact syntax.
