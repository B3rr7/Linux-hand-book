---
name: blkid
summary: Show block device identifiers such as UUID, label, and filesystem type.
category: Disk
tags: disk, uuid, filesystem, partition, storage
popular: true
---

## Additional Notes

`blkid` prints identifiers for block devices. It is commonly used to find UUIDs, labels, and filesystem types for disks and partitions.

UUIDs are often used in `/etc/fstab` because they are more stable than names like `/dev/sda1`.

## Syntax

```bash
blkid [options] [device...]
```

## Parameters

- `options`: Flags that change how `blkid` behaves.
- `device`: Disk, partition, volume, or filesystem path to inspect or modify.
- `target`: Mount point, file, or storage object used by the operation.

## Common Options

- `-o value`: Print only values.
- `-s TAG`: Show only a specific tag such as `UUID`, `LABEL`, or `TYPE`.
- `-p`: Probe a device directly.
- `-L LABEL`: Look up a device by label.
- `-U UUID`: Look up a device by UUID.

## Examples

```bash
sudo blkid
```

Show identifiers for detected block devices.

```bash
sudo blkid /dev/sda1
```

Show identifiers for one partition.

```bash
blkid -s UUID -o value /dev/sda1
```

Print only the UUID value.

```bash
blkid -U UUID-HERE
```

Find the device with a UUID.

```bash
lsblk -f
```

Alternative overview showing filesystem data.

## Practical Notes

- Use UUIDs in `/etc/fstab` for reliable mounting.
- Confirm device names before formatting or mounting.
- Some `blkid` output may require root privileges.
- `TYPE` shows filesystem type, not partition table type.
