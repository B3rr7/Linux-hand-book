---
name: vgrename
summary: Rename an LVM volume group.
category: System
tags: lvm, volume group, rename
popular: false
---

## Additional Notes

`vgrename` changes the name of an LVM volume group. The volume group must be inactive to rename it (use `vgchange -an vg_name` first). All references to the VG in device mapper (`/dev/mapper/`) and `/dev/VG_NAME/` are updated to the new name.

Renaming is useful when reorganizing storage naming conventions or correcting a misspelled volume group name. It does not affect the data on the logical volumes.

## Syntax

```bash
vgrename [options] old_name new_name
vgrename [options] old_uuid new_name
```

## Parameters

- `old_name`: Current volume group name.
- `new_name`: New volume group name (must be unique on the system).
- `old_uuid`: Current volume group UUID (if the name is unknown).

## Common Options

- `-A`, `--autobackup y|n`: Control metadata backup.
- `-t`, `--test`: Do not perform the operation, just show what would happen.
- `-v`, `--verbose`: Show detailed progress.

## Examples

```bash
vgchange -an vg_data
vgrename vg_data vg_production
vgchange -ay vg_production
```

Deactivate, rename, and reactivate a volume group.

```bash
vgrename 3t3k3t-3t3k-3t3k-3t3k-3t3k-3t3k-3t3k3t vg_data
```

Rename a VG using its UUID when the name is unknown or lost.

## Practical Notes

- The VG must be inactive (`vgchange -an`) before renaming.
- After renaming, update `/etc/fstab` and any mount scripts if they reference the old VG path.
- Device mapper paths change from `/dev/mapper/old_name-*` to `/dev/mapper/new_name-*`.
- If the new name conflicts with an existing VG, the rename fails.
- Use `vgs` or `vgdisplay` to find the VG UUID if needed.
