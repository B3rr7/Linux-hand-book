---
name: dos2unix
summary: Convert text files from DOS line endings to Unix format.
category: Text
tags: text, filter, format
popular: false
---

## Additional Notes

`dos2unix` is a text-processing command used to convert text files from DOS line endings to Unix format. It converts CRLF line endings (Windows/DOS style) to LF line endings (Unix style). Use the companion unix2dos for the reverse conversion.

## Syntax

```bash
dos2unix [options] [file...]
```

## Parameters

- `options`: Flags that change how `dos2unix` behaves.
- `file`: Text file to read or process.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
dos2unix --help
man dos2unix
```

## Practical Notes

Options can vary by distribution and package version. Use `man dos2unix`, `dos2unix --help`, or the package documentation for exact syntax.
