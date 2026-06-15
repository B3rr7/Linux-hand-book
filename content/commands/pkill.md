---
name: pkill
summary: Send signals to processes selected by name or attributes.
category: Processes
tags: process, signal, name, stop
popular: false
---

## Additional Notes

`pkill` sends a signal to processes selected by name or attributes. It is the action-oriented partner to `pgrep`: first find matching processes, then signal them.

By default, `pkill` sends `SIGTERM`, which asks processes to exit cleanly. Stronger signals such as `SIGKILL` should be a last resort because they do not allow cleanup.

## Syntax

```bash
pkill [options] pattern
pkill -SIGNAL [options] pattern
```

## Parameters

- `pattern`: Process name pattern to match.
- `SIGNAL`: Signal to send, such as `TERM`, `HUP`, or `KILL`.
- `options`: Matching controls such as user, full command line, exact name, or parent process.

## Common Options

- `-f`: Match against the full command line.
- `-u USER`: Match processes whose effective user is USER.
- `-U USER`: Match processes whose real user is USER.
- `-x`: Match the exact process name.
- `-n`: Signal only the newest matching process.
- `-o`: Signal only the oldest matching process.
- `-P PID`: Match children of a parent process.
- `-TERM`: Send SIGTERM. This is the default.
- `-HUP`: Send SIGHUP, often used to reload daemons.
- `-KILL`: Send SIGKILL, forcing termination.

## Examples

```bash
pgrep -af nginx
sudo pkill nginx
```

Preview matching processes, then ask them to stop.

```bash
pkill -HUP nginx
```

Send a hangup signal, commonly used for reload-style behavior.

```bash
pkill -f "python worker.py"
```

Match against the full command line.

```bash
pkill -u deploy ssh
```

Signal matching processes owned by `deploy`.

## Practical Notes

- Always preview broad patterns with `pgrep -a` or `pgrep -af`.
- Avoid `pkill -KILL` until graceful shutdown fails.
- Be careful with `-f`; it can match shell wrappers, scripts, or the command you are using to search.
