---
name: last
summary: Show recent login sessions.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`last` is a system command used to show recent login sessions. It reads from `/var/log/wtmp` to display a log of login and logout activity.

Use `last -x` to include system events like runlevel changes and shutdowns. Use `last USERNAME` to filter records for a specific user.

## Syntax

```bash
last [options] [arguments]
```

## Parameters

- `options`: Flags that change how `last` behaves.
- `'user'`: Show logins for a specific user (optional).

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
last --help
man last
```

## Practical Notes

Options can vary by distribution and package version. Use `man last`, `last --help`, or the package documentation for exact syntax.
