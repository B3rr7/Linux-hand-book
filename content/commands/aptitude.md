---
name: aptitude
summary: Manage Debian packages with an interactive or command-line interface.
category: Packages
tags: debian, ubuntu, package, install, tui
popular: false
---

## Additional Notes

`aptitude` is a Debian package manager with both command-line and text-user-interface modes. It can install, remove, upgrade, search, and resolve dependencies.

Some administrators like `aptitude` for its interactive dependency resolver. Many modern systems use `apt` or `apt-get` more often.

## Syntax

```bash
aptitude [options]
aptitude [options] command [package...]
```

## Parameters

- `command`: Operation such as `search`, `show`, `install`, `remove`, or `safe-upgrade`.
- `package`: Package name or search pattern.
- `options`: Output, simulation, and resolver behavior flags.

## Common Commands

- No command: Open the interactive interface.
- `search PATTERN`: Search packages.
- `show PACKAGE`: Show package details.
- `install PACKAGE`: Install a package.
- `remove PACKAGE`: Remove a package.
- `purge PACKAGE`: Remove package and configuration files.
- `safe-upgrade`: Upgrade installed packages conservatively.
- `full-upgrade`: Upgrade with broader dependency changes.

## Common Options

- `-s`: Simulate actions without changing the system.
- `-y`: Assume yes for prompts.
- `-V`: Show package versions.
- `-D`: Show automatically installed or removed dependencies.

## Examples

```bash
aptitude
```

Open the interactive package interface.

```bash
aptitude search nginx
```

Search for packages matching `nginx`.

```bash
sudo aptitude install nginx
```

Install a package.

```bash
sudo aptitude -s full-upgrade
```

Simulate a full upgrade.

## Practical Notes

- `aptitude` may not be installed by default.
- Use simulation mode before large upgrades.
- Avoid mixing too many package tools during one troubleshooting session unless you understand their state changes.
