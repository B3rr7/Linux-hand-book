---
name: quotaon
summary: Enable filesystem disk quotas.
category: Administration
tags: quota, disk, enable, filesystem
popular: false
---

## Additional Notes

`quotaon` activates disk quota enforcement on one or more filesystems. It reads the quota database files (`aquota.user` and `aquota.group`) and tells the kernel to begin tracking and enforcing user and group disk limits.

System administrators run `quotaon` after creating quota files with `quotacheck`, after a reboot (typically triggered by init scripts or systemd units), or after re-enabling quotas following maintenance. Quotas must be enabled in `/etc/fstab` with the `usrquota` and/or `grpquota` mount options.

## Syntax

```bash
quotaon [options] [filesystem...]
```

## Parameters

- `filesystem`: Mount point or device path to enable quotas on.

## Common Options

- `-a`, `--all`: Enable quotas on all filesystems with quota support in `/etc/fstab`.
- `-u`, `--user`: Enable user quotas only.
- `-g`, `--group`: Enable group quotas only.
- `-v`, `--verbose`: Show detailed output.
- `-p`, `--print-state`: Print whether quotas are on or off (does not change state).
- `-f`, `--force`: Force quota on even if there are problems.
- `-x`, `--no-act`: Dry run; show what would be done without enabling.

## Examples

```bash
quotaon -a
```

Enable quotas on all filesystems.

```bash
quotaon /home
```

Enable quotas on the `/home` filesystem.

```bash
quotaon -ug -v /var
```

Enable both user and group quotas on `/var` with verbose output.

```bash
quotaon -a -v
```

Enable all quotas with verbose confirmation.

```bash
quotaon -p /home
```

Print whether quotas are enabled on `/home`.

```bash
quotaon -f /home
```

Force quota activation even if there are minor problems with quota files.

## Practical Notes

- Run `quotacheck` before `quotaon` to ensure quota files are accurate.
- On most distributions, `quotaon -a` is run automatically at boot from init scripts or systemd units.
- After enabling quotas, verify with `repquota -a` or `quota -v`.
- If `quotaon` reports errors, the quota files may be corrupt. Run `quotacheck -m` to repair them.
- Quotas can be enabled and disabled without unmounting the filesystem.
- The `-p` option is useful in scripts to check quota status before taking action.
