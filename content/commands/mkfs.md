---
name: mkfs
summary: Create a filesystem on a device or partition.
category: Disk
tags: filesystem, format, disk, partition
popular: false
---

## Additional Notes

`mkfs` is a disk and filesystem command used to create a filesystem on a device or partition. It formats a block device with a specific filesystem type such as ext4, XFS, or btrfs.

Creating a filesystem destroys all existing data on the target device. Always verify the correct device with `lsblk` before running `mkfs`.

## Syntax

```bash
mkfs [options] [device-or-path]
```

## Parameters

- `options`: Flags that change how `mkfs` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `-t TYPE`: Select filesystem type.
- `-L LABEL`: Set a filesystem label when supported.

## Examples

```bash
sudo mkfs -t ext4 /dev/sdb1
sudo mkfs.ext4 -L data /dev/sdb1
```

## Practical Notes

Creating a filesystem erases existing data on the target. Confirm the device with `lsblk` first.
