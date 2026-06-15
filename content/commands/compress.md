---
name: compress
summary: Compress files with the legacy Unix compress format.
category: Archives
tags: compress, legacy, archive, z
popular: false
---

## Additional Notes

`compress` creates legacy `.Z` compressed files. This format is much older than gzip, bzip2, xz, and zstd.

Use it only when working with old systems, legacy software, or historical archives that require `.Z` files.

## Syntax

```bash
compress [options] file...
uncompress file.Z...
```

## Parameters

- `file`: File to compress.
- `file.Z`: Legacy compressed file to decompress.
- `options`: Force, verbose, and output controls.

## Common Options

- `-f`: Force compression even if output exists or size is not reduced.
- `-v`: Verbose output.
- `-c`: Write output to standard output.
- `-b BITS`: Set max bits for compression on implementations that support it.

## Examples

```bash
compress old-data.txt
```

Create `old-data.txt.Z`.

```bash
uncompress old-data.txt.Z
```

Decompress a `.Z` file.

```bash
zcat old-data.txt.Z | less
```

Read legacy compressed text.

## Practical Notes

- Prefer gzip, xz, zstd, or bzip2 for new files.
- Default behavior may remove the original after compression.
- Some systems do not install `compress` by default.
