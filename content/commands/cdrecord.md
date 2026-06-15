---
name: cdrecord
summary: Record data or audio tracks to optical media.
category: Disk
tags: cd, dvd, burn, optical, storage
popular: false
---

## Additional Notes

`cdrecord` writes data to CD, DVD, or compatible optical media, depending on hardware and build support. It is often used with ISO images produced by tools such as `mkisofs` or `genisoimage`.

Optical burning is less common now, but the command still appears in recovery, archival, and older system workflows.

## Syntax

```bash
cdrecord [options] image.iso
cdrecord [options] track...
```

## Parameters

- `image.iso`: ISO image to write.
- `track`: Audio or data track file.
- `options`: Device, speed, blanking, simulation, and verbosity controls.

## Common Options

- `dev=DEVICE`: Select burner device.
- `speed=N`: Set write speed.
- `-v`: Verbose output.
- `-eject`: Eject media after writing.
- `-dao`: Disk-at-once mode.
- `blank=fast`: Quickly blank rewritable media.
- `-scanbus`: Scan for devices on older setups.

## Examples

```bash
cdrecord -v dev=/dev/sr0 image.iso
```

Write an ISO image to an optical disc.

```bash
cdrecord -v speed=4 dev=/dev/sr0 image.iso
```

Write at a specific speed.

```bash
cdrecord dev=/dev/sr0 blank=fast
```

Blank rewritable media.

## Practical Notes

- Device naming and permissions vary by distribution.
- Use slower speeds when reliability matters more than speed.
- Verify important discs after writing.
