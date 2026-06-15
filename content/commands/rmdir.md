---
name: rmdir
summary: Remove empty directories.
category: Files
tags: directory, remove, empty, filesystem
popular: false
---

## Additional Notes

`rmdir` removes directories only when they are empty. This makes it safer than `rm -r` for cleanup when you do not want to accidentally delete files.

If a directory contains files or subdirectories, `rmdir` refuses to remove it.

## Syntax

```bash
rmdir [options] directory...
```

## Parameters

- `options`: Flags that change how `rmdir` behaves.
- `path`: File or directory path to inspect or change.
- `arguments`: Names, patterns, or values used by the command.

## Common Options

- `-p`, `--parents`: Remove a directory and then its empty parents.
- `-v`, `--verbose`: Print each removed directory.
- `--ignore-fail-on-non-empty`: Ignore failures caused by non-empty directories.

## Examples

```bash
rmdir old-empty-dir
```

Remove an empty directory.

```bash
rmdir -v cache
```

Remove an empty directory and print the action.

```bash
rmdir -p project/old/empty
```

Remove `empty`, then remove parent directories if they become empty.

```bash
find . -type d -empty -print
```

Preview empty directories before removing them.

## Practical Notes

- Use `rmdir` when you only want to remove empty directories.
- Use `rm -r` only when you intentionally want recursive deletion.
- If `rmdir` fails, check contents with `ls -la directory`.
- Hidden files also make a directory non-empty.
