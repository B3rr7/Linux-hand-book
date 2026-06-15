---
name: xlsclients
summary: List client applications connected to the X server.
category: System
tags: x11, clients, display, list, xserver
popular: false
---

## Additional Notes

`xlsclients` queries the X server for all client applications currently connected and displays their window information. It shows the display name and the command that started each client. This is useful for monitoring which X11 applications are running and on which display.

The command can operate on local or remote X servers. It uses the X Resource Database and the X11 `QueryTree` and `GetAtomName` requests to enumerate client windows.

## Syntax

```bash
xlsclients [options]
```

## Parameters

- `options`: Flags that change how `xlsclients` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

`-a`, `--all`: Show clients on all displays (not just the default).
`-d display`, `--display display`: Specify a specific display to query.
`-l`, `--long`: Show detailed information including the window ID and title.
`-m`, `--max-cmdlen N`: Limit the command line length displayed.
`-s`, `--synchronous`: Synchronize with the X server (slower but more accurate).

## Examples

```bash
xlsclients
```

List all clients on the default display.

```bash
xlsclients -l
```

Show detailed information for each client.

```bash
xlsclients -d :1
```

Query clients on display `:1`.

```bash
xlsclients -a
```

Show clients on all available displays.

## Practical Notes

- `xlsclients` shows the process command that created each top-level window.
- Some window managers may not report all clients correctly, especially with modern compositors or Wayland.
- For a list of all X11 windows (not just top-level clients), use `xwininfo -root -tree` or `xdotool`.
- On Wayland sessions, `xlsclients` only shows XWayland clients, not native Wayland applications.
