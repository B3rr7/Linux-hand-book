---
name: getenforce
summary: Show the current SELinux enforcement mode.
category: Security
tags: security, policy, verify
popular: false
---

## Additional Notes

`getenforce` is a security command used to show the current SELinux enforcement mode. It prints the current SELinux mode: Enforcing, Permissive, or Disabled. This is a quick way to verify whether SELinux is active.

## Syntax

```bash
getenforce [options] [arguments]
```

## Parameters

- `options`: Flags that change how `getenforce` behaves.
- `target`: File, user, service, policy, or security object to inspect or modify.
- `value`: Security setting, context, key, hash, or policy value.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
getenforce --help
man getenforce
```

## Practical Notes

Options can vary by distribution and package version. Use `man getenforce`, `getenforce --help`, or the package documentation for exact syntax.
