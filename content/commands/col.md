---
name: col
summary: Filter reverse line feeds and terminal control characters.
category: Text
tags: text, filter, terminal, formatting
popular: false
---

## Additional Notes

`col` filters text containing reverse line feeds and other terminal formatting sequences. It is often used when processing output from old formatting tools or manual pages.

Use it when output contains backspaces, overstrikes, or line-motion sequences that make plain-text processing difficult.

## Syntax

```bash
col [options]
```

## Parameters

- Standard input: Text stream to filter.
- Standard output: Cleaned or transformed text stream.
- `options`: Controls for tabs, spaces, backspaces, and line feeds.

## Common Options

- `-b`: Do not output backspaces. Useful for removing overstrikes.
- `-f`: Allow forward half-line feeds.
- `-p`: Pass unknown control sequences through.
- `-x`: Convert tabs to spaces.

## Examples

```bash
man ls | col -b > ls.txt
```

Save a readable plain-text version of a manual page.

```bash
some-command | col -b | less
```

Strip backspace formatting before viewing output.

```bash
cat formatted.txt | col -x
```

Convert tabs to spaces while filtering.

## Practical Notes

- `col -b` is common when converting formatted terminal output to searchable text.
- It does not understand every modern terminal escape sequence.
- For ANSI color codes, tools like `sed`, `ansi2txt`, or dedicated filters may be better.
