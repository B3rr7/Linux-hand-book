---
name: od
summary: Dump files in octal, hexadecimal, decimal, or character formats.
category: Text
tags: binary, dump, inspect, files
popular: false
---

## Additional Notes

`od` is a text-processing command used to dump files in octal, hexadecimal, decimal, or character formats. It is essential for examining the raw byte content of binary files, inspecting file headers, and debugging encoding issues.

`od` is specified by POSIX and behaves consistently across Unix-like systems. Use `-t x1` for hex byte dumps and `-A n` to suppress address prefixes.

## Syntax

```bash
od [options] [file...]
```

## Parameters

- `options`: Flags that change how `od` behaves.
- `file`: Text file to read or process.

## Common Options

- `-t TYPE`: Select output format.
- `-A RADIX`: Select address base.
- `-N N`: Read only N bytes.

## Examples

```bash
od -An -tx1 file.bin
od -c file.txt
od -N 16 -tx1 file.bin
```

## Practical Notes

`od` is portable and useful in scripts that inspect raw bytes.
