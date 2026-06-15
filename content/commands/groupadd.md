---
name: groupadd
summary: Create a local group.
category: Permissions
tags: group, permissions, account, admin
popular: false
---

## Additional Notes

`groupadd` creates a local group. Groups are used to share permissions between users and services.

After creating a group, add users with `usermod -aG group user` or manage membership with tools such as `gpasswd`.

## Syntax

```bash
groupadd [options] group
```

## Parameters

- `options`: Flags that change how `groupadd` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `-g GID`: Set numeric group ID.
- `-r`: Create a system group.
- `-f`: Exit successfully if the group already exists.

## Examples

```bash
sudo groupadd developers
```

Create a group.

```bash
sudo groupadd -g 2000 lab
```

Create a group with a specific GID.

```bash
sudo usermod -aG developers rani
```

Add a user to the group.

```bash
getent group developers
```

Check group information.

## Practical Notes

- Group membership often requires logging out and back in.
- Use groups to avoid giving broad permissions to everyone.
- System groups are usually for services.
- Check `/etc/group` or `getent group` to inspect local/group database entries.
