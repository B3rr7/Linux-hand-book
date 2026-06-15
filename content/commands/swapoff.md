---
name: swapoff
summary: Disable a swap device or file.
category: System
tags: swap, memory, disk, storage, virtual-memory
popular: false
---

## Additional Notes

`swapoff` deactivates a swap device or swap file, removing it from the kernel's swap space pool. Once disabled, the system no longer uses that area for paging, and any pages currently stored there are paged back into physical memory (or swapped to another active swap area).

Disabling swap is necessary when resizing swap partitions, removing swap files, or changing swap priorities. The system must have enough free physical memory (or other active swap) to accommodate the pages currently in the swap area being disabled. If insufficient memory is available, `swapoff` will fail.

## Syntax

```bash
swapoff [options] [device_or_file]
```

## Parameters

- `device_or_file`: The swap partition or swap file to deactivate (e.g., `/dev/sda2`, `/swapfile`).

## Common Options

- `-a`, `--all`: Deactivate all swap devices and files listed in `/etc/fstab`.
- `-v`, `--verbose`: Show detailed output while disabling swap.
- `-L label`: Deactivate the swap device with the specified LABEL.
- `-U uuid`: Deactivate the swap device with the specified UUID.
- `-e`, `--ifexists`: Skip nonexistent devices without error.
- `-f`, `--force`: Force swapoff even if the device appears to be in use.

## Examples

```bash
swapoff /dev/sda2
```

Disable the swap partition `/dev/sda2`.

```bash
swapoff /swapfile
```

Disable a swap file.

```bash
swapoff -a
```

Disable all swap devices and files listed in `/etc/fstab`.

```bash
swapoff -L SWAP_ROOT
```

Disable the swap device with label `SWAP_ROOT`.

```bash
swapoff -v /dev/sda2
```

Disable swap with verbose output showing progress.

## Practical Notes

- Run `swapon --show` or `cat /proc/swaps` to see which swap areas are active.
- `swapoff -a` is often used before resizing or removing swap partitions.
- If `swapoff` fails due to insufficient memory, the system may need to be rebooted or have memory-intensive processes stopped.
- The kernel may take time to move all pages out of the swap area, especially on systems with high swap usage.
- After disabling a swap file, the file can be removed with `rm`.
- Swap areas listed in `/etc/fstab are re-enabled automatically on boot via `swapon -a`.
