---
name: umask
summary: Set default file permission mask.
category: Permissions
tags: user, permissions, admin
popular: false
---

## Additional Notes

`umask` is a user and permission command used to set default file permission mask. It sets the default permissions for newly created files and directories by masking bits in the mode.

A `umask` of `022` (common default) gives files `644` and directories `755`. Use `umask -S` to view the mask in symbolic form.

## Syntax

```bash
umask [options] [user-or-target]
```

## Parameters

- `options`: Flags that change how `umask` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
umask --help
man umask
```

## Practical Notes

Options can vary by distribution and package version. Use `man umask`, `umask --help`, or the package documentation for exact syntax.
