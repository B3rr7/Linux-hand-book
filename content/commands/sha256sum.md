---
name: sha256sum
summary: Compute or verify SHA-256 checksums.
category: Security
tags: checksum, hash, verify, files
popular: true
---

## Additional Notes

`sha256sum` is a security command used to compute or verify SHA-256 checksums. It computes or verifies SHA-256 checksums to ensure file integrity and authenticity.

Use `-c` to check files against a precomputed checksum file. SHA-256 is the preferred hash for integrity verification in most modern workflows.

## Syntax

```bash
sha256sum [options] [arguments]
```

## Parameters

- `options`: Flags that change how `sha256sum` behaves.
- `target`: File, user, service, policy, or security object to inspect or modify.
- `value`: Security setting, context, key, hash, or policy value.

## Common Options

- `-c`: Check hashes from a checksum file.
- `--quiet`: Only print failures when checking.
- `--status`: Use only the exit status when checking.

## Examples

```bash
sha256sum download.iso
sha256sum *.tar.gz > SHA256SUMS
sha256sum -c SHA256SUMS
```

## Practical Notes

Use checksums to verify downloaded files or detect accidental file changes.
