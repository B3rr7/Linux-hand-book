---
name: kill
summary: Send a signal to a process.
category: Processes
tags: process, signal, stop, terminate, pid
popular: true
---

## Additional Notes

`kill` sends signals to processes. Despite the name, it does not only kill processes. It can request termination, force termination, reload configuration, pause, continue, or send other signals.

The most common workflow is to find a process ID with `ps`, `pgrep`, or `top`, then send a signal with `kill`.

## Syntax

```bash
kill [signal] PID...
```

## Parameters

- `PID`: Process ID to signal.
- `signal`: Signal name or number. If omitted, `kill` sends `TERM`.

## Common Signals

- `TERM` or `15`: Ask a process to terminate gracefully. This is the default.
- `KILL` or `9`: Force the kernel to terminate the process. The process cannot clean up.
- `HUP` or `1`: Hangup. Many daemons use this to reload configuration.
- `INT` or `2`: Interrupt, similar to pressing `Ctrl+C`.
- `STOP`: Pause a process.
- `CONT`: Continue a stopped process.

## Examples

```bash
kill 1234
```

Ask process `1234` to terminate.

```bash
kill -TERM 1234
```

Same as the default: graceful termination request.

```bash
kill -9 1234
```

Force-kill a process.

```bash
kill -HUP 1234
```

Send hangup, often used to reload daemon configuration.

```bash
kill -STOP 1234
kill -CONT 1234
```

Pause and continue a process.

```bash
kill -l
```

List available signals.

## Practical Notes

- Try normal `kill PID` before `kill -9 PID`.
- `kill -9` prevents cleanup, so temporary files, locks, or child processes may remain.
- You can usually signal only your own processes unless you use `sudo`.
- Use `pkill` or `killall` when you want to signal by process name.
- Always confirm the PID before signaling an important process.
