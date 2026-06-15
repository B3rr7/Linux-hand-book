---
name: locate
summary: Find files using a filename database.
category: Files
tags: files, directories, path
popular: false
---

## Additional Notes

`locate` is a file command used to find files using a filename database. It is much faster than `find` for filename searches because it queries a pre-built database instead of scanning the filesystem.

The locate database is typically updated daily by a cron job or systemd timer. Run `updatedb` manually (as root) to refresh the index immediately after adding new files.

## Syntax

```bash
locate [options] [arguments]
```

## Parameters

- `options`: Flags that change how `locate` behaves.
- `path`: File or directory path to inspect or change.
- `arguments`: Names, patterns, or values used by the command.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
locate --help
man locate
```

## Practical Notes

Options can vary by distribution and package version. Use `man locate`, `locate --help`, or the package documentation for exact syntax.
