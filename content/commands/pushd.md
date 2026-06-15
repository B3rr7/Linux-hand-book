---
name: pushd
summary: Add a directory to the shell directory stack.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`pushd` is a shell command used to add a directory to the shell directory stack. It adds a directory to the stack and changes to it, enabling quick navigation between directories.

Used with `popd` and `dirs`, these commands let you maintain a directory stack for efficient navigation. Use `pushd` with no arguments to swap the top two directories.

## Syntax

```bash
pushd [arguments]
```

## Parameters

- `options`: Flags that change how `pushd` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
pushd --help
man pushd
```

## Practical Notes

Options can vary by distribution and package version. Use `man pushd`, `pushd --help`, or the package documentation for exact syntax.
