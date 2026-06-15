---
name: column
summary: Format text into aligned columns or tables.
category: Text
tags: text, table, format, columns
popular: false
---

## Additional Notes

`column` formats text into columns. It is useful for making command output, lists, and delimited data easier to read in a terminal.

It is commonly used with `-t` to align table-like input.

## Syntax

```bash
column [options] [file...]
```

## Parameters

- `file`: Optional input file. If omitted, standard input is used.
- `options`: Table, separator, width, and output controls.

## Common Options

- `-t`: Create a table by aligning columns.
- `-s SEP`: Use SEP as the input separator.
- `-o SEP`: Use SEP as the output separator when supported.
- `-x`: Fill rows before columns.
- `-c WIDTH`: Set output width.
- `-N NAMES`: Set column names on newer util-linux versions.

## Examples

```bash
printf 'name:uid:shell\nrani:1000:bash\n' | column -t -s ':'
```

Format colon-separated text as a table.

```bash
mount | column -t
```

Align whitespace-separated output.

```bash
cat /etc/passwd | column -t -s ':' | less
```

Inspect passwd fields in aligned columns.

## Practical Notes

- `column` is for display, not reliable machine parsing.
- Quote separators that have shell meaning.
- Options differ between BSD and util-linux implementations.
