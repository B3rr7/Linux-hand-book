---
name: bzcat
summary: Decompress bzip2 files to standard output.
category: Archives
tags: bzip2, decompress, stdout, text
popular: false
---

## Additional Notes

`bzcat` writes decompressed bzip2 data to standard output. It is useful for reading compressed text without creating a decompressed file on disk.

It is similar to `bzip2 -dc`.

## Syntax

```bash
bzcat file.bz2...
```

## Parameters

- `file.bz2`: bzip2-compressed file to read.
- `options`: Some implementations accept bzip2-style options.

## Examples

```bash
bzcat access.log.bz2 | less
```

Read a compressed log file.

```bash
bzcat data.txt.bz2 | grep error
```

Search decompressed output.

```bash
bzcat archive.tar.bz2 | tar -tf -
```

List a tar archive compressed with bzip2.

## Practical Notes

- `bzcat` does not remove or replace the compressed input file.
- Use `bzgrep` for direct searching when available.
- For huge files, pipe to tools that can stream instead of loading everything into memory.
