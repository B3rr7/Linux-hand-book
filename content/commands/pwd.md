---
name: pwd
summary: Print the current working directory.
category: Shell
tags: directory, path, navigation, shell
popular: true
---

## Additional Notes

`pwd` prints the directory your shell is currently working in. The name means print working directory.

It is simple but important. Before deleting, moving, copying, or editing files, `pwd` helps confirm where you are.

## Syntax

```bash
pwd [options]
```

## Parameters

- `options`: Flags that change how `pwd` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `-L`: Print the logical path, using symbolic links as the shell sees them.
- `-P`: Print the physical path, resolving symbolic links.

## Examples

```bash
pwd
```

Show the current directory.

```bash
cd /var/log
pwd
```

Move somewhere, then confirm the new location.

```bash
pwd -P
```

Show the physical path with symlinks resolved.

## Practical Notes

- Use `pwd` before dangerous commands like `rm`, `chmod -R`, or `chown -R`.
- The current directory affects relative paths.
- `pwd` is often a shell builtin, but `/bin/pwd` may also exist.
- In scripts, `pwd` helps build absolute paths from relative work.
