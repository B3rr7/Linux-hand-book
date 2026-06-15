---
name: repquota
summary: Report disk quota usage for users and groups.
category: Administration
tags: quota, disk, report, usage, users, groups
popular: false
---

## Additional Notes

`repquota` generates a summary report of disk quota usage for all users and groups on a filesystem. It shows each user or group with their current disk usage, soft and hard limits, grace periods, and inode (file count) statistics.

System administrators use `repquota` for generating quota reports, monitoring storage usage trends, identifying users approaching their limits, and auditing filesystem utilization. It is more comprehensive than the `quota` command, which shows individual user information.

## Syntax

```bash
repquota [options] [filesystem...]
```

## Parameters

- `filesystem`: Mount point or device to report on. If omitted, all filesystems with quotas are reported.

## Common Options

- `-a`, `--all`: Report on all filesystems with quotas enabled.
- `-u`, `--user`: Report user quotas (default).
- `-g`, `--group`: Report group quotas.
- `-v`, `--verbose`: Show quotas for all users/groups, even those with no usage.
- `-s`, `--human-readable`: Show sizes in human-readable format (K, M, G).
- `-p`, `--raw`: Show raw numbers (in 1K blocks) without conversion.
- `-n`, `--no-name`: Show numeric UIDs/GIDs instead of resolving names.
- `-i`: Report inode usage instead of block usage.
- `-t`: Show grace period information instead of usage.
- `-c`: Report on specified mount points (comma-separated).
- `-f`: Filter by filesystem type (e.g., `ext4`, `xfs`).

## Examples

```bash
repquota -a
```

Report quotas on all quota-enabled filesystems.

```bash
repquota -a -s
```

Human-readable quota report on all filesystems.

```bash
repquota -ug /home
```

Report both user and group quotas on `/home`.

```bash
repquota -v /var
```

Verbose report showing all users, including those with zero usage.

```bash
repquota -a -s | grep -E "^[^ ]+ --"
```

Show only users who are exceeding their soft limit (indicated by `+` or `--`).

```bash
repquota -g /data
```

Show group quota usage on `/data`.

```bash
repquota -a -n
```

Report with numeric UIDs, useful when user name resolution is slow or unavailable.

## Practical Notes

- Quotas must be enabled on the filesystem (via `/etc/fstab` `usrquota`/`grpquota` options) and activated with `quotaon`.
- The output shows columns for: user/group, filesystem, blocks used, block soft/hard limits, block grace, inodes used, inode soft/hard limits, and inode grace.
- A `+` or `--` in the output indicates the user/group is over the soft limit and within the grace period.
- The grace column shows how much time remains before the soft limit becomes a hard limit.
- For automated monitoring, use `repquota -a -s` and grep for users in violation.
- `repquota` reads from the quota files created by `quotacheck`. Run `quotacheck` periodically to keep data accurate.
