---
name: unexpand
summary: Convert spaces to tabs.
category: Text
tags: text, convert, spaces, tabs, formatting
popular: false
---

## Additional Notes

`unexpand` converts sequences of spaces into tab characters. It is the inverse of `expand`. By default it converts leading spaces (at the start of each line) into tabs, but it can also convert spaces within lines at configurable tab stops.

This is useful when you want to reduce file size or conform to a project's tab-based indentation style. It complements `expand`, which does the reverse (tabs to spaces). Both commands understand the standard 8-column tab stops unless overridden with the `-t` option.

## Syntax

```bash
unexpand [options] [file...]
```

## Parameters

- `file`: One or more files to process. If no file is given, reads standard input.

## Common Options

- `-a`, `--all`: Convert all sequences of two or more spaces, not just leading whitespace.
- `-t N`, `--tabs N`: Set tab stops every `N` characters (default 8). Can also be a comma-separated list of explicit tab stop positions.
- `--first-only`: Only convert leading sequences of spaces (default behavior without `-a`).

## Examples

```bash
unexpand file.txt
```

Convert leading spaces to tabs.

```bash
unexpand -a file.txt
```

Convert all space sequences (not just leading) to tabs.

```bash
unexpand -t 4 file.txt
```

Convert spaces assuming 4-column tab stops.

```bash
unexpand -t 4,8,12 < input.py
```

Convert spaces with explicit tab stops at columns 4, 8, and 12.

## Practical Notes

- Use `unexpand -a` to convert in-line alignment spaces (not just indent).
- Paired with `expand`, this lets you switch between tab and space indentation standards.
- Use `cat -A` or `od -c` to verify that tabs were inserted successfully (`^I` display).
- Many editors have built-in tab/space conversion; `unexpand` is useful for batch processing.
