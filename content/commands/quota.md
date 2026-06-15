---
name: quota
summary: Display disk usage and limits for users or groups.
category: Administration
tags: quota, disk, usage, limits, users, groups
popular: false
---

## Additional Notes

`quota` displays current disk usage and quota limits for users and groups. It reads from the quota subsystem to show used space, soft limits, hard limits, grace periods, and inode (file count) usage.

System administrators and users use `quota` to check whether they are approaching their allocated disk limits. It helps in capacity planning, enforcing storage policies, and identifying which users or groups are consuming the most space.

## Syntax

```bash
quota [options] [user-or-group]
```

## Parameters

- `user-or-group`: Username or group name to check. If omitted, shows the current user's quota.

## Common Options

- `-u`, `--user`: Display user quotas (default).
- `-g`, `--group`: Display group quotas.
- `-v`, `--verbose`: Show quotas on all filesystems, even those with no usage.
- `-s`, `--human-readable`: Show sizes in human-readable format (K, M, G).
- `-l`, `--local-only`: Show only local filesystems (no NFS).
- `-Q`, `--quiet-mounts`: Suppress filesystem mount point headers.
- `-p`, `--raw`: Show raw numbers without formatting.
- `-f filesystem`: Show quotas only on the specified filesystem.
- `-n`, `--no-name`: Show numeric UID/GID instead of resolving names.
- `-i`: Show inode counts (number of files) instead of block usage.
- `--show-mntpoint`: Display the filesystem mount point.

## Examples

```bash
quota
```

Show current user's disk quota and usage.

```bash
quota -s
```

Show current user's quota in human-readable format.

```bash
quota -vs
```

Show quotas on all filesystems with human-readable sizes.

```bash
quota -g www-data
```

Show group quota for the `www-data` group.

```bash
quota -u alice
```

Show quota for user `alice`.

```bash
quota -f /home
```

Show quota information only for the `/home` filesystem.

```bash
quota -s -u $(whoami)
```

Check the current user's quota with human-readable output.

## Practical Notes

- Quotas must be enabled on the filesystem (via `/etc/fstab` mount options `usrquota`/`grpquota`) and activated with `quotaon`.
- If `quota` shows no output, quotas may not be enabled for that filesystem or user.
- The soft limit allows usage for a limited grace period. The hard limit is the absolute maximum.
- Use `-s` for human-readable output; raw numbers are in 1KB blocks.
- For a summary of all quotas on a filesystem, use `repquota /filesystem`.
- Quota grace periods are displayed when a user has exceeded the soft limit.
