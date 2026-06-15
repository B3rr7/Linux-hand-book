---
name: fgrep
summary: Search fixed strings in text.
category: Text
tags: text, filter, format
popular: false
---

## Additional Notes

`fgrep` is a text-processing command used to search fixed strings in text. It searches for literal strings without interpreting regex metacharacters, making it faster and safer than grep when the search pattern contains special characters. It is equivalent to grep -F.

## Syntax

```bash
fgrep [options] [file...]
```

## Parameters

- `options`: Flags that change how `fgrep` behaves.
- `file`: Text file to read or process.
- `pattern`: Fixed string to search for in the input.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
fgrep --help
man fgrep
```

## Practical Notes

Options can vary by distribution and package version. Use `man fgrep`, `fgrep --help`, or the package documentation for exact syntax.
