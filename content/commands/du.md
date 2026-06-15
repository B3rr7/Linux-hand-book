---
name: du
summary: Estimate file and directory disk usage.
category: Disk
tags: disk, size, directory, storage, usage
popular: true
---

## Additional Notes

`du` shows how much disk space files and directories use. It is the command you use after `df` tells you a filesystem is full and you need to find what is taking space.

By default, `du` works recursively, so use depth limits or summary mode when checking large directories.

## Syntax

```bash
du [options] [file-or-directory...]
```

## Parameters

- `options`: Flags that change how `du` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `-h`, `--human-readable`: Show readable sizes.
- `-s`, `--summarize`: Show only a total for each argument.
- `-a`, `--all`: Show files as well as directories.
- `-c`, `--total`: Show a grand total.
- `-d N`, `--max-depth=N`: Limit directory depth.
- `--apparent-size`: Show apparent file size instead of disk blocks used.
- `-x`, `--one-file-system`: Do not cross filesystem boundaries.

## Examples

```bash
du -sh *
```

Show summary sizes for items in the current directory.

```bash
du -sh /var/log
```

Show total disk usage of `/var/log`.

```bash
du -h -d 1 /home/rani
```

Show one level of directory sizes.

```bash
du -ah . | sort -h | tail
```

Find large files and directories under the current path.

```bash
du -ch *.iso
```

Show sizes for ISO files and a total.

```bash
du -xhd 1 /
```

Show top-level usage under `/` without crossing into other filesystems.

## Practical Notes

- `du` can take time on large trees because it walks files.
- Use `du -sh *` as a quick first step.
- Use `sort -h` to sort human-readable sizes.
- `du` and `df` can disagree because deleted open files, reserved blocks, and filesystem metadata matter.
- For interactive cleanup, `ncdu` is often easier if installed.
