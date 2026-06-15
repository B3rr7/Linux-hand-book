---
name: join
summary: Join lines of two files on a common field.
category: Text
tags: text, join, fields, merge, files, relational
popular: false
---

## Additional Notes

`join` merges lines from two sorted text files based on a common field, similar to a relational database join. Each file should have one line per record with fields separated by whitespace or a custom delimiter.

Both input files must be sorted on the join field. If they are not sorted, use `sort` before `join`.

## Syntax

```bash
join [options] FILE1 FILE2
```

## Parameters

- `FILE1`: First input file.
- `FILE2`: Second input file.
- Use `-` to read from standard input for either file.

## Common Options

- `-1 FIELD`: Join on FIELD of file 1 (default 1).
- `-2 FIELD`: Join on FIELD of file 2 (default 1).
- `-j FIELD`: Join on FIELD of both files.
- `-t CHAR`: Use CHAR as the input and output field separator.
- `-o FORMAT`: Control which fields to output.
- `-a FILENUM`: Print unpairable lines from file FILENUM (1 or 2).
- `-v FILENUM`: Like `-a` but suppresses matched output lines.
- `-e STRING`: Replace missing fields with STRING.

## Examples

```bash
join names.txt scores.txt
```

Join two files on the first field (default).

```bash
join -t',' -1 2 -2 1 file1.csv file2.csv
```

Join CSV files on field 2 of file1 and field 1 of file2.

```bash
join -a 1 left.txt right.txt
```

Include all lines from the first file, even without a match.

```bash
sort -k 1,1 file1.txt | join - file2.txt
```

Join sorted piped input with a file.

## Output Field Format

With `-o`, control which fields appear:

- `0`: The join field (printed once).
- `1.1`, `1.2`, ...: Fields from file 1.
- `2.1`, `2.2`, ...: Fields from file 2.

```bash
join -o 0,1.2,2.2 file1.txt file2.txt
```

Show join field, field 2 from file1, field 2 from file2.

## Practical Notes

- Both input files must be sorted on the join field using the same collation order.
- Use `sort -k 1,1` to sort on the first field before joining.
- Whitespace handling can be tricky; use `-t` with a specific delimiter for reliable results.
- `join` is useful for combining lookup tables, configuration mappings, and log analysis. It complements tools like `awk`, `paste`, and `comm`.
