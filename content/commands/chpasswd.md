---
name: chpasswd
summary: Update passwords in batch mode.
category: Permissions
tags: password, user, batch, account
popular: false
---

## Additional Notes

`chpasswd` reads username and password pairs from standard input and updates account passwords in batch. It is useful for provisioning accounts or administrative scripts.

Because it handles plaintext passwords as input, use it carefully and avoid leaving passwords in shell history, logs, or files.

## Syntax

```bash
chpasswd [options]
```

## Parameters

- Standard input: Lines in `user:password` format.
- `options`: Encryption and processing controls depending on distribution.

## Common Options

- `-e`: Input passwords are already encrypted hashes.
- `-c METHOD`: Select encryption method when supported.
- `-m`: Use MD5 encryption when supported on older systems.
- `-R CHROOT_DIR`: Apply changes under a chroot directory on some versions.

## Examples

```bash
echo 'alice:NewPassword123' | sudo chpasswd
```

Set one user's password from standard input.

```bash
sudo chpasswd < users-passwords.txt
```

Update multiple users from a file containing `user:password` lines.

```bash
echo 'alice:$y$j9T$hash...' | sudo chpasswd -e
```

Set an already-hashed password.

## Practical Notes

- Avoid typing plaintext passwords into commands that may be saved in shell history.
- Protect any temporary files containing passwords and delete them securely when finished.
- Use password rotation and account provisioning tools for larger environments.
