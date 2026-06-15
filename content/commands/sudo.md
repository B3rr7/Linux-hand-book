---
name: sudo
summary: Run a command with another user's privileges.
category: Permissions
tags: root, admin, privileges, security, user
popular: true
---

## Additional Notes

`sudo` runs a command with another user's privileges, usually root. It is used for system administration tasks such as installing packages, editing system files, restarting services, and changing ownership.

`sudo` is safer than logging in as root for daily work because it gives temporary privilege only to the command that needs it.

## Syntax

```bash
sudo [options] command
```

## Parameters

- `options`: Flags that change how `sudo` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `-u USER`: Run as a specific user.
- `-i`: Start a login shell as the target user.
- `-s`: Start a shell using the current environment.
- `-l`: List commands your user is allowed to run.
- `-v`: Validate or refresh cached credentials.
- `-k`: Invalidate cached credentials.
- `-E`: Preserve the environment when allowed.

## Examples

```bash
sudo apt update
```

Run a package-management command as root.

```bash
sudo systemctl restart nginx
```

Restart a system service.

```bash
sudo -u postgres psql
```

Run `psql` as the `postgres` user.

```bash
sudo -l
```

Show what your user is allowed to run with `sudo`.

```bash
sudo -i
```

Open a root login shell.

## Practical Notes

- Use `sudo` only when a command needs elevated privileges.
- Running normal commands as root can create files your user cannot edit later.
- `sudo` permissions are usually configured in `/etc/sudoers` or files under `/etc/sudoers.d`.
- Use `visudo` to edit sudoers safely.
- Be extra careful with commands that delete, overwrite, or recursively change files.
