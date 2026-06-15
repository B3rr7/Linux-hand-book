---
name: startx
summary: Start the X Window System graphical environment.
category: System
tags: x11, graphical, display, xorg, window-system
popular: false
---

## Additional Notes

`startx` initializes the X Window System (X11) graphical environment from the command line. It is a front-end script that typically runs `xinit` with appropriate client and server options, providing a convenient way to start a graphical desktop session without a display manager.

When run, `startx` starts an X server (usually Xorg) and launches a client program (typically a window manager or desktop environment) specified in the user's `~/.xinitrc` file. If no `~/.xinitrc` exists, it falls back to system defaults. Using `startx` is common in minimal installations, server environments with occasional GUI needs, or when troubleshooting display issues.

## Syntax

```bash
startx [client_options] [-- server_options]
```

## Parameters

- `client_options`: Options and program to run as the X client (passed to `~/.xinitrc` or `xterm`).
- `server_options`: Options after `--` are passed to the X server (Xorg).

## Common Options

- `-- vtN`: Specify the virtual terminal number for the X server (e.g., `vt1`, `vt7`).
- `-- -depth N`: Set the color depth (e.g., 16, 24, 32 bits).
- `-- -dpi N`: Set the display resolution in dots per inch.
- `-- -layout name`: Select a specific keyboard layout.
- `-- -keyboard name`: Specify a keyboard device.
- `-- -mouse name`: Specify a mouse device.
- `-- -nolisten tcp`: Disable TCP listening (secure, default on most systems).
- `-- -terminate`: Terminate the server when the last client exits.
- `-- -config file`: Use an alternative Xorg configuration file.
- `-- -logfile file`: Specify the Xorg log file location.
- client_options: A command to run as the X client. If not specified, `~/.xinitrc` is used.

## Example ~/.xinitrc

```bash
#!/bin/sh
xrdb -merge ~/.Xresources
exec openbox-session
```

## Examples

```bash
startx
```

Start the default X session using `~/.xinitrc`.

```bash
startx -- -depth 16 -dpi 100
```

Start X with 16-bit color depth and 100 DPI.

```bash
startx /usr/bin/i3
```

Start the i3 window manager directly (ignore `~/.xinitrc`).

```bash
startx /usr/bin/twm -- vt1
```

Start the simple Tab Window Manager on virtual terminal 1.

```bash
startx -- -config /etc/X11/xorg.conf.bak
```

Start X with an alternative configuration file.

## Practical Notes

- `~/.xinitrc` should end with `exec window-manager` to replace the script process with the WM.
- If no `~/.xinitrc` exists, `startx` runs `xterm` by default.
- Display managers (GDM, SDDM, LightDM) are the modern alternative to `startx`.
- The X server log is at `~/.local/share/xorg/Xorg.0.log` or `/var/log/Xorg.0.log`.
- Use `startx -- vt1` to start X on the first unused virtual terminal.
- Kill the X server with `Ctrl+Alt+Backspace` (if enabled) or switch to another VT with `Ctrl+Alt+F2`.
- Modern Wayland systems use `wayland-session` or display managers instead of `startx`.
