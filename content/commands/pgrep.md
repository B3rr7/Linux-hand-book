---
name: pgrep
summary: Find process IDs by name or attributes.
category: Processes
tags: process, pid, search, name
popular: false
---

## Additional Notes

`pgrep` searches the running process table and prints process IDs that match a name, full command line, user, parent process, terminal, or other attributes. It is cleaner than combining `ps` and `grep` by hand.

Use `pgrep` before sending signals with `pkill` or `kill`. It helps verify exactly which processes a pattern matches.

## Syntax

```bash
pgrep [options] pattern
```

## Parameters

- `pattern`: Process name pattern to match. By default, this matches the process name, not always the full command line.
- `options`: Matching and output controls.
- `user`: User name or UID used with `-u` or `-U`.

## Common Options

- `-a`: Show PID and command line.
- `-f`: Match against the full command line.
- `-l`: Show PID and process name.
- `-u USER`: Match processes whose effective user is USER.
- `-U USER`: Match processes whose real user is USER.
- `-x`: Match the exact process name.
- `-n`: Show only the newest matching process.
- `-o`: Show only the oldest matching process.
- `-P PID`: Match children of a parent process.

## Examples

```bash
pgrep ssh
```

Print PIDs for processes named like `ssh`.

```bash
pgrep -af nginx
```

Match the full command line and show commands.

```bash
pgrep -u deploy -a python
```

Find Python processes owned by `deploy`.

```bash
pgrep -x systemd
```

Match the exact process name.

## Practical Notes

- Use `pgrep -af PATTERN` when testing patterns for `pkill -f`.
- Process names can be shorter than full command lines; use `-f` when arguments matter.
- Scripts should handle the case where `pgrep` returns no matches.
