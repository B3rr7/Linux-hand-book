---
name: grpconv
summary: Convert group passwords to shadow group format.
category: System
tags: group, shadow, convert, password, security
popular: false
---

## Additional Notes

`grpconv` converts and updates the shadow group database from the standard group file. It creates or updates `/etc/gshadow` from the entries in `/etc/group`, moving group passwords and administrator lists out of the world-readable group file into the restricted shadow file.

After conversion, the password field in `/etc/group` is replaced with `x` or `!` and the actual group passwords are stored in `/etc/gshadow` (readable only by root). This improves security by preventing ordinary users from reading hashed group passwords.

## Syntax

```bash
grpconv [options]
```

## Parameters

- `options`: Flags that change how `grpconv` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-h`: Display help.
- `-R root-dir`: Operate in the specified chroot directory.
- `-?`: Display help.

## Examples

```bash
sudo grpconv
```

Convert group entries to shadow group format.

```bash
sudo grpconv -R /mnt/chroot
```

Run `grpconv` in a chroot environment.

## Practical Notes

- `grpconv` is the counterpart of `grpunconv` (which reverses the conversion).
- Run `grpconv` if `/etc/gshadow` has been deleted or corrupted and needs to be rebuilt from `/etc/group`.
- After running `grpconv`, the `/etc/gshadow` file will contain the group passwords and administrative information.
- This command is part of the shadow password suite and is typically executed automatically during system installation.
- The `pwconv` command provides equivalent functionality for user password shadowing.
