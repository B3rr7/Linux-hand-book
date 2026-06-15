---
name: expand
summary: Convert tabs to spaces.
category: Text
tags: text, filter, format
popular: false
---

## Additional Notes

`expand` is a text-processing command used to convert tabs to spaces. It replaces tab characters in files with spaces, preserving column alignment. Use unexpand to convert spaces back to tabs.

## Syntax

```bash
expand [options] [file...]
```

## Parameters

- `options`: Flags that change how `expand` behaves.
- `file`: Text file to read or process.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
expand --help
man expand
```

## Practical Notes

Options can vary by distribution and package version. Use `man expand`, `expand --help`, or the package documentation for exact syntax.
