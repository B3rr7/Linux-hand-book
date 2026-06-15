---
name: vgreduce
summary: Remove physical volumes from an LVM volume group.
category: System
tags: lvm, volume group, reduce, remove, physical volume
popular: false
---

## Additional Notes

`vgreduce` removes one or more physical volumes (PVs) from an LVM volume group. This reduces the total storage pool. A PV can only be removed if no logical volumes are using extents on that PV. Use `pvmove` to relocate data off the PV before removing it.

This operation is useful when decommissioning a disk, replacing a failed device, or reorganizing storage. After reduction, the freed PV can be added to another VG or used for other purposes.

## Syntax

```bash
vgreduce [options] volume_group physical_volume...
```

## Parameters

- `volume_group`: Name of the volume group.
- `physical_volume`: One or more PVs to remove.

## Common Options

- `-a`, `--all`: Remove all unused PVs from the VG.
- `--removemissing`: Remove missing PVs from the VG (when a disk has permanently failed).
- `-f`, `--force`: Force removal without confirmation.
- `-A`, `--autobackup y|n`: Control metadata backup.
- `-t`, `--test`: Do not perform the operation, just show what would happen.

## Examples

```bash
vgreduce vg_data /dev/sdd1
```

Remove `/dev/sdd1` from `vg_data`. The PV must have no used extents.

```bash
vgreduce --removemissing vg_data
```

Remove missing (failed) PVs from the VG.

```bash
pvmove /dev/sdd1
vgreduce vg_data /dev/sdd1
```

Move data off `/dev/sdd1` and then remove it.

```bash
vgreduce -a vg_data
```

Remove all unused PVs from the VG.

## Practical Notes

- Use `pvmove` first to migrate data off the PV being removed.
- If a disk has failed and cannot be replaced, use `--removemissing` to clean up the VG metadata.
- After reduction, you can reuse the PV elsewhere with `pvcreate` and `vgextend`.
- If the VG contains a RAID LV, removing a PV may degrade or affect redundancy.
- Always back up metadata with `vgcfgbackup` before structural changes.
