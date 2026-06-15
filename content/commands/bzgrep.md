---
name: bzgrep
summary: Search bzip2-compressed files for a pattern.
category: Archives
tags: bzip2, grep, search, compressed
popular: false
---

## Additional Notes

`bzgrep` searches bzip2-compressed files without manually decompressing them first. It behaves like a wrapper around `grep` that decompresses input as it searches.

Use it for compressed logs, reports, and text files ending in `.bz2`.

## Syntax

```bash
bzgrep [grep-options] pattern file.bz2...
```

## Parameters

- `pattern`: Text or regular expression to search for.
- `file.bz2`: Compressed file to search.
- `grep-options`: Common grep flags such as `-i`, `-n`, or `-E`.

## Common Options

- `-i`: Case-insensitive search.
- `-n`: Show line numbers.
- `-v`: Invert the match.
- `-E`: Use extended regular expressions.
- `-l`: Show only filenames with matches.

## Examples

```bash
bzgrep "error" access.log.bz2
```

Search a compressed log file.

```bash
bzgrep -in "failed" *.bz2
```

Search case-insensitively and show line numbers.

```bash
bzgrep -l "root" /var/log/*.bz2
```

Print only compressed files containing the pattern.

## Practical Notes

- `bzgrep` is best for text data compressed with bzip2.
- For gzip files, use `zgrep`.
- Very large compressed files still take time because they must be decompressed while searching.
