---
name: info
summary: Read GNU info documentation.
category: Help
tags: help, manual, reference
popular: false
---

## Additional Notes

`info` is a help command used to read GNU info documentation. It provides hyperlinked documentation that often goes deeper than man pages for GNU tools.

The info system uses a node-based hierarchy rather than flat manual pages. Use `info` without arguments to browse the top-level directory.

## Syntax

```bash
info [options] [arguments]
```

## Parameters

- `options`: Flags that change how `info` behaves.
- `topic`: Command, keyword, manual page, or subject to search for.
- `section`: Optional manual section or documentation area.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
info --help
man info
```

## Practical Notes

Options can vary by distribution and package version. Use `man info`, `info --help`, or the package documentation for exact syntax.
