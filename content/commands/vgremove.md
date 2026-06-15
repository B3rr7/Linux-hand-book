---
name: vgremove
summary: Remove an LVM volume group.
category: System
tags: lvm, volume group, remove, delete, destroy
popular: false
---

## Additional Notes

`vgremove` removes an LVM volume group from the system. All logical volumes in the volume group must be removed first, or the `-f` flag can be used to force removal. After removal, the underlying physical volumes become free and can be reused by other volume groups or for other purposes.

This command is irreversible. It destroys the volume group metadata, making any remaining data on the constituent physical volumes inaccessible unless the metadata is restored from backup.

## Syntax

```bash
vgremove [options] volume_group...
```

## Parameters

- `volume_group`: Name of the volume group to remove.

## Common Options

- `-f`, `--force`: Force removal even if logical volumes exist (they will be removed too).
- `-A`, `--autobackup y|n`: Control metadata backup.
- `-t`, `--test`: Do not perform the operation, just show what would happen.

## Examples

```bash
vgremove vg_data
```

Remove the `vg_data` volume group. Requires removing all LVs first.

```bash
vgremove -f vg_data
```

Force remove `vg_data` and all its logical volumes.

## Practical Notes

- Removing a VG that contains active LVs may fail. Deactivate the VG first with `vgchange -an vg_name`.
- All data in the VG is lost upon removal. Verify with `lvdisplay` and `vgdisplay` first.
- After removal, the PVs can be re-initialized with `pvcreate` or used directly.
- Metadata backup (`/etc/lvm/backup/`) can restore a removed VG if no `pvcreate` was run on the PVs afterward.
- Always confirm the correct VG name before removal.
