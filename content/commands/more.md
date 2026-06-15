---
name: more
summary: View text one screen at a time.
category: Text
tags: text, filter, format
popular: false
---

## Additional Notes

`more` is a text-processing command used to view text one screen at a time. It is a basic pager for viewing long output with forward scrolling and basic search support.

`less` is a more modern pager with backward scrolling and richer search capabilities. Many systems alias `more` to `less`, so behavior may differ from the original `more`.

## Syntax

```bash
more [options] [file...]
```

## Parameters

- `options`: Flags that change how `more` behaves.
- `file`: Text file to read or process.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
more --help
man more
```

## Practical Notes

Options can vary by distribution and package version. Use `man more`, `more --help`, or the package documentation for exact syntax.
