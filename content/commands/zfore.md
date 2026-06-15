---
name: zfore
summary: Force compressed files to have a .gz extension.
category: Files
tags: gzip, rename, extension, compress
popular: false
---

## Additional Notes

`zfore` renames files compressed with `gzip` to have the `.gz` extension if they do not already have one. Some compression tools or custom scripts may produce gzip-compressed files with incorrect or non-standard extensions. `zfore` corrects these by appending or replacing the extension with `.gz`.

It is a niche utility, part of the `gzip` suite. It does not recompress the data — it only renames the file. It operates on all files specified on the command line, renaming them if their names do not already end in `.gz`.

## Syntax

```bash
zfore file...
```

## Parameters

- `file`: One or more files to rename. Files already ending in `.gz` are skipped.

## Examples

```bash
zfore data
```

Rename `data` to `data.gz` if it is gzip-compressed.

```bash
zfore *.compressed
```

Rename all files ending in `.compressed` to `.gz`.

## Practical Notes

- `zfore` only renames files; it does not verify or change the compression format.
- If a file with the target name (`.gz`) already exists, `zfore` will not overwrite it.
- This tool is rarely needed; most gzip tools accept files regardless of extension by detecting the magic bytes.
- To rename safely, consider `mv file file.gz` for individual files.
- The typical use case is for files that were renamed or transferred without proper extensions.
