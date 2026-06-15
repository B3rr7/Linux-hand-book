---
name: mkswap
summary: Set up a Linux swap area on a device or file.
category: Disk
tags: swap, memory, disk, partition, virtual-memory
popular: false
---

## Additional Notes

`mkswap` prepares a block device or regular file to be used as Linux swap space. It writes a swap signature to the device, which the kernel recognizes when the swap area is activated with `swapon`.

Swap space is used by the kernel as virtual memory extension: when physical RAM is full, less frequently accessed pages are moved to swap. Swap can be on a dedicated partition, a file on an existing filesystem, or an LVM logical volume.

## Syntax

```bash
mkswap [options] device [size-in-blocks]
```

## Parameters

- `device`: The block device, file, or partition to set up as swap (e.g., `/dev/sda2`, `/swapfile`).
- `size-in-blocks`: Optional size in 1024-byte blocks. If omitted, the entire device is used.

## Common Options

- `-f`, `--force`: Force creation even if the device appears to contain a filesystem.
- `-c`, `--check`: Check the device for bad blocks before creating the swap area.
- `-L label`, `--label label`: Set a label for the swap area.
- `-U UUID`, `--uuid UUID`: Set a specific UUID.
- `-v`, `--verbose`: Show detailed output.
- `-p priority`, `--priority priority`: Set swap priority (higher numbers are used first).

## Examples

```bash
mkswap /dev/sda2
```

Set up `/dev/sda2` as a swap partition.

```bash
mkswap -L "swap1" /dev/sda2
```

Create swap with a label.

```bash
mkswap -f /dev/sdb1
```

Force creation on a device that may already have data or a filesystem.

```bash
dd if=/dev/zero of=/swapfile bs=1M count=2048
mkswap /swapfile
chmod 600 /swapfile
swapon /swapfile
```

Create a 2 GB swap file and activate it.

```bash
mkswap -U "random" /dev/sda2
```

Assign a random UUID to the swap area.

## Practical Notes

- Activate the swap area with `swapon /dev/sda2` and deactivate with `swapoff /dev/sda2`.
- To make swap permanent, add an entry to `/etc/fstab`:
  - Partition: `/dev/sda2 none swap defaults 0 0`
  - File: `/swapfile none swap defaults 0 0`
- Use `swapon --show` to list active swap areas.
- Swap files must not have holes. Always use `dd` (not `cp` or truncate) to create them.
- Set permissions on swap files to `600` for security, since they may contain sensitive data.

