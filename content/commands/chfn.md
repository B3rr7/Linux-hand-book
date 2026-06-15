---
name: chfn
summary: Change user finger information.
category: Permissions
tags: user, account, gecos, identity
popular: false
---

## Additional Notes

`chfn` changes user account information stored in the GECOS field, such as full name, office, and phone details. This information may be shown by tools like `finger` or account listings.

It does not change usernames, passwords, home directories, or shells.

## Syntax

```bash
chfn [options] [user]
```

## Parameters

- `user`: Account to modify. If omitted, the current user is usually assumed.
- `options`: Fields such as full name, office, and phone numbers.

## Common Options

- `-f NAME`: Set full name.
- `-r ROOM`: Set room number.
- `-w PHONE`: Set work phone.
- `-h PHONE`: Set home phone.
- `-o OTHER`: Set other information when supported.

## Examples

```bash
chfn
```

Interactively change your own account information.

```bash
sudo chfn -f "Rani Example" rani
```

Set a user's full name.

```bash
getent passwd rani
```

View the passwd database entry containing GECOS data.

## Practical Notes

- Policies may restrict which fields normal users can change.
- Many modern systems rarely use finger information.
- Use `usermod` for login name, home directory, groups, or shell changes.
