---
name: clear
summary: Clear the terminal screen.
category: Shell
tags: terminal, screen, shell, display
popular: true
---

## Additional Notes

`clear` clears the visible terminal screen by sending terminal control sequences. It makes the display easier to read but does not delete command history.

Use it during interactive work when output has become cluttered.

## Syntax

```bash
clear
```

## Parameters

- No arguments are normally needed.
- `options`: Some versions support help/version flags.

## Common Options

- `-x`: Do not clear scrollback on some implementations.
- `-T TERM`: Use a specific terminal type on some implementations.
- `--help`: Show help.

## Examples

```bash
clear
```

Clear the terminal display.

```bash
printf '\033c'
```

Reset-style escape sequence often used when a terminal is badly disturbed.

```bash
history | tail
```

Show that command history still exists after clearing.

## Practical Notes

- Ctrl+L clears the screen in many shells using Readline.
- `clear` does not remove files, logs, or shell history.
- If the terminal is corrupted by binary output, try `reset`.
