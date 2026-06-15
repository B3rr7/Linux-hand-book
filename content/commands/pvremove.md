---
name: pvremove
summary: Remove an LVM physical volume label.
category: Disk
tags: lvm, physical volume, remove, label, disk management
popular: false
---

## Additional Notes

`pvremove` removes the LVM (Logical Volume Manager) label and metadata from a physical volume, making it no longer recognized by LVM. After `pvremove`, the device can be repurposed as a regular disk or repartitioned.

This is the reverse operation of `pvcreate`. It is used when decomissioning storage, removing a disk from an LVM setup, or repurposing a PV that is no longer needed. The PV must be removed from its volume group (with `vgreduce`) before `pvremove` can succeed.

## Syntax

```bash
pvremove [options] [physical-volume...]
```

## Parameters

- `physical-volume`: Device path(s) such as `/dev/sdb1`, `/dev/sdc`.

## Common Options

- `-f`, `--force`: Force removal even if the device is still part of a volume group.
- `-ff`: Force removal without any confirmation prompts.
- `-v`, `--verbose`: Verbose output.
- `-y`, `--yes`: Answer yes to all prompts (for scripting).
- `--reportformat basic|json`: Output format.
- `--help`: Show help.
- `--version`: Show version.

## Examples

```bash
pvremove /dev/sdb1
```

Remove the LVM label from `/dev/sdb1`.

```bash
pvremove /dev/sdb /dev/sdc
```

Remove LVM labels from multiple devices.

```bash
pvremove -f /dev/sdb1
```

Force removal even if the volume group is not completely removed.

```bash
pvremove -y /dev/sdc1
```

Remove without confirmation.

```bash
pvremove /dev/nvme1n1p1
```

Remove the LVM label from an NVMe partition.

## Practical Notes

- The PV must first be removed from its volume group using `vgreduce <vgname> <pvname>` or by removing the entire VG with `vgremove`.
- Running `pvremove` on a PV that is still part of a VG will corrupt the volume group metadata. Always check with `pvs` first.
- After `pvremove`, the device is no longer an LVM PV. Use `wipefs -a /dev/sdb1` to fully clear any residual signatures.
- Data on the PV is not destroyed by `pvremove`, but LVM will no longer be able to access logical volumes on it.
- For complete cleanup of an LVM stack: unmount LVs, deactivate VG (`vgchange -an`), remove LVs, remove VG, then `pvremove`.
- The `-f` flag bypasses safety checks. Use it only when you are certain no VG uses the PV.
