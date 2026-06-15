---
name: mesg
summary: Control whether other users can write to your terminal.
category: Administration
tags: terminal, write, message, permission, talk
popular: false
---

## Additional Notes

`mesg` controls write access to the current terminal. When enabled, other users can send messages to your terminal using the `write` command or similar tools. When disabled, messages are rejected.

It reads or sets the write permission on the terminal device file. The setting is per-terminal, not per-user. It is commonly used to prevent interruptions during focused work or when running full-screen terminal applications.

## Syntax

```bash
mesg [option] [y|n]
```

## Parameters

- `y`: Allow other users to write to your terminal.
- `n`: Deny write access to your terminal.
- No argument: Display the current state.

## Common Options

- `-v`, `--verbose`: Show the current state with a descriptive message.
- `-h`, `--help`: Display help and exit.

## Examples

```bash
mesg
```

Show the current terminal write status: `is y` or `is n`.

```bash
mesg n
```

Disable write access to the terminal.

```bash
mesg y
```

Re-enable write access.

```bash
mesg -v
```

Display the current state with `write access is enabled/disabled`.

## Practical Notes

- The `wall` command can still send broadcasts to all terminals regardless of `mesg n`.
- Root can always write to any terminal regardless of its `mesg` setting.
- Some terminal multiplexers (tmux, screen) manage terminal permissions independently.
- Default settings vary by distribution; many set `mesg n` on SSH sessions by default.
- The `$HOME/.profile` or `$HOME/.bashrc` is a common place to set `mesg` preferences.

