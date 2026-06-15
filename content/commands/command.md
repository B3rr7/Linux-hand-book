---
name: command
summary: Run a command while bypassing shell functions.
category: Shell
tags: shell, builtin, path, script
popular: false
---

## Additional Notes

`command` is a shell builtin that runs a command while bypassing shell functions. It can also check how a command would be resolved.

Use it in scripts and wrapper functions when you need the real command lookup instead of a function with the same name.

## Syntax

```bash
command [options] name [arguments...]
```

## Parameters

- `name`: Command name to run or inspect.
- `arguments`: Arguments passed to the command.
- `options`: Lookup and verbosity flags.

## Common Options

- `-v NAME`: Print how NAME would be resolved.
- `-V NAME`: Print a more verbose description.
- `-p`: Use a default PATH guaranteed to find standard utilities on some shells.

## Examples

```bash
command -v python3
```

Check whether `python3` is available.

```bash
command -V cd
```

Show whether `cd` is a builtin, function, alias, or executable.

```bash
ls() { command ls --color=auto "$@"; }
```

Define a wrapper while still calling the real `ls`.

## Practical Notes

- `command` bypasses shell functions but not necessarily shell builtins.
- Use `builtin` when you specifically need a shell builtin.
- `command -v` is often better than `which` in portable shell scripts.
