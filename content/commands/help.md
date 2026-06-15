---
name: help
summary: Show help for shell builtins.
category: Help
tags: help, manual, reference
popular: false
---

## Additional Notes

`help` is a help command used to show help for shell builtins. It displays usage information for bash builtins such as cd, echo, and read. Unlike man pages, it does not require any external tools or pagers.

## Syntax

```bash
help [options] [arguments]
```

## Parameters

- `options`: Flags that change how `help` behaves.
- `topic`: Command, keyword, manual page, or subject to search for.
- `section`: Optional manual section or documentation area.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
help --help
man help
```

## Practical Notes

Options can vary by distribution and package version. Use `man help`, `help --help`, or the package documentation for exact syntax.
