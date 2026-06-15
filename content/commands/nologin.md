---
name: nologin
summary: Shell that prevents a user from logging in.
category: Administration
tags: users, security, login, shell, authentication
popular: false
---

## Additional Notes

`nologin` is a program that displays a message and exits immediately, preventing interactive login for system accounts. It is typically used as the login shell for users who should not have interactive access, such as `nobody`, `www-data`, `daemon`, and other system accounts.

The program prints a predefined message (usually `This account is currently not available.`) and exits with a non-zero status. This prevents login via SSH, terminal, or console while still allowing the account to own processes and files. It is a security practice to assign `nologin` or `/sbin/nologin` to system accounts that do not need human interaction.

## Syntax

```bash
nologin
```

## Parameters

- No parameters. `nologin` takes no arguments.

## Common Options

- `--help`: Show help and exit.
- `--version`: Show version information.

## Examples

```bash
grep nologin /etc/passwd
```

Show user accounts that have `/sbin/nologin` set as their login shell.

```bash
sudo usermod -s /sbin/nologin guest
```

Change the guest account to use `nologin`, preventing interactive login.

```bash
sudo -u nobody /sbin/nologin
```

Attempt to run `nologin` as the `nobody` user. It prints a message and exits.

## Practical Notes

- The `nologin` binary is usually located at `/sbin/nologin` or `/usr/sbin/nologin`.
- Some systems use `/bin/false` instead of `nologin`. `nologin` prints a message; `/bin/false` exits silently.
- Assigning `nologin` to system accounts does not prevent `sudo`, `cron`, or other non-login process execution.
- To create a new system user with `nologin`, use `useradd -r -s /sbin/nologin username`.
- The message printed by `nologin` can be customized through the `/etc/nologin.txt` file in some implementations.
