---
name: tmux
summary: Terminal multiplexer for managing multiple sessions.
category: Processes
tags: terminal, multiplexer, session, split, remote
popular: true
---

## Additional Notes

`tmux` is a terminal multiplexer that lets you run multiple terminal sessions within a single window. It allows you to split the terminal into panes, create multiple windows, detach and reattach sessions, and share sessions with other users. It is similar to GNU Screen but with a cleaner configuration model and modern features.

Each tmux session can have multiple windows, and each window can be split into multiple panes. Sessions persist even when the terminal is closed, so you can detach from a session at work and reattach from home. Tmux is controlled entirely via keyboard shortcuts, using a prefix key (default `Ctrl+b`) followed by a command key.

## Syntax

```bash
tmux [command] [options]
```

## Key Sessions Commands

- `new` or `new-session`: Create a new session.
- `ls` or `list-sessions`: List existing sessions.
- `attach` or `attach-session`: Attach to an existing session.
- `detach` or `detach-session`: Detach the current session.
- `kill-session`: Terminate a session.
- `switch`: Switch to another session.

## Parameters

- `options`: Flags that change how `tmux` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-S socket-path`: Specify an alternative socket path for the tmux server.
- `-L socket-name`: Use an alternative socket name (defaults to `default`).
- `-f config-file`: Load an alternative configuration file.
- `-u`: Operate in UTF-8 mode.

## Default Key Bindings (prefix `Ctrl+b`)

- `%`: Split pane vertically.
- `"`: Split pane horizontally.
- `Arrow keys`: Switch to pane in that direction.
- `c`: Create a new window.
- `n` / `p`: Next / previous window.
- `,`: Rename the current window.
- `&`: Kill the current window.
- `d`: Detach from the session.
- `[`: Enter copy mode (scroll with arrows/PgUp/PgDn).
- `]`: Paste from copy buffer.
- `:`: Enter a tmux command.
- `s`: Interactively select a session.
- `w`: Interactively select a window.
- `t`: Show a clock in the current pane.

## Examples

```bash
tmux new -s mysession
```

Create and attach to a new session named `mysession`.

```bash
tmux ls
```

List all running tmux sessions.

```bash
tmux attach -t mysession
```

Reattach to the session named `mysession`.

```bash
tmux new -s work -d
tmux send-keys -t work "vim" Enter
tmux attach -t work
```

Create a detached session, start Vim in it, then attach.

```bash
tmux kill-session -t mysession
```

Terminate a session.

## Configuration

Tmux reads `~/.tmux.conf` on startup. Example:

```
set -g mouse on
set -g default-terminal "screen-256color"
bind | split-window -h
bind - split-window -v
```

## Practical Notes

- Detach with `Ctrl+b d` and close the terminal; the session keeps running.
- Rename sessions meaningfully so `tmux ls` is useful.
- The `mouse on` option enables click-to-select panes, resize panes, and scroll.
- Copy mode (`Ctrl+b [`) lets you scroll back and select text with the keyboard.
- Tmux respawns the shell even if the shell exits; you can configure it to close the pane on exit.
- Use `tmux kill-server` to kill all sessions and the tmux server.
