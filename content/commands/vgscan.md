---
name: vgscan
summary: Scan all disks for LVM volume groups.
category: System
tags: lvm, volume group, scan, discover, detect
popular: false
---

## Additional Notes

`vgscan` scans the system for LVM volume groups by checking all available block devices for LVM metadata. It reads the LVM labels and metadata areas and registers any discovered volume groups with the LVM subsystem. It also creates or updates the LVM cache file (`/etc/lvm/cache/.cache`) that other LVM commands use.

`vgscan` is commonly run after adding new disks, recovering from a missing device, or when LVM commands are not seeing all expected volume groups. It is automatically run at boot by LVM init scripts or systemd services.

## Syntax

```bash
vgscan [options]
```

## Parameters

- `options`: Flags that change how `vgscan` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-v`, `--verbose`: Show detailed information about each VG found.
- `--cache`: Update the LVM cache file (the default behavior).
- `--mknodes`: Create the `/dev/VG_NAME/` device nodes for all LVs.
- `--ignorelockingfailure`: Ignore lock failures (useful in recovery scenarios).
- `-P`, `--partial`: Allow activation of VGs with missing PVs.
- `--uvuuid`: Scan in UUID-based mode.

## Examples

```bash
vgscan
```

Scan all disks for volume groups.

```bash
vgscan -v
```

Scan with verbose output showing device paths and VG details.

```bash
vgscan --mknodes
```

Scan and ensure all LV device nodes exist.

```bash
vgscan --cache
```

Force update of the LVM cache file.

## Practical Notes

- `vgscan` itself does not activate volume groups. Run `vgchange -ay` after scanning to activate them.
- After adding a new disk that belongs to an existing VG, `vgscan` discovers the VG via the new PV.
- In recovery scenarios, `--ignorelockingfailure` and `-P` can help when a PV is missing but the VG should still be visible.
- The cache file lists all PVs and VGs; if it becomes stale, `vgscan --cache` refreshes it.
- For more detailed information on a specific VG, use `vgdisplay`.
