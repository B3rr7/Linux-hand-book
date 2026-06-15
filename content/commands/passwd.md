---
name: passwd
summary: Change user passwords and password status.
category: Permissions
tags: password, user, account, security, login
popular: true
---

## Additional Notes

`passwd` changes a user's password. Normal users can change their own password. Root can change passwords and password status for other accounts.

Password hashes are normally stored in `/etc/shadow`, not directly in `/etc/passwd`.

## Syntax

```bash
passwd [options] [user]
```

## Parameters

- `options`: Flags that change how `passwd` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `-l USER`: Lock a user's password.
- `-u USER`: Unlock a user's password.
- `-d USER`: Delete a user's password.
- `-S USER`: Show password status.
- `-e USER`: Expire a password so it must be changed at next login.
- `-n DAYS`: Set minimum password age.
- `-x DAYS`: Set maximum password age.
- `-w DAYS`: Set warning days before expiration.

## Examples

```bash
passwd
```

Change your own password.

```bash
sudo passwd rani
```

Change another user's password.

```bash
sudo passwd -S rani
```

Show password status.

```bash
sudo passwd -l guest
```

Lock an account password.

```bash
sudo passwd -e rani
```

Force a password change at next login.

## Practical Notes

- Use strong, unique passwords.
- Locking a password is not always the same as disabling every possible login method.
- SSH key login may still work depending on configuration.
- Use `chage` for detailed password aging policy.
- Be careful with `passwd -d`; passwordless accounts are risky.
