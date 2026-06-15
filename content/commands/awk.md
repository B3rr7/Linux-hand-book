---
name: awk
summary: Process text files by fields and patterns.
category: Text
tags: text, fields, columns, reports, filter
popular: true
---

## Additional Notes

`awk` is a text-processing language built around patterns and actions. It reads input line by line, splits each line into fields, and lets you print, filter, calculate, and format results.

It is especially useful for column-oriented text such as logs, CSV-like data, command output, and `/etc/passwd`.

## Syntax

```bash
awk [options] 'pattern { action }' [file...]
```

## Parameters

- `options`: Flags that change how `awk` behaves.
- `file`: Text file to read or process.
- `'pattern { action }'`: Awk program with a pattern to match lines and an action to execute.

## Important Variables

- `$0`: The whole current line.
- `$1`, `$2`, `$3`: First, second, third field, and so on.
- `NF`: Number of fields in the current line.
- `NR`: Current input record number, usually the line number.
- `FS`: Input field separator.
- `OFS`: Output field separator.

## Common Options

- `-F SEP`: Set input field separator.
- `-v NAME=VALUE`: Pass a variable into awk.
- `-f FILE`: Read awk program from a file.

## Examples

```bash
awk '{print $1}' access.log
```

Print the first field from each line.

```bash
awk -F: '{print $1}' /etc/passwd
```

Print usernames from `/etc/passwd`.

```bash
awk '{print NR, $0}' file.txt
```

Print line numbers with each line.

```bash
awk '$9 >= 500 {print $0}' access.log
```

Print web log lines where field 9 is 500 or greater.

```bash
awk '{sum += $1} END {print sum}' numbers.txt
```

Add numbers from the first column.

```bash
df -h | awk 'NR > 1 {print $1, $5, $6}'
```

Print selected columns from `df` output.

```bash
awk -F, 'NR > 1 {print $1, $3}' data.csv
```

Read comma-separated data and skip the header line.

## Pattern Examples

- `NR == 1`: Match first line.
- `NR > 1`: Skip first line.
- `$3 == "active"`: Match lines where field 3 equals `active`.
- `$5 > 100`: Match lines where field 5 is greater than 100.
- `/error/`: Match lines containing `error`.
- `END { ... }`: Run after all input is processed.

## Practical Notes

- Use `awk` when data has columns or fields.
- Use `sed` for stream editing and substitutions.
- Use `grep` for searching lines.
- The default field separator is whitespace.
- For real CSV with quotes and embedded commas, use a proper CSV parser.
