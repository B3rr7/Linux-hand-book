---
name: tac
summary: Concatenate and print files in reverse line order.
category: Text
tags: reverse, cat, text, lines
popular: false
---

## Additional Notes

`tac` is `cat` spelled backwards, and that is exactly what it does: it prints files with lines in reverse order. The last line of each file is printed first, and the first line is printed last. For multiple files, each file is reversed independently, then concatenated.

This is useful for viewing log files chronologically backwards (most recent entries first), reversing the output of other commands in pipelines, or any situation where reverse line-order is needed.

## Syntax

```bash
tac [options] [file...]
```

## Parameters

- `file`: One or more files to reverse and concatenate. If omitted, reads from standard input.

## Common Options

- `-b`, `--before`: Attach the separator before each record instead of after.
- `-r`, `--regex`: Treat the separator as a regular expression.
- `-s separator`, `--separator=separator`: Use `separator` as the record delimiter instead of newline.

## Examples

```bash
tac file.txt
```

Print `file.txt` with lines in reverse order.

```bash
tac access.log | head -n 20
```

View the last 20 lines of a log file (most recent entries first).

```bash
tac part1.txt part2.txt
```

Reverse each file independently, then concatenate.

```bash
tac -s , data.csv
```

Reverse records delimited by commas instead of newlines.

```bash
echo -e "line1\nline2\nline3" | tac
```

Reverse piped input.

```bash
tac -r -s '\.' code.pl
```

Reverse a Perl script using periods as record separators (via regex).

## Practical Notes

- `tac` is part of GNU coreutils and is available on all Linux systems.
- For viewing reverse chronological logs, `tail -r` (BSD) or `tac` are both options.
- The `-s` option is useful for reversing records in non-line-delimited data.
- `tac` reads the entire input into memory before outputting, so very large files may use significant memory.
- For binary files, `tac` may produce unexpected results since it operates on lines (newline-separated).
