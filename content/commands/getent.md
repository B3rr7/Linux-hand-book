---
name: getent
summary: Query system databases such as passwd, group, and hosts.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`getent` is a system command used to query system databases such as passwd, group, and hosts. It queries system databases such as passwd, group, hosts, services, and protocols, using the configured Name Service Switch sources. It is useful for verifying user accounts or host resolution.

## Syntax

```bash
getent [options] [arguments]
```

## Parameters

- `options`: Flags that change how `getent` behaves.
- `'database'`: Database to query (passwd, group, hosts, services, etc.).
- `'key'`: Key to look up in the database.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
getent --help
man getent
```

## Practical Notes

Options can vary by distribution and package version. Use `man getent`, `getent --help`, or the package documentation for exact syntax.
