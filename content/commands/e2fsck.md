---
name: e2fsck
summary: Check ext2, ext3, and ext4 filesystems.
category: Disk
tags: disk, filesystem, storage
popular: false
---

## Additional Notes

`e2fsck` is a disk and filesystem command used to check ext2, ext3, and ext4 filesystems. It checks and optionally repairs ext2, ext3, and ext4 filesystems. The filesystem should be unmounted before running a repair to avoid data corruption.

## Syntax

```bash
e2fsck [options] [device-or-path]
```

## Parameters

- `options`: Flags that change how `e2fsck` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
e2fsck --help
man e2fsck
```

## Practical Notes

Options can vary by distribution and package version. Use `man e2fsck`, `e2fsck --help`, or the package documentation for exact syntax.
