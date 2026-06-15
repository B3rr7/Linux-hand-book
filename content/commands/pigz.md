---
name: pigz
summary: Parallel implementation of gzip compression.
category: Files
tags: compression, gzip, parallel, multicore, archive
popular: false
---

## Additional Notes

`pigz` (Parallel Implementation of GZip) compresses and decompresses files using multiple CPU cores and threads. It produces standard gzip-compatible output that can be decompressed by regular `gzip` or `gunzip`.

For single-threaded compression, `gzip` uses one core. `pigz` splits the input into chunks, compresses each chunk in parallel using independent threads, and assembles the output into a standard gzip stream. Decompression is also faster with `pigz` on multi-core systems, though gzip decompression is less CPU-bound than compression.

## Syntax

```bash
pigz [options] [files...]
```

## Parameters

- `files`: One or more files to compress or decompress.

## Common Options

- `-p N`, `--processes N`: Use N compression threads (default: number of online CPUs).
- `-c`, `--stdout`: Write to standard output, keep original files unchanged.
- `-d`, `--decompress`: Decompress (same as `unpigz`).
- `-f`, `--force`: Force overwrite of output files.
- `-k`, `--keep`: Keep the original input files after compression.
- `-l`, `--list`: List contents and properties of a compressed file.
- `-r`, `--recursive`: Process directories recursively.
- `-t`, `--test`: Test the integrity of a compressed file.
- `-0` to `-9`: Compression level (0=fastest/no compression, 9=best compression, 6=default).
- `-11`: zlib-compatible compression level 11 (maximum compression).
- `-z`, `--zlib`: Produce zlib-compatible output instead of gzip.
- `-K`, `--zlib-compress`: Produce zlib-compressed data.
- `-b`, `--blocksize KiB`: Set the compression block size in KiB (default 128).
- `-S suffix`, `--suffix suffix`: Use a custom compression suffix (default `.gz`).
- `-n`, `--no-name`: Do not store original filename and timestamp.
- `-T`, `--no-time`: Do not store or restore timestamps.

## Examples

```bash
pigz largefile.tar
```

Compress a tar file using all available CPU cores.

```bash
pigz -p 4 largefile.tar
```

Compress using exactly 4 threads.

```bash
pigz -d archive.gz
```

Decompress a gzip file (same as `unpigz archive.gz`).

```bash
pigz -k -9 important.txt
```

Compress at maximum compression, keeping the original file.

```bash
tar cf - mydir/ | pigz > mydir.tar.gz
```

Create a compressed tar archive using pigz in a pipeline.

```bash
pigz -l archive.gz
```

List details of a compressed file without decompressing.

```bash
unpigz archive.gz
```

Decompress using the unpigz alias.

```bash
pigz -t archive.gz
```

Test the integrity of a compressed file.

## Practical Notes

- `pigz` produces standard `.gz` files. Decompress with `gzip -d`, `gunzip`, `unpigz`, or any gzip-compatible tool.
- Compression ratio is similar to `gzip -9` regardless of thread count. More threads improve speed, not compression ratio.
- For maximum compression speed, use `-p $(nproc)` to use all available cores.
- For very large files, increase the block size with `-b` to improve compression ratio at the cost of memory usage.
- `pigz` uses about 32 KiB + 2 × block size × threads of memory. With default settings and 8 threads, expect ~2 MiB.
- Install with `sudo apt install pigz` or `sudo yum install pigz`.
- For decompression speed improvements, use `unpigz` which is the same binary with a different symlink name.
- For better compression ratios, consider `xz` or `zstd` instead of gzip/pigz.
