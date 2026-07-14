---
name: comm
summary: Compare two sorted files line by line.
category: Text
tags: compare, sorted, text, lines, diff
popular: false
---

## Additional Notes

`comm` compares two already-sorted files line by line and prints three columns: lines only in the first file, lines only in the second file, and lines in both. It is faster and simpler than `diff` when both inputs are sorted.

Both input files must be sorted the same way, or the output is unreliable. Use `sort` first when the files are not already sorted.

## Syntax

```bash
comm [options] FILE1 FILE2
```

## Parameters

- `options`: Flags that suppress columns.
- `FILE1`, `FILE2`: The two sorted files to compare.

## Common Options

- `-1`: Suppress column 1 (lines unique to FILE1).
- `-2`: Suppress column 2 (lines unique to FILE2).
- `-3`: Suppress column 3 (lines common to both).
- `--check-order`: Warn if the input is not sorted.
- `--nocheck-order`: Do not warn about sort order.

## Output Layout

- Column 1: lines only in FILE1.
- Column 2: lines only in FILE2.
- Column 3: lines in both files.

## Examples

```bash
comm a.txt b.txt
```

Show all three columns.

```bash
comm -23 a.txt b.txt
```

Print lines only in `a.txt` (suppress columns 2 and 3).

```bash
comm -13 a.txt b.txt
```

Print lines only in `b.txt`.

```bash
comm -12 a.txt b.txt
```

Print only the lines common to both files.

```bash
sort list-a.txt > a.sorted
sort list-b.txt > b.sorted
comm -23 a.sorted b.sorted
```

Sort both files first, then show what is unique to the first.

## Practical Notes

- Both files must be sorted identically; otherwise the result is wrong.
- Use `sort` on both inputs before comparing.
- `comm -23` / `comm -13` are handy for set-difference operations.
- `comm -12` gives the set intersection of two sorted lists.
- For unsorted or patch-style comparison, use `diff` instead.
