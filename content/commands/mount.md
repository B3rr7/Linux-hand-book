---
name: mount
summary: Attach filesystems into the Linux directory tree.
category: Disk
tags: filesystem, mount, disk, usb, storage
popular: true
---

## Additional Notes

`mount` attaches a filesystem to a directory called a mount point. Linux has one directory tree starting at `/`, and disks, partitions, USB drives, network shares, and virtual filesystems appear inside that tree when mounted.

Unmount with `umount`, not `unmount`.

## Syntax

```bash
mount [options]
mount [options] DEVICE MOUNTPOINT
mount [options] -t TYPE DEVICE MOUNTPOINT
```

## Parameters

- `DEVICE`: Block device, partition, image, UUID, label, or remote share.
- `MOUNTPOINT`: Existing directory where the filesystem will appear.
- `TYPE`: Filesystem type such as `ext4`, `vfat`, `ntfs`, `nfs`, or `tmpfs`.

## Common Options

- `-t TYPE`: Specify filesystem type.
- `-o OPTIONS`: Pass mount options.
- `-a`: Mount everything configured in `/etc/fstab`.
- `-r`: Mount read-only.
- `-w`: Mount read-write.
- `--bind OLD NEW`: Bind-mount one path at another path.

## Examples

```bash
mount
```

Show currently mounted filesystems.

```bash
findmnt
```

Show mounts in a tree view. This is often easier to read.

```bash
sudo mount /dev/sdb1 /mnt/usb
```

Mount a partition at `/mnt/usb`.

```bash
sudo mount -t ext4 /dev/sdb1 /mnt/data
```

Mount with an explicit filesystem type.

```bash
sudo mount -o ro /dev/sdb1 /mnt/recovery
```

Mount read-only.

```bash
sudo mount --bind /var/www/site /srv/site
```

Make one existing directory appear at another path.

```bash
sudo umount /mnt/usb
```

Unmount a mounted filesystem.

## Practical Notes

- The mount point directory must exist before mounting.
- Use `lsblk`, `blkid`, and `findmnt` to identify devices and mount state.
- Be careful mounting unknown filesystems read-write.
- `/etc/fstab` controls many automatic mounts.
- If unmount fails because a target is busy, check open files with `lsof` or `fuser`.
