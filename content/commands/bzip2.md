---
name: bzip2
summary: Compress files with the bzip2 compression format.
category: Archives
tags: bzip2, compress, archive, files
popular: true
---

## Additional Notes

`bzip2` compresses individual files using the bzip2 format. It usually gives better compression than gzip, but can be slower.

Like `gzip`, it compresses files rather than creating a multi-file archive by itself. Use `tar -cjf` when you need a compressed archive containing many files.

## Syntax

```bash
bzip2 [options] file...
bzip2 -d [options] file.bz2...
```

## Parameters

- `file`: File to compress.
- `file.bz2`: File to decompress.
- `options`: Compression level, keep, force, test, and output controls.

## Common Options

- `-d`: Decompress.
- `-k`: Keep the original file.
- `-f`: Force overwrite.
- `-c`: Write output to standard output.
- `-t`: Test compressed file integrity.
- `-1`: Fastest compression.
- `-9`: Best compression.
- `-v`: Verbose output.

## Examples

```bash
bzip2 report.txt
```

Compress `report.txt` into `report.txt.bz2`.

```bash
bzip2 -k report.txt
```

Compress while keeping the original file.

```bash
bzip2 -d report.txt.bz2
```

Decompress a bzip2 file.

```bash
bzip2 -t archive.bz2
```

Test integrity.

## Practical Notes

- Default compression removes the original file after success; use `-k` to keep it.
- Use `tar -cjf archive.tar.bz2 directory/` for directories.
- Use `bzcat`, `bzgrep`, and `bzless` to read compressed text directly.
