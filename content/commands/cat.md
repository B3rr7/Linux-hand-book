---
name: cat
summary: Print, combine, and redirect file contents.
category: Text
tags: file, print, text, concatenate, redirect
popular: true
---

## Additional Notes

`cat` prints file contents to standard output. The name comes from concatenate because it can join multiple files together.

It is best for short files, quick checks, and combining files. For long files, use `less`, `more`, `head`, or `tail` so the output does not flood the terminal.

## Syntax

```bash
cat [options] [file...]
```

## Parameters

- `file`: One or more files to print.
- No file: Reads from standard input.

## Common Options

- `-n`, `--number`: Number all output lines.
- `-b`, `--number-nonblank`: Number only non-empty lines.
- `-s`, `--squeeze-blank`: Replace repeated blank lines with one blank line.
- `-A`, `--show-all`: Show tabs, line endings, and non-printing characters.
- `-T`, `--show-tabs`: Show tab characters as `^I`.
- `-E`, `--show-ends`: Show line endings as `$`.

## Examples

```bash
cat file.txt
```

Print a file.

```bash
cat -n script.sh
```

Print a file with line numbers.

```bash
cat part1.txt part2.txt > combined.txt
```

Join two files into a new file.

```bash
cat >> notes.txt
```

Append typed input to a file. Press `Ctrl+D` to finish.

```bash
cat -A file.txt
```

Reveal hidden characters such as tabs and line endings.

## Practical Notes

- `cat file > other` overwrites `other`; `cat file >> other` appends.
- Avoid using `cat file | grep pattern` when `grep pattern file` is enough.
- Use `less file` for long files.
- Use `head` and `tail` to inspect only the beginning or end of a file.
