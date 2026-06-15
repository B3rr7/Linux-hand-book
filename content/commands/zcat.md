---
name: zcat
summary: Read compressed files without decompressing to disk.
category: Files
tags: gzip, compress, decompress, read, cat
popular: false
---

## Additional Notes

`zcat` reads files compressed with `gzip` (`.gz`) or `compress` (`.Z`) and writes the decompressed content to standard output. It is essentially `gzip -dc` (decompress to stdout) and does not modify the original compressed files.

It is useful for viewing log files, configuration files, or any text file that has been compressed to save space. Multiple files can be specified, and they are concatenated in sequence, just like `cat`. The related commands `zless`, `zmore`, and `zgrep` provide paged viewing and searching of compressed files.

## Syntax

```bash
zcat [options] [file...]
```

## Parameters

- `file`: One or more compressed files (`.gz` or `.Z`). If no file is given, reads from standard input.

## Common Options

- `-f`, `--force`: Force decompression even if the file is not recognized as a compressed file.
- `-t`, `--test`: Test the integrity of the compressed file (do not decompress).
- `-l`, `--list`: Show compressed and uncompressed sizes and compression ratio.
- `-v`, `--verbose`: Verbose output.

## Examples

```bash
zcat file.txt.gz
```

View the contents of a compressed file.

```bash
zcat access.log.gz | grep "404"
```

Search through a compressed log file without decompressing.

```bash
zcat log1.gz log2.gz > combined.log
```

Combine multiple compressed files into a single uncompressed file.

```bash
zcat -l *.gz
```

List compression details for all gzip files in the directory.

```bash
zcat -t file.gz
```

Test the integrity of a gzip file.

## Practical Notes

- `zcat` is equivalent to `gunzip -c` or `gzip -dc`.
- On systems where `zcat` is not available, use `gunzip -c` or `gzip -dc` instead.
- For `bzip2` compressed files, use `bzcat`.
- For `xz` compressed files, use `xzcat`.
- Many modern tools like `less`, `grep`, and `tail` have built-in decompression support via wrappers like `zless`, `zgrep`, and `ztail`.
