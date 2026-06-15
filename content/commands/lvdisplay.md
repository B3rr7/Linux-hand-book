---
name: lvdisplay
summary: Show detailed information about LVM logical volumes.
category: Disk
tags: lvm, logical-volume, disk, display, info
popular: false
---

## Additional Notes

`lvdisplay` displays detailed information about LVM logical volumes, including size, allocation policy, status, device path, and read/write permissions. When run without arguments, it shows information for all logical volumes on the system.

It is the primary command for inspecting the configuration and status of logical volumes. For a more compact overview, `lvs` can be used instead.

## Syntax

```bash
lvdisplay [options] [logical-volume-path...]
```

## Parameters

- `logical-volume-path`: Path to a specific logical volume (e.g., `/dev/vgname/lvname`). If omitted, all logical volumes are displayed.

## Common Options

- `-a`, `--all`: Show information about all logical volumes, including internal volumes.
- `-c`, `--colon`: Use colon-separated output format (useful for scripting).
- `-s`, `--short`: Show a short listing format.
- `-m`, `--maps`: Show the mapping of logical extents to physical extents.
- `--columns`: Display output in column format (like `lvs`).

## Examples

```bash
lvdisplay
```

Show detailed info about all logical volumes.

```bash
lvdisplay /dev/myvg/mylv
```

Show details for a specific logical volume.

```bash
lvdisplay -m /dev/myvg/mylv
```

Show the physical extent mapping for the volume.

```bash
lvdisplay -c
```

Colon-delimited output for scripting.

```bash
lvdisplay -s
```

Short listing.

## Practical Notes

- The device major and minor numbers shown by `lvdisplay` are dynamic and can change after reboot.
- The `-m` option is essential for understanding where data is physically located, especially with striping or mirroring.
- For monitoring, `lvs` with `--units` and `--reportformat` gives more flexible output.

