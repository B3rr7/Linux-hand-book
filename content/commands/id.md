---
name: id
summary: Show user ID, group ID, and group membership.
category: Permissions
tags: user, uid, gid, groups, identity
popular: true
---

## Additional Notes

`id` prints identity information for a user: UID, primary GID, and supplementary groups.

It is useful for checking permission problems, group membership, container identity, and service accounts.

## Syntax

```bash
id [options] [user]
```

## Parameters

- `options`: Flags that change how `id` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `-u`: Print only the user ID.
- `-g`: Print only the primary group ID.
- `-G`: Print all group IDs.
- `-n`: Print names instead of numbers when used with `-u`, `-g`, or `-G`.
- `-r`: Print real ID instead of effective ID.

## Examples

```bash
id
```

Show your UID, GID, and groups.

```bash
id rani
```

Show identity information for user `rani`.

```bash
id -u
```

Print only your UID.

```bash
id -nG
```

Print group names for your user.

```bash
id www-data
```

Inspect a service account.

## Practical Notes

- UID `0` is root.
- Group membership affects file and device access.
- After adding a user to a group, the user may need to log out and back in.
- Use `groups` for a simpler group-only view.
