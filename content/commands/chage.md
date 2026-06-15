---
name: chage
summary: View and change user password aging information.
category: Permissions
tags: password, account, expiration, user, security
popular: false
---

## Additional Notes

`chage` manages password aging: expiration date, minimum age, maximum age, warning days, and inactive days.

It is useful for account policy checks and forcing password changes.

## Syntax

```bash
chage [options] user
```

## Parameters

- `options`: Flags that change how `chage` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `-l USER`: List password aging information.
- `-d DATE`: Set last password change date.
- `-E DATE`: Set account expiration date.
- `-M DAYS`: Set maximum password age.
- `-m DAYS`: Set minimum password age.
- `-W DAYS`: Set warning days before expiration.
- `-I DAYS`: Set inactive days after password expiration.

## Examples

```bash
chage -l rani
```

Show password aging policy for `rani`.

```bash
sudo chage -d 0 rani
```

Force password change at next login.

```bash
sudo chage -M 90 -W 7 rani
```

Set maximum password age to 90 days and warning to 7 days.

```bash
sudo chage -E 2026-12-31 tempuser
```

Expire an account on a specific date.

## Practical Notes

- `passwd -e USER` is a simpler way to force a password change.
- Account expiration and password expiration are different.
- Use this carefully on service accounts.
- Password aging data is stored in `/etc/shadow`.
