---
name: dnf
summary: Manage packages on Fedora, RHEL, and related systems.
category: Packages
tags: package, install, update, fedora, rhel
popular: false
---

## Additional Notes

`dnf` is a package-management command used to manage packages on Fedora, RHEL, and related systems. It resolves package dependencies automatically and fetches packages from configured repositories. It is the successor to yum and is the default package manager on Fedora and RHEL 8+.

## Syntax

```bash
dnf [options] command [package-or-file...]
```

## Parameters

- `options`: Flags that change how `dnf` behaves.
- `package`: Package name to install, remove, query, or upgrade.
- `file`: Local package file or repository metadata file when the command supports it.

## Common Options

- `install PACKAGE`: Install a package.
- `remove PACKAGE`: Remove a package.
- `upgrade`: Upgrade installed packages.
- `search TERM`: Search packages.
- `info PACKAGE`: Show package details.

## Examples

```bash
sudo dnf install nginx
dnf search ripgrep
sudo dnf upgrade
dnf info git
```

## Practical Notes

`dnf` is the package manager used by Fedora and newer RHEL-family distributions.
