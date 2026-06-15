---
name: groupmems
summary: Manage members of a user's own group.
category: Permissions
tags: group, user, membership, shadow, permissions
popular: false
---

## Additional Notes

`groupmems` allows a user to manage the membership of their own primary group without requiring root privileges. It is part of the shadow password suite and provides a controlled way to add or remove users from a group, as long as the user running it is the group owner.

The command is typically restricted to root and the group owner, as defined in the `/etc/gshadow` file. The group owner entry in the last field of `/etc/gshadow` determines who is allowed to manage membership. This is useful for delegating group administration to non-root users.

## Syntax

```bash
groupmems [options]
```

## Parameters

- `options`: Flags that change how `groupmems` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-g group`, `--group group`: Specify the group to manage. The group must have an owner set in `/etc/gshadow`.
- `-a user`, `--add user`: Add a user to the group.
- `-d user`, `--delete user`: Remove a user from the group.
- `-p`, `--purge`: Remove all members from the group.
- `-l`, `--list`: List the members of the group.
- `-R`, `--root directory`: Apply changes in a different root directory (for chroot environments).

## Examples

```bash
sudo groupmems -g developers -a alice
```

Add `alice` to the `developers` group.

```bash
sudo groupmems -g developers -d bob
```

Remove `bob` from the `developers` group.

```bash
groupmems -g developers -l
```

List all members of the `developers` group.

```bash
sudo groupmems -g oldgroup -p
```

Remove all members from `oldgroup`.

## Practical Notes

- The group must have an owner defined in the `/etc/gshadow` file (the last field). Without an owner, only root can manage membership.
- `groupmems` modifies `/etc/group` and `/etc/gshadow` directly; users must log out and back in for the group membership change to take effect.
- The `newgrp` or `sg` commands can be used to switch the active group to a new one after membership changes.
- For most group management tasks, `gpasswd` and `usermod -aG` are more commonly used.
- `groupmems` is rarely used on modern systems compared to `usermod` and `gpasswd`.
