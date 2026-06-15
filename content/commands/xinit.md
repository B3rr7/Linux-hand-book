---
name: xinit
summary: Initialize an X session and start a client.
category: System
tags: x11, xserver, startx, display, session
popular: false
---

## Additional Notes

`xinit` is the low-level tool used to start the X Window System server and an initial client application (typically a window manager or desktop environment). It is the underlying mechanism behind `startx`, which is a convenience script that sets up the environment and calls `xinit`.

When run without arguments, `xinit` looks for `~/.xinitrc` in the user's home directory. If found, that script is executed as the client program. Otherwise, it defaults to `xterm`. The X server runs on the next available display number (`:0`, `:1`, etc.).

## Syntax

```bash
xinit [client] [options] [-- [server] [display] [server_options]]
```

## Parameters

- `client`: The command to run as the X client (default: `~/.xinitrc` then `xterm`).
- `--`: Separator between client and server arguments.
- `server`: The X server to start (default: `X` or `Xorg`).

## Common Options

- `-display`: Specify the display connection for the client.
- `-dpi DPI`: Set the display resolution in dots per inch.

## Examples

```bash
xinit
```

Start X with whatever is in `~/.xinitrc`, or a plain `xterm`.

```bash
xinit /usr/bin/i3
```

Start X with the i3 window manager.

```bash
xinit /usr/bin/awesome -- :1
```

Start X display `:1` with the Awesome window manager.

```bash
xinit -- /usr/bin/Xorg -dpi 96
```

Start just the X server with a custom DPI (no client).

## Practical Notes

- Most users should use `startx` or a display manager (GDM, SDDM, LightDM) instead of `xinit` directly.
- The `~/.xinitrc` file is a shell script that sets environment variables and launches the window manager or desktop environment.
- If the client exits, the X server exits too (unless the `-e` server flag prevents it).
- The `--` separator is critical when specifying server options.
- For debugging X server issues, `Xorg -configure` can generate a basic configuration.
