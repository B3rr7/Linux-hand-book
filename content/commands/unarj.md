---
name: unarj
summary: Extract files from ARJ archives.
category: Files
tags: arj, archive, extract, compression
popular: false
---

## Additional Notes

`unarj` extracts files from ARJ archives, a compression format popular in the DOS era. ARJ (Archived by Robert Jung) was widely used in the late 1980s and 1990s for file distribution on BBS systems and floppy disks.

The ARJ format supports multi-volume archives, directory trees, password protection, and compression modes. `unarj` only handles extraction. To create ARJ archives, the `arj` command is used. While largely obsolete on Linux, `unarj` is still useful for extracting legacy archives found in old software collections and data migrations.

## Syntax

```bash
unarj [command] [options] archive[.arj]
```

## Commands

- `e`: Extract files from archive (no directory structure).
- `x`: Extract files with full directory structure.
- `l`: List archive contents.
- `t`: Test archive integrity.
- `v`: Verbose listing.
- `p`: Print file to standard output.

## Parameters

- `options`: Flags that change how `unarj` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-d dir`: Extract files into directory `dir`.
- `-y`: Assume yes to all prompts.
- `-n`: Only show new files (do not overwrite).
- `-g password`: Decrypt with password.
- `-o`: Overwrite existing files without prompting.

## Examples

```bash
unarj x archive.arj
```

Extract all files preserving directory structure.

```bash
unarj e archive.arj
```

Extract all files into the current directory (no subdirectories).

```bash
unarj l archive.arj
```

List the contents of an ARJ archive.

```bash
unarj x -d /tmp/out archive.arj
```

Extract to a specific directory.

## Practical Notes

- ARJ is mostly obsolete. Use modern tools like `tar`, `zip`, or `7z` for new archives.
- Many Linux distributions provide `unarj` via the `arj` package (which includes both `arj` and `unarj`).
- Multi-volume ARJ archives use extensions like `.arj`, `.a01`, `.a02`, etc.
- For non-ARJ archives from the same era, try `unzip`, `uncompress`, `lha`, or `7z`.
