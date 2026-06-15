---
name: volname
summary: Print the volume name of an ISO 9660 image.
category: Files
tags: iso, volume, name, cdrom, disc
popular: false
---

## Additional Notes

`volname` reads an ISO 9660 filesystem image (typically a CD-ROM or DVD image) and prints its volume name (volume descriptor label). The volume name is the human-readable label assigned when the ISO image was created.

This is useful for identifying ISO files without mounting them. The command reads the primary volume descriptor from the ISO image and extracts the volume identifier field, which can be up to 32 characters long.

## Syntax

```bash
volname [iso-file]
```

## Parameters

- `iso-file`: Path to an ISO 9660 image file. If omitted, reads from standard input.

## Examples

```bash
volname disk.iso
```

Print the volume name of `disk.iso`.

```bash
volname < /dev/cdrom
```

Read the volume name directly from a CD-ROM device.

```bash
for iso in *.iso; do echo "$(volname "$iso") - $iso"; done
```

List volume names for all ISO files in the directory.

## Practical Notes

- `volname` only works with ISO 9660 filesystems (standard CD/DVD format). It does not handle UDF, HFS, or other filesystem types.
- For UDF images (common for Blu-ray), use `blkid` or `isoinfo`.
- The volume name is set during ISO creation with `mkisofs -V "VOLUME_NAME"`.
- Most graphical disk tools and `file` command also display the volume label.
- `volname` is part of the `cdrkit` or `genisoimage` package on most distributions.
