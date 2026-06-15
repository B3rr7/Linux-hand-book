---
name: blockdev
summary: Call block device ioctls from the command line.
category: Disk
tags: block device, disk, storage, ioctl
popular: false
---

## Additional Notes

`blockdev` queries and changes low-level block device settings. It can report size, sector counts, read-only state, block size, and buffering behavior.

Use it carefully. Some options only query information, while others change device behavior.

## Syntax

```bash
blockdev [options] device...
```

## Parameters

- `device`: Block device such as `/dev/sda`, `/dev/nvme0n1`, or `/dev/loop0`.
- `options`: Query or set low-level block device properties.

## Common Options

- `--getsize64`: Print device size in bytes.
- `--getsz`: Print size in 512-byte sectors.
- `--getro`: Show whether the device is read-only.
- `--setro`: Set device read-only.
- `--setrw`: Set device read-write.
- `--getbsz`: Get block size.
- `--flushbufs`: Flush buffers.
- `--rereadpt`: Ask the kernel to reread the partition table.

## Examples

```bash
sudo blockdev --getsize64 /dev/sda
```

Show disk size in bytes.

```bash
sudo blockdev --getro /dev/sda
```

Check read-only state.

```bash
sudo blockdev --rereadpt /dev/sda
```

Reread the partition table.

## Practical Notes

- Double-check device names with `lsblk`.
- Avoid changing block device state on mounted filesystems unless you know the impact.
- Many storage tasks are safer through higher-level tools such as `lsblk`, `parted`, `fdisk`, or `blockdev` query-only options.
