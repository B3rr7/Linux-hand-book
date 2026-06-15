---
name: arj
summary: Create or extract ARJ archive files.
category: Archives
tags: archive, arj, compress, extract
popular: false
---

## Additional Notes

`arj` works with ARJ archives, an older compressed archive format. It is mostly useful when handling legacy files, old software collections, or archives from older DOS/Windows environments.

For modern use, ZIP, 7z, tar, gzip, and xz are more common.

## Syntax

```bash
arj command archive [files...]
```

## Parameters

- `command`: Operation such as add, list, extract, or test.
- `archive`: ARJ archive file.
- `files`: Files to add or extract.

## Common Commands

- `a`: Add files to an archive.
- `x`: Extract with paths.
- `e`: Extract without paths.
- `l`: List archive contents.
- `t`: Test archive integrity.

## Examples

```bash
arj l oldfiles.arj
```

List archive contents.

```bash
arj x oldfiles.arj
```

Extract files with directory paths.

```bash
arj a backup.arj notes.txt docs/
```

Create an ARJ archive.

## Practical Notes

- ARJ is a legacy format; install support only when you need it.
- Extract unknown old archives into an empty directory first.
- Prefer modern formats for new archives.
