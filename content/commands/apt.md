---
name: apt
summary: Manage packages on Debian and Ubuntu systems.
category: Packages
tags: package, install, update, debian, ubuntu, remove
popular: true
---

## Additional Notes

`apt` is the main package-management command used on Debian, Ubuntu, Kali, Linux Mint, and many related distributions. It installs, removes, upgrades, searches, and shows information about software packages.

Packages come from configured repositories. Before installing or upgrading, `apt` normally needs a fresh package index so it knows the latest available versions.

## Syntax

```bash
apt [command] [package...]
sudo apt [command] [package...]
```

## Parameters

- `options`: Flags that change how `apt` behaves.
- `package`: Package name to install, remove, query, or upgrade.
- `file`: Local package file or repository metadata file when the command supports it.

## Common Commands

- `update`: Refresh package indexes from repositories.
- `upgrade`: Upgrade installed packages without removing packages unless necessary.
- `full-upgrade`: Upgrade packages and allow dependency changes when needed.
- `install PACKAGE`: Install a package.
- `reinstall PACKAGE`: Reinstall a package that is already installed.
- `remove PACKAGE`: Remove a package but keep many config files.
- `purge PACKAGE`: Remove a package and its system config files.
- `autoremove`: Remove packages installed as dependencies that are no longer needed.
- `search TERM`: Search package names and descriptions.
- `show PACKAGE`: Show package details.
- `list --installed`: List installed packages.
- `list --upgradeable`: List packages with available upgrades.

## Examples

```bash
sudo apt update
```

Refresh package information.

```bash
sudo apt install nginx
```

Install `nginx`.

```bash
apt search ripgrep
```

Search for packages related to `ripgrep`.

```bash
apt show openssh-server
```

Read package details before installing.

```bash
sudo apt upgrade
```

Upgrade installed packages.

```bash
sudo apt remove nginx
```

Remove a package but leave many configuration files.

```bash
sudo apt purge nginx
```

Remove a package and its system configuration files.

```bash
sudo apt autoremove
```

Remove unused dependency packages.

```bash
apt list --upgradeable
```

Check what can be upgraded before running a full upgrade.

## Practical Notes

- Run `sudo apt update` before installing if indexes may be stale.
- `apt install` and system upgrades usually require `sudo`.
- `remove` and `purge` are different. Use `purge` only when you also want system config removed.
- `full-upgrade` may remove packages to complete an upgrade. Read the prompt before confirming.
- Check the `autoremove` list before accepting it, because it can remove packages you still use.
- `apt` is user-friendly for terminals. Scripts often use `apt-get` because its interface is more stable.
- A normal successful run exits with status `0`; many apt errors use status `100`.
- On Kali and Ubuntu, broken repositories or bad mirrors often show up during `apt update`.
