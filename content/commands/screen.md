---
name: screen
summary: Run persistent terminal sessions that can be detached and resumed.
category: Terminal
tags: terminal, session, detach, remote, long-running, multiplexer
popular: true
---

## Additional Notes

`screen` runs persistent terminal sessions that survive network disconnects and can be detached and reattached. It multiplexes several virtual terminals inside one physical or SSH connection, so a long-running job keeps going even after you log out.

Each session holds one or more windows. Inside a session, keystrokes are sent to the program unless they begin with the command prefix `Ctrl-a`, which `screen` intercepts.

## Syntax

```bash
screen [options] [command]
```

## Parameters

- `options`: Flags that change how `screen` behaves.
- `command`: Program to run inside the new session (optional).

## Common Options

- `-S NAME`: Start a session with a recognizable name.
- `-ls` / `-list`: List existing screen sessions.
- `-r [NAME]`: Reattach to a detached session.
- `-R [NAME]`: Reattach if possible, otherwise create a session.
- `-d -r NAME`: Detach the session from elsewhere and reattach here.
- `-X NAME`: Send a command to a running session.
- `-x NAME`: Attach to a session already attached elsewhere (shared screen).

## In-Session Keys

All begin with `Ctrl-a` (`C-a`):

- `C-a d`: Detach from the session.
- `C-a c`: Create a new window.
- `C-a n` / `C-a p`: Next / previous window.
- `C-a 0`–`9`: Switch to window by number.
- `C-a "` : List windows.
- `C-a A`: Rename the current window.
- `C-a k`: Kill the current window.
- `C-a S` / `C-a Q`: Split / remove a horizontal region.
- `C-a ?`: Show the key binding help.

## Examples

```bash
screen -S deploy
```

Start a named session and run a shell inside it.

```bash
screen -ls
```

List detached and attached sessions with their PIDs.

```bash
screen -r deploy
```

Reattach to the session named `deploy`.

```bash
screen -d -r deploy
```

Detach `deploy` from any other terminal and attach here.

```bash
screen -S backup bash long-backup.sh
```

Run a specific script inside a named session.

```bash
screen -X -S deploy quit
```

Send a quit command to a running session from outside it.

```bash
screen -x deploy
```

Share a session with another user who is already attached.

## Practical Notes

- Press `C-a d` to detach; the program keeps running in the background.
- Use `-S NAME` so `screen -r` is unambiguous when several sessions exist.
- `screen` sessions survive SSH drops, which makes them ideal for long jobs.
- For richer split-screen and tiling, `tmux` is a common modern alternative.
- Type `C-a ?` inside a session to see all key bindings.
