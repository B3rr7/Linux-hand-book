---
name: dpkg-split
summary: Split and reassemble large Debian package archives.
category: Packages
tags: debian, package, dpkg, split, join
popular: false
---

## Additional Notes

`dpkg-split` splits large `.deb` package files into smaller parts and reassembles them. This was originally designed for Debian packages that needed to fit on floppy disks. The split parts are numbered and can be transferred separately, then joined on the target system.

The split parts use a naming convention like `package.deb.1`, `package.deb.2`, etc. The first part contains a header that identifies the parts and allows automatic detection when joining. `dpkg-split` also has a queue mode where it monitors a directory for incoming split parts and automatically reassembles them when all parts arrive.

## Syntax

```bash
dpkg-split [options] command [arguments]
```

## Parameters

- `command`: One of `-s`, `-j`, `-I`, `-l`, `-a`, `-d`, or `--queue` to specify the operation.

## Common Commands

- `-s`, `--split archive [prefix]`: Split a `.deb` file into parts. Optionally specify the output prefix.
- `-j`, `--join part1 part2 ...`: Join split parts back into a single `.deb` file.
- `-I`, `--info part`: Display information about a split part file.
- `-l`, `--list queue-directory`: List parts in the automatic queue directory.
- `-a`, `--auto queue-directory part`: Automatically queue a part for future joining.
- `-d`, `--discard queue-directory`: Discard parts that cannot be joined.
- `--queue`: Set the default queue directory.

## Common Options

- `-o`, `--output file`: Specify the output filename for a join operation.
- `-Q`, `--npquiet`: Suppress messages when queuing parts that are not part of a multipart archive.
- `--msdos`: Generate MS-DOS-compatible filenames (8.3 format).

## Examples

```bash
dpkg-split -s large-package.deb
```

Split a `.deb` file into parts of the default maximum size (460 KB).

```bash
dpkg-split -s large-package.deb myprefix
```

Split with a custom filename prefix.

```bash
dpkg-split -j large-package.deb.1 large-package.deb.2 large-package.deb.3
```

Join parts back into the original archive.

```bash
dpkg-split -I large-package.deb.1
```

Show information about a specific split part file.

## Practical Notes

- The default part size is 460 KB, suitable for standard floppy disks. Use `--split --maxparts` to change it.
- Modern systems rarely need `dpkg-split` for its original purpose, but it remains available in the dpkg package.
- The automatic queue mode was designed for unattended joining of parts during package downloads over serial links.
- `dpkg-split` is part of the `dpkg` package and is included by default on Debian-based systems.
