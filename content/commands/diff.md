---
name: diff
summary: Compare files line by line.
category: Text
tags: compare, files, patch, changes
popular: true
---

## Additional Notes

`diff` is a text-processing command used to compare files line by line. It produces output showing line-level changes between files, and supports several output formats including normal, unified (-u), and context (-c). Unified diffs can be applied later with patch.

## Syntax

```bash
diff [options] [file...]
```

## Parameters

- `options`: Flags that change how `diff` behaves.
- `file`: Text file to read or process.

## Common Options

- `-u`: Show unified diff output.
- `-r`: Compare directories recursively.
- `-q`: Report only whether files differ.
- `--color`: Colorize output when supported.

## Examples

```bash
diff old.txt new.txt
diff -u old.txt new.txt
diff -qr dir-a dir-b
```

## Practical Notes

Unified diffs from `diff -u` are readable and can often be applied with `patch`.
