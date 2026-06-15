---
name: fold
summary: Wrap input lines to a specified width.
category: Text
tags: text, filter, format
popular: false
---

## Additional Notes

`fold` wraps each line of input to fit a specified width. It is useful for formatting text that needs to fit within a fixed column limit, such as terminal output, code, or data files.

## Syntax

```bash
fold [options] [file...]
```

## Parameters

- `options`: Flags that change how `fold` behaves.
- `file`: Text file to read. Reads from standard input if omitted.

## Common Options

- `-w WIDTH`, `--width=WIDTH`: Set maximum line width (default 80).
- `-s`, `--spaces`: Break at spaces instead of at the exact width.

## Examples

```bash
fold --help
man fold
```

## Practical Notes

Options can vary by distribution and package version. Use `man fold`, `fold --help`, or the package documentation for exact syntax.
