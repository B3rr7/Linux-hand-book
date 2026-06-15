---
name: htop
summary: Display an interactive process viewer.
category: Processes
tags: process, monitor, signal
popular: true
---

## Additional Notes

`htop` is an interactive process viewer. It shows CPU, memory, swap, load, process state, users, command lines, and sortable process columns in a terminal UI.

Use `htop` when `top` is too cramped or when you want to search, sort, inspect process trees, change priority, or send signals interactively.

## Syntax

```bash
htop [options]
```

## Parameters

- `options`: Startup filters and display settings.
- `pid`: Optional process ID filter when supported by your version.
- `user`: Optional user filter when supported by your version.

## Common Options

- `-u USER`, `--user=USER`: Show processes for one user.
- `-p PID`, `--pid=PID`: Show only selected process IDs.
- `-d TENTHS`, `--delay=TENTHS`: Set refresh delay in tenths of a second.
- `-s COLUMN`, `--sort-key=COLUMN`: Sort by a column at startup.
- `-t`, `--tree`: Show process tree view.
- `--readonly`: Disable actions that change process state when supported.

## Examples

```bash
htop
```

Open the interactive process viewer.

```bash
htop -u www-data
```

Show processes owned by `www-data`.

```bash
htop -p 1234
```

Focus on a specific process ID.

```bash
htop -t
```

Start in tree mode.

## Interactive Keys

- `F3`: Search processes.
- `F4`: Filter visible processes.
- `F5`: Toggle tree view.
- `F6`: Choose sort column.
- `F9`: Send a signal to the selected process.
- `F10`: Quit.

## Practical Notes

- Installing `htop` may require a package manager because it is not always installed by default.
- Use signal actions carefully on production systems.
- For scripted process output, use `ps`, `pgrep`, or `top -b` instead of `htop`.
