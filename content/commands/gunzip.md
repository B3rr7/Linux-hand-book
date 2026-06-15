---
name: gunzip
summary: Decompress gzip files.
category: Archives
tags: decompress, gzip, extract, files
popular: true
---

## Additional Notes

`gunzip` is an archive command used to decompress gzip files. It is equivalent to gzip -d. The .gz file is removed by default after decompression unless -k is used.

## Syntax

```bash
gunzip [options] [archive] [files...]
```

## Parameters

- `options`: Flags that change how `gunzip` behaves.
- `archive`: Archive or compressed file to read, create, or extract.
- `files`: Files or directories that should be included or processed.

## Common Options

- `-k`: Keep the compressed input file.
- `-c`: Write decompressed data to standard output.
- `-t`: Test compressed file integrity.

## Examples

```bash
gunzip access.log.gz
gunzip -k backup.sql.gz
gunzip -t archive.gz
```

## Practical Notes

`gunzip` is equivalent to `gzip -d` on many systems.
