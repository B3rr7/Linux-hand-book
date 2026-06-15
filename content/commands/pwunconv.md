---
name: pwunconv
summary: Convert shadow passwords back to traditional format.
category: Administration
tags: users, passwords, shadow, conversion, security
popular: false
---

## Additional Notes

`pwunconv` reverses the shadow password conversion performed by `pwconv`. It moves password hashes from `/etc/shadow` back into `/etc/passwd` and removes the shadow file or disables its use.

This is the inverse of `pwconv` and is rarely used on modern systems, as storing password hashes in the world-readable `/etc/passwd` file is a significant security risk. It may be used in legacy migration scenarios, recovery from shadow file corruption, or when transitioning to non-shadow authentication systems.

## Syntax

```bash
pwunconv [options]
```

## Options

- `-R root`: Apply changes in a chroot directory.
- `--help`: Show help and exit.
- `--version`: Show version information.

## Parameters

- `options`: Flags that change how `pwunconv` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Examples

```bash
pwunconv
```

Move all password hashes from `/etc/shadow` to `/etc/passwd`.

```bash
pwunconv -R /mnt/chroot
```

Reverse shadow conversion within a chroot environment.

## Practical Notes

- Running `pwunconv` makes all password hashes world-readable. Only use in controlled environments or legacy compatibility scenarios.
- Modern Linux distributions always use shadow passwords. Run `pwconv` after `pwunconv` to restore shadow protection.
- The `grpunconv` companion tool does the same for group passwords (`/etc/gshadow` to `/etc/group`).
- Some authentication systems (e.g., LDAP, SSSD, or NIS) do not use `/etc/shadow` at all. `pwunconv` does not affect these.
- Only root can run `pwunconv`.
- After running `pwunconv`, verify that `/etc/passwd` now contains the password hashes in the second colon-delimited field.
