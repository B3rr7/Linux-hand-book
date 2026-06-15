---
name: slabtop
summary: Display kernel slab cache information in real time.
category: System
tags: kernel, memory, slab, cache, monitoring
popular: false
---

## Additional Notes

`slabtop` shows a real-time, top-like display of kernel slab allocation caches. The slab allocator manages memory for frequently allocated kernel objects (such as inodes, dentries, buffer heads, and task structures) to improve performance and reduce fragmentation.

The display shows cache name, number of active objects, total objects, object size, and pages per slab. High object counts in certain caches can indicate memory pressure or leaks in kernel subsystems. This tool is useful for kernel developers, system administrators debugging memory issues, and anyone analyzing kernel memory usage.

## Syntax

```bash
slabtop [options]
```

## Parameters

- `options`: Flags that change how `slabtop` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-d`, `--delay seconds`: Update interval in seconds (default: 3).
- `-s`, `--sort S`: Sort by a specific field: `a` (active objects), `c` (cache size), `l` (slots per slab), `n` (name), `o` (object size), `p` (pages per slab), `s` (object size), `u` (utility), `v` (number of active slabs).
- `-o`, `--once`: Display output once and exit (non-interactive mode).
- `-b`, `--batch`: Produce output suitable for batch processing (no ANSI escape codes).
- `-V`, `--version`: Show version information.

## Examples

```bash
slabtop
```

Display live slab cache usage, updating every 3 seconds.

```bash
slabtop -s o
```

Sort slab caches by object size.

```bash
slabtop -o
```

Show slab cache information once and exit.

```bash
slabtop -d 5
```

Update every 5 seconds.

```bash
slabtop -b > slab_data.txt
```

Capture slab cache data to a file in batch mode.

## Practical Notes

- `slabtop` reads data from `/proc/slabinfo`, which must be readable.
- High `dentry` or `inode_cache` counts may indicate file descriptor leaks.
- Kernel memory leaks in slab caches can cause system instability over time.
- Use `echo 2 > /proc/sys/vm/drop_caches` to reclaim reclaimable slab objects.
- The `ALIGN` and `dentry` caches are typically among the largest slab consumers.
- Not all kernel memory uses the slab allocator; there are also page-based allocations.
