---
name: su
summary: Switch user or run a shell as another user.
category: Permissions
tags: user, root, shell, login, permissions
popular: true
---

## Additional Notes

`su` switches to another user account or runs a command as that user. Without a username, it usually switches to root.

Unlike `sudo`, `su` normally asks for the target user's password. On many systems, direct root login may be disabled or discouraged.

## Syntax

```bash
su [options] [user]
su [options] user -c 'command'
```

## Parameters

- `options`: Flags that change how `su` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `-`, `-l`, `--login`: Start a login shell for the target user.
- `-c COMMAND`: Run one command as the target user.
- `-s SHELL`: Use a specific shell.
- `-p`, `--preserve-environment`: Preserve environment variables when allowed.

## Examples

```bash
su -
```

Switch to a root login shell.

```bash
su rani
```

Switch to user `rani`.

```bash
su - postgres
```

Start a login shell as `postgres`.

```bash
su - postgres -c 'psql'
```

Run one command as `postgres`.

## Practical Notes

- `su -` gives a login-style environment; plain `su` keeps more of the current environment.
- Prefer `sudo` for single administrative commands when available.
- Use `whoami` and `pwd` after switching users so you know your identity and location.
- Exiting the shell returns to the previous user.
