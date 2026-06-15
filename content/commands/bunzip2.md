---
name: bunzip2
summary: Decompress bzip2-compressed files.
category: Archives
tags: bzip2, decompress, archive, files
popular: false
---

## Additional Notes

`bunzip2` decompresses files compressed with `bzip2`, usually ending in `.bz2`. It is equivalent to `bzip2 -d`.

By default, it replaces the compressed file with the decompressed output.

## Syntax

```bash
bunzip2 [options] file.bz2...
```

## Parameters

- `file.bz2`: Compressed file to decompress.
- `options`: Keep, force, test, and output controls.

## Common Options

- `-k`: Keep the original compressed file.
- `-f`: Force overwrite when needed.
- `-c`: Write decompressed data to standard output.
- `-t`: Test compressed file integrity.
- `-v`: Verbose output.

## Examples

```bash
bunzip2 logs.txt.bz2
```

Decompress and remove the `.bz2` file.

```bash
bunzip2 -k logs.txt.bz2
```

Decompress while keeping the original compressed file.

```bash
bunzip2 -c logs.txt.bz2 | less
```

View decompressed content without writing a file.

```bash
bunzip2 -t archive.bz2
```

Test integrity.

## Practical Notes

- Use `tar -xjf archive.tar.bz2` for tar archives compressed with bzip2.
- Default behavior removes the compressed input after successful decompression.
- For faster compression/decompression on multi-core systems, `pbzip2` may be useful when available.
