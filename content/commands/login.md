---
name: login
summary: Start a user login session.
category: Permissions
tags: user, permissions, admin
popular: false
---

## Additional Notes

`login` is a user and permission command used to start a user login session. It authenticates a user and initiates a login session, setting up the user environment and running profile scripts.

The `login` program is typically invoked by `getty` or `sshd` rather than run directly by users. Using `su` or `sudo` is the preferred way to switch users on most systems.

## Syntax

```bash
login [options] [user-or-target]
```

## Parameters

- `options`: Flags that change how `login` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
login --help
man login
```

## Practical Notes

Options can vary by distribution and package version. Use `man login`, `login --help`, or the package documentation for exact syntax.
