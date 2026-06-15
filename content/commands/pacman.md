---
name: pacman
summary: Manage packages on Arch Linux and related systems.
category: Packages
tags: package, install, update, arch
popular: false
---

## Additional Notes

`pacman` is a package-management command used to manage packages on Arch Linux and related systems. It handles package installation, removal, upgrade, and dependency resolution on Arch Linux and derivatives.

Always sync the package databases with `pacman -Sy` or `pacman -Syu` before installing packages to avoid partial upgrades. If a database update breaks a partial install, use `pacman -Syu` to synchronize everything.

## Syntax

```bash
pacman [options] command [package-or-file...]
```

## Parameters

- `options`: Flags that change how `pacman` behaves.
- `package`: Package name to install, remove, query, or upgrade.
- `file`: Local package file or repository metadata file when the command supports it.

## Common Options

- `-S PACKAGE`: Install a package.
- `-Syu`: Sync repositories and upgrade the system.
- `-R PACKAGE`: Remove a package.
- `-Ss TERM`: Search repositories.
- `-Qi PACKAGE`: Show installed package info.

## Examples

```bash
sudo pacman -Syu
sudo pacman -S nginx
pacman -Ss ripgrep
pacman -Qi git
```

## Practical Notes

On rolling-release systems, keep package databases and packages in sync with `pacman -Syu`.
