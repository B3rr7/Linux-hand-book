---
name: hdparm
summary: View or tune hard disk parameters.
category: Disk
tags: disk, filesystem, storage
popular: false
---

## Additional Notes

`hdparm` is a disk and filesystem command used to view or tune hard disk parameters. It reports disk geometry, cache settings, and power management features. Use -t and -T for simple read-speed benchmarks.

## Syntax

```bash
hdparm [options] [device-or-path]
```

## Parameters

- `options`: Flags that change how `hdparm` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
hdparm --help
man hdparm
```

## Practical Notes

Options can vary by distribution and package version. Use `man hdparm`, `hdparm --help`, or the package documentation for exact syntax.
