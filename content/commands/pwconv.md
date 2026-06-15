---
name: pwconv
summary: Convert passwords to shadow passwords.
category: Administration
tags: users, passwords, shadow, security, conversion
popular: false
---

## Additional Notes

`pwconv` converts system passwords from the traditional `/etc/passwd` file format (where hashed passwords were stored in the second field) to the shadow password format, where password hashes are stored in `/etc/shadow`, which is readable only by root.

The shadow password suite improves security by removing password hashes from the world-readable `/etc/passwd` file and placing them in the restricted `/etc/shadow` file. `pwconv` moves existing password fields, creates the shadow file if needed, and locks the password field in `/etc/passwd` with an `x` placeholder.

## Syntax

```bash
pwconv [options]
```

## Options

- `-R root`: Apply changes in a chroot directory.
- `--help`: Show help and exit.
- `--version`: Show version information.

## Parameters

- `options`: Flags that change how `pwconv` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Examples

```bash
pwconv
```

Convert all passwords in `/etc/passwd` to shadow format.

```bash
pwconv -R /mnt/chroot
```

Convert passwords within a chroot environment.

## Practical Notes

- Modern Linux systems already use shadow passwords. `pwconv` is primarily for recovery or migration scenarios.
- After running `pwconv`, the password field in `/etc/passwd` contains an `x`, and the hash moves to `/etc/shadow`.
- The companion tool `pwunconv` reverses this process, moving passwords back to `/etc/passwd` (not recommended for security).
- Only root can run `pwconv`, as it modifies system authentication files.
- The shadow file must have permissions `640` or `600` and be owned by root. If permissions are wrong, authentication may fail.
- After `pwconv`, verify the conversion with `getent shadow username` to check that the hash moved correctly.
