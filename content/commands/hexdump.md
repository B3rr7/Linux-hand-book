---
name: hexdump
summary: Display file bytes in hexadecimal and other formats.
category: Text
tags: binary, hex, inspect, files
popular: false
---

## Additional Notes

`hexdump` displays file contents in hexadecimal, decimal, octal, or ASCII format. It is useful for inspecting binary files, analyzing file formats, debugging data streams, and examining raw storage.

On many systems, `hexdump` is a frontend for `od` with different default output formatting.

## Syntax

```bash
hexdump [options] [file...]
```

## Parameters

- `options`: Flags that change how `hexdump` behaves.
- `file`: File to display. Reads from standard input if omitted.

## Common Options

- `-C`: Canonical hex and ASCII display.
- `-n N`: Read only N bytes.
- `-s OFFSET`: Skip OFFSET bytes from the start.
- `-v`: Show all data (do not suppress duplicate lines).
- `-e FORMAT`: Specify a custom format string.
- `-s OFFSET`: Skip bytes before reading.

## Examples

```bash
hexdump -C file.bin
hexdump -C -n 64 file.bin
hexdump -C -s 512 disk.img
```

## Practical Notes

`hexdump -C` is useful for inspecting binary headers, encoded data, and file signatures.
