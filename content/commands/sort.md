---
name: sort
summary: Sort lines of text.
category: Text
tags: text, sort, lines, numeric, unique
popular: true
---

## Additional Notes

`sort` orders lines of text. It is often used with pipelines to organize command output, logs, lists, and reports.

Sorting can be alphabetical, numeric, reverse, human-readable size aware, or based on a field.

## Syntax

```bash
sort [options] [file...]
```

## Parameters

- `options`: Flags that change how `sort` behaves.
- `file`: Text file to read or process.

## Common Options

- `-n`, `--numeric-sort`: Sort numbers by numeric value.
- `-h`, `--human-numeric-sort`: Sort human-readable sizes like `2K`, `10M`, `1G`.
- `-r`, `--reverse`: Reverse order.
- `-u`, `--unique`: Remove duplicate lines after sorting.
- `-k N`: Sort by field/key.
- `-t SEP`: Use a field separator.
- `-o FILE`: Write output to a file.

## Examples

```bash
sort names.txt
```

Sort lines alphabetically.

```bash
sort -n numbers.txt
```

Sort numbers correctly.

```bash
sort -r names.txt
```

Sort in reverse order.

```bash
du -sh * | sort -h
```

Sort disk usage by human-readable size.

```bash
sort -u words.txt
```

Sort and remove duplicates.

```bash
sort -t: -k3 -n /etc/passwd
```

Sort `/etc/passwd` by numeric UID field.

## Practical Notes

- Use `sort -n` for plain numbers; normal sort compares text.
- Use `sort -h` for sizes from commands like `du -h`.
- `uniq` usually needs sorted input to remove all duplicates.
- Use `LC_ALL=C sort` for faster byte-based sorting in some scripts.
