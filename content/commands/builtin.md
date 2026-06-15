---
name: builtin
summary: Run a shell builtin explicitly.
category: Shell
tags: shell, builtin, bash, command
popular: false
---

## Additional Notes

`builtin` is a Bash command that runs a shell builtin directly, bypassing shell functions with the same name. It is useful inside wrapper functions.

For example, if you define a function named `cd`, you can still call the real shell builtin with `builtin cd`.

## Syntax

```bash
builtin shell-builtin [arguments...]
```

## Parameters

- `shell-builtin`: Name of a Bash builtin command.
- `arguments`: Arguments passed to that builtin.

## Examples

```bash
builtin cd /tmp
```

Run the real `cd` builtin.

```bash
cd() {
  builtin cd "$@" || return
  pwd
}
```

Wrap `cd` while still calling the original builtin.

```bash
type cd
```

Check whether a command is a builtin, function, alias, or executable.

## Practical Notes

- `builtin` is Bash-specific behavior, not a normal external program.
- Use `command` to bypass shell functions and aliases when running external commands.
- Use `enable` to enable or disable shell builtins in Bash.
