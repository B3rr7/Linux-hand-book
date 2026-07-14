---
name: split
summary: Split a file into smaller pieces.
category: Files
tags: file, split, chunks, large-files, archive
popular: false
---

## Additional Notes

`split` divides a single file into a number of smaller files by line count or byte size. It is useful for sending large logs by email, uploading in chunks, or feeding huge files into tools that prefer smaller inputs.

The output files are named with a prefix plus a suffix (default `xaa`, `xab`, ...). Reassembling is as simple as concatenating them back in order.

## Syntax

```bash
split [options] [file] [prefix]
```

## Parameters

- `options`: Flags that choose the chunk size or naming.
- `file`: File to split (use `-` or omit for standard input).
- `prefix`: Output filename prefix (default `x`).

## Common Options

- `-l N`, `--lines=N`: Put `N` lines in each piece.
- `-b N`, `--bytes=N`: Put `N` bytes in each piece; suffix `K`, `M`, `G` allowed.
- `-a N`: Use `N` characters for the suffix.
- `-d`: Use numeric suffixes (`00`, `01`, ...) instead of letters.
- `--additional-suffix=EXT`: Append a file extension such as `.part`.
- `-e`: Do not create empty output files.
- `--filter=CMD`: Pipe each piece to a command instead of writing a file.

## Examples

```bash
split -l 1000 big.log
```

Split into 1000-line files named `xaa`, `xab`, and so on.

```bash
split -b 100M large.iso part-
```

Split a 100 MB-per-file ISO with the `part-` prefix.

```bash
split -d -a 3 -b 50M data.zip backup.zip.
```

Produce `backup.zip.000`, `backup.zip.001`, ... using 3-digit numeric suffixes.

```bash
split -l 500 access.log /tmp/chunk-
```

Write chunks into `/tmp` with a custom prefix.

```bash
cat xaa xab xac > big.log
```

Reassemble the original file from its pieces in order.

## Practical Notes

- Reassembly order matters; keep the default suffix order intact.
- Use `-b` with `K`/`M`/`G` for size-based splitting.
- `--filter` lets you pipe each piece straight to `gzip` or `sha256sum`.
- Splitting and re-catting is a simple way to work around file-size limits.
