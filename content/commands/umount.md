---
name: umount
summary: Detach a mounted filesystem.
category: Disk
tags: disk, filesystem, usb, unmount
popular: false
---

## Additional Notes

`umount` is a disk and filesystem command used to detach a mounted filesystem. It detaches a mounted filesystem from the directory tree, making the underlying storage safe to remove.

If unmounting fails with 'target is busy', use `fuser -m /mountpoint` or `lsof /mountpoint` to find blocking processes.

## Syntax

```bash
umount [options] [device-or-path]
```

## Parameters

- `options`: Flags that change how `umount` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `-l`: Lazy unmount.
- `-f`: Force unmount where supported.
- `-a`: Unmount filesystems from `/etc/mtab`.

## Examples

```bash
sudo umount /mnt/usb
sudo umount /dev/sdb1
sudo umount -l /mnt/busy
```

## Practical Notes

If unmounting fails because the target is busy, check for open files or shells currently inside the mount point.
