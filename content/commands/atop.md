---
name: atop
summary: Monitor system and process activity over time.
category: Processes
tags: process, monitor, performance, system
popular: false
---

## Additional Notes

`atop` is an interactive system and process monitor. It shows CPU, memory, disk, network, and per-process activity, and it can also read historical logs when system accounting is configured.

Use it when `top` is not enough and you need a broader view of what the machine is doing.

## Syntax

```bash
atop [options] [interval [samples]]
```

## Parameters

- `interval`: Seconds between screen updates.
- `samples`: Number of updates to show before exiting.
- `options`: Display, logging, and filtering controls.

## Common Options

- `-r FILE`: Read historical atop log data.
- `-w FILE`: Write raw log data.
- `-P LABEL`: Show a specific output page, such as CPU, memory, disk, or network when supported.
- `-p`: Show active processes only on some versions.
- `-a`: Show all processes.

## Examples

```bash
atop
```

Open the live monitor.

```bash
atop 5
```

Refresh every five seconds.

```bash
atop 10 6
```

Show six samples with ten seconds between samples.

```bash
sudo atop -r /var/log/atop/atop_20260609
```

Read a historical log file if atop logging is enabled.

## Practical Notes

- Historical mode depends on the atop service or logging package configuration.
- Disk and network per-process detail may require kernel/accounting support.
- Use `htop` for simple interactive process work and `atop` for broader system diagnosis.
