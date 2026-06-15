---
name: mktemp
summary: Create temporary files or directories safely.
category: Files
tags: files, directories, path
popular: false
---

## Additional Notes

`mktemp` is a file command used to create temporary files or directories safely. It creates uniquely named temporary files in `/tmp/` (or a custom directory) to avoid name collisions.

Always capture the output of `mktemp` in a variable in scripts. Use `trap` to clean up temporary files on script exit to avoid leaving stale files.

## Syntax

```bash
mktemp [options] [arguments]
```

## Parameters

- `options`: Flags that change how `mktemp` behaves.
- `path`: File or directory path to inspect or change.
- `arguments`: Names, patterns, or values used by the command.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
mktemp --help
man mktemp
```

## Practical Notes

Options can vary by distribution and package version. Use `man mktemp`, `mktemp --help`, or the package documentation for exact syntax.
