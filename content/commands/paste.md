---
name: paste
summary: Merge lines from files side by side.
category: Text
tags: text, columns, merge, files
popular: false
---

## Additional Notes

`paste` is a text-processing command used to merge lines from files side by side. It lets you combine files column-wise, which is useful for creating reports or tabular output without a spreadsheet.

`paste` reads line by line in parallel from each input file. It is part of POSIX and works consistently across systems.

## Syntax

```bash
paste [options] [file...]
```

## Parameters

- `options`: Flags that change how `paste` behaves.
- `file`: Text file to read or process.

## Common Options

- `-d LIST`: Use custom delimiters.
- `-s`: Paste one file at a time instead of in parallel.

## Examples

```bash
paste names.txt scores.txt
paste -d, first.csv second.csv
seq 3 | paste -s -d+
```

## Practical Notes

`paste` is handy for simple column joining without needing a spreadsheet.
