---
name: which
summary: Show the path of a command found in PATH.
category: Shell
tags: path, executable, command, shell
popular: false
---

## Additional Notes

`which` searches the directories in `PATH` and prints the executable file that would be found for a command name. It is useful for quick checks like finding whether `python`, `node`, or `ssh` is installed and where it lives.

`which` usually only answers executable path lookup. Shell aliases, functions, keywords, and builtins may need `type`, `command -v`, or `declare -f` for a complete shell-aware answer.

## Syntax

```bash
which [options] command...
```

## Parameters

- `command`: Command name to search for in `PATH`.
- `options`: Output behavior flags.

## Common Options

- `-a`: Show all matching executables in `PATH`, not just the first one.
- `--help`: Show help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
which python
```

Show the first `python` executable found in `PATH`.

```bash
which -a node
```

Show every `node` executable found in `PATH` order.

```bash
which ssh
```

Find the SSH client executable.

```bash
command -v cd
```

Use shell-aware lookup for a builtin like `cd`.

## Practical Notes

- `PATH` order matters. The first matching executable wins.
- Use `type COMMAND` when aliases, shell functions, builtins, or keywords matter.
- In portable scripts, `command -v COMMAND` is often preferable to `which COMMAND`.
