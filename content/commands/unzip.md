---
name: unzip
summary: List, test, and extract ZIP archives.
category: Archives
tags: zip, extract, archive, files
popular: true
---

## Additional Notes

`unzip` is an archive command used to list, test, and extract ZIP archives. It extracts files from ZIP archives, supporting listing, testing, and extraction with various options.

List archive contents with `unzip -l` before extraction to check for a top-level directory. Use `-d DIR` to extract into a specific directory.

## Syntax

```bash
unzip [options] [archive] [files...]
```

## Parameters

- `options`: Flags that change how `unzip` behaves.
- `archive`: Archive or compressed file to read, create, or extract.
- `files`: Files or directories that should be included or processed.

## Common Options

- `-l`: List archive contents.
- `-t`: Test archive integrity.
- `-d DIR`: Extract into a directory.
- `-o`: Overwrite files without prompting.

## Examples

```bash
unzip archive.zip
unzip -l archive.zip
unzip archive.zip -d /tmp/extract
```

## Practical Notes

List an archive before extracting when you do not know whether it contains a top-level directory.
