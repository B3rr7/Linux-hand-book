---
name: lastb
summary: Show failed login attempts.
category: Security
tags: security, policy, verify
popular: false
---

## Additional Notes

`lastb` is a security command used to show failed login attempts. It reads from `/var/log/btmp` to display a record of failed authentication attempts.

`lastb` typically requires root access to read `/var/log/btmp`. It is useful for detecting brute-force attacks or unauthorized access attempts.

## Syntax

```bash
lastb [options] [arguments]
```

## Parameters

- `options`: Flags that change how `lastb` behaves.
- `target`: File, user, service, policy, or security object to inspect or modify.
- `value`: Security setting, context, key, hash, or policy value.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
lastb --help
man lastb
```

## Practical Notes

Options can vary by distribution and package version. Use `man lastb`, `lastb --help`, or the package documentation for exact syntax.
