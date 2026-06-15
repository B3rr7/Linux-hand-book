---
name: gzip
summary: Compress files using gzip.
category: Archives
tags: compress, gzip, archive, files
popular: true
---

## Additional Notes

`gzip` compresses individual files using the gzip format and usually replaces each input file with a `.gz` file. It is common for logs, tar archives, HTTP content, and Unix pipelines.

`gzip` is not a multi-file archive tool by itself. To package a directory and compress it, combine `tar` with gzip, such as `tar -czf backup.tar.gz directory/`.

## Syntax

```bash
gzip [options] file...
gunzip [options] file.gz...
```

## Parameters

- `file`: File to compress. By default, the original file is replaced with `file.gz`.
- `file.gz`: Compressed file to decompress.
- `options`: Compression level, retention, recursion, and output behavior flags.

## Common Options

- `-d`: Decompress. Same basic role as `gunzip`.
- `-k`: Keep the original file.
- `-r`: Recursively compress files inside directories.
- `-1`: Fastest compression, larger output.
- `-9`: Best compression, slower output.
- `-c`: Write output to standard output instead of replacing files.
- `-l`: List compressed and uncompressed size information.
- `-t`: Test compressed file integrity.

## Examples

```bash
gzip access.log
```

Compress `access.log` into `access.log.gz` and remove the original.

```bash
gzip -k access.log
```

Compress the file while keeping the original.

```bash
gzip -9 large.log
```

Use maximum compression.

```bash
gzip -dc access.log.gz | less
```

View decompressed content without writing a new file.

```bash
gzip -t archive.gz
```

Check that a gzip file can be decompressed.

## Practical Notes

- Use `tar -czf` for directories or multiple files.
- Use `zcat`, `zgrep`, and `zless` for reading compressed text without manual decompression.
- Remember that default `gzip file` removes the original file. Add `-k` when that is not desired.
