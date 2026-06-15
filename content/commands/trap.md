---
name: trap
summary: Execute commands when signals or events occur.
category: Processes
tags: shell, signal, handler, cleanup, builtin
popular: true
---

## Additional Notes

`trap` is a shell builtin that registers commands to run when the shell receives specific signals or when specified events occur, such as when a command exits, a function returns, or the shell exits. It is most commonly used in scripts to clean up temporary files, reset terminal settings, or ensure critical operations complete on interruption.

The `trap` builtin can catch most POSIX signals (`SIGINT`, `SIGTERM`, `SIGHUP`, `SIGEXIT`, `SIGERR`, `SIGDEBUG`, `SIGRETURN`). `SIGKILL` and `SIGSTOP` cannot be caught. The special pseudo-signals `EXIT`, `ERR`, `RETURN`, and `DEBUG` are bash extensions that trigger on shell events rather than OS signals.

## Syntax

```bash
trap [-lp] [command] [signal_spec...]
```

## Parameters

- `command`: Shell command(s) to execute when the signal is received. An empty string `""` resets the signal to be ignored. Omitting the command removes the handler (restores default behavior).
- `signal_spec`: Signal name (e.g. `INT`, `TERM`, `EXIT`) or signal number.

## Common Options

- `-l`: List all signal names and their numbers.
- `-p`: Print the current trap handlers for all signals.

## Examples

```bash
trap 'rm -f /tmp/tmpfile' EXIT
```

Remove a temporary file when the script exits.

```bash
trap 'echo "Interrupted!"; exit 1' INT
```

Print a message and exit on Ctrl+C.

```bash
cleanup() {
    rm -f "$TMPDIR"/*
    rmdir "$TMPDIR"
}
trap cleanup EXIT
```

Use a named function for cleanup on exit.

```bash
trap '' INT
```

Ignore Ctrl+C (SIGINT) in a script.

```bash
trap -p
```

Print all current trap handlers.

```bash
trap -l
```

List all signal names.

```bash
trap 'echo "Command failed: $BASH_COMMAND"' ERR
```

Print the command that failed when any command returns non-zero.

## Practical Notes

- Always use `EXIT` instead of `0` for compatibility and clarity.
- Multiple signal specs can be listed: `trap handler INT TERM HUP`.
- Inside a trap handler, `$?` is the exit code of the command that triggered the trap (useful with `ERR`).
- Reset a trap back to the default with `trap - SIGNAL`.
- The `ERR` trap is not inherited by shell functions unless `set -o errtrace` is enabled.
- Traps are reset when a function or subshell is entered unless `inherit_errexit` or `funcext` settings change the behavior.
