---
name: useradd
summary: Create a local user account.
category: Permissions
tags: user, account, admin, login, home
popular: true
---

## Additional Notes

`useradd` creates a local user account. It can set a home directory, login shell, UID, primary group, supplementary groups, and account metadata.

On Debian and Ubuntu systems, `adduser` is often friendlier for interactive account creation, while `useradd` is lower-level and script-friendly.

## Syntax

```bash
useradd [options] username
```

## Parameters

- `options`: Flags that change how `useradd` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `-m`, `--create-home`: Create the user's home directory.
- `-d DIR`, `--home-dir DIR`: Set home directory path.
- `-s SHELL`, `--shell SHELL`: Set login shell.
- `-g GROUP`: Set primary group.
- `-G GROUPS`: Set supplementary groups.
- `-u UID`: Set numeric user ID.
- `-c COMMENT`: Set comment/GECOS field.
- `-r`, `--system`: Create a system account.
- `-M`: Do not create a home directory.

## Examples

```bash
sudo useradd -m deploy
```

Create user `deploy` with a home directory.

```bash
sudo useradd -m -s /bin/bash alice
```

Create `alice` with Bash as login shell.

```bash
sudo useradd -m -G sudo,docker alice
```

Create `alice` and add supplementary groups.

```bash
sudo passwd alice
```

Set the new user's password.

```bash
id alice
```

Check the new account identity and groups.

## Practical Notes

- Always set or configure authentication after creating a login account.
- Use `-m` unless you intentionally do not want a home directory.
- Supplementary group changes apply on new login sessions.
- Service accounts often use `-r` and a non-login shell.
- Review `/etc/passwd`, `/etc/shadow`, and `/etc/group` only if you understand their format.
