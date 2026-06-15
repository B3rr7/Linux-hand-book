---
name: resize
summary: Set terminal window size for remote sessions.
category: System
tags: terminal, console, xterm, ssh, window size
popular: false
---

## Additional Notes

`resize` queries and sets the terminal window size. It is primarily used in remote sessions (SSH, telnet, serial) where the local terminal emulator's window size may not be communicated to the remote system automatically.

When run, `resize` outputs shell commands to set the `COLUMNS` and `LINES` environment variables to match the actual terminal dimensions. It can also evaluate these commands directly. This ensures that applications like `less`, `vim`, and `top` properly format their output to fit the terminal window.

## Syntax

```bash
resize [options]
```

## Parameters

- `options`: Flags that change how `resize` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-c`: Output C shell commands for setting environment variables.
- `-s`: Output Bourne shell (sh/bash) commands for setting environment variables.
- `-u`: Output Bourne shell commands (same as `-s`).
- `-x`: Output commands suitable for `xterm` or other terminal emulators.
- `-h`, `--help`: Show help and exit.
- `-v`, `--version`: Show version information.
- `-q`, `--quiet`: Suppress informational messages.
- `-w`, `--print-window-size`: Print window size as `rows columns` without setting variables.

## Examples

```bash
resize
```

Query the terminal size and output shell commands to set COLUMNS and LINES.

```bash
eval $(resize)
```

Evaluate the resize commands for the current shell (bash/sh).

```bash
resize -s
```

Output Bourne shell-style commands (same as default).

```bash
resize -c
```

Output C shell-style commands.

```bash
resize -w
```

Print the current terminal dimensions as `rows columns` without generating shell commands.

```bash
eval $(resize -u)
```

Evaluate resize commands for a Bourne-compatible shell.

## Practical Notes

- Run `eval $(resize)` at the command line or add it to your `.bashrc` to automatically adjust terminal size after SSH connections.
- Some terminal emulators (like `ssh` with `xterm` support) automatically set COLUMNS and LINES. `resize` is useful when they do not.
- On modern systems, `resize` is usually provided by the `xterm` package.
- The `-w` option is useful for scripts that need to know the terminal dimensions without modifying the environment.
- If you resize your terminal window after connecting, run `resize` again to update the remote system.
- Alternatives: use `stty size` to get rows and columns as two numbers.
