---
name: lvremove
summary: Remove LVM logical volumes.
category: Disk
tags: lvm, logical-volume, remove, delete, disk
popular: false
---

## Additional Notes

`lvremove` deletes one or more LVM logical volumes. Once removed, the data on the volume is inaccessible and the physical extents are returned to the volume group for reuse.

A logical volume must be deactivated before it can be removed unless the `-f` force option is used. Removing a volume that is currently in use (mounted or active) will fail unless forced.

## Syntax

```bash
lvremove [options] logical-volume-path...
```

## Parameters

- `logical-volume-path`: Path to one or more logical volumes to remove.

## Common Options

- `-f`, `--force`: Force removal without confirmation. Use twice for extra force.
- `-A`, `--select`: Select volumes based on a logical expression.
- `-a`, `--all`: Remove all logical volumes in a volume group (if path is a VG).
- `-d`, `--debug`: Enable debug output.

## Examples

```bash
lvremove /dev/myvg/oldvolume
```

Remove a single logical volume after confirmation.

```bash
lvremove -f /dev/myvg/oldvolume
```

Force removal without prompting.

```bash
lvremove /dev/myvg/vol1 /dev/myvg/vol2
```

Remove multiple logical volumes.

```bash
lvremove -f /dev/myvg
```

Remove all logical volumes in the `myvg` volume group.

## Practical Notes

- Deactivate a volume with `lvchange -an /dev/vg/name` before removing if it is active.
- Removing a snapshot volume is safe and only affects copy-on-write data.
- Data on a removed LV is not securely wiped. Use `shred` or `dd` before removal if sensitive data is involved.

