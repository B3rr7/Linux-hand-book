---
name: fdisk
summary: View and edit disk partition tables.
category: Disk
tags: disk, partition, storage, admin, mbr, gpt
popular: false
---

## Additional Notes

`fdisk` is a disk command used to view and edit partition tables on a block device. It creates, deletes, and resizes partitions, and writes the Master Boot Record (MBR) or GUID Partition Table (GPT) metadata.

`fdisk` is interactive: you start it on a device such as `/dev/sda`, then issue single-letter commands. For GPT disks, `gdisk` or `parted` are often preferred, but `fdisk` supports GPT too on modern systems.

## Syntax

```bash
fdisk [options] DEVICE
```

## Parameters

- `options`: Flags that change how `fdisk` behaves.
- `DEVICE`: The block device to inspect or modify, such as `/dev/sda`.

## Common Options

- `-l`, `--list`: List partition tables of all or named devices.
- `-l DEVICE`: Show the partition table for a specific device.
- `-u=cylinders` / `-u=sectors`: Set the display unit (sectors is default).
- `-b SECTOR-SIZE`: Override sector size when reading a disk image.

## Interactive Commands

Inside `fdisk DEVICE`:

- `p`: Print the current partition table.
- `n`: Create a new partition.
- `d`: Delete a partition.
- `t`: Change a partition's type (for example `83` Linux, `82` swap).
- `a`: Toggle the bootable flag (MBR).
- `m`: Show the help of commands.
- `w`: Write changes to disk and exit.
- `q`: Quit without saving changes.
- `g`: Create a new empty GPT table.
- `o`: Create a new empty DOS/MBR table.

## Examples

```bash
sudo fdisk -l
```

List every disk and its partitions.

```bash
sudo fdisk -l /dev/sdb
```

Show the partition table of `/dev/sdb` only.

```bash
sudo fdisk /dev/sdb
```

Open an interactive session on `/dev/sdb`, then use `p`, `n`, `d`, and `w`.

```text
Command (m for help): p
Command (m for help): n
Partition type: p
Partition number: 1
First sector: (default)
Last sector: +20G
Command (m for help): w
```

Create a 20 GB primary partition and write it to disk.

## Practical Notes

- Always run `fdisk -l` first and back up important data before editing.
- `w` writes changes immediately; `q` discards them.
- After creating partitions, format them with `mkfs` (such as `mkfs.ext4`) before use.
- Use `partrobe` after changes so the kernel reloads the partition table.
- For GPT management with more features, consider `gdisk` or `parted`.
