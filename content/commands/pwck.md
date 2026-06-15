---
name: pwck
summary: Verify the integrity of the password file.
category: Administration
tags: users, passwords, security, verification, etc
popular: false
---

## Additional Notes

`pwck` verifies the integrity of the system password files: `/etc/passwd` and optionally `/etc/shadow`. It checks for missing or inconsistent fields, duplicate UIDs, invalid home directories, missing login shells, and shadow file synchronization issues.

System administrators use `pwck` as part of routine security audits, after editing password files manually, and to detect corruption or inconsistencies introduced by software bugs or manual errors. It reports issues found and offers to remove or correct entries interactively.

## Syntax

```bash
pwck [options] [passwd-file [shadow-file]]
```

## Parameters

- `passwd-file`: Password file to check (default: `/etc/passwd`).
- `shadow-file`: Shadow file to check (default: `/etc/shadow`).

## Common Options

- `-r`, `--read-only`: Check only, do not make changes.
- `-s`, `--sort`: Sort entries by UID.
- `-q`, `--quiet`: Report only serious errors.
- `-R root`: Apply changes in a chroot directory.
- `--help`: Show help and exit.
- `--version`: Show version information.

## Examples

```bash
pwck
```

Check the integrity of `/etc/passwd` and `/etc/shadow`.

```bash
pwck -r
```

Read-only check; report issues without prompting for fixes.

```bash
pwck -q
```

Report only serious errors, suppressing warnings.

```bash
pwck -s
```

Check and then sort entries by UID.

```bash
pwck /etc/passwd /etc/shadow
```

Explicitly specify which files to check.

## Practical Notes

- Run `pwck` after any manual editing of `/etc/passwd` or `/etc/shadow` files to catch mistakes.
- Common issues detected include: duplicate UIDs, missing usernames, invalid home directories, and non-existent login shells.
- If a user has no valid shell, `pwck` may report it. You can fix it with `usermod -s /bin/bash username`.
- Use the companion tool `grpck` to verify `/etc/group` and `/etc/gshadow` integrity.
- The `-r` (read-only) option is safest for initial inspection. Make manual corrections based on the report.
- In containerized environments, use `-R` to specify the chroot path for checking password files within the container.
