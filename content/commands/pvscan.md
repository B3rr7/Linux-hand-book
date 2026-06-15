---
name: pvscan
summary: Scan all disks for LVM physical volumes.
category: Disk
tags: lvm, physical volume, scan, discovery, disk management
popular: false
---

## Additional Notes

`pvscan` scans all available block devices on the system for LVM (Logical Volume Manager) physical volume labels and metadata. It updates the LVM cache with current information about which devices are PVs and which volume groups they belong to.

System administrators run `pvscan` after adding new disks, reconnecting SAN storage, or when LVM does not automatically detect PVs. It is the discovery command for LVM: it finds all PVs, reports their properties, and refreshes the kernel's LVM device state.

## Syntax

```bash
pvscan [options] [device...]
```

## Parameters

- `options`: Flags that change how `pvscan` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-a`, `--all`: Show all devices, including those not identifiable as PVs.
- `-b`, `--cache`: Update the LVM cache file (`/etc/lvm/cache/.cache`).
- `-c`, `--colon`: Colon-separated output (machine-parseable).
- `-C`, `--columns`: Columnar output format.
- `-d`, `--debug`: Debug output.
- `-e`, `--exported`: Show only exported (foreign) PVs.
- `-n`, `--novolumegroup`: Show only PVs that are not part of a volume group.
- `-s`, `--short`: Short format (PV name only).
- `-u`, `--uuid`: Show PV UUIDs.
- `--uuidonly`: Show only UUIDs.
- `-v`, `--verbose`: Verbose output.
- `--reportformat basic|json`: Output format.

## Examples

```bash
pvscan
```

Scan all devices and display discovered physical volumes.

```bash
pvscan -u
```

Scan and show physical volume UUIDs.

```bash
pvscan -n
```

Show only physical volumes not assigned to any volume group.

```bash
pvscan -a
```

Show all devices, including those without LVM labels.

```bash
pvscan -b
```

Scan and update the LVM cache file.

```bash
pvscan --cache /dev/sdb
```

Scan a specific device and update the cache.

```bash
pvscan -e
```

Show only exported (foreign) physical volumes.

```bash
pvscan -s
```

Short output showing only PV device names.

## Practical Notes

- Run `pvscan` after adding new disks or when LVM does not detect newly connected storage.
- The LVM cache file (`/etc/lvm/cache/.cache`) speeds up subsequent LVM commands by storing previously discovered devices.
- If `pvscan` finds a PV that belongs to an inactive VG, it may automatically activate it depending on the `lvmetad` or event-based activation configuration.
- On systems using `lvmetad` (deprecated in newer LVM), `pvscan` communicates with the daemon. Modern LVM uses direct scanning.
- For a quick summary of all PVs, use `pvs` instead. For detailed information, use `pvdisplay`.
- If a PV is not found by `pvscan`, check that the device is accessible with `lsblk` or `fdisk -l`.
