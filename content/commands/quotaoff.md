---
name: quotaoff
summary: Disable filesystem disk quotas.
category: Administration
tags: quota, disk, disable, filesystem
popular: false
---

## Additional Notes

`quotaoff` disables disk quota enforcement on one or more filesystems. When quotas are turned off, users can exceed their assigned limits without warnings or restrictions. The quota records are preserved but not enforced.

System administrators use `quotaoff` when performing maintenance on quota files, temporarily removing restrictions for a data migration, or troubleshooting quota-related issues. It is the counterpart to `quotaon`.

## Syntax

```bash
quotaoff [options] [filesystem...]
```

## Parameters

- `filesystem`: Mount point or device path to disable quotas on.

## Common Options

- `-a`, `--all`: Disable quotas on all filesystems with quota support.
- `-u`, `--user`: Disable user quotas only.
- `-g`, `--group`: Disable group quotas only.
- `-p`, `--print-state`: Print whether quotas are on or off for each filesystem (does not change state).
- `-v`, `--verbose`: Show detailed output.
- `-x`, `--no-act`: Dry run; show what would be done without making changes.

## Examples

```bash
quotaoff -a
```

Disable quotas on all filesystems.

```bash
quotaoff /home
```

Disable quotas on the `/home` filesystem.

```bash
quotaoff -ug /var
```

Disable both user and group quotas on `/var`.

```bash
quotaoff -a -v
```

Disable all quotas with verbose confirmation.

```bash
quotaoff -p /home
```

Print whether quotas are currently enabled on `/home`.

## Practical Notes

- After running `quotaoff`, users are no longer restricted by their quota limits.
- Use `quotaon` to re-enable quotas after maintenance.
- Quota files are not deleted by `quotaoff`. The data remains for the next `quotaon`.
- If you need to update quota records, run `quotacheck` while quotas are off, then re-enable.
- The `-p` flag only shows status and does not change anything.
