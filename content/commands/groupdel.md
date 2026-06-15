---
name: groupdel
summary: Delete a local group.
category: Permissions
tags: group, delete, permissions, admin
popular: false
---

## Additional Notes

`groupdel` removes a local group. It deletes the group entry, but it does not automatically change files that were owned by that group ID.

Do not remove a group that is still used as a primary group for an existing user.

## Syntax

```bash
groupdel group
```

## Parameters

- `options`: Flags that change how `groupdel` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Examples

```bash
sudo groupdel oldgroup
```

Delete a group.

```bash
getent group oldgroup
```

Check whether the group still exists.

```bash
find / -nogroup -ls 2>/dev/null
```

Find files with group IDs that no longer map to a group name.

## Practical Notes

- Check users and files before deleting a group.
- Files owned by the removed GID may show a number instead of a group name.
- Use `chgrp` to move files to another group before deletion when needed.
