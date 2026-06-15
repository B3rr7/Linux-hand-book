---
name: badblocks
summary: Check a disk device for bad blocks.
category: Disk
tags: disk, filesystem, storage, health
popular: false
---

## Additional Notes

`badblocks` scans a block device for unreadable or unreliable blocks. It is a low-level diagnostic tool and can be destructive when used with write-mode tests.

Use it carefully when checking failing disks, preparing old drives, or feeding bad-block information into filesystem tools.

## Syntax

```bash
badblocks [options] device [last-block] [first-block]
```

## Parameters

- `device`: Block device such as `/dev/sdb` or `/dev/sdb1`.
- `last-block`: Optional ending block.
- `first-block`: Optional starting block.
- `options`: Read-only, write-mode, block-size, and output controls.

## Common Options

- `-v`: Verbose output.
- `-s`: Show progress.
- `-n`: Non-destructive read-write test. Still risky on unhealthy disks.
- `-w`: Destructive write-mode test. Erases data.
- `-o FILE`: Write bad block list to a file.
- `-b SIZE`: Set block size.
- `-c NUM`: Number of blocks tested at a time.

## Examples

```bash
sudo badblocks -sv /dev/sdb
```

Run a read-only scan with progress.

```bash
sudo badblocks -sv -o badblocks.txt /dev/sdb
```

Save bad block locations to a file.

```bash
sudo badblocks -wsv /dev/sdb
```

Run a destructive write test. This erases data.

## Practical Notes

- Double-check device names with `lsblk` before running this command.
- Do not run destructive tests on a disk containing data you need.
- SMART tools such as `smartctl` are often better for health diagnosis.
