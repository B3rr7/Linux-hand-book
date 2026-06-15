---
name: findfs
summary: Find a filesystem by label or UUID.
category: Disk
tags: filesystem, label, uuid, disk, find
popular: false
---

## Additional Notes

`findfs` searches the system's block devices for a filesystem matching a given label or UUID and prints the device path. It is a simple wrapper that uses the `blkid` library to locate the device. It is commonly used in initramfs scripts and `/etc/fstab` entries to resolve `LABEL=` or `UUID=` references to device nodes.

The search examines all available block devices, including disks, partitions, and logical volumes. It prints the first match and returns an exit code of 0 on success or 1 if no match is found.

## Syntax

```bash
findfs search-parameter
```

## Parameters

- `search-parameter`: Either `LABEL=labelname` or `UUID=uuid-string` to search for.

## Examples

```bash
findfs LABEL=root
```

Find the device with the filesystem label `root`.

```bash
findfs UUID=123e4567-e89b-12d3-a456-426614174000
```

Find the device with the specified UUID.

## Practical Notes

- The output is a device path such as `/dev/sda1` or `/dev/mapper/vg-root`.
- `findfs` searches all visible block devices, not just those listed in `/etc/fstab`.
- If multiple devices have the same label, `findfs` returns the first match found.
- Use `blkid` for more detailed information about filesystem attributes.
- In scripts, use `findfs` to dynamically resolve filesystem references at runtime.
- For persistent device naming, prefer UUIDs over labels since labels are not guaranteed unique.
