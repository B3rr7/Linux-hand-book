---
name: csplit
summary: Split files into sections based on context patterns.
category: Text
tags: split, text, pattern, line, file
popular: false
---

## Additional Notes

`csplit` splits a file into multiple output files based on line numbers, repeating counts, or context patterns such as a heading line. It is ideal for breaking one large document into chapters, sections, or records.

Unlike `split`, which cuts by fixed size, `csplit` cuts by content you describe with a pattern or line position.

## Syntax

```bash
csplit [options] FILE PATTERN...
```

## Parameters

- `options`: Flags that change naming and behavior.
- `FILE`: The file to split (use `-` for standard input).
- `PATTERN`: How to find each split point: a line number, a count, or a regular expression.

## Pattern Forms

- `N`: Split before line number `N`.
- `/REGEX/`: Split before each line matching the regular expression.
- `/REGEX/[OFFSET]`: Apply an offset (such as `+1` or `-1`) to the match line.
- `{N}`: Repeat the previous pattern `N` times, or `{*}` to repeat until the end.

## Common Options

- `-f PREFIX`: Set the output filename prefix (default `xx`).
- `-b FORMAT`: Set the suffix format, such as `%02d`.
- `-n N`: Use `N` digists in the suffix.
- `-k`, `--keep-files`: Keep output files even on errors.
- `-z`: Use NUL instead of newline as the line delimiter.
- `-s`: Suppress counts that are normally printed.

## Examples

```bash
csplit -z manual.txt /Chapter/ "{*}"
```

Split `manual.txt` before every line containing `Chapter`, repeating to the end.

```bash
csplit data.txt 20
```

Split before line 20, producing a first file with lines 1–19.

```bash
csplit -f part- -b "%03d.txt" log.txt /ERROR/ "{*}"
```

Split `log.txt` before each `ERROR` line into `part-000.txt`, `part-001.txt`, and so on.

```bash
csplit -z report.txt /SECTION/ +1
```

Split before each `SECTION` line, then shift the cut one line down.

```bash
csplit big.txt 100 {10}
```

Split before line 100, then repeat that every 100 lines 10 more times.

## Practical Notes

- Patterns are tried in order; each splits the file at a point.
- `{*}` keeps splitting until the input ends, which is the usual case for documents.
- Use `-f` and `-b` to control the output filenames.
- `csplit` is content-aware, unlike `split`, which only cuts by size.
