---
name: alias
summary: Create shortcuts for shell commands.
category: Shell
tags: shell, shortcut, command, bash, productivity
popular: true
---

## Additional Notes

`alias` creates command shortcuts in the current shell. Aliases are useful for common options, safer defaults, and personal workflow shortcuts.

Aliases are usually shell features, so behavior depends on your shell.

## Syntax

```bash
alias
alias name='command'
```

## Parameters

- `options`: Flags that change how `alias` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Examples

```bash
alias
```

List current aliases.

```bash
alias ll='ls -lah'
```

Create a shortcut for detailed directory listing.

```bash
alias grep='grep --color=auto'
```

Add color to `grep` matches by default.

```bash
alias rm='rm -i'
```

Ask before removing files.

```bash
unalias ll
```

Remove an alias.

## Practical Notes

- Put permanent aliases in `~/.bashrc`, `~/.zshrc`, or your shell config.
- Use single quotes around alias commands to avoid early shell expansion.
- Aliases are best for interactive shells, not scripts.
- Use shell functions when an alias becomes complex.
