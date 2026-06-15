---
name: xz
summary: Compress or decompress files using XZ compression.
category: Archives
tags: compress, xz, archive, files
popular: false
---

## Additional Notes

`xz` is an archive command used to compress or decompress files using XZ compression. It compresses files using the LZMA algorithm, offering high compression ratios often better than gzip or bzip2.

Use `-T0` to utilize all CPU cores. XZ compresses very tightly but is slower than gzip; `xz -d` decompresses, and `unxz` is an alias.

## Syntax

```bash
xz [options] [archive] [files...]
```

## Parameters

- `options`: Flags that change how `xz` behaves.
- `archive`: Archive or compressed file to read, create, or extract.
- `files`: Files or directories that should be included or processed.

## Common Options

- `-d`: Decompress.
- `-k`: Keep input files.
- `-T0`: Use all available CPU threads when supported.
- `-9`: Use high compression.

## Examples

```bash
xz file.img
xz -d file.img.xz
xz -T0 -9 backup.tar
```

## Practical Notes

XZ can compress very well but may be slower than gzip.
