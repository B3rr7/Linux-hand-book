---
name: comm
summary: Compare two sorted files line by line.
category: Text
tags: compare, sorted, text, lines
popular: false
---

## Additional Notes

`comm` compares two sorted files and prints three columns: lines only in the first file, lines only in the second file, and lines common to both.

Use it when comparing sets of lines, such as package lists, usernames, hostnames, or file inventories.

## Syntax

```bash
comm [options] file1 file2
```

## Parameters

- `file1`: First sorted file.
- `file2`: Second sorted file.
- `options`: Controls for suppressing output columns.

## Common Options

- `-1`: Suppress lines unique to file1.
- `-2`: Suppress lines unique to file2.
- `-3`: Suppress lines common to both files.
- `--check-order`: Check that input is sorted.
- `--nocheck-order`: Do not check sort order.

## Examples

```bash
comm old.txt new.txt
```

Compare two sorted files in three columns.

```bash
comm -12 old.txt new.txt
```

Show only lines common to both files.

```bash
comm -23 old.txt new.txt
```

Show lines only in `old.txt`.

```bash
sort a.txt > a.sorted
sort b.txt > b.sorted
comm -13 a.sorted b.sorted
```

Show lines only in `b.txt` after sorting.

## Practical Notes

- Inputs must be sorted using the same collation rules.
- Set `LC_ALL=C` for bytewise predictable sorting in scripts.
- Use `diff` when order and changed blocks matter.
