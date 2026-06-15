---
name: cpio
summary: Copy files into or out of cpio archives.
category: Archives
tags: archive, cpio, initramfs, files
popular: false
---

## Additional Notes

`cpio` copies files to and from cpio archive streams. It is often seen in initramfs images, RPM internals, and older Unix archive workflows.

Unlike `tar`, `cpio` often reads a list of filenames from standard input.

## Syntax

```bash
cpio -o [options] > archive.cpio
cpio -i [options] < archive.cpio
cpio -p [options] directory
```

## Parameters

- `-o`: Copy-out mode, create an archive.
- `-i`: Copy-in mode, extract from an archive.
- `-p`: Pass-through mode, copy files to another directory.
- `archive`: Archive stream or file.
- `directory`: Destination for pass-through copy.

## Common Options

- `-v`: Verbose output.
- `-d`: Create directories as needed.
- `-m`: Preserve modification times.
- `-u`: Replace existing files unconditionally.
- `-H FORMAT`: Select archive format, such as `newc`.
- `--no-absolute-filenames`: Avoid extracting absolute paths as absolute.

## Examples

```bash
find . -print | cpio -ov > archive.cpio
```

Create a cpio archive from files found under the current directory.

```bash
cpio -idv < archive.cpio
```

Extract an archive, creating directories.

```bash
find . -print | cpio -pdm /tmp/copy
```

Copy a tree using pass-through mode.

## Practical Notes

- Be careful extracting archives that contain absolute paths.
- Initramfs archives often use `newc` format.
- For normal backups, `tar` is usually easier.
