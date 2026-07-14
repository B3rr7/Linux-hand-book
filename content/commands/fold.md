---
name: fold
summary: Wrap input lines to a specified width.
category: Text
tags: text, filter, format, wrap, width
popular: false
---

## Additional Notes

`fold` wraps long input lines so no output line exceeds a chosen width. It is a simple filter for making wide text fit a terminal, email, or print column.

By default it counts bytes and breaks anywhere; adding `-s` makes it break only at spaces, which keeps words intact.

## Syntax

```bash
fold [options] [file ...]
```

## Parameters

- `options`: Flags that change the width or break behavior.
- `file`: File to read; if omitted, reads standard input.

## Common Options

- `-w N`, `--width=N`: Wrap at `N` columns (default 80).
- `-s`, `--spaces`: Break lines only at spaces.
- `-b`, `--bytes`: Count width in bytes rather than columns.
- `-c N`: Alias for `--width=N` on some systems.

## Examples

```bash
fold -w 80 long-line.txt
```

Wrap a file to 80-column lines.

```bash
fold -s -w 60 notes.txt
```

Wrap at spaces so words are not split.

```bash
cat README.md | fold -s -w 72
```

Make piped text fit a 72-column width.

```bash
fold -w 40 paragraph.txt > wrapped.txt
```

Save a 40-column wrapped copy.

```bash
fold -b -w 100 binary.log
```

Wrap counting raw bytes, useful for non-text logs.

## Practical Notes

- Without `-s`, `fold` may cut a word across two lines.
- Use `-s` for prose, emails, and any human-readable output.
- The default width is 80 columns, the classic terminal size.
- For a smarter, word-aware formatter, `fmt` is often preferable to `fold`.
