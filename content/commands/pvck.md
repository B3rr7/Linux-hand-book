---
name: pvck
summary: Check LVM physical volume metadata for consistency.
category: Disk
tags: lvm, physical volume, check, repair, metadata, recovery
popular: false
---

## Additional Notes

`pvck` checks the consistency of LVM (Logical Volume Manager) metadata on physical volumes. It reads and validates the LVM label and metadata area at the beginning of the disk, reporting any corruption, inconsistencies, or structural problems.

`pvck` is a diagnostic and recovery tool. When an LVM physical volume fails, is damaged, or has corrupted metadata, `pvck` can detect the issues and potentially repair them. In severe cases, `pvck --repair` can restore metadata from backup areas if available.

## Syntax

```bash
pvck [options] [physical-volume...]
```

## Parameters

- `physical-volume`: Device path such as `/dev/sda1` or `/dev/nvme0n1p2`.

## Common Options

- `-v`, `--verbose`: Show detailed metadata information.
- `-vv`: Very verbose, showing all metadata locations.
- `--labelsector sector`: Specify the sector containing the LVM label (default 1).
- `--metadatatype type`: Specify the metadata type (1 or 2).
- `--repair`: Attempt to repair the physical volume metadata.
- `--dump`: Dump metadata to standard output.
- `--dump N`: Dump metadata from a specific metadata area.
- `-f file`: Use a specific metadata file for repair operations.
- `-y`, `--yes`: Answer yes to all prompts (for scripting).
- `--help`: Show help.
- `--version`: Show version.

## Examples

```bash
pvck /dev/sdb1
```

Check the LVM metadata on `/dev/sdb1` for consistency.

```bash
pvck -v /dev/sdb1
```

Check with verbose output showing metadata details.

```bash
pvck --dump /dev/sdc1
```

Dump LVM metadata from the physical volume to stdout.

```bash
pvck --repair /dev/sdb1
```

Attempt to repair damaged metadata on the physical volume.

```bash
pvck --labelsector 0 /dev/sda1
```

Check the LVM label at sector 0 instead of the default sector 1.

## Practical Notes

- `pvck` is a specialized recovery tool. For routine LVM diagnostics, use `pvdisplay`, `pvscan`, or `pvs`.
- The `--repair` option should be used cautiously and ideally on a backup image or after snapshotting the volume.
- `pvck` cannot repair data on the disk, only the LVM metadata headers.
- Multiple metadata areas may exist on a PV. Version 2 metadata stores copies at the beginning and end of the device.
- If `pvck` fails to find valid metadata, the physical volume may need to be recreated (with data loss).
- Always back up PV metadata with `pvdisplay --maps > pv_backup.txt` before making changes to LVM configuration.
