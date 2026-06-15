---
name: finger
summary: Show user information.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`finger` is a system command used to show user information. It displays information about logged-in users including login time, terminal, idle time, and office contact details. It queries local user databases and can query remote hosts via the finger protocol.

## Syntax

```bash
finger [options] [arguments]
```

## Parameters

- `options`: Flags that change how `finger` behaves.
- `'user'`: Username to look up (optional).

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
finger --help
man finger
```

## Practical Notes

Options can vary by distribution and package version. Use `man finger`, `finger --help`, or the package documentation for exact syntax.
