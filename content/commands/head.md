---
name: head
summary: Print the beginning of files.
category: Text
tags: text, file, preview, beginning, lines
popular: true
---

## Additional Notes

`head` prints the first part of a file or input stream. By default, it shows the first 10 lines.

It is useful when you want to preview a file without opening the whole thing.

## Syntax

```bash
head [options] [file...]
```

## Parameters

- `options`: Flags that change how `head` behaves.
- `file`: Text file to read or process.

## Common Options

- `-n N`, `--lines=N`: Print the first `N` lines.
- `-c N`, `--bytes=N`: Print the first `N` bytes.
- `-q`, `--quiet`: Do not print file headers when reading multiple files.
- `-v`, `--verbose`: Always print file headers.

## Examples

```bash
head file.txt
```

Show the first 10 lines.

```bash
head -n 20 app.log
```

Show the first 20 lines.

```bash
head -c 100 data.bin
```

Show the first 100 bytes.

```bash
head *.log
```

Preview multiple log files.

```bash
command | head
```

Show only the beginning of command output.

## Practical Notes

- Use `tail` to view the end of a file.
- Use `less` for scrolling and searching.
- `head` is safe for large files because it stops early.
- For CSV files, `head -n 1 file.csv` often shows the header.
