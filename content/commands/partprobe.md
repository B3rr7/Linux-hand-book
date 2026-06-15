---
name: partprobe
summary: Notify the kernel of partition table changes.
category: Disk
tags: partitions, kernel, udev, disk, rescan
popular: false
---

## Additional Notes

`partprobe` informs the operating system kernel about changes to the partition table on a disk device. After modifying the partition table with tools like `parted`, `fdisk`, or `gdisk`, the kernel needs to re-read the partition table for the new partitions to appear as device nodes (e.g., `/dev/sda1`, `/dev/sda2`).

While the kernel automatically re-reads the partition table in many cases, `partprobe` is useful when the kernel does not detect changes automatically or when partitions on an in-use disk need to be rescanned without rebooting. It avoids the more aggressive `blockdev --rereadpt` or `hdparm -z` approaches.

## Syntax

```bash
partprobe [options] [device...]
```

## Parameters

- `device`: One or more disk devices to rescan, such as `/dev/sda`. If no device is given, all devices are probed.

## Common Options

- `-d`, `--dry-run`: Show what would be done without actually doing it.
- `-s`, `--summary`: Show a summary of partition information for each device.
- `-h`, `--help`: Show help and exit.
- `-v`, `--version`: Show version information.

## Examples

```bash
partprobe
```

Re-read the partition table on all disk devices.

```bash
partprobe /dev/sda
```

Notify the kernel about changes to `/dev/sda` only.

```bash
partprobe -s /dev/sdb
```

Show a summary of partitions on `/dev/sdb` after probing.

```bash
sudo partprobe /dev/nvme0n1
```

Re-read the partition table on an NVMe device.

```bash
partprobe -d /dev/sda
```

Dry run: show what would be done but do not make changes.

## Practical Notes

- `partprobe` is part of the `parted` package. Install it with `sudo apt install parted` or `sudo yum install parted`.
- If the kernel cannot re-read the partition table (e.g., the disk is in use), `partprobe` may report EBUSY. In such cases, a reboot may be necessary.
- After `partprobe`, new partition device files appear under `/dev/`. Run `lsblk` or `fdisk -l` to verify.
- For devices using device-mapper (LVM, multipath), `partprobe` may not suffice. Use `partx -a` or `kpartx -a` in those scenarios.
- Use `udevadm settle` after `partprobe` in scripts to ensure all udev rules have processed the new partitions.
