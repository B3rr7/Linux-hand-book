---
name: fsck
summary: Check and repair Linux filesystems.
category: Disk
tags: filesystem, repair, disk, check
popular: false
---

## Additional Notes

`fsck` is a disk and filesystem command used to check and repair Linux filesystems. It is a frontend that dispatches to filesystem-specific checkers such as e2fsck for ext4 or fsck.xfs for XFS. The -A flag checks all filesystems listed in /etc/fstab.

## Syntax

```bash
fsck [options] [device-or-path]
```

## Parameters

- `options`: Flags that change how `fsck` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `-A`: Check filesystems from `/etc/fstab`.
- `-N`: Show what would be done without running checks.
- `-y`: Answer yes to prompts.

## Examples

```bash
sudo fsck /dev/sdb1
sudo fsck -N /dev/sdb1
```

## Practical Notes

Do not run repair checks on a mounted writable filesystem unless the filesystem documentation says it is safe.
