---
name: tload
summary: Display system load average as a terminal graph.
category: System
tags: load, monitor, graph, terminal, performance
popular: false
---

## Additional Notes

`tload` prints a live-updating ASCII bar graph of the system load average in the terminal. It plots the load average values from `/proc/loadavg` as a scrolling graph, updating at a configurable interval. Each new sample shifts the graph left, and the vertical scale adapts to the load values displayed.

It is a simple, lightweight alternative to more sophisticated monitoring tools like `htop` or `sar`. It is useful for quick visual assessment of system load trends over a short period.

## Syntax

```bash
tload [options] [tty]
```

## Parameters

- `tty`: Display the graph on a specific terminal device (e.g. `/dev/tty1`).

## Common Options

- `-d seconds`, `--delay seconds`: Set the update interval in seconds between graph updates.
- `-s scale`, `--scale scale`: Set the vertical scale factor for the graph.

## Examples

```bash
tload
```

Display a live load average graph in the current terminal.

```bash
tload -d 2
```

Update the graph every 2 seconds.

```bash
tload -s 1 /dev/tty2
```

Display on `/dev/tty2` with a vertical scale of 1.

## Practical Notes

- Press `Ctrl+C` to stop `tload`.
- The graph area is limited to the terminal width; older data scrolls off.
- Use `uptime`, `top`, or `htop` for more detailed load information.
- `tload` is provided by the `procps-ng` package on most distributions.
