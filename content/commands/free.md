---
name: free
summary: Show memory and swap usage.
category: System
tags: memory, ram, swap, system, monitor
popular: true
---

## Additional Notes

`free` shows system memory and swap usage. It helps you understand RAM pressure, cache usage, and available memory.

Linux uses free memory for buffers and cache, so low `free` memory is not always a problem. The `available` column is usually more useful.

## Syntax

```bash
free [options]
```

## Parameters

- `options`: Flags that change how `free` behaves.

## Common Options

- `-h`, `--human`: Human-readable units.
- `-m`: Show MiB.
- `-g`: Show GiB.
- `-s SECONDS`: Repeat output every interval.
- `-t`: Show total line.
- `-w`: Wide output.

## Examples

```bash
free
```

Show memory usage.

```bash
free -h
```

Show readable memory usage.

```bash
free -h -t
```

Show memory, swap, and totals.

```bash
free -h -s 2
```

Refresh every two seconds.

## Reading Output

- `total`: Total memory.
- `used`: Memory currently used.
- `free`: Completely unused memory.
- `buff/cache`: Memory used for buffers and cache.
- `available`: Estimate of memory available for new applications.
- `Swap`: Disk-backed memory area.

## Practical Notes

- Watch `available`, not only `free`.
- Heavy swap usage may indicate memory pressure.
- Use `top`, `htop`, or `ps aux --sort=-%mem` to find memory-heavy processes.
- Cache memory is normally reclaimed when applications need it.
