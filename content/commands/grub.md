---
name: grub
summary: Interactive GRUB boot loader command shell.
category: System
tags: grub, boot, bootloader, shell, rescue
popular: false
---

## Additional Notes

`grub` (also known as the GRUB shell) is an interactive command-line interface for the GRUB Legacy boot loader. It allows users to examine and manipulate boot loader data, configure boot entries, and perform rescue operations outside of the normal boot process.

When run from a running system, `grub` provides a shell for GRUB-related tasks such as installing GRUB to a master boot record, examining partition tables, and testing boot configurations. The shell uses GRUB's own command language and device naming conventions (e.g., `(hd0,0)` for the first partition of the first disk).

## Syntax

```bash
grub [options]
```

## Parameters

- `options`: Flags that change how `grub` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--batch`: Run commands from standard input in batch mode.
- `--config-file file`: Load a specific configuration file.
- `--device-map file`: Use a specific device map file.
- `--help`: Display help.
- `--no-curses`: Disable curses-based terminal handling.
- `--no-floppy`: Do not probe the floppy drive.
- `--read-only`: Start in read-only mode.
- `--verbose`: Enable verbose output.

## Common Commands

- `root (hd0,0)`: Set the root GRUB device.
- `setup (hd0)`: Install GRUB to the master boot record.
- `find /boot/grub/stage1`: Locate the stage1 file on any partition.
- `cat (hd0,0)/boot/grub/menu.lst`: Display the GRUB configuration file.
- `quit`: Exit the GRUB shell.
- `help`: Show available commands.
- `help install`: Show help for the install command.

## Examples

```bash
grub
```

Start the interactive GRUB shell.

```bash
grub --batch < commands.txt
```

Run GRUB commands from a file in batch mode.

```bash
grub --no-floppy
```

Start GRUB without probing for a floppy drive (speeds up startup).

```bash
grub
root (hd0,0)
setup (hd0)
quit
```

Common sequence to reinstall GRUB Legacy to the MBR of the first disk.

## Practical Notes

- The `grub` command is for GRUB Legacy (version 0.97 and earlier). Modern systems use GRUB2, which uses `grub2-install`, `grub2-mkconfig`, and the GRUB2 rescue shell accessible by pressing `c` at the GRUB menu.
- GRUB Legacy uses a different device naming scheme than GRUB2. For example, `(hd0,0)` in GRUB Legacy translates to the first partition on the first disk.
- For modern systems, use `grub-install` and `grub-mkconfig` instead of the interactive `grub` shell.
- The `grub` shell can be dangerous; incorrect commands can render a system unbootable.
- If you need to repair a GRUB2 boot, use the GRUB2 rescue shell or `boot-repair` tools.
