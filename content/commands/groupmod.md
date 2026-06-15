---
name: groupmod
summary: Modify a local group.
category: Permissions
tags: group, rename, gid, permissions, admin
popular: false
---

## Additional Notes

`groupmod` changes properties of an existing local group, usually its name or numeric GID.

Changing a GID can affect file ownership display and access decisions, so check existing files and users first.

## Syntax

```bash
groupmod [options] group
```

## Parameters

- `options`: Flags that change how `groupmod` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `-n NEWNAME`: Rename the group.
- `-g GID`: Change numeric group ID.
- `-o`: Allow a non-unique GID when used with `-g`.

## Examples

```bash
sudo groupmod -n engineers developers
```

Rename `developers` to `engineers`.

```bash
sudo groupmod -g 2001 lab
```

Change the group's GID.

```bash
getent group engineers
```

Check the changed group.

## Practical Notes

- Rename changes the group database entry, not necessarily documentation or scripts.
- Be careful changing GIDs on systems with shared files.
- Use `find / -gid OLDGID` if you need to find files with an old group ID.
