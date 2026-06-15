---
name: grpunconv
summary: Restore group passwords from shadow to standard format.
category: System
tags: group, shadow, unconvert, password, restore
popular: false
---

## Additional Notes

`grpunconv` reverses the shadow group conversion performed by `grpconv`. It copies group passwords from `/etc/gshadow` back into `/etc/group` and then removes or disables `/etc/gshadow`. After running `grpunconv`, group passwords are stored in the world-readable `/etc/group` file.

This command is rarely used on modern systems because storing passwords in a world-readable file is a security risk. It may be needed in recovery scenarios where the shadow file is corrupted and group access must be restored.

## Syntax

```bash
grpunconv [options]
```

## Parameters

- `options`: Flags that change how `grpunconv` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-h`: Display help.
- `-R root-dir`: Operate in the specified chroot directory.
- `-?`: Display help.

## Examples

```bash
sudo grpunconv
```

Restore group passwords from `/etc/gshadow` back into `/etc/group`.

```bash
sudo grpunconv -R /mnt/chroot
```

Run `grpunconv` in a chroot environment.

## Practical Notes

- `grpunconv` is the reverse operation of `grpconv`.
- After running `grpunconv`, the `/etc/gshadow` file is removed or emptied, and passwords are visible in `/etc/group`.
- This is generally not recommended for production systems because group password hashes become readable by all users.
- Use this command only in recovery scenarios or when shadow passwords must be temporarily disabled.
- The `pwunconv` command provides equivalent functionality for user passwords.
