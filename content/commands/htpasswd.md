---
name: htpasswd
summary: Manage Apache password files.
category: Security
tags: security, policy, verify
popular: false
---

## Additional Notes

`htpasswd` is a security command used to manage Apache password files. It creates and updates the flat-file user database used by Apache for basic authentication. It supports several hash formats including MD5, SHA1, and bcrypt.

## Syntax

```bash
htpasswd [options] [arguments]
```

## Parameters

- `options`: Flags that change how `htpasswd` behaves.
- `target`: File, user, service, policy, or security object to inspect or modify.
- `value`: Security setting, context, key, hash, or policy value.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
htpasswd --help
man htpasswd
```

## Practical Notes

Options can vary by distribution and package version. Use `man htpasswd`, `htpasswd --help`, or the package documentation for exact syntax.
