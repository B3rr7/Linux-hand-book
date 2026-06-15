---
name: killall
summary: Send a signal to processes by name.
category: Processes
tags: process, signal, name, stop
popular: false
---

## Additional Notes

`killall` is a process-management command used to send a signal to processes by name. It terminates all processes matching a given name, rather than targeting individual PIDs.

On Linux, `killall` matches process names exactly by default. On some other systems (like Solaris), `killall` kills all processes, so check behavior before relying on it cross-platform.

## Syntax

```bash
killall [options] process-name ...
```

## Parameters

- `options`: Flags that change how `killall` behaves.
- `process-name`: Name of one or more processes to signal.

## Common Options

- `-SIGNAL`: Send a specific signal.
- `-i`: Ask before killing.
- `-u USER`: Match only a user's processes.
- `-v`: Report whether signals were sent.

## Examples

```bash
killall firefox
killall -TERM nginx
killall -i python
```

## Practical Notes

Process-name matching can affect more than one process. Use `pgrep -a NAME` first when unsure.
