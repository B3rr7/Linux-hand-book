---
name: skill
summary: Send signals to processes based on name or criteria.
category: Processes
tags: process, signal, kill, name
popular: false
---

## Additional Notes

`skill` sends signals to processes matching a given criteria, such as process name, terminal, user, or process ID. It is an older utility that predates `pgrep` and `pkill`, and is now largely superseded by those tools. The name comes from "skill" as in "send a signal to kill," not as in proficiency.

`skill` can match processes by command name, terminal device, user ID, or process ID. It is useful for bulk operations like terminating all processes belonging to a specific user or started from a specific terminal.

## Syntax

```bash
skill [signal] [options] process_criteria
```

## Parameters

- `signal`: The signal to send (by name like `TERM`, `KILL`, `HUP` or by number like `9`, `15`).
- `process_criteria`: Criteria to match processes (name, terminal, user, etc.).

## Common Options

- `-l`, `--list`: List all signal names.
- `-i`, `--interactive`: Ask for confirmation before sending each signal.
- `-w`, `--warnings`: Show warning messages.
- `-n`, `--no-warnings`: Suppress warning messages.
- `-v`, `--verbose`: Show verbose output.
- `-t term`: Match processes attached to a specific terminal.
- `-u user`: Match processes owned by a specific user.
- `-p pid`: Match a specific process ID.
- `-c command`: Match processes by command name (default matching mode).

## Examples

```bash
skill -KILL -u bob
```

Kill all processes owned by user `bob`.

```bash
skill -TERM -t pts/0
```

Send SIGTERM to all processes attached to terminal `pts/0`.

```bash
skill -HUP nginx
```

Send SIGHUP to all processes named `nginx`.

```bash
skill -9 myprogram
```

Force-kill all processes named `myprogram`.

```bash
skill -l
```

List all available signal names.

## Practical Notes

- `skill` is considered obsolete. Use `pkill` or `killall` instead.
- The command matches the process name as reported by `ps`, not the full command line.
- Without a signal prefix (like `-TERM` or `-9`), the default signal is SIGTERM (15).
- Be careful with `-KILL (-9)` as processes cannot clean up resources when killed this way.
- Some distributions no longer include `skill` by default; it is part of the `util-linux` package.
