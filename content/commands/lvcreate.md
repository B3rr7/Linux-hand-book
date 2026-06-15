---
name: lvcreate
summary: Create a logical volume in LVM.
category: Disk
tags: lvm, logical-volume, disk, storage, volume
popular: false
---

## Additional Notes

`lvcreate` creates a new logical volume in an LVM (Logical Volume Manager) volume group. Logical volumes are the virtual block devices that LVM provides, which can be resized, snapshotted, and moved across physical disks.

A logical volume is created from the free physical extents in a volume group. It can be formatted with a filesystem and mounted like a regular partition. LVM provides flexibility by decoupling the logical storage layout from the physical disk layout.

## Syntax

```bash
lvcreate [options] volume-group
```

## Parameters

- `volume-group`: The name of the volume group in which to create the logical volume.

## Common Options

- `-n name`, `--name name`: Set the name of the new logical volume.
- `-L size`, `--size size`: Set the size (e.g., `10G`, `500M`, `1T`).
- `-l extents`, `--extents extents`: Set the size in number of physical extents.
- `-s`, `--snapshot`: Create a snapshot of an existing logical volume.
- `-p perm`, `--permission perm`: Set read/write permissions (`r` for read-only, `rw` for read-write).
- `-C y|n`, `--contiguous y|n`: Require contiguous allocation.
- `-i stripes`, `--stripes stripes`: Number of stripes for striping.
- `-I stripe_size`, `--stripesize stripe_size`: Size of each stripe.
- `-Z y|n`, `--zero y|n`: Control zeroing of the first KB of data.
- `-W y|n`, `--wipesignatures y|n`: Control wiping of filesystem signatures.

## Examples

```bash
lvcreate -n myvolume -L 10G myvg
```

Create a 10 GB logical volume named `myvolume` in volume group `myvg`.

```bash
lvcreate -n data -l 100%FREE datavg
```

Create a logical volume `data` using all remaining free space in `datavg`.

```bash
lvcreate -s -n snap -L 5G myvg/myvolume
```

Create a 5 GB snapshot named `snap` of the existing logical volume `myvolume`.

```bash
lvcreate -n striped_vol -L 50G -i 2 -I 64 vg0
```

Create a 50 GB striped logical volume with 2 stripes and 64 KB stripe size.

## Practical Notes

- After creating a logical volume, format it with `mkfs.ext4 /dev/vgname/lvname` before mounting.
- The device path for a logical volume is `/dev/<vg-name>/<lv-name>`.
- Snapshots use copy-on-write and consume space only as changes are made to the source volume.
- Use `lvdisplay` and `vgs` to check available space before creating a volume.

