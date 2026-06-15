---
name: md5sum
summary: Compute or verify MD5 checksums.
category: Security
tags: checksum, hash, md5, files
popular: false
---

## Additional Notes

`md5sum` is a security command used to compute or verify MD5 checksums. It is commonly used to verify file integrity after downloads or transfers.

MD5 is cryptographically broken and unsuitable for security-sensitive verification. Use `sha256sum` or `sha512sum` where collision resistance is important.

## Syntax

```bash
md5sum [options] [arguments]
```

## Parameters

- `options`: Flags that change how `md5sum` behaves.
- `target`: File, user, service, policy, or security object to inspect or modify.
- `value`: Security setting, context, key, hash, or policy value.

## Common Options

- `-c`: Check hashes from a checksum file.
- `--quiet`: Only print failures when checking.
- `--status`: Use only the exit status when checking.

## Examples

```bash
md5sum file.txt
md5sum *.zip > MD5SUMS
md5sum -c MD5SUMS
```

## Practical Notes

MD5 is not suitable for security-sensitive integrity checks. Prefer `sha256sum` when possible.
