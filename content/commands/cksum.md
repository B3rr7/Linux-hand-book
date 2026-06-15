---
name: cksum
summary: Print CRC checksum and byte count for files.
category: Files
tags: checksum, crc, file, verify
popular: false
---

## Additional Notes

`cksum` prints a CRC checksum and byte count for files or standard input. It is useful for simple corruption checks and compatibility with POSIX checksum workflows.

For cryptographic integrity, use stronger tools such as `sha256sum`.

## Syntax

```bash
cksum [file...]
```

## Parameters

- `file`: File to checksum. If omitted, standard input is used.
- `options`: Some implementations support algorithm options, help, and version flags.

## Examples

```bash
cksum file.txt
```

Print checksum, byte count, and filename.

```bash
echo "hello" | cksum
```

Checksum standard input.

```bash
cksum *.iso
```

Checksum multiple files.

## Practical Notes

- CRC checksums are good for accidental corruption, not security.
- Use `sha256sum` when verifying downloads from a trusted published hash.
- Output format is usually checksum, byte count, then filename.
