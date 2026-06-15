---
name: pvdisplay
summary: Display detailed information about LVM physical volumes.
category: Disk
tags: lvm, physical volume, display, pv, metadata
popular: false
---

## Additional Notes

`pvdisplay` shows detailed information about LVM physical volumes. It displays the PV name, UUID, volume group membership, size, allocation status, physical extent (PE) sizes, and current usage details.

It provides more detail than `pvs` (which shows summary output) and is used by administrators who need complete metadata about their storage setup. `pvdisplay` can show information for specific PVs or all PVs on the system.

## Syntax

```bash
pvdisplay [options] [physical-volume...]
```

## Parameters

- `physical-volume`: Optional path to a specific device. If omitted, all PVs are displayed.

## Common Options

- `-c`, `--colon`: Output in colon-separated format (machine-parseable).
- `-C`, `--columns`: Output as columns (like `pvs`).
- `-m`, `--maps`: Display physical extent (PE) allocation map showing which logical volumes use which disk areas.
- `-s`, `--short`: Short format showing only basic information.
- `-v`, `--verbose`: More detailed output.
- `-vv`: Very verbose with additional debug information.
- `--units units`: Set display units (h for human-readable, b for bytes, k/m/g for KiB/MiB/GiB).
- `--aligned`: Align output columns for readability.
- `--all`: Show all PVs including those with metadata problems.
- `-S`, `--select selection`: Select PVs based on given criteria.
- `-O`, `--sort sort-args`: Sort output by specified fields.
- `--reportformat basic|json`: Output format.

## Examples

```bash
pvdisplay
```

Show detailed information about all physical volumes.

```bash
pvdisplay /dev/sdb1
```

Show details for a specific physical volume.

```bash
pvdisplay -m
```

Show the physical extent allocation map. This reveals which LVs occupy which disk areas.

```bash
pvdisplay -C
```

Columnar output format, similar to `pvs`.

```bash
pvdisplay -c /dev/sdb1
```

Machine-parseable colon-separated output.

```bash
pvdisplay -v /dev/sdb1
```

Verbose output for a specific PV.

```bash
pvdisplay --units g
```

Display sizes in gigabytes.

```bash
pvdisplay -S "pv_free > 0"
```

Show only PVs that have free (unallocated) space.

## Practical Notes

- The output shows total size, allocated size, and free space on each PV.
- The `-m` option is critical for understanding disk layout and planning expansions or migrations.
- When troubleshooting, `pvdisplay` reveals if a PV is missing, has incorrect metadata, or is part of an incomplete VG.
- If `pvdisplay` shows an unknown device, the PV may be missing or disconnected. Use `pvscan` to discover current PVs.
- For scripted monitoring, use `pvs --reportformat json` (newer LVM) for structured output.
- The `PE` (Physical Extent) size shown is the allocation unit for the VG. Typical sizes are 4 MiB.
