---
name: lsblk
summary: List block devices such as disks and partitions.
category: Disk
tags: disk, partition, storage, block-device, mount
popular: true
---

## Additional Notes

`lsblk` lists block devices such as disks, partitions, loop devices, and mapped devices. It shows how storage devices are arranged and where filesystems are mounted.

Use it before mounting, formatting, partitioning, or troubleshooting disks.

## Syntax

```bash
lsblk [options] [device...]
```

## Parameters

- `options`: Flags that change how `lsblk` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `-f`, `--fs`: Show filesystem type, label, UUID, and mount point.
- `-o LIST`: Choose output columns.
- `-p`, `--paths`: Print full device paths.
- `-a`, `--all`: Show all devices.
- `-d`, `--nodeps`: Do not show child devices.
- `-J`, `--json`: Output JSON.
- `-S`, `--scsi`: Show SCSI device information.

## Examples

```bash
lsblk
```

List block devices in a tree.

```bash
lsblk -f
```

Show filesystems, UUIDs, labels, and mount points.

```bash
lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT
```

Show selected columns.

```bash
lsblk -p
```

Show full device paths like `/dev/sda1`.

```bash
lsblk -J
```

Print JSON output for scripts.

## Practical Notes

- Confirm the correct device before running `mkfs`, `dd`, or partitioning tools.
- `MOUNTPOINT` shows where a filesystem is attached.
- Use `blkid` for detailed filesystem identifiers.
- Use `df -h` for filesystem space usage after mounting.
