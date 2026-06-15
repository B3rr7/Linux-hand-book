---
name: pvcreate
summary: Initialize a disk or partition for use with LVM.
category: Disk
tags: lvm, physical volume, initialize, pv, disk management
popular: false
---

## Additional Notes

`pvcreate` initializes a physical volume (PV) for use with the Linux Logical Volume Manager (LVM). It writes an LVM label and metadata to the device, marking it as available for inclusion in an LVM volume group.

This is the first step in creating LVM-based storage: `pvcreate` initializes the disk, `vgcreate` creates a volume group from one or more PVs, and `lvcreate` creates logical volumes within the volume group. `pvcreate` can be used on whole disks (e.g., `/dev/sdb`), partitions (e.g., `/dev/sdb1`), or other block devices.

## Syntax

```bash
pvcreate [options] [physical-volume...]
```

## Parameters

- `physical-volume`: Device path(s) to initialize, such as `/dev/sdb`, `/dev/sdc1`, `/dev/nvme0n1`.

## Common Options

- `-f`, `--force`: Force initialization even if the device appears to contain a filesystem or other data.
- `-ff`: Force without confirmation prompts.
- `-u uuid`: Specify a specific UUID for the PV.
- `-y`, `--yes`: Answer yes to all prompts.
- `-Z`, `--zero y|n`: Control whether the first 4 MiB of the device are zeroed (default yes).
- `--labelsector sector`: Write the LVM label at a specific sector (default 1). Not recommended for normal use.
- `--metadatasize size`: Set the size of the metadata area.
- `--metadataignore y|n`: Ignore this PV in metadata scans.
- `--restorefile file`: Restore PV metadata from a backup file.
- `-v`, `--verbose`: Verbose output.
- `-qq`: Suppress all non-error output.
- `--reportformat basic|json`: Output format.

## Examples

```bash
pvcreate /dev/sdb
```

Initialize `/dev/sdb` as an LVM physical volume.

```bash
pvcreate /dev/sdb1 /dev/sdc1
```

Initialize two partitions as physical volumes.

```bash
pvcreate -f /dev/sdb
```

Force initialization even if the disk appears to contain data.

```bash
pvcreate --metadatasize 2M /dev/sdb
```

Create the PV with a 2 MiB metadata area (useful for large or thin provisioning setups).

```bash
pvcreate --uuid a1b2c3d4-e5f6-7890-abcd-ef1234567890 /dev/sdd
```

Create the PV with a specific UUID.

```bash
pvcreate /dev/nvme0n1 /dev/nvme1n1
```

Initialize NVMe devices as physical volumes.

```bash
pvcreate -y /dev/sdb
```

Initialize without any confirmation prompts.

## Practical Notes

- `pvcreate` overwrites the data at the start of the device. Any existing filesystem or data will be destroyed.
- Use `pvdisplay` after creation to verify the PV was created correctly.
- For data recovery, use `pvcreate --restorefile` with a backup of the metadata to recreate a PV with the exact same UUID and configuration.
- LVM physical volumes can be created on RAID devices, hardware RAID volumes, iSCSI targets, multipath devices, and loopback devices.
- After `pvcreate`, run `pvscan` or `pvs` to update the LVM cache and confirm the PV is recognized.
- Thin pool metadata volumes may need specific metadata sizing. Use `--metadatasize` appropriately.
- The `--labelsector` option (default 1) places the LVM label in sector 1 (byte 512). Changing this is rare and only needed for compatibility with other software that uses sector 0.
