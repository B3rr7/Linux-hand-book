---
name: lvreduce
summary: Reduce the size of an LVM logical volume.
category: Disk
tags: lvm, logical-volume, reduce, shrink, disk
popular: false
---

## Additional Notes

`lvreduce` shrinks an existing LVM logical volume. Unlike extending, reducing a logical volume is a destructive operation that requires careful preparation: the filesystem must be shrunk first, then the logical volume can be reduced to match.

The filesystem must be unmounted (or at least remounted read-only) for most filesystem types. XFS does not support shrinking at all, making `lvreduce` unsuitable for XFS volumes. ext4 can be shrunk but only when unmounted.

## Syntax

```bash
lvreduce [options] logical-volume-path
```

## Parameters

- `logical-volume-path`: Path to the logical volume to reduce (e.g., `/dev/vgname/lvname`).

## Common Options

- `-L size`, `--size size`: New total size (e.g., `-L 5G`) or reduction amount (`-L -3G`).
- `-l extents`, `--extents extents`: Size in physical extents, or reduction in extents.
- `-r`, `--resizefs`: Resize the filesystem before shrinking the LV.
- `-f`, `--force`: Force reduction without safety checks (use with extreme caution).
- `-n`, `--nofsck`: Do not run filesystem check before shrinking.

## Examples

```bash
lvreduce -L -3G /dev/myvg/volume
```

Reduce the logical volume by 3 GB.

```bash
lvreduce -L 5G /dev/myvg/volume
```

Set the logical volume to exactly 5 GB.

```bash
lvreduce -r -L -2G /dev/myvg/volume
```

Resize the filesystem and reduce the logical volume in one step.

## Safe Reduction Steps (Manual)

```bash
umount /dev/myvg/volume
e2fsck -f /dev/myvg/volume
resize2fs /dev/myvg/volume 10G
lvreduce -L 10G /dev/myvg/volume
mount /dev/myvg/volume /mnt
```

The safe manual approach: unmount, check, shrink filesystem, shrink LV, remount.

## Practical Notes

- Always back up critical data before shrinking a logical volume.
- Reduce the filesystem **before** reducing the logical volume to avoid data corruption.
- XFS filesystems cannot be shrunk. For XFS, you must back up, recreate the volume, and restore.
- The `-r` flag handles the resize in the correct order but should still be used with caution.

