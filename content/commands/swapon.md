---
name: swapon
summary: Enable a swap device or file.
category: System
tags: swap, memory, disk, storage, virtual-memory
popular: false
---

## Additional Notes

`swapon` activates a swap device or swap file, adding it to the kernel's pool of swap space. The system uses swap space as virtual memory, paging out infrequently accessed memory pages to disk to free physical memory for active processes. Linux supports both swap partitions and swap files.

Swap space is commonly configured during installation, but can be added later without rebooting. Swap files are convenient for adding swap without repartitioning. The `swapon -a` command (run at boot) enables all swap areas listed in `/etc/fstab`.

## Syntax

```bash
swapon [options] [device_or_file]
```

## Parameters

- `device_or_file`: The swap partition or swap file to activate (e.g., `/dev/sda2`, `/swapfile`).

## Common Options

- `-a`, `--all`: Enable all swap devices and files listed in `/etc/fstab`.
- `-s`: Show swap usage summary by device (deprecated; use `--show`).
- `--show`: Display a formatted table of active swap areas.
- `-p`, `--priority priority`: Set the swap priority (higher number = used first). Range is typically -1 to 32767.
- `-L label`: Enable the swap device with the specified LABEL.
- `-U uuid`: Enable the swap device with the specified UUID.
- `-v`, `--verbose`: Show detailed output while enabling swap.
- `-e`, `--ifexists`: Skip nonexistent devices without error.
- `--fixpgsz`: Reinitialize swap space if the page size has changed (used after migration).

## Examples

```bash
swapon /dev/sda2
```

Enable the swap partition `/dev/sda2`.

```bash
swapon /swapfile
```

Enable a swap file.

```bash
swapon -a
```

Enable all swap areas listed in `/etc/fstab`.

```bash
swapon --show
```

Show all active swap areas with size and usage information.

```bash
swapon -p 10 /swapfile
```

Enable a swap file with priority 10.

```bash
swapon -v /dev/sda2
```

Enable swap with verbose output.

```bash
swapon -s
```

Show a summary of active swap areas (legacy format).

## Creating a Swap File

```bash
# Create 1GB swap file
dd if=/dev/zero of=/swapfile bs=1M count=1024
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
```

Then add to `/etc/fstab`:
```
/swapfile none swap defaults 0 0
```

## Practical Notes

- Use `swapon --show` to verify which swap areas are active and their sizes.
- Swap priority determines which swap area is used first; higher priorities are preferred.
- Swap files require `chmod 600` for security; the kernel refuses swap files with insecure permissions.
- For swap files, the underlying filesystem must support the file as a swap backing store (ext4, xfs).
- Btrfs does not support swap files (with some exceptions on recent kernels).
- The total available swap can be increased or decreased at any time.
- Running without swap can cause the kernel's Out-Of-Memory (OOM) killer to terminate processes under memory pressure.
