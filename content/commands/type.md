---
name: type
summary: Show how the shell resolves a command name.
category: Shell
tags: shell, builtin, alias, path
popular: false
---

## Additional Notes

`type` is a shell command used to show how the shell resolves a command name. It tells you whether a command is a builtin, alias, function, or external executable.

`type` is a Bash builtin. Use `type -a` to show all possible resolutions and `type -t` to get just the category.

## Syntax

```bash
type [arguments]
```

## Parameters

- `options`: Flags that change how `type` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `-a`: Show all possible resolutions.
- `-t`: Show only the resolution type.
- `-p`: Show the path if the command is an executable.

## Examples

```bash
type cd
type ls
type -a python
```

## Practical Notes

`type` can tell you whether a command is an alias, shell keyword, builtin, function, or file.
