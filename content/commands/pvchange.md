---
name: pvchange
summary: Change attributes of an LVM physical volume.
category: Disk
tags: lvm, physical volume, pv, metadata, disk management
popular: false
---

## Additional Notes

`pvchange` modifies attributes of one or more LVM (Logical Volume Manager) physical volumes. Attributes that can be changed include allocation permissions (whether the PV can be used for new allocations), metadata tagging, and the physical volume's UUID.

System administrators use `pvchange` when managing LVM storage: preventing a failing disk from being allocated further (`--allocatable n`), adding or removing tags for automated volume management, or changing the UUID of a cloned physical volume to avoid conflicts.

## Syntax

```bash
pvchange [options] [physical-volume...]
```

## Parameters

- `physical-volume`: Device path such as `/dev/sda1` or `/dev/nvme0n1p2`.

## Common Options

- `-x`, `--allocatable y|n`: Enable or disable allocation on the physical volume.
- `-u`, `--uuid`: Generate a new UUID for the physical volume.
- `--addtag tag`: Add a tag to the physical volume metadata.
- `--deltag tag`: Remove a tag from the physical volume metadata.
- `-a`, `--all`: Apply changes to all physical volumes in the system.
- `-f`, `--force`: Force the operation without confirmation prompts.
- `-y`, `--yes`: Answer yes to all prompts.
- `--metadataignore y|n`: Ignore or include this PV in metadata searches.
- `--metadata-cachesize bytes`: Set the metadata cache size.
- `-v`, `--verbose`: Verbose output.
- `--reportformat basic|json`: Output format for reports.

## Examples

```bash
pvchange -x n /dev/sdb1
```

Disable allocation on `/dev/sdb1`. No new LVM extents will be placed on this PV.

```bash
pvchange -x y /dev/sdb1
```

Re-enable allocation on a physical volume.

```bash
pvchange -x n --all
```

Disable allocation on all physical volumes. Use with caution.

```bash
pvchange -u /dev/sdc1
```

Generate a new UUID for `/dev/sdc1`. Useful after cloning a disk.

```bash
pvchange --addtag fast /dev/nvme0n1p2
```

Add the tag `fast` to the physical volume.

```bash
pvchange --deltag slow /dev/sda1
```

Remove the tag `slow` from the physical volume.

```bash
pvchange --uuid -f --yes /dev/sdb1
```

Change UUID forcefully without prompts (for automated scripting).

## Practical Notes

- All `pvchange` operations require LVM to have detected the physical volume. Run `pvscan` first if the PV is not visible.
- Disabling allocation (`-x n`) is useful when a disk reports I/O errors but you want to preserve existing data for recovery.
- Tags are used in LVM activation and volume group filtering. They can control which VGs activate in clustered or complex environments.
- Changing a UUID is needed when a physical volume is cloned (e.g., via `dd`) and both copies appear in the same system, causing LVM to see duplicate PVs.
- The `--all` flag modifies every physical volume in the system. Use with extreme caution.
- `pvchange` modifies PV metadata written to the disk. Always ensure backups of important data exist before changing attributes.
