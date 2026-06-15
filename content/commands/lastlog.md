---
name: lastlog
summary: Show last login information for users.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`lastlog` is a system command used to show last login information for users. It reads from `/var/log/lastlog` to display when each user last logged in.

Use `lastlog -u USERNAME` to check a specific user. Accounts showing `**Never logged in**` may be unused or system service accounts.

## Syntax

```bash
lastlog [options] [arguments]
```

## Parameters

- `options`: Flags that change how `lastlog` behaves.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
lastlog --help
man lastlog
```

## Practical Notes

Options can vary by distribution and package version. Use `man lastlog`, `lastlog --help`, or the package documentation for exact syntax.
