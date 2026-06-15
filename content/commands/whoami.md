---
name: whoami
summary: Print the current effective username.
category: System
tags: user, identity, shell, permissions
popular: true
---

## Additional Notes

`whoami` prints the username your current shell is running as. It is useful when using `sudo`, containers, SSH sessions, or different accounts.

It shows effective user identity, which matters for permissions.

## Syntax

```bash
whoami
```

## Parameters

This command takes no options or parameters.

## Examples

```bash
whoami
```

Print the current user.

```bash
sudo whoami
```

Usually prints `root`, showing the command is running with elevated privileges.

```bash
ssh server whoami
```

Check the remote login user.

## Practical Notes

- Use `id` for UID, GID, and group membership details.
- Use `logname` if you need the original login name in some contexts.
- In scripts, identity checks can prevent running dangerous actions as the wrong user.
