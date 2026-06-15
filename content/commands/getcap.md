---
name: getcap
summary: Show file capabilities.
category: Security
tags: security, policy, verify
popular: false
---

## Additional Notes

`getcap` is a security command used to show file capabilities. It reads and displays the POSIX capabilities set on executable files. Capabilities allow fine-grained privileges (like binding to a low port) without granting full root access.

## Syntax

```bash
getcap [options] [arguments]
```

## Parameters

- `options`: Flags that change how `getcap` behaves.
- `target`: File, user, service, policy, or security object to inspect or modify.
- `value`: Security setting, context, key, hash, or policy value.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
getcap --help
man getcap
```

## Practical Notes

Options can vary by distribution and package version. Use `man getcap`, `getcap --help`, or the package documentation for exact syntax.
