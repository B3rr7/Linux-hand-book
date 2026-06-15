---
name: mke2fs
summary: Create an ext2/ext3/ext4 filesystem.
category: Disk
tags: filesystem, ext2, ext3, ext4, format, mkfs
popular: false
---

## Additional Notes

`mke2fs` creates an ext2, ext3, or ext4 filesystem on a disk partition or other block device. It is the low-level tool behind the more commonly used `mkfs.ext2`, `mkfs.ext3`, and `mkfs.ext4` commands, which are symbolic links to `mke2fs` with appropriate defaults.

It configures the filesystem superblock, inode table, block groups, and journal (for ext3/ext4). The filesystem type and features are selected using the `-t` option or by which command name is used to invoke it.

## Syntax

```bash
mke2fs [options] device [blocks-count]
```

## Parameters

- `device`: The block device to format (e.g., `/dev/sda1`).
- `blocks-count`: The number of blocks on the filesystem. If omitted, the entire device is used.

## Common Options

- `-t type`: Filesystem type: `ext2`, `ext3`, or `ext4`.
- `-b size`: Block size in bytes (1024, 2048, or 4096).
- `-i bytes-per-inode`: Bytes per inode, controlling the maximum number of files.
- `-N inodes`: Explicitly set the number of inodes.
- `-m reserved-blocks-percent`: Percentage of blocks reserved for root (default 5%).
- `-O feature[,feature...]`: Enable specific filesystem features.
- `-O ^feature`: Disable a filesystem feature.
- `-j`: Create an ext3 journal.
- `-J size=size`: Set journal size for ext3/ext4.
- `-L label`: Set the filesystem volume label.
- `-U UUID`: Set the filesystem UUID.
- `-c`: Check the device for bad blocks before creating the filesystem.
- `-q`: Quiet mode.
- `-F`: Force formatting even if the device is in use or appears to have a filesystem.
- `-E options`: Extended filesystem options (e.g., `stride=`, `stripe_width=`).

## Examples

```bash
mke2fs -t ext4 /dev/sda1
```

Create an ext4 filesystem on `/dev/sda1`.

```bash
mke2fs -t ext3 -j /dev/sdb1
```

Create an ext3 filesystem with a journal.

```bash
mke2fs -t ext4 -L "DataVolume" /dev/sdc1
```

Create an ext4 filesystem with a volume label.

```bash
mke2fs -t ext4 -m 2 /dev/sda1
```

Create ext4 with only 2% reserved blocks for root.

```bash
mke2fs -t ext4 -O ^has_journal /dev/sda1
```

Create an ext4 filesystem without a journal (ext4 without the journal feature).

```bash
mke2fs -t ext4 -b 4096 -i 16384 /dev/sda1
```

Create ext4 with 4096-byte blocks and one inode per 16384 bytes.

## Practical Notes

- Formatting a device destroys all existing data. Double-check the device path.
- The default inode count is based on the `bytes-per-inode` ratio (default 16384). For many small files, increase the inode count with a lower `-i` value.
- Reserved blocks (default 5%) prevent non-root users from filling the disk completely, which can cause system issues.
- After formatting, use `tune2fs` to adjust filesystem parameters without recreating it.
- For SSDs, consider disabling the journal with `-O ^has_journal` for performance (at the cost of fsck recovery).

