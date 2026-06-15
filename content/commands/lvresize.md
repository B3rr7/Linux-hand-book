---
name: lvresize
summary: Resize an LVM logical volume (extend or reduce).
category: Disk
tags: lvm, logical-volume, resize, extend, reduce, disk
popular: false
---

## Additional Notes

`lvresize` changes the size of an LVM logical volume. It can both extend and reduce volumes, acting as a unified interface for `lvextend` and `lvreduce`.

When extending, the volume group must have free physical extents. When reducing, the filesystem must be shrunk first (manually or with `-r`). The command is commonly used with the `-r` flag to resize the filesystem at the same time.

## Syntax

```bash
lvresize [options] logical-volume-path
```

## Parameters

- `logical-volume-path`: Path to the logical volume to resize.

## Common Options

- `-L size`, `--size size`: New size (e.g., `-L 20G`). Prefix with `+` or `-` to add or remove.
- `-l extents`: Size in extents. Use `+100%FREE` to use all free space.
- `-r`, `--resizefs`: Resize the filesystem together with the LV.
- `-f`, `--force`: Force resize, bypassing safety checks.
- `-n`, `--nofsck`: Skip filesystem check before resize.
- `-A`, `--autobackup y|n`: Control automatic metadata backup.

## Examples

```bash
lvresize -L +5G /dev/myvg/volume
```

Add 5 GB to the volume.

```bash
lvresize -L 10G /dev/myvg/volume
```

Set the volume to exactly 10 GB.

```bash
lvresize -L -3G /dev/myvg/volume
```

Reduce the volume by 3 GB.

```bash
lvresize -r -L +5G /dev/myvg/volume
```

Extend the volume and resize the filesystem in one command.

```bash
lvresize -l +100%FREE /dev/myvg/volume
```

Grow the volume to consume all free extents.

## Practical Notes

- When shrinking with `-r`, the filesystem is checked and resized before the LV is reduced.
- For XFS, only extension is supported. Shrink XFS volumes by backing up and recreating.
- Always verify filesystem integrity after a resize, especially when shrinking.
- Use `--resizefs` with caution on production systems; test the procedure first if possible.

