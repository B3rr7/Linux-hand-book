---
name: df
summary: Show filesystem disk space usage.
category: Disk
tags: disk, filesystem, space, storage, mount
popular: true
---

## Additional Notes

`df` reports disk space usage by filesystem. It helps answer: which mounted filesystem is full?

Use `df` for filesystem-level space and `du` for directory/file-level space. They solve related but different problems.

## Syntax

```bash
df [options] [file-or-filesystem...]
```

## Parameters

- `options`: Flags that change how `df` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `-h`, `--human-readable`: Show sizes like `10G` or `512M`.
- `-T`, `--print-type`: Show filesystem type.
- `-i`, `--inodes`: Show inode usage instead of block usage.
- `-a`, `--all`: Include pseudo, duplicate, and inaccessible filesystems.
- `-x TYPE`: Exclude filesystem type.
- `-t TYPE`: Include only filesystem type.

## Examples

```bash
df
```

Show disk usage for mounted filesystems.

```bash
df -h
```

Show disk usage in human-readable units.

```bash
df -h /
```

Show space for the filesystem containing `/`.

```bash
df -hT
```

Show space and filesystem types.

```bash
df -ih
```

Show inode usage. This helps when a disk has space but cannot create files.

```bash
df -h -x tmpfs
```

Hide `tmpfs` filesystems.

## Reading Output

- `Filesystem`: Device or virtual filesystem.
- `Size`: Total size.
- `Used`: Used space.
- `Avail`: Available space.
- `Use%`: Percent used.
- `Mounted on`: Mount point in the Linux directory tree.

## Practical Notes

- If `Use%` is near 100%, find large directories with `du`.
- If inode usage is 100%, many small files may be the problem.
- `df` follows mounted filesystems, not just physical disks.
- Snap, Docker, virtual filesystems, and temporary filesystems can make output noisy.
