---
name: look
summary: Display lines beginning with a string.
category: Text
tags: text, filter, format
popular: false
---

## Additional Notes

`look` is a text-processing command used to display lines beginning with a string. It performs a binary search on sorted input files for fast prefix matching.

Without a file argument, `look` searches `/usr/share/dict/words` by default. For unsorted files, use `grep "^prefix"` instead, which does not require sorted input.

## Syntax

```bash
look [options] [file...]
```

## Parameters

- `options`: Flags that change how `look` behaves.
- `file`: Text file to read or process.
- `string`: Prefix string to match at the beginning of lines.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
look --help
man look
```

## Practical Notes

Options can vary by distribution and package version. Use `man look`, `look --help`, or the package documentation for exact syntax.
