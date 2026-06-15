---
name: pvs
summary: Report information about LVM physical volumes.
category: Disk
tags: lvm, physical volume, report, pv, summary
popular: false
---

## Additional Notes

`pvs` displays a concise summary of all LVM (Logical Volume Manager) physical volumes on the system. It shows each PV device, its volume group membership, format version, attributes, size, physical extent information, and free/total space.

Unlike `pvdisplay` which shows detailed per-PV output, `pvs` provides a formatted table view with customizable columns. It is the preferred tool for getting a quick overview of LVM storage layout and availability. Administrators use `pvs` to check how much free space remains, verify PVs are active, and confirm VG membership.

## Syntax

```bash
pvs [options] [physical-volume...]
```

## Parameters

- `physical-volume`: Optional device path to show only a specific PV.

## Common Options

- `-a`, `--all`: Show all devices, including those not identifiable as PVs.
- `-o`, `-o+`, `-o-`: Specify output columns. Use `pvs -o pv_name,pv_free,pv_used`.
- `-O`, `--sort`: Sort output by specified columns.
- `-S`, `--select`: Select PVs based on criteria. Example: `pvs -S "pv_free > 0"`.
- `--segments`: Show physical extent segment information.
- `--units units`: Set display units: `h` (human-readable), `b`, `k`, `m`, `g`, `t`, `p`, `e`.
- `--aligned`: Align output columns for readability.
- `-v`, `--verbose`: Verbose output.
- `--noheadings`: Suppress column headers (useful for scripting).
- `--nosuffix`: Suppress size unit suffixes.
- `--rows`: Output in rows (each field on its own line).
- `--separator string`: Use a custom column separator.
- `--reportformat basic|json`: Output format.
- `-P`, `--partial`: Allow display of PVs from partial volume groups.

## Examples

```bash
pvs
```

Show a brief table of all physical volumes.

```bash
pvs /dev/sdb1 /dev/sdc1
```

Show specific physical volumes.

```bash
pvs -o pv_name,pv_size,pv_free
```

Show only the name, total size, and free space of each PV.

```bash
pvs --noheadings -o pv_name,pv_free
```

Script-friendly output with only device name and free space.

```bash
pvs --units g
```

Display sizes in gigabytes.

```bash
pvs -S "pv_free > 0"
```

Show only physical volumes that have free (unallocated) space.

```bash
pvs -O -pv_size
```

Sort by physical volume size, largest first.

```bash
pvs -a
```

Show all devices, including those not identified as PVs.

```bash
pvs --reportformat json
```

Output PV data in JSON format for programmatic use.

```bash
pvs --segments
```

Show physical extent segment details.

## Practical Notes

- The `#PV` column in `vgs` and `lvs` output shows the number of PVs in each VG, which corresponds to `pvs` output.
- Common column names: `pv_name`, `pv_size`, `pv_free`, `pv_used`, `vg_name`, `pv_fmt`, `pv_attr`, `pv_uuid`.
- The attributes column (`pv_attr`) shows flags: `a` (allocatable), `x` (exported), etc.
- Use `pvs -o pv_name,pv_free --noheadings --separator ' '` in scripts to get clean output for processing.
- For JSON output, `pvs --reportformat json` provides structured data ideal for monitoring and automation.
- `pvs -a` can help find devices that have multiple PV labels or stale metadata.
