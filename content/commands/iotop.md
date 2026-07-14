---
name: iotop
summary: Show live disk IO usage by process.
category: Processes
tags: disk, io, process, monitor, real-time
popular: false
---

## Additional Notes

`iotop` is a top-like, real-time view of disk I/O grouped by process or thread. It shows how much each process is reading and writing, which makes it the fastest way to find what is hammering a disk.

It relies on kernel I/O accounting, so it usually needs root privileges. If a process shows no I/O, the kernel may not be accounting it.

## Syntax

```bash
iotop [options]
```

## Parameters

- `options`: Flags that filter or change the display.

## Common Options

- `-o`, `--only`: Show only processes doing I/O (hides idle ones).
- `-b`, `--batch`: Batch mode for scripts; does not redraw the screen.
- `-n N`, `--iter=NUM`: Number of iterations in batch mode, then exit.
- `-d SEC`, `--delay=SEC`: Delay between updates (default 1s).
- `-p PID`, `--pid=PID`: Monitor only a specific PID.
- `-u USER`: Show only a given user's processes.
- `-P`, `--processes`: Show processes instead of threads.
- `-a`, `--accumulated`: Show accumulated I/O since start, not per-second rates.
- `-k`: Use kilobytes per second.
- `-q`, `--quiet`: Less verbose display.

## Examples

```bash
sudo iotop
```

Show the live, full-screen I/O view (needs root).

```bash
sudo iotop -o
```

Show only processes that are actively doing I/O.

```bash
sudo iotop -oPa
```

Accumulated per-process I/O, skipping idle processes.

```bash
sudo iotop -b -n 5 -d 2
```

Batch mode: print five reports, two seconds apart.

```bash
sudo iotop -p 1234
```

Watch only PID 1234.

## Practical Notes

- Run with `sudo`; without privileges most I/O is hidden.
- Use `-o` to cut through noise and find the busy writer quickly.
- `-a` is great for "what used the most disk since I started watching?".
- Pair with `iostat -x` for a device-vs-process view of the same load.
- If a process shows nothing, its I/O may not be kernel-accounted.
