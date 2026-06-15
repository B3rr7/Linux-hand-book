---
name: sum
summary: Compute and verify file checksums.
category: Files
tags: checksum, file, integrity, sum, verify
popular: false
---

## Additional Notes

`sum` computes a simple checksum and block count for one or more files. It uses a traditional Unix CRC algorithm (either BSD or System V style) that is much weaker than modern hash algorithms like MD5, SHA-256, or SHA-512. The checksum is computed from the file contents and the output includes the checksum value, the number of blocks (in 512-byte or 1024-byte units), and the filename.

The command is defined by POSIX but is rarely used today. For integrity verification, modern tools like `md5sum`, `sha256sum`, `sha1sum`, or `cksum` are preferred.

## Syntax

```bash
sum [options] [file...]
```

## Parameters

- `file`: One or more files to compute checksums for. If omitted, reads from standard input.

## Common Options

- `-r`: Use BSD-compatible checksum algorithm (default). Output: checksum, block count (512-byte blocks), filename.
- `-s`: Use System V-compatible checksum algorithm. Output: checksum, block count (1024-byte blocks), filename.
- `--help`: Show usage information.
- `--version`: Show version information.

## Examples

```bash
sum file.txt
```

Compute the BSD checksum and block count for `file.txt`.

```bash
sum -s file.txt
```

Compute the System V checksum and block count for `file.txt`.

```bash
sum * > checksums.txt
```

Compute checksums for all files in the current directory and save.

```bash
cat file.txt | sum
```

Compute the checksum of data piped from stdin.

## Practical Notes

- The BSD algorithm (`-r`) computes a 16-bit checksum. Collisions are very easy to produce intentionally.
- The System V algorithm (`-s`) computes a different 16-bit checksum with 1024-byte blocks.
- Neither algorithm is cryptographically secure.
- Use `md5sum`, `sha256sum`, or `sha1sum` for reliable integrity checking.
- `cksum` uses a more robust CRC-32 algorithm and is also POSIX-specified.
- `sum` is mainly encountered in legacy scripts and educational contexts.
