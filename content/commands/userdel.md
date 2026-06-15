---
name: userdel
summary: Delete a local user account.
category: Permissions
tags: user, account, delete, admin, home
popular: false
---

## Additional Notes

`userdel` removes a local user account from the system account database. It can optionally remove the user's home directory and mail spool.

Deleting users should be done carefully because files owned by the deleted UID may remain on disk.

## Syntax

```bash
userdel [options] username
```

## Parameters

- `options`: Flags that change how `userdel` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `-r`, `--remove`: Remove the user's home directory and mail spool.
- `-f`, `--force`: Force removal in some cases.

## Examples

```bash
sudo userdel olduser
```

Remove the account but keep files.

```bash
sudo userdel -r olduser
```

Remove the account and its home directory.

```bash
find / -nouser -ls 2>/dev/null
```

Find files that no longer have a valid owner.

## Practical Notes

- Back up important user data before deletion.
- Check running processes before removing active service users.
- `userdel` does not necessarily remove every file the user owns.
- Avoid `-f` unless you understand why normal deletion failed.
