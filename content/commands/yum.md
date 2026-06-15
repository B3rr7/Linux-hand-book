---
name: yum
summary: Manage packages on older RHEL and CentOS systems.
category: Packages
tags: package, install, update, centos, rhel
popular: false
---

## Additional Notes

`yum` is a package-management command used to manage packages on older RHEL and CentOS systems. It manages RPM packages on older RHEL, CentOS, and Fedora systems, resolving dependencies automatically.

`yum` has been replaced by `dnf` on modern Fedora and RHEL 8+, but remains common on older enterprise systems. After installing packages, `yum clean all` clears the cache.

## Syntax

```bash
yum [options] command [package-or-file...]
```

## Parameters

- `options`: Flags that change how `yum` behaves.
- `package`: Package name to install, remove, query, or upgrade.
- `file`: Local package file or repository metadata file when the command supports it.

## Common Options

- `install PACKAGE`: Install a package.
- `remove PACKAGE`: Remove a package.
- `update`: Update packages.
- `search TERM`: Search packages.

## Examples

```bash
sudo yum install httpd
yum search git
sudo yum update
```

## Practical Notes

Many newer systems use `dnf`, but `yum` is still common on older servers.
