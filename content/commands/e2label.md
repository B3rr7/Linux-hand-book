---
name: e2label
summary: Show or change the label on an ext2/ext3/ext4 filesystem.
category: Disk
tags: filesystem, ext, label, disk, partition
popular: false
---

## Additional Notes

`e2label` displays or sets the volume label on ext2, ext3, and ext4 filesystems. A filesystem label is a human-readable identifier stored in the superblock. Labels are used to identify filesystems by name instead of device path, making `/etc/fstab` entries and mount commands more readable and robust.

Labels can be viewed with `blkid`, `lsblk`, or `e2label` itself. Changing the label does not modify the filesystem data. Labels are limited to 16 characters on ext2/ext3 filesystems. The `tune2fs -L` command provides the same functionality.

## Syntax

```bash
e2label device [new-label]
```

## Parameters

- `device`: The block device of the ext filesystem (e.g., `/dev/sda1`).
- `new-label`: The new label to assign. If omitted, the current label is displayed.

## Examples

```bash
e2label /dev/sda1
```

Show the current label on `/dev/sda1`.

```bash
sudo e2label /dev/sda1 mydata
```

Change the label of `/dev/sda1` to `mydata`.

```bash
sudo e2label /dev/nvme0n1p2 "root-fs"
```

Set a label containing a dash on an NVMe partition.

## Practical Notes

- The filesystem must not be mounted (or must be mounted read-only) when changing the label.
- Labels are limited to 16 characters. Longer labels are truncated or rejected depending on the filesystem version.
- Use `blkid /dev/sda1` to verify the label after changing it.
- Labels can be used in `/etc/fstab` with `LABEL=mylabel` instead of device paths.
- `e2label` is functionally identical to `tune2fs -L label device`.
- To change labels on other filesystem types, use `ntfslabel` (NTFS), `xfs_admin -L` (XFS), or `btrfs filesystem label` (Btrfs).
