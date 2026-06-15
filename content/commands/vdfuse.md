---
name: vdfuse
summary: Mount VirtualBox VDI disk images via FUSE.
category: Files
tags: virtualbox, vdi, mount, fuse, disk image
popular: false
---

## Additional Notes

`vdfuse` (VirtualBox Disk FUSE) mounts VirtualBox VDI (Virtual Disk Image) files as a filesystem accessible via FUSE (Filesystem in Userspace). It allows accessing the partition table and individual partitions inside a VDI file without running a virtual machine.

When mounted, the VDI file is exposed as a directory containing raw disk image files representing the entire virtual disk and each partition. These raw files can then be mounted with `mount -o loop` or accessed directly with filesystem tools like `fsck` and `dd`. This is useful for recovering data from virtual machines, modifying disk images offline, or migrating data.

## Syntax

```bash
vdfuse [options] -f image.vdi <mountpoint>
```

## Parameters

- `image.vdi`: The VirtualBox VDI disk image file.
- `mountpoint`: Directory where the VDI contents will be exposed.

## Common Options

- `-f file`: Specify the VDI file to mount.
- `-r`: Mount the image read-only.
- `-t type`: Specify image type (vdi, vmdk, vhd, raw).
- `-a`: Allow all users to access the mount point.
- `-p`: Use a specific partition number.
- `-w`: Allow write access (use with caution).

## Examples

```bash
vdfuse -f /path/to/disk.vdi /mnt/vdi
```

Mount a VDI file. The directory will contain files like `EntireDisk`, `Partition1`, `Partition2`, etc.

```bash
mount -o loop /mnt/vdi/Partition1 /mnt/partition1
```

Mount the first partition from the VDI as a loop device.

```bash
vdfuse -r -f disk.vdi /mnt/vdi
```

Mount a VDI read-only for safe data recovery.

```bash
umount /mnt/vdi
fusermount -u /mnt/vdi
```

Unmount the VDI mount point.

## Practical Notes

- `vdfuse` is not part of VirtualBox itself; it is a separate FUSE tool (often packaged as `virtualbox-fuse` or `vdfuse`).
- For accessing VDI files, `qemu-nbd` and `libvirt` provide alternative approaches.
- Always mount critical data read-only first to avoid accidental writes.
- The `EntireDisk` file contains the full raw disk image including partition table.
- Write support (`-w`) can corrupt the VDI if not handled carefully.
