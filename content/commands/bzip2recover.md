---
name: bzip2recover
summary: Recover usable blocks from damaged bzip2 files.
category: Archives
tags: bzip2, recover, damaged, archive
popular: false
---

## Additional Notes

`bzip2recover` attempts to recover data from damaged bzip2 files by splitting recoverable blocks into separate files. It cannot magically repair all corruption, but it may save parts of a compressed file.

Use it only when a `.bz2` file is damaged and normal decompression fails.

## Syntax

```bash
bzip2recover file.bz2
```

## Parameters

- `file.bz2`: Damaged bzip2 file to scan.

## Common Output

- `rec00001file.bz2`: Recovered block file.
- `rec00002file.bz2`: Another recovered block file.

## Examples

```bash
bzip2recover broken-data.bz2
```

Try to recover blocks from a damaged file.

```bash
bunzip2 rec*.bz2
```

Decompress recovered block files.

```bash
cat rec*.out > recovered-parts.txt
```

Combine recovered text output when appropriate.

## Practical Notes

- Work on a copy of damaged data.
- Recovery output may be incomplete or out of context.
- This is a last-resort tool, not a replacement for backups.
