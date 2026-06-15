---
name: csplit
summary: Split files into sections based on context patterns.
category: Text
tags: split, text, pattern, file
popular: false
---

## Additional Notes

`csplit` splits a file into pieces based on line numbers or matching patterns. It is useful for breaking structured text into separate files.

Use it when simple byte or line counts from `split` are not enough.

## Syntax

```bash
csplit [options] file pattern...
```

## Parameters

- `file`: Input file to split.
- `pattern`: Line number, regular expression, or repeat expression that defines split points.
- `options`: Output prefix, suffix, quiet, and keep controls.

## Common Options

- `-f PREFIX`: Use PREFIX for output files.
- `-b FORMAT`: Use FORMAT for output suffixes.
- `-n DIGITS`: Use DIGITS in output numbering.
- `-k`: Keep output files on errors.
- `-s`: Silent mode.
- `-z`: Remove empty output files.

## Examples

```bash
csplit document.txt 100
```

Split before line 100.

```bash
csplit -f part- document.txt '/^Chapter/' '{*}'
```

Split at each line beginning with `Chapter`.

```bash
csplit -z -f section- input.txt '/^---$/' '{*}'
```

Split on separator lines and remove empty files.

## Practical Notes

- Patterns are evaluated in order.
- Quote regex patterns so the shell does not interpret them.
- Use `split` for fixed-size splitting and `csplit` for content-aware splitting.
