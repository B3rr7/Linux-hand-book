---
name: vgchange
summary: Change attributes of LVM volume groups.
category: System
tags: lvm, volume group, activate, deactivate, change
popular: false
---

## Additional Notes

`vgchange` changes the attributes of LVM volume groups (VGs), including activating or deactivating all logical volumes in a volume group, changing the allocation policy, and enabling or disabling cluster mode. It is part of the LVM2 suite for managing logical volumes.

The most common use is `vgchange -ay` to activate all volume groups (making their logical volumes available), or `vgchange -an` to deactivate them. This is typically run automatically at boot by LVM init scripts or systemd units.

## Syntax

```bash
vgchange [options] [volume_group...]
```

## Parameters

- `options`: Flags that change how `vgchange` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-a y`, `--activate y`: Activate the volume group.
- `-a n`, `--activate n`: Deactivate the volume group.
- `-p`, `--permission rw|r`: Set read-write or read-only permission.
- `-x`, `--resizeable y|n`: Allow or prevent resizing of the volume group.
- `-l`, `--logicalvolume`: Maximum number of logical volumes allowed.
- `-P`, `--partial`: Allow activation of volume groups with missing PVs.
- `-A`, `--autobackup y|n`: Control metadata backup.
- `--alloc cling|contiguous|anywhere|normal`: Set allocation policy.
- `--poll y|n`: Control background processing of pvmove/lvconvert.

## Examples

```bash
vgchange -ay
```

Activate all volume groups.

```bash
vgchange -an vg_data
```

Deactivate the `vg_data` volume group.

```bash
vgchange -p rw vg_data
```

Set `vg_data` to read-write.

```bash
vgchange -x n vg_data
```

Prevent resizing of `vg_data`.

## Practical Notes

- Deactivating a volume group requires that no logical volumes in that VG are in use.
- Use `lsof` or `fuser` to find processes using a logical volume before deactivation.
- `vgchange -an` is useful before removing a volume group.
- For individual logical volume activation, use `lvchange` instead.
- Changes made with `vgchange` are immediate and persistent.
