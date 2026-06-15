---
name: mknod
summary: Create block or character device special files.
category: Administration
tags: device, block, character, mknod, udev
popular: false
---

## Additional Notes

`mknod` creates a block or character device file in the filesystem. Device files are the interface between user space and kernel device drivers. Each device file has a major number (identifying the driver) and a minor number (identifying the specific device instance).

On modern Linux systems, device files are created automatically by `udev` (or `devtmpfs`) at boot time, so `mknod` is rarely needed. It is primarily used in minimal environments, initramfs, containers, or when manually setting up a device node that `udev` does not handle.

## Syntax

```bash
mknod [options] name type major minor
```

## Parameters

- `name`: Path to the device file to create.
- `type`: Device type: `b` for block device, `c` or `u` for character device, `p` for a FIFO (named pipe).
- `major`: The major device number (integer). Ignored for FIFOs.
- `minor`: The minor device number (integer). Ignored for FIFOs.

## Common Options

- `-m mode`, `--mode mode`: Set the file permissions (e.g., `-m 644`).
- `-Z`, `--context`: Set the SELinux security context.
- `--help`: Show help and exit.
- `--version`: Show version information.

## Examples

```bash
mknod /dev/null c 1 3
```

Create the `/dev/null` character device (major 1, minor 3).

```bash
mknod -m 660 /dev/sda b 8 0
```

Create a block device with permissions 660.

```bash
mknod /tmp/myfifo p
```

Create a named pipe (FIFO) at `/tmp/myfifo`.

```bash
mknod /dev/loop0 b 7 0
```

Create the first loop device.

## Common Device Numbers

- `1, 3`: `/dev/null` (character)
- `1, 8`: `/dev/random` (character)
- `1, 9`: `/dev/urandom` (character)
- `8, 0`: `/dev/sda` (block, first SCSI/SATA disk)
- `8, 1`: `/dev/sda1` (first partition)
- `7, 0`: `/dev/loop0` (block, first loop device)
- `4, 0`: `/dev/tty0` (character, first virtual console)

## Practical Notes

- Use `ls -l /dev/sda` to see the major/minor numbers of existing devices.
- Device major numbers are assigned by the Linux kernel and listed in `Documentation/admin-guide/devices.txt`.
- In most cases, let `udev` manage device files. Only use `mknod` in recovery or embedded scenarios.
- To remove a device file, use `rm` just like a regular file.

