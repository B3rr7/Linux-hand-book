---
name: fdisk
summary: View and edit disk partition tables.
category: Disk
tags: disk, partition, storage, admin
popular: false
---

## Additional Notes

`fdisk` is a disk and filesystem command used to view and edit disk partition tables. It provides an interactive menu for creating, deleting, resizing, and modifying disk partitions. It supports MBR and GPT partition tables.

## Syntax

```bash
fdisk [options] [device-or-path]
```

## Parameters

- `options`: Flags that change how `fdisk` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `-l`: List partition tables.
- `-s PARTITION`: Print partition size in sectors on some systems.

## Examples

```bash
sudo fdisk -l
sudo fdisk /dev/sdb
```

## Practical Notes

Partition changes can destroy data. Make sure you are working on the correct disk.
