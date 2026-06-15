---
name: vgextend
summary: Add physical volumes to an LVM volume group.
category: System
tags: lvm, volume group, extend, add, physical volume
popular: false
---

## Additional Notes

`vgextend` adds one or more physical volumes (PVs) to an existing LVM volume group. This increases the total storage pool available for logical volumes. The added PVs must already be initialized with `pvcreate`.

Extending a volume group is a common operation when more disk space is needed. The new space can then be allocated to existing logical volumes with `lvextend` or used for new LVs.

## Syntax

```bash
vgextend [options] volume_group physical_volume...
```

## Parameters

- `volume_group`: Name of the volume group to extend.
- `physical_volume`: One or more block devices already initialized with `pvcreate`.

## Common Options

- `-A`, `--autobackup y|n`: Enable or disable metadata backup.
- `-f`, `--force`: Force the addition even if the PV is already used by another VG or is misaligned.
- `--restoremissing`: Restore a previously missing PV.
- `-Z`, `--zero y|n`: Zero the first sector of the new PVs.

## Examples

```bash
vgextend vg_data /dev/sdd1
```

Add `/dev/sdd1` to the `vg_data` volume group.

```bash
vgextend vg_data /dev/sdd1 /dev/sde1
```

Add two physical volumes at once.

```bash
vgextend --restoremissing vg_data /dev/sdb1
```

Restore a previously missing PV (after replacing a failed disk with the same device).

## Practical Notes

- A PV can only belong to one volume group at a time. Use `pvchange` or `vgsplit` to move a PV between VGs.
- After extending the VG, use `lvresize` or `lvextend` to allocate the new space to logical volumes.
- Run `pvcreate` on the device first: `pvcreate /dev/sdd1`.
- To remove a PV from a VG, use `vgreduce`.
- If the PV was previously used in a different VG and contains data, use `pvcreate -ff` to force initialization (all data will be lost).
