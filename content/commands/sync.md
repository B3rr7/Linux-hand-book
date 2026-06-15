---
name: sync
summary: Flush filesystem buffers.
category: Disk
tags: disk, filesystem, storage
popular: false
---

## Additional Notes

`sync` is a disk and filesystem command used to flush filesystem buffers. It forces pending writes in the kernel's filesystem buffers to be written to disk immediately.

`sync` is useful before unmounting drives or after critical writes to ensure data is on disk. The kernel also flushes buffers automatically at intervals.

## Syntax

```bash
sync [options] [device-or-path]
```

## Parameters

- `options`: Flags that change how `sync` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
sync --help
man sync
```

## Practical Notes

Options can vary by distribution and package version. Use `man sync`, `sync --help`, or the package documentation for exact syntax.
