---
name: convertquota
summary: Convert filesystem quota files between old and new formats.
category: Disk
tags: quota, filesystem, disk, admin
popular: false
---

## Additional Notes

`convertquota` converts quota files between older and newer quota formats. It is an administrative tool used when maintaining filesystems with user or group disk quotas.

Most users never need it unless they manage quota-enabled filesystems.

## Syntax

```bash
convertquota [options] filesystem
```

## Parameters

- `filesystem`: Mounted filesystem or mount point whose quota files should be converted.
- `options`: User/group and format conversion controls.

## Common Options

- `-u`: Convert user quota files.
- `-g`: Convert group quota files.
- `-f FORMAT`: Convert from a specific format when supported.
- `-e FORMAT`: Convert to a specific format when supported.
- `-v`: Verbose output.

## Examples

```bash
sudo convertquota -u /home
```

Convert user quota files for `/home`.

```bash
sudo convertquota -ug /srv
```

Convert user and group quota files.

```bash
quotaon -p /home
```

Check quota state after maintenance.

## Practical Notes

- Back up quota files before conversion.
- Quotas may need to be disabled during maintenance depending on filesystem and workflow.
- Use `quotacheck`, `quotaon`, `quotaoff`, and `repquota` for related quota tasks.
