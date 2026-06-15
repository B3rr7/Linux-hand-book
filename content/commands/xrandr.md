---
name: xrandr
summary: Configure X server display outputs and resolutions.
category: System
tags: x11, display, resolution, monitor, multimonitor, rotate
popular: true
---

## Additional Notes

`xrandr` (X Resize and Rotate) configures the display outputs connected to the X server. It can query available outputs and modes, set resolution and refresh rate, rotate or mirror displays, position monitors relative to each other, and change the primary output. It replaces the older `xvidtune` and modeline-based configuration tools.

`xrandr` works with the RandR (Resize and Rotate) X extension, which is supported by most modern graphics drivers (modesetting, Intel, AMD, NVIDIA with proprietary driver or nouveau). Changes made with `xrandr` are immediate but not persistent — they revert at logout. To make them permanent, add the commands to `~/.xprofile` or configure the display manager.

## Syntax

```bash
xrandr [options]
```

## Parameters

- `options`: Flags that change how `xrandr` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options and Commands

- `(no args)`: List all outputs and their available modes.
- `-q`, `--query`: Query the current display configuration.
- `--output name`: Specify the output to configure (e.g. `eDP-1`, `HDMI-1`).
- `--mode WxH`: Set resolution (e.g. `--mode 1920x1080`).
- `--rate HZ`: Set refresh rate (e.g. `--rate 60`).
- `--rotate normal|left|right|inverted`: Rotate the display.
- `--left-of output`: Position this output to the left of another.
- `--right-of output`: Position this output to the right.
- `--above output`: Position above another.
- `--below output`: Position below another.
- `--same-as output`: Mirror another output.
- `--primary`: Set this output as the primary display.
- `--auto`: Enable the output with the preferred mode.
- `--off`: Disable the output.
- `--dpi DPI`: Set the DPI for the output.
- `--scale factor`: Apply a scaling factor.

## Examples

```bash
xrandr
```

List all connected outputs and supported resolutions.

```bash
xrandr --output HDMI-1 --mode 1920x1080 --rate 60
```

Set HDMI-1 to 1920x1080 at 60 Hz.

```bash
xrandr --output eDP-1 --primary --mode 1920x1080 --output HDMI-1 --right-of eDP-1 --mode 1920x1080
```

Set up a dual-monitor layout with laptop screen as primary and an external monitor to the right.

```bash
xrandr --output HDMI-1 --same-as eDP-1
```

Mirror HDMI-1 to the laptop display (same content on both).

```bash
xrandr --output HDMI-1 --rotate left
```

Rotate HDMI-1 90 degrees counterclockwise.

```bash
xrandr --output HDMI-1 --off
```

Disable the HDMI-1 output.

```bash
xrandr --output eDP-1 --mode 1920x1080 --scale 0.75x0.75
```

Scale the display by 75% (for HiDPI screens).

## Practical Notes

- Use `xrandr` to detect connected outputs: run it without arguments and look for `connected` entries.
- The output names (e.g. `eDP-1`, `HDMI-1`, `DP-1`) depend on the graphics driver and hardware.
- For persistent configuration, add `xrandr` commands to `~/.xprofile`, `~/.xinitrc`, or a startup script.
- Desktop environments like GNOME and KDE have built-in display configuration GUIs that manage `xrandr` internally.
- On Wayland, `xrandr` only affects XWayland applications. Use `wlr-randr` (wlroots) or `gnome-control-center` for native Wayland display configuration.
- Apply multi-monitor layouts carefully: a misconfiguration can make the display unusable. If this happens, switch to a different tty (Ctrl+Alt+F2) and run `xrandr --auto` to reset.
