---
name: znew
summary: Recompress .Z files to .gz format.
category: Files
tags: compress, gzip, recompress, convert, .Z
popular: false
---

## Additional Notes

`znew` recompresses files from the old Unix `compress` format (`.Z`) to the `gzip` format (`.gz`). It decompresses the `.Z` file and recompresses it with `gzip`, which typically achieves better compression ratios. The original `.Z` file can be optionally removed after conversion.

This tool was useful during the transition from `compress` to `gzip`. It is rarely needed today since `.Z` files are uncommon. The conversion preserves the file's timestamp and mode.

## Syntax

```bash
znew [options] file[.Z]...
```

## Parameters

- `file`: One or more `.Z` files to convert.

## Common Options

- `-f`, `--force`: Force conversion even if a `.gz` file already exists.
- `-t`, `--test`: Test the integrity of the new `.gz` file before removing the original.
- `-v`, `--verbose`: Show compression ratios and progress.
- `-9`: Use maximum compression level.
- `-K`, `--keep`: Keep the original `.Z` file (do not remove after conversion).
- `-P`, `--small`: Use the smallest possible memory level (slower but less memory).

## Examples

```bash
znew file.Z
```

Convert `file.Z` to `file.gz` and remove `file.Z`.

```bash
znew -K file.Z
```

Convert `file.Z` to `file.gz` but keep the original.

```bash
znew -v -9 file.Z
```

Convert with maximum compression and show verbose output.

```bash
znew -t *.Z
```

Convert all `.Z` files and test each new `.gz` before removing originals.

## Practical Notes

- If the resulting `.gz` file is not smaller, the conversion is skipped (unless `-f` is used).
- The `-t` flag is recommended to ensure data integrity before the original is removed.
- Modern systems usually have `gunzip` which can decompress both `.Z` and `.gz` directly, making explicit conversion unnecessary.
- Use `zcat` to read either format without conversion.
