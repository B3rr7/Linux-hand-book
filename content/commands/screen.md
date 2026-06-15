---
name: screen
summary: Run persistent terminal sessions that can be detached and resumed.
category: Terminal
tags: terminal, session, detach, remote, long-running
popular: true
---

## Additional Notes

`screen` is a Linux command used to run persistent terminal sessions that can be detached and resumed. It creates persistent terminal sessions that survive network disconnects and can be detached and reattached.

Press `Ctrl-a d` to detach from a session and `screen -r` to reattach. `screen` is especially useful for long-running SSH sessions.

## Syntax

```bash
screen [options] [arguments]
```

## Parameters

- `options`: Flags that change how `screen` behaves.
- `'command'`: Program to run in the new session (optional).

## Common Options

- `-S NAME`: Start a session with a recognizable name.
- `-ls`: List existing screen sessions.
- `-r NAME`: Reattach to a detached session.
- `-d -r NAME`: Detach the session elsewhere and reattach here.

## Examples

```bash
screen -S deploy
screen -ls
screen -r deploy
screen -d -r deploy
```

## Practical Notes

Inside a screen session, press `Ctrl-a` then `d` to detach without stopping the running program. This is useful for long-running jobs over SSH.
