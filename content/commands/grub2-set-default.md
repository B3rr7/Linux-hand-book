---
name: grub2-set-default
summary: Set the default boot entry for GRUB2.
category: System
tags: grub, boot, default, kernel, bootloader
popular: false
---

## Additional Notes

`grub2-set-default` sets the default boot entry for the next system start in GRUB2. The default entry is identified by its menu entry name, a numeric index (0-based from the top of the menu), or by the string `saved` to maintain the last-booted entry.

The command writes the selected entry identifier to the GRUB environment block file, which GRUB reads at boot time. Unlike manually editing `grub.cfg`, this change persists across kernel updates and GRUB reconfigurations when `GRUB_DEFAULT=saved` is set in `/etc/default/grub`.

## Syntax

```bash
grub2-set-default entry
```

## Parameters

- `entry`: The default GRUB menu entry. Can be a numeric index (0, 1, 2, ...), a menu entry name string, or the keyword `saved`.

## Common Options

- `--version`: Show version information.
- `--help`: Display help.

## Examples

```bash
sudo grub2-set-default 0
```

Set the first menu entry as the default.

```bash
sudo grub2-set-default "Advanced options for GNU/Linux>Linux 5.15.0-generic"
```

Set a submenu entry as the default using the full menu path with `>` separators.

```bash
sudo grub2-set-default saved
```

Set GRUB to boot the last-selected entry.

## Practical Notes

- The change only takes effect if `GRUB_DEFAULT=saved` is set in `/etc/default/grub`. Otherwise, `grub2-set-default` has no effect.
- After changing `/etc/default/grub`, run `update-grub` or `grub2-mkconfig -o /boot/grub2/grub.cfg` to apply the change.
- Numeric entries are 0-based. The first menu entry is index 0. Submenu entries can be addressed using `>` separators.
- Run `grub2-editenv list` to verify the stored default entry after setting it.
- On non-RHEL distributions, the command may be named `grub-set-default` (without the `2`).
