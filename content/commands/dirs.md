---
name: dirs
summary: Display the directory stack.
category: Processes
tags: shell, builtin, directory, stack, pushd, popd
popular: false
---

## Additional Notes

`dirs` is a shell builtin that displays the directory stack. The directory stack is a list of directories managed by `pushd` (to add a directory) and `popd` (to remove a directory). The stack is shown as a space-separated list, with the current directory listed first.

This command is part of the shell's directory navigation features, which also include `pushd` and `popd`. It is available in bash, zsh, and most POSIX-compliant shells. The directory stack is useful for quickly switching between frequently accessed directories.

## Syntax

```bash
dirs [options]
```

## Parameters

- `options`: Flags that change how `dirs` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-l`: Show the full path of each directory (do not use `~` abbreviation for home).
- `-p`: Print each directory on its own line.
- `-v`: Print each directory on its own line with its index number.
- `-c`: Clear the directory stack.

## Examples

```bash
dirs
```

Show the current directory stack. Output: `~/projects ~/documents /tmp`

```bash
pushd /etc
dirs
```

Navigate to `/etc` and check the stack.

```bash
dirs -v
```

Show the directory stack with index numbers:
```
 0  /home/user
 1  /etc
 2  /var/log
```

```bash
dirs -c
```

Clear the directory stack.

## Practical Notes

- `dirs` is most useful when using `pushd` and `popd` heavily in scripts or interactive sessions.
- The first entry (index 0) is always the current directory.
- `pushd` without arguments swaps the top two directories and navigates to the new top.
- The directory stack is per-shell; it is not shared across sessions.
- Use `dirs -v` plus `pushd +N` to jump to any directory in the stack by index.
