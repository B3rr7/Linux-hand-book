---
name: mtools
summary: Access MS-DOS filesystems (FAT) from the command line.
category: Files
tags: fat, dos, floppy, mtools, msdos
popular: false
---

## Additional Notes

`mtools` is a collection of utilities for accessing MS-DOS filesystems (FAT12, FAT16, FAT32) without mounting them. The tools mimic DOS commands: `mcopy`, `mdir`, `mdel`, `mformat`, `mren`, `mmove`, `mcd`, and others.

They work directly with floppy disk images, USB drives, or raw disk images. This is useful for working with FAT filesystems on embedded devices, old floppy images, or when mounting is inconvenient.

## Syntax

```bash
mcopy [options] source target
mdir [options] directory
mdel [options] file
mformat [options] drive:
```

## Common Commands

- `mcopy`: Copy files between DOS and Unix filesystems.
- `mdir`: List directory contents on a DOS filesystem.
- `mdel`: Delete files on a DOS filesystem.
- `mren`: Rename files on a DOS filesystem.
- `mmove`: Move files on a DOS filesystem.
- `mcd`: Change directory on a DOS filesystem.
- `mformat`: Format a DOS filesystem.
- `mtype`: Display the contents of a DOS file.
- `mdigest`: Compute a digest of files on a DOS filesystem.
- `mpart`: Partition a disk image.
- `mrd`: Remove a directory.
- `mmd`: Create a directory.

## Parameters

- `options`: Flags that change how `mtools` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options for mcopy

- `-o`: Overwrite destination files without prompting.
- `-n`: No confirmation (auto-overwrite).
- `-m`: Preserve file modification time.
- `-v`: Verbose.
- `-t`: Text file conversion (convert newlines).

## Examples

```bash
mcopy a:readme.txt ./
```

Copy `readme.txt` from the DOS floppy to the current directory.

```bash
mcopy -o *.txt a:/
```

Copy all `.txt` files from the current directory to the DOS floppy.

```bash
mdir a:
```

List the contents of the DOS floppy.

```bash
mdel a:oldfile.txt
```

Delete a file from the DOS floppy.

```bash
mformat a:
```

Format a floppy diskette with a FAT filesystem.

```bash
mcopy -m image.img::file.txt ./
```

Copy a file from a disk image.

```bash
mmd a:newdir
mcopy doc.txt a:newdir/
```

Create a directory and copy a file into it.

## Configuration (`~/.mtoolsrc`)

Drive letters are configured in `~/.mtoolsrc`:

```
drive a: file="/dev/fd0"
drive c: file="/dev/sda1"
drive i: file="/path/to/disk.img"
```

## Practical Notes

- Default drive letters: `a:` for `/dev/fd0`, `b:` for `/dev/fd1`. Other drives must be configured in `~/.mtoolsrc`.
- `mtools` reads and writes directly to the device; unmount it first to avoid filesystem corruption.
- For modern FAT filesystem management, mounting with `mount -t vfat` is often simpler.
- The `mdir` command without arguments defaults to the current DOS directory on the `a:` drive.

