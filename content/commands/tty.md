---
name: tty
summary: Print the terminal device filename.
category: System
tags: terminal, tty, device, filename
popular: false
---

## Additional Notes

`tty` prints the filename of the terminal connected to standard input. The name comes from the historical Teletypewriter. Output is typically something like `/dev/pts/3` for a pseudo-terminal, `/dev/tty1` for a physical console, or `not a tty` if standard input is not a terminal.

The exit status reflects whether the input is a terminal: 0 if it is, 1 if it is not. This makes it useful in scripts for detecting whether output is being piped or redirected.

## Syntax

```bash
tty [options]
```

## Parameters

- `options`: Flags that change how `tty` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-s`, `--silent`, `--quiet`: Do not print anything; only set the exit status.

## Examples

```bash
tty
```

Print the terminal device path, e.g. `/dev/pts/2`.

```bash
tty -s && echo "Terminal" || echo "Not a terminal"
```

Check whether input is a terminal without printing the path.

```bash
# In a script
if tty -s; then
    echo "Input is from a terminal"
else
    echo "Input is from a pipe or file"
fi
```

## Practical Notes

- Use `tty -s` in scripts to determine if output should use colors or interactive prompts.
- The `-s` flag is useful for silent checks; the exit code tells you everything.
- Piped commands return `not a tty`: `echo "test" | tty`.
- SSH sessions allocate a pseudo-terminal: the path will be e.g. `/dev/pts/0`.
