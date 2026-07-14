---
name: column
summary: Format text into aligned columns or tables.
category: Text
tags: text, table, format, columns, align
popular: false
---

## Additional Notes

`column` formats input into aligned, easy-to-read columns. It is especially useful for turning delimiter-separated output (such as `mount` or a CSV) into a tidy table.

By default it fills columns down each column; the `-t` (table) mode aligns by a separator and spreads columns across the page.

## Syntax

```bash
column [options] [file ...]
```

## Parameters

- `options`: Flags that change the layout.
- `file`: File to read; if omitted, reads standard input.

## Common Options

- `-t`, `--table`: Create a table by detecting column separators.
- `-s SEP`, `--separator SEP`: Use a specific column separator.
- `-o SEP`, `--output-separator SEP`: Set the separator between output columns.
- `-x`: Fill rows across instead of down columns.
- `-n`: Do not merge multiple adjacent separators.
- `-e`: Do not ignore empty lines.
- `-c WIDTH`: Format for a given display width.
- `-L LEVELS`: For `-t`, how many separators to trust per line.

## Examples

```bash
mount | column -t
```

Turn `mount` output into an aligned, readable table.

```bash
column -t -s, data.csv
```

Format a comma-separated CSV into aligned columns.

```bash
column -t -s: -o " | " /etc/passwd
```

Align `/etc/passwd` fields, separating output with ` | `.

```bash
ls -l | column -x
```

List entries filled across rows instead of down columns.

```bash
column -t -s, -n report.csv
```

Treat repeated commas as separate empty fields.

## Practical Notes

- `-t` is the most useful mode; pair it with `-s` for non-whitespace delimiters.
- `mount | column -t` is a quick way to read mount points.
- Use `-o` to choose how output columns are visually separated.
- When columns look misaligned, check that every line has the same number of separators.
