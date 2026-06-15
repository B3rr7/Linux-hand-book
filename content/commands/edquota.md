---
name: edquota
summary: Edit user or group disk quotas.
category: Disk
tags: quota, disk, user, group, filesystem
popular: false
---

## Additional Notes

`edquota` edits disk quotas for users and groups. It opens the quota settings in a text editor (as defined by `EDITOR` or `VISUAL`), allowing you to set soft and hard limits for blocks and inodes on each filesystem that has quotas enabled.

Quotas limit the amount of disk space a user or group can consume. The soft limit triggers a warning, while the hard limit is an absolute cap. For filesystems that support grace periods, users can exceed the soft limit for a limited time before it is enforced as a hard limit. `edquota` reads and writes the quota database files (`aquota.user` and `aquota.group`).

## Syntax

```bash
edquota [options] user-or-group...
```

## Parameters

- `user-or-group`: Username or group name to edit quotas for.

## Common Options

- `-u`: Edit user quotas (default).
- `-g`: Edit group quotas.
- `-p source-user`: Duplicate the quota settings from the source user to the target users.
- `-t`: Edit the grace period settings.
- `-T user | group`: Edit the grace period for a specific user or group.
- `-r filesystem`: Operate only on the specified filesystem.
- `-f filesystem`: Operate only on the specified filesystem.
- `-h`: Print help.

## Examples

```bash
sudo edquota alice
```

Edit disk quotas for user `alice`. Opens the default editor with current quota values.

```bash
sudo edquota -g developers
```

Edit group quotas for the `developers` group.

```bash
sudo edquota -p alice bob charlie
```

Copy `alice`'s quota settings to `bob` and `charlie`.

```bash
sudo edquota -t
```

Edit the default grace periods for all filesystems with quotas.

## Practical Notes

- Quotas must be enabled on the filesystem (using `mount -o usrquota` or `usrquota` in `/etc/fstab`) and initialized with `quotacheck`.
- The quota format in the editor is: `filesystem blocks soft hard inodes soft hard`.
- Blocks are typically 1 KB units. Set soft and hard limits in these units.
- A soft limit of 0 means no soft limit. A hard limit of 0 means no hard limit (unlimited).
- Use `repquota` to view current quota usage in tabular form.
- After editing quotas, they take effect immediately; no service restart is needed.
