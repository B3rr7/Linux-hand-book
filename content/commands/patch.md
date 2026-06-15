---
name: patch
summary: Apply changes from a diff file.
category: Text
tags: diff, patch, files, source
popular: false
---

## Additional Notes

`patch` is a text-processing command used to apply changes from a diff file. It applies diff output to source files, making it essential for distributing and applying code changes.

Always run `patch` with `--dry-run` first to verify the patch applies cleanly. The `-pN` option strips leading path components from diff filenames.

## Syntax

```bash
patch [options] [file...]
```

## Parameters

- `options`: Flags that change how `patch` behaves.
- `file`: Text file to read or process.

## Common Options

- `-pN`: Strip N leading path components.
- `-R`: Reverse a patch.
- `--dry-run`: Preview whether the patch applies.

## Examples

```bash
patch < fix.diff
patch -p1 < changes.patch
patch --dry-run -p1 < changes.patch
```

## Practical Notes

Use `--dry-run` first when applying patches from another system or project.
