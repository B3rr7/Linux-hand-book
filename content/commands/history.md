---
name: history
summary: Show and reuse shell command history.
category: Shell
tags: shell, history, commands, bash, terminal
popular: true
---

## Additional Notes

`history` shows commands previously entered in the shell. It helps you repeat commands, remember workflows, and search what you did earlier.

History behavior depends on the shell and its configuration.

## Syntax

```bash
history [number]
```

## Parameters

- `options`: Flags that change how `history` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Usage

- `history`: Show command history.
- `history 20`: Show recent 20 commands.
- `!123`: Run command number 123 in many shells.
- `!!`: Run the previous command in many shells.
- `Ctrl+R`: Reverse-search history interactively in many shells.

## Examples

```bash
history
```

Show saved command history.

```bash
history 30
```

Show the last 30 entries.

```bash
history | grep ssh
```

Search previous SSH commands.

```bash
!!
```

Repeat the previous command.

```bash
sudo !!
```

Repeat the previous command with `sudo`.

## Practical Notes

- Be careful with passwords, tokens, and secrets in commands; they may be saved in history.
- Shell variables such as `HISTSIZE` and `HISTFILE` control history behavior in Bash.
- Use `history -c` carefully; it clears current shell history in Bash.
- For reproducible work, save important commands in notes or scripts instead of relying only on history.
