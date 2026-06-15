---
name: split
summary: Split a file into smaller pieces.
category: Files
tags: file, split, chunks, large-files
popular: false
---

## Additional Notes

`split` is a file command used to split a file into smaller pieces. It breaks large files into smaller pieces, making them easier to transmit, store, or process.

Use `-l` to split by lines and `-b` to split by byte size. Combine with `cat` to reassemble: `cat x* > original`.

## Syntax

```bash
split [options] [arguments]
```

## Parameters

- `options`: Flags that change how `split` behaves.
- `path`: File or directory path to inspect or change.
- `arguments`: Names, patterns, or values used by the command.

## Common Options

- `-l N`: Split by N lines.
- `-b SIZE`: Split by byte size.
- `-d`: Use numeric suffixes.
- `-a N`: Set suffix length.

## Examples

```bash
split -l 1000 big.txt part-
split -b 100M archive.tar part-
split -d -a 3 big.txt chunk-
```

## Practical Notes

Use `cat part-* > original` to reassemble simple split files in order.
