---
name: gpasswd
summary: Administer group passwords and membership.
category: Permissions
tags: user, permissions, admin
popular: false
---

## Additional Notes

`gpasswd` is a user and permission command used to administer group passwords and membership. It allows administrators to add or remove group members, set group passwords, and designate group administrators. Users can also use it to change their group password.

## Syntax

```bash
gpasswd [options] [user-or-target]
```

## Parameters

- `options`: Flags that change how `gpasswd` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
gpasswd --help
man gpasswd
```

## Practical Notes

Options can vary by distribution and package version. Use `man gpasswd`, `gpasswd --help`, or the package documentation for exact syntax.
