---
name: usermod
summary: Modify an existing local user account.
category: Permissions
tags: user, account, group, shell, admin
popular: true
---

## Additional Notes

`usermod` changes properties of an existing user account. It can change login name, home directory, shell, groups, UID, lock state, and expiration settings.

It is powerful because changing account identity or home paths can affect file ownership, login behavior, and services.

## Syntax

```bash
usermod [options] username
```

## Parameters

- `options`: Flags that change how `usermod` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `-aG GROUPS`: Append user to supplementary groups.
- `-G GROUPS`: Set supplementary groups exactly.
- `-s SHELL`: Change login shell.
- `-d DIR`: Change home directory path.
- `-m`: Move home contents to the new home directory with `-d`.
- `-l NAME`: Change login name.
- `-u UID`: Change numeric UID.
- `-L`: Lock the user's password.
- `-U`: Unlock the user's password.
- `-e DATE`: Set account expiration date.

## Examples

```bash
sudo usermod -aG docker rani
```

Add `rani` to the `docker` group without removing existing groups.

```bash
sudo usermod -s /bin/bash deploy
```

Change login shell.

```bash
sudo usermod -d /srv/deploy -m deploy
```

Move a user's home directory.

```bash
sudo usermod -L guest
```

Lock a user's password.

```bash
groups rani
```

Check group membership.

## Practical Notes

- Use `-aG` when adding groups. Forgetting `-a` with `-G` can remove existing supplementary groups.
- Users usually need a new login session for group changes to apply.
- Be careful changing UID on accounts that already own files.
- Locking a password may not disable every login method, such as SSH keys.
