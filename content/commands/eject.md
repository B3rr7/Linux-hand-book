---
name: eject
summary: Eject removable media.
category: Disk
tags: disk, filesystem, storage
popular: false
---

## Additional Notes

`eject` is a disk and filesystem command used to eject removable media. It can eject CD/DVD drives, USB drives, and other removable media. On some systems it can also close the tray with -t.

## Syntax

```bash
eject [options] [device-or-path]
```

## Parameters

- `options`: Flags that change how `eject` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
eject --help
man eject
```

## Practical Notes

Options can vary by distribution and package version. Use `man eject`, `eject --help`, or the package documentation for exact syntax.
