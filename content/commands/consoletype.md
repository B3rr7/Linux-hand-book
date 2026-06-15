---
name: consoletype
summary: Print the type of console connected to standard input.
category: System
tags: console, terminal, system, tty
popular: false
---

## Additional Notes

`consoletype` reports what kind of console is attached, such as a virtual console, serial console, or pseudo-terminal depending on system support.

It is mostly useful in scripts that behave differently on local consoles versus remote or pseudo-terminal sessions.

## Syntax

```bash
consoletype
```

## Parameters

- No arguments are normally needed.
- Standard input: The terminal or console being inspected.

## Examples

```bash
consoletype
```

Print the current console type.

```bash
tty
```

Show the terminal device path.

```bash
[ "$(consoletype 2>/dev/null)" = "pty" ] && echo remote-or-pseudo
```

Use it in a conditional script.

## Practical Notes

- This command is not available on every distribution.
- Use `tty`, `who`, or environment variables such as `SSH_TTY` for related checks.
- Scripts should handle missing `consoletype` gracefully.
