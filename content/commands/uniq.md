---
name: uniq
summary: Filter adjacent duplicate lines.
category: Text
tags: text, duplicate, unique, count, filter
popular: true
---

## Additional Notes

`uniq` removes or reports adjacent duplicate lines. It only compares neighboring lines, so input is usually sorted first.

Use `sort | uniq` to find unique lines across a whole file or stream.

## Syntax

```bash
uniq [options] [input [output]]
```

## Parameters

- `options`: Flags that change how `uniq` behaves.
- `file`: Text file to read or process.

## Common Options

- `-c`, `--count`: Prefix lines with occurrence counts.
- `-d`, `--repeated`: Print only duplicate lines.
- `-u`, `--unique`: Print only lines that are not duplicated.
- `-i`, `--ignore-case`: Ignore case differences.
- `-f N`: Skip first `N` fields.
- `-s N`: Skip first `N` characters.

## Examples

```bash
sort names.txt | uniq
```

Print unique names.

```bash
sort access.log | uniq -c
```

Count repeated lines.

```bash
sort errors.txt | uniq -d
```

Show only lines that appear more than once.

```bash
sort words.txt | uniq -u
```

Show only lines that appear once.

```bash
sort names.txt | uniq -ci
```

Count duplicates while ignoring case.

## Practical Notes

- `uniq` checks adjacent lines only.
- Use `sort` first unless you intentionally care about neighboring duplicates.
- `sort | uniq -c | sort -nr` is useful for frequency counts.
- For field-aware processing, consider `awk`.
