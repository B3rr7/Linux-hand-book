---
name: vgcreate
summary: Create an LVM volume group.
category: System
tags: lvm, volume group, create, pv, storage
popular: false
---

## Additional Notes

`vgcreate` creates an LVM volume group (VG) from one or more physical volumes (PVs). A volume group is a pool of storage that can be subdivided into logical volumes (LVs), which act like flexible disk partitions.

When you create a VG, the physical extents (PEs) from the constituent PVs are combined into a single storage pool. The VG name must be unique on the system. You can later create, resize, and remove logical volumes from the VG, as well as add or remove physical volumes.

## Syntax

```bash
vgcreate [options] volume_group physical_volume...
```

## Parameters

- `volume_group`: Name for the new volume group.
- `physical_volume`: One or more block devices (e.g. `/dev/sdb1`, `/dev/sdc1`) already initialized with `pvcreate`.

## Common Options

- `-s`, `--physicalextentsize size`: Set the physical extent size (default 4 MiB). Affects minimum LV size and alignment.
- `-p`, `--maxphysicalvolumes N`: Limit the maximum number of PVs in the VG.
- `-l`, `--maxlogicalvolumes N`: Limit the maximum number of LVs in the VG.
- `-A`, `--autobackup y|n`: Enable or disable metadata backup.
- `--clustered y|n`: Create a clustered volume group (shared storage).
- `--zero y|n`: Zero the first sector of the PVs.

## Examples

```bash
vgcreate vg_data /dev/sdb1 /dev/sdc1
```

Create a volume group named `vg_data` using two physical volumes.

```bash
vgcreate -s 8M vg_data /dev/sdb1
```

Create a VG with 8 MiB physical extents.

```bash
vgcreate vg_system /dev/nvme0n1p3
```

Create a VG from a single NVMe partition.

## Practical Notes

- Initialize devices with `pvcreate` before adding them to a VG.
- The physical extent size should be chosen based on expected LV sizes. Larger extents work well for large volumes.
- Use `pvdisplay`, `vgdisplay`, and `lvdisplay` to inspect the storage stack.
- A VG can be extended later with `vgextend` or reduced with `vgreduce`.
- Logical volumes are created from the VG with `lvcreate`.
