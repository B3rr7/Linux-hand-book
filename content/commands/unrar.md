---
name: unrar
summary: Extract, test, and list RAR archive files.
category: Files
tags: rar, archive, extract, compression, winrar
popular: false
---

## Additional Notes

`unrar` extracts files from RAR archives, a proprietary compression format developed by Eugene Roshal. It supports both the older RAR2 and the newer RAR3/RAR5 formats. While `unrar` is open source (provided under a GPL-compatible license), the `rar` compression tool is proprietary.

`unrar` can list archive contents, test archive integrity, and extract files with or without directory structure. It supports password-protected archives, multi-volume archives, and archives split across multiple files (`.part1.rar`, `.part2.rar`, etc.).

## Syntax

```bash
unrar <command> [options] archive [files...] [path]
```

## Commands

- `e`: Extract files without archive paths.
- `x`: Extract files with full path.
- `l`: List archive contents.
- `t`: Test archive integrity.
- `v`: Verbose listing of archive contents.
- `p`: Print file to standard output.

## Parameters

- `options`: Flags that change how `unrar` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-o+`: Overwrite existing files.
- `-o-`: Do not overwrite existing files.
- `-p password`: Decrypt with the given password.
- `-r`: Recurse subdirectories.
- `-y`: Assume yes to all queries.
- `-ad`: Append archive name to destination path.
- `-x file`: Exclude the specified file from extraction.

## Examples

```bash
unrar x archive.rar
```

Extract with full directory structure.

```bash
unrar e archive.rar /tmp/output
```

Extract all files to `/tmp/output` (no subdirectories).

```bash
unrar l archive.rar
```

List the contents of the archive.

```bash
unrar t archive.part1.rar
```

Test integrity of a multi-volume archive.

```bash
unrar x -psecret123 archive.rar
```

Extract a password-protected archive.

## Practical Notes

- The free `unrar` supports extraction only. Use the proprietary `rar` command to create RAR archives.
- For multi-volume archives, point to the first volume (`.part1.rar`).
- RAR5 archives (created with newer WinRAR) are fully supported.
- `7z` (p7zip) can also extract RAR files and supports more archive formats.
