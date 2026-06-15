---
name: lvscan
summary: Scan all disks for LVM logical volumes.
category: Disk
tags: lvm, logical-volume, scan, disk, discover
popular: false
---

## Additional Notes

`lvscan` scans all available block devices on the system for LVM logical volumes and displays a list of those found. It activates LVM devices if needed and shows the status (active or inactive) of each volume.

It is useful after adding new disks, moving storage between systems, or when LVM volumes do not appear after a reboot. It provides a quick overview of all logical volumes available on the system.

## Syntax

```bash
lvscan [options]
```

## Parameters

- `options`: Flags that change how `lvscan` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-a`, `--all`: Show all volumes, including internal volumes.
- `-b`, `--blockdevice`: Show the block device major and minor numbers.
- `-i`, `--cache`: Scan the LVM cache only instead of full device scanning.
- `-n`, `--novolumegroup`: Show only volumes that are not part of any volume group.

## Examples

```bash
lvscan
```

Scan all devices and list all logical volumes.

```bash
lvscan -a
```

Show all volumes, including internal LVM volumes.

```bash
lvscan -b
```

Show block device numbers alongside volume information.

## Practical Notes

- `lvscan` is often run automatically by the LVM system at boot via the `lvm2` service.
- If a logical volume does not appear, run `pvscan` and `vgscan` first to ensure physical volumes and volume groups are detected.
- The output indicates whether a volume is `ACTIVE` or `INACTIVE`. Inactive volumes must be activated with `lvchange -ay` before use.

