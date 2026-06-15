---
name: vgconvert
summary: Convert LVM volume group metadata format.
category: System
tags: lvm, volume group, convert, metadata, format
popular: false
---

## Additional Notes

`vgconvert` converts LVM volume group metadata from one format to another. It is primarily used to migrate between LVM1 (the old, deprecated LVM implementation) and LVM2 (the current implementation with the `lvm2` metadata format).

On modern systems, LVM1 metadata is essentially nonexistent, and this command is very rarely needed. The LVM2 metadata format supports advanced features like snapshots, thin provisioning, RAID, caching, and resizing.

## Syntax

```bash
vgconvert [options] volume_group...
```

## Parameters

- `volume_group`: Name of the volume group to convert.

## Common Options

- `-M`, `--metadatatype lvm1|lvm2`: Set the metadata format to convert to.
- `--labelsector sector`: Specify the sector for the label.
- `-A`, `--autobackup y|n`: Control metadata backup.
- `-t`, `--test`: Do not write changes, just check.

## Examples

```bash
vgconvert -M lvm2 vg_data
```

Convert `vg_data` to LVM2 metadata format.

## Practical Notes

- LVM1 is deprecated and no longer supported in recent LVM versions.
- This command is rarely needed on modern systems since LVM2 has been the default for decades.
- Backup the volume group metadata with `vgcfgbackup` before any conversion.
- All logical volumes in the VG must be inactive during conversion.
- If the conversion fails, use `vgcfgrestore` to restore the original metadata.
