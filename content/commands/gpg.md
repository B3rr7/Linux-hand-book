---
name: gpg
summary: Encrypt, decrypt, sign, and verify data with GnuPG.
category: Security
tags: security, policy, verify
popular: false
---

## Additional Notes

`gpg` is a security command used to encrypt, decrypt, sign, and verify data with GnuPG. It implements the OpenPGP standard for encrypting files and messages, creating digital signatures, and managing public/private key pairs. It can also import and export keys.

## Syntax

```bash
gpg [options] [arguments]
```

## Parameters

- `options`: Flags that change how `gpg` behaves.
- `target`: File, user, service, policy, or security object to inspect or modify.
- `value`: Security setting, context, key, hash, or policy value.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
gpg --help
man gpg
```

## Practical Notes

Options can vary by distribution and package version. Use `man gpg`, `gpg --help`, or the package documentation for exact syntax.
