---
name: lvextend
summary: Extend the size of an LVM logical volume.
category: Disk
tags: lvm, logical-volume, extend, resize, disk
popular: false
---

## Additional Notes

`lvextend` increases the size of an existing LVM logical volume. The volume group must have free physical extents available to allocate to the extension. After extending the logical volume, the filesystem on it must also be resized to use the new space.

This is one of LVM's key advantages: you can grow storage without downtime if the filesystem supports online resizing (ext4, XFS, and most modern filesystems do).

## Syntax

```bash
lvextend [options] logical-volume-path
```

## Parameters

- `logical-volume-path`: Path to the logical volume to extend (e.g., `/dev/vgname/lvname`).

## Common Options

- `-L size`, `--size size`: New total size (e.g., `-L 20G`) or increment (`-L +5G`).
- `-l extents`, `--extents extents`: Size in physical extents, or `+100%FREE` to use all free space.
- `-r`, `--resizefs`: Resize the filesystem along with the logical volume (calls `fsadm`).
- `--type type`: Allocation type (`striped`, `contiguous`, etc.).
- `-i stripes`: Number of stripes for the new extents.
- `-n`, `--noautomatic`: Do not use automatic pool metadata balancing.

## Examples

```bash
lvextend -L +5G /dev/myvg/volume
```

Add 5 GB to the logical volume.

```bash
lvextend -L 20G /dev/myvg/volume
```

Set the logical volume size to exactly 20 GB.

```bash
lvextend -l +100%FREE /dev/myvg/volume
```

Use all remaining free space in the volume group.

```bash
lvextend -r -L +5G /dev/myvg/volume
```

Extend the logical volume and resize the filesystem in one step.

```bash
lvextend -L +10G /dev/myvg/volume
resize2fs /dev/myvg/volume
```

Extend the logical volume, then manually resize an ext4 filesystem.

## Practical Notes

- For XFS filesystems, use `xfs_growfs /mountpoint` after extending the LV (the `-r` flag handles this).
- You cannot shrink a logical volume with `lvextend`; use `lvreduce` for that.
- Check available free space with `vgs` or `vgdisplay` before extending.
- Online resizing is supported for ext4 (with `resize2fs`), XFS (with `xfs_growfs`), and others. Verify filesystem support before extending.

