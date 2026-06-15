---
name: vgdisplay
summary: Display LVM volume group information.
category: System
tags: lvm, volume group, display, status, info
popular: false
---

## Additional Notes

`vgdisplay` shows detailed information about LVM volume groups. It displays the VG name, access permissions, status, allocation policy, UUID, physical extent size, total/free extents, maximum logical volume and physical volume settings, and the list of PVs belonging to the VG.

Without arguments, it displays information for all volume groups. You can specify one or more VG names to view specific groups. For a more concise summary, use `vgs` or `vgscan`.

## Syntax

```bash
vgdisplay [options] [volume_group...]
```

## Parameters

- `options`: Flags that change how `vgdisplay` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-v`, `--verbose`: Show detailed information including the list of LVs and PVs.
- `-c`, `--colon`: Output in colon-separated format (useful for scripting).
- `-A`, `--activevolumegroups`: Only show active VGs.
- `-s`, `--short`: Show short format (one line per VG).
- `-S`, `--select Selection`: Select VGs matching a given criteria.
- `-C`, `--columns`: Output as columns (like `vgs`).
- `-o`, `--options fields`: Specify which fields to display.

## Examples

```bash
vgdisplay
```

Display information for all volume groups.

```bash
vgdisplay vg_data
```

Display information for the `vg_data` volume group.

```bash
vgdisplay -v vg_data
```

Show verbose details including LVs and PVs in the VG.

```bash
vgdisplay -c vg_data
```

Show colon-separated output for scripting.

```bash
vgdisplay -C -o vg_name,vg_size,vg_free
```

Show selected fields in column format.

## Practical Notes

- For quick summaries, use `vgs` (columnar output) instead of `vgdisplay`.
- Use `vgdisplay -v` to see which LVs and PVs belong to a volume group.
- The UUID displayed can be used to uniquely identify the VG if the name is ambiguous.
- The free extent count shows how much space is available for new LVs.
- Pair with `pvdisplay` and `lvdisplay` for a complete picture of LVM storage.
