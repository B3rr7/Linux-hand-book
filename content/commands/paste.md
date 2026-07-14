---
name: paste
summary: Merge lines from files side by side.
category: Text
tags: text, columns, merge, files, join
popular: false
---

## Additional Notes

`paste` merges lines from multiple files, writing them side by side with a tab between columns. It is the inverse of `cut` and a quick way to build tables from separate column files.

When given one file, `paste` places one input line per output line with a chosen delimiter. Use `-` to read one column from standard input.

## Syntax

```bash
paste [options] [file ...]
```

## Parameters

- `options`: Flags that change the delimiter or mode.
- `file`: One or more files to merge (use `-` for standard input).

## Common Options

- `-d LIST`, `--delimiters=LIST`: Use characters from LIST as column separators (cycled per column).
- `-s`, `--serial`: Paste one file at a time, its lines becoming one output row.
- `-z`: Lines end with NUL instead of newline.

## Examples

```bash
paste first.txt second.txt
```

Join the two files as two side-by-side columns separated by tabs.

```bash
paste -d, a.txt b.txt c.txt
```

Merge three files using commas as the column separator.

```bash
ls | paste - - -
```

Read three items per row from standard input.

```bash
paste -s -d, numbers.txt
```

Turn one file's lines into a single comma-separated row.

```bash
cut -d: -f1 /etc/passwd | paste -d, - names2.txt
```

Combine a column from a file with a stdin column.

## Practical Notes

- The default column separator is a tab; change it with `-d`.
- `-s` is useful for turning a vertical list into a horizontal one.
- `paste` pairs naturally with `cut` and `column` for table building.
- When inputs have different line counts, shorter columns simply stop early.
