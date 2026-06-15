---
name: groups
summary: Print group memberships for users.
category: Permissions
tags: group, user, permissions, membership
popular: false
---

## Additional Notes

`groups` prints the groups a user belongs to. Groups are used to share permissions for files, devices, services, and administrative roles.

It is a quick way to check whether a user belongs to groups such as `sudo`, `docker`, `audio`, or project-specific groups.

## Syntax

```bash
groups [user...]
```

## Parameters

- `options`: Flags that change how `groups` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Examples

```bash
groups
```

Show groups for the current user.

```bash
groups rani
```

Show groups for user `rani`.

```bash
id -nG
```

Alternative command that prints group names.

## Practical Notes

- Group changes usually apply after a new login session.
- Use `usermod -aG group user` to add a user to a supplementary group.
- Use `id` for UID/GID details.
- Being in powerful groups like `sudo` or `docker` can give administrative-level access.
