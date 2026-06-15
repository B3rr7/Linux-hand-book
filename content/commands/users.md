---
name: users
summary: Show logged-in users.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`users` prints the names of users currently logged into the system. It provides a simple, space-separated list of usernames.

For more detailed session information, use `who` or `w`.

## Syntax

```bash
users [options]
```

## Parameters

- `options`: Flags that change how `users` behaves.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
users --help
man users
```

## Practical Notes

Options can vary by distribution and package version. Use `man users`, `users --help`, or the package documentation for exact syntax.
