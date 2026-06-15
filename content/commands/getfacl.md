---
name: getfacl
summary: Display file access control lists.
category: Permissions
tags: user, permissions, admin
popular: false
---

## Additional Notes

`getfacl` is a user and permission command used to display file access control lists. It displays the full ACL entries for one or more files, including user, group, mask, and default entries. Use setfacl to modify them.

## Syntax

```bash
getfacl [options] [user-or-target]
```

## Parameters

- `options`: Flags that change how `getfacl` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
getfacl --help
man getfacl
```

## Practical Notes

Options can vary by distribution and package version. Use `man getfacl`, `getfacl --help`, or the package documentation for exact syntax.
