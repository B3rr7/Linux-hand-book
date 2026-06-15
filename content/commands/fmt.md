---
name: fmt
summary: Reformat paragraph text.
category: Text
tags: text, filter, format
popular: false
---

## Additional Notes

`fmt` is a text-processing command used to reformat paragraph text. It fills and joins text lines to a specified width (default 75 columns). It is useful for reformatting documentation, commit messages, or email text.

## Syntax

```bash
fmt [options] [file...]
```

## Parameters

- `options`: Flags that change how `fmt` behaves.
- `file`: Text file to read or process.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
fmt --help
man fmt
```

## Practical Notes

Options can vary by distribution and package version. Use `man fmt`, `fmt --help`, or the package documentation for exact syntax.
