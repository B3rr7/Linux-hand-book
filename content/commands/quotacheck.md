---
name: quotacheck
summary: Scan filesystems for disk usage and create quota files.
category: Administration
tags: quota, disk, filesystem, usage, limits
popular: false
---

## Additional Notes

`quotacheck` scans filesystems to create, check, and repair quota database files (`aquota.user` and `aquota.group`). It reads the filesystem's directory structure to determine current disk usage for each user and group, then writes this information to the quota record files.

System administrators use `quotacheck` when enabling quotas on a filesystem, after filesystem corruption that may have affected quota records, or periodically to synchronize quota records with actual disk usage. It is typically run before enabling quotas with `quotaon`.

## Syntax

```bash
quotacheck [options] [filesystem...]
```

## Parameters

- `filesystem`: Mount point (e.g., `/home`) or device path (e.g., `/dev/sda2`).

## Common Options

- `-a`, `--all`: Check all filesystems with quota support enabled in `/etc/fstab`.
- `-u`, `--user`: Create or update user quota files (`aquota.user`).
- `-g`, `--group`: Create or update group quota files (`aquota.group`).
- `-c`, `--create-files`: Create quota files if they do not exist.
- `-v`, `--verbose`: Show detailed output during scanning.
- `-f`, `--force`: Force checking even if quotas are enabled.
- `-m`, `--no-remount`: Do not remount the filesystem read-only for the scan (use on active filesystems).
- `-n`, `--bad-ids`: Skip checking for non-existent UIDs/GIDs.
- `-R`, `--exclude-root`: Exclude the root filesystem when using `-a`.
- `-b`, `--no-backup`: Do not back up old quota files.

## Examples

```bash
quotacheck -avug
```

Scan all filesystems with quotas enabled, updating user and group quota files.

```bash
quotacheck -cuv /home
```

Create and update quota files for `/home` with verbose output.

```bash
quotacheck -m /var
```

Check `/var` without remounting it (safe for active filesystems).

```bash
quotacheck -f /home
```

Force quota file checking even if quota is already active.

```bash
quotacheck -avugm
```

Recommended safe command: check all quota-enabled filesystems without remounting.

## Practical Notes

- Run `quotacheck` before enabling quotas with `quotaon`. Afterward, verify with `repquota -a`.
- The `-m` flag is important on production systems. Without it, `quotacheck` attempts to remount the filesystem read-only, which may disrupt active users.
- Quota files are typically named `aquota.user` and `aquota.group` and are stored in the root of the filesystem.
- Quotas must be enabled in `/etc/fstab` with the `usrquota` and/or `grpquota` mount options.
- On very large filesystems, `quotacheck` can take significant time. Run during maintenance windows.
- If `quotacheck` reports inconsistencies, you may need to unmount and run `fsck` on the filesystem before retrying.
