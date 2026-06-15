---
name: gpm
summary: Mouse server for the Linux console.
category: System
tags: mouse, console, input, terminal, server
popular: false
---

## Additional Notes

`gpm` (General Purpose Mouse) provides mouse support for the Linux virtual console. It runs as a daemon and allows mouse cut-and-paste operations in text-mode consoles, similar to how mice work in X11 graphical environments.

The daemon reads mouse input from `/dev/input/mice` or a serial mouse device and makes it available to console applications such as text editors, file managers, and the selection buffer. Users can click and drag to select text, and paste with the middle button. Gpm is typically started at boot and runs in the background.

## Syntax

```bash
gpm [options]
```

## Parameters

- `options`: Flags that change how `gpm` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-m device`, `--mouse device`: Specify the mouse device file (e.g., `/dev/input/mice`, `/dev/ttyS0`, `/dev/psaux`).
- `-t type`, `--type type`: Specify the mouse protocol type (e.g., `exps2`, `imps2`, `ps2`, `msc`, `bare`, `sun`).
- `-3`: Enable three-button mouse emulation (chording) for two-button mice.
- `-r`: Enable the REPEAT mode for selection pasting.
- `-R`: Same as `-r` but also set the PasteDelay option.
- `-B sequence`: Set the button sequence for cut, copy, and paste.
- `-l`: Enable logging of debug messages.
- `-d`: Run in the foreground with maximum debugging.
- `-h`, `--help`: Show help.
- `-v`, `--version`: Show version.

## Examples

```bash
sudo gpm -m /dev/input/mice -t exps2
```

Start `gpm` using a USB mouse with the exps2 protocol.

```bash
sudo gpm -m /dev/ttyS0 -t msc
```

Start `gpm` using a serial mouse on the first serial port with Microsoft protocol.

```bash
sudo gpm -k
```

Stop a running `gpm` daemon.

```bash
gpm -v
```

Show the installed version of gpm.

## Practical Notes

- The `-t` option is critical; using the wrong protocol type will cause erratic mouse behavior.
- Common protocol types: `exps2` for modern PS/2 and USB mice, `imps2` for wheel mice, `ps2` for older PS/2 mice, `msc` for Microsoft serial mice.
- To stop gpm, use `gpm -k` or `systemctl stop gpm`.
- Most modern Linux distributions use `systemd` to manage gpm through the `gpm.service` unit.
- In graphical environments (X11/Wayland), gpm is not needed; the display server handles mouse input independently.
- Some console programs (like `mc`, `links`, `emacs -nw`) can use gpm for mouse support.
