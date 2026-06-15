---
name: losetup
summary: Set up and control loop devices for mounting files in images.
category: Files
tags: loop, device, mount, image, iso
popular: false
---

## Additional Notes

`losetup` associates a loop device (e.g., `/dev/loop0`) with a regular file, allowing the file to be treated as a block device. This is how you mount disk images, ISO files, and filesystem images without writing them to physical media.

The kernel's loop device driver transparently translates block-level read/write operations on the loop device into file read/write operations on the backing file. Each loop device (`/dev/loopN`) can be associated with one file at a time.

## Syntax

```bash
losetup [options] [loop-device] [backing-file]
```

## Parameters

- `loop-device`: The loop device to use (e.g., `/dev/loop0`). If omitted, the kernel automatically finds a free device.
- `backing-file`: The file to associate with the loop device (e.g., `disk.img`, `file.iso`).

## Common Options

- `-f`, `--find`: Find the first unused loop device.
- `-a`, `--all`: Show all loop devices and their backing files.
- `-j file`, `--associated file`: Show the loop device associated with a specific backing file.
- `-d`, `--detach`: Detach the loop device from its backing file.
- `-D`, `--detach-all`: Detach all currently associated loop devices.
- `-o offset`, `--offset offset`: Start at an offset within the file (in bytes).
- `--sizelimit size`: Limit the data size on the loop device.
- `-P`, `--partscan`: Force the kernel to scan the partition table on the loop device.
- `-r`, `--read-only`: Set up the loop device as read-only.
- `-e encryption`, `--encryption encryption`: Enable encryption (deprecated, use `cryptsetup` instead).
- `-L`, `--nooverlap`: Avoid overlapping loop device detach/setup operations.

## Examples

```bash
losetup -f
```

Show the first available loop device.

```bash
losetup -f disk.img
```

Associate a free loop device with `disk.img`.

```bash
losetup /dev/loop0 disk.img
```

Explicitly associate `/dev/loop0` with `disk.img`.

```bash
losetup -a
```

List all currently associated loop devices.

```bash
losetup -d /dev/loop0
```

Detach a specific loop device.

```bash
losetup -D
```

Detach all loop devices.

```bash
losetup -f -P disk.img
```

Associate a free loop device with partition scanning enabled.

```bash
losetup -r -f iso-file.iso
```

Set up a loop device in read-only mode for an ISO file.

```bash
mount /dev/loop0 /mnt
```

Mount the filesystem through the loop device.

## Practical Notes

- Modern Linux supports mounting files directly with `mount -o loop file.iso /mnt`, which internally calls `losetup`.
- Use `-P` when the file contains a partition table (like a full disk image) so each partition appears as `/dev/loop0p1`, `/dev/loop0p2`, etc.
- Loop devices are limited in number; check `/dev/loop-control` or `cat /proc/sys/dev/loop/max_loop` for the maximum.
- Always detach loop devices with `losetup -d` when done to free kernel resources.

