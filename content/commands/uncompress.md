---
name: uncompress
summary: Decompress .Z files created by compress.
category: Files
tags: compress, decompress, .Z, lzw, archive
popular: false
---

## Additional Notes

`uncompress` restores files compressed with the historical `compress` command, which uses the LZW (Lempel-Ziv-Welch) compression algorithm. Input files have a `.Z` extension. When decompressing, the `.Z` suffix is removed unless the `-f` flag forces overwrite without prompt.

The `compress` format was widely used on early Unix systems. It has been largely replaced by `gzip` (`.gz`), `bzip2` (`.bz2`), and `xz` (`.xz`), which offer better compression ratios. The `.Z` format is still encountered in legacy software distributions and historical Unix archives.

## Syntax

```bash
uncompress [options] file[.Z]...
```

## Parameters

- `file`: Compressed file to decompress. The `.Z` extension is assumed if omitted.

## Common Options

- `-f`, `--force`: Decompress even if the output file already exists (no prompt).
- `-c`, `--stdout`: Write decompressed data to standard output, keeping the original file.
- `-v`, `--verbose`: Show the decompression ratio and file names.
- `-r`, `--recursive`: Decompress files in directories recursively.

## Examples

```bash
uncompress file.Z
```

Decompress `file.Z`, producing `file`.

```bash
uncompress -c file.Z > output
```

Decompress to standard output.

```bash
uncompress -v archive.Z
```

Decompress verbosely, showing the compression ratio.

## Practical Notes

- `gunzip` can also decompress `.Z` files, but `gzip` is more widely available.
- The `compress` format is covered by old LZW patents which have since expired.
- `zcat` is equivalent to `uncompress -c` and can read `.Z` files.
- For compatibility, use `gunzip` or `zcat` since they handle both `.Z` and `.gz` formats.
