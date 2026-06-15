---
name: parted
summary: Partition table editor for disk devices.
category: Disk
tags: partitions, disk, gpt, mbr, filesystem, storage, fdisk
popular: true
---

## Additional Notes

`parted` is a command-line utility for creating, resizing, destroying, and managing disk partitions. It supports both MBR (DOS) and GPT partition tables, as well as various filesystem types. Unlike `fdisk`, `parted` can resize partitions and supports disks larger than 2TB through GPT.

System administrators use `parted` when preparing new storage devices, resizing partitions to expand or shrink filesystems, converting between MBR and GPT partition tables, and repairing damaged partition structures. It works interactively and in scripted single-command mode. `parted` is available on all major Linux distributions and is a standard tool in the system administrator's toolkit.

`parted` operates on the partition table of a block device (like `/dev/sda` or `/dev/nvme0n1`). Changes can be made destructively or non-destructively, and `parted` typically writes changes immediately (unlike `fdisk` which requires a separate `w` command). For this reason, careful attention to the target device is critical.

## Syntax

```bash
parted [options] [device] [command [parameters]]
```

## Parameters

- `device`: Block device path such as `/dev/sda`, `/dev/nvme0n1`, or `/dev/mmcblk0`.
- `command`: Instruction to execute, such as `print`, `mklabel`, `mkpart`, `resizepart`, `rm`, `rescue`, or `unit`.

## Common Options

- `-l`, `--list`: List partition tables on all available block devices.
- `-s`, `--script`: Run in script mode without prompting for confirmation.
- `-a alignment-type`: Set alignment type: `none`, `cylinder`, `min`, or `optimal`.
- `-m`: Machine-parseable output for scripts.
- `-v`, `--version`: Show version information.
- `--help`: Show help message.

## Interactive Commands

- `print`: Display the current partition table.
- `mklabel label-type`: Create a new partition table (e.g., `gpt` or `msdos`).
- `mkpart part-type [fs-type] start end`: Create a new partition.
- `resizepart number end`: Resize the specified partition.
- `rm number`: Delete the specified partition.
- `rescue start end`: Rescue a lost partition between start and end.
- `unit unit`: Set display unit (`s` sectors, `B` bytes, `MB`, `GB`, `MiB`, `GiB`, `%`).
- `select device`: Switch to a different device.
- `align-check type N`: Check if partition N is aligned.
- `quit`: Exit parted.
- `toggle N flag`: Toggle a flag (e.g., `boot`, `esp`, `lvm`, `raid`).

## Examples

```bash
parted -l
```

List partition tables on all block devices.

```bash
parted /dev/sda print
```

Display the partition table on `/dev/sda`.

```bash
parted /dev/sda mklabel gpt
```

Create a new GPT partition table, erasing all existing partitions.

```bash
parted /dev/sda mkpart primary ext4 1MiB 100%
```

Create a single partition using all available space, starting 1 MiB in (for alignment).

```bash
parted /dev/sda mkpart primary ext4 1MiB 10GiB
```

Create a 10 GiB partition.

```bash
parted /dev/sda mkpart primary linux-swap 10GiB 14GiB
```

Create a 4 GiB swap partition after the first partition.

```bash
parted /dev/sda resizepart 1 20GiB
```

Resize partition 1 to end at 20 GiB.

```bash
parted /dev/sda rm 2
```

Delete partition 2 from the disk.

```bash
parted -s /dev/sda -- mklabel gpt mkpart primary ext4 0% 100%
```

Scripted single-command to repartition a disk completely.

```bash
parted /dev/sda rescue 0 100GiB
```

Attempt to recover a lost partition between the start of the disk and 100 GiB.

```bash
parted /dev/sda set 1 boot on
```

Set the boot flag on partition 1 (for MBR) or set the legacy BIOS bootable flag on GPT.

```bash
parted /dev/sda set 1 esp on
```

Set the EFI System Partition (ESP) flag for UEFI boot.

```bash
parted /dev/sda align-check optimal 1
```

Check whether partition 1 is optimally aligned for the device geometry.

## Practical Notes

- Unlike `fdisk`, `parted` writes changes to disk immediately. There is no interactive confirmation step before writing. Double-check the device and command before executing.
- Always specify `-s` or `--script` when running `parted` in automation scripts to prevent interactive prompts.
- Use `unit MiB` or `unit GiB` for human-friendly sizes. Use `unit s` for sector-level precision.
- Modern disks require alignment to physical sector boundaries. Use `optimal` alignment with `mkpart` and start at 1 MiB (2048 sectors) for best compatibility.
- After creating or resizing partitions with `parted`, you must create a filesystem on the partition with `mkfs.ext4`, `mkfs.xfs`, etc.
- Run `partprobe` or `udevadm settle` after partition changes to ensure the kernel re-reads the partition table.
- For disks 2 TB or larger, GPT partition tables are required. MBR cannot address beyond 2 TB (or 2 TiB with 512-byte sectors).
- `parted` can handle both MBR (`msdos`) and GPT partition tables. Conversion is destructive: save data first, then use `mklabel` to switch between them.
- The graphical tool `gparted` provides the same functionality with a GTK interface.
