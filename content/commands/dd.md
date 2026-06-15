---
name: dd
summary: Copy and convert raw data between files or devices.
category: Disk
tags: disk, image, copy, device, raw
popular: true
---

## Additional Notes

`dd` copies raw bytes from an input to an output. It is commonly used for disk images, USB writing, device reads, zero-filling, and low-level data conversion.

It is powerful and dangerous because a wrong output path can overwrite disks or important files.

## Syntax

```bash
dd if=input of=output [operands...]
```

## Parameters

- `if=INPUT`: Input file or device. Defaults to standard input.
- `of=OUTPUT`: Output file or device. Defaults to standard output.
- `bs=SIZE`: Block size for reads and writes.
- `count=N`: Copy N input blocks.
- `skip=N`: Skip N input blocks before copying.
- `seek=N`: Skip N output blocks before writing.

## Common Options

- `status=progress`: Show progress on GNU dd.
- `conv=fsync`: Flush output data before finishing.
- `conv=noerror,sync`: Continue after read errors and pad blocks. Useful for damaged media, but understand the result.
- `iflag=fullblock`: Read full input blocks where useful.

## Examples

```bash
sudo dd if=ubuntu.iso of=/dev/sdX bs=4M status=progress conv=fsync
```

Write an ISO image to a USB drive. Replace `/dev/sdX` carefully.

```bash
dd if=/dev/zero of=test.img bs=1M count=100
```

Create a 100 MiB zero-filled file.

```bash
sudo dd if=/dev/sda of=disk.img bs=64K status=progress
```

Copy a disk into an image file.

```bash
dd if=file.bin bs=1 count=16 | hexdump -C
```

Read the first 16 bytes of a file.

## Practical Notes

- Always verify device names with `lsblk` before writing to block devices.
- `of=/dev/sdX` writes to a whole disk, not a partition.
- Prefer specialized tools when they provide safer prompts for image writing.
