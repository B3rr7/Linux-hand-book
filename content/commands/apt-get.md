---
name: apt-get
summary: Install, upgrade, and remove packages on Debian and Ubuntu systems.
category: Packages
tags: package, install, update, debian, ubuntu
popular: true
---

## Additional Notes

`apt-get` is the stable APT command-line tool used on Debian, Ubuntu, Kali, Linux Mint, and related systems. It installs packages, refreshes package indexes, upgrades installed software, removes packages, and cleans cached package files.

Compared with `apt`, `apt-get` is more conservative and script-friendly. Use `apt-get` in automation and recovery notes; use `apt` for day-to-day interactive work when you prefer friendlier output.

## Syntax

```bash
apt-get [options] command [package...]
sudo apt-get [options] command [package...]
```

## Parameters

- `command`: Package operation such as `update`, `install`, `remove`, `upgrade`, or `autoremove`.
- `package`: Package name such as `nginx`, `curl`, or `python3`.
- `options`: Flags that change confirmation, download, cache, or configuration behavior.

## Common Commands

- `update`: Refresh package indexes from configured repositories.
- `install PACKAGE`: Install a package and required dependencies.
- `remove PACKAGE`: Remove a package but usually keep system configuration files.
- `purge PACKAGE`: Remove a package and its system configuration files.
- `upgrade`: Upgrade installed packages without removing packages.
- `dist-upgrade`: Upgrade and allow dependency changes when needed.
- `autoremove`: Remove dependencies that are no longer needed.
- `autoclean`: Remove old package files from the cache.
- `clean`: Remove cached package files.

## Common Options

- `-y`: Assume yes for prompts. Useful in scripts, risky if the command may remove important packages.
- `-s`, `--simulate`: Show what would happen without changing the system.
- `--no-install-recommends`: Install required packages but skip recommended extras.
- `-d`, `--download-only`: Download packages without installing them.
- `-f`, `--fix-broken`: Try to repair broken dependencies.
- `-o KEY=VALUE`: Override an APT configuration value for one run.

## Examples

```bash
sudo apt-get update
```

Refresh repository metadata before installing or upgrading packages.

```bash
sudo apt-get install nginx
```

Install `nginx` and dependencies.

```bash
sudo apt-get remove nginx
```

Remove the package while leaving many configuration files behind.

```bash
sudo apt-get purge nginx
```

Remove the package and its system configuration files.

```bash
sudo apt-get -s dist-upgrade
```

Preview a dependency-changing upgrade before applying it.

```bash
sudo apt-get autoremove
```

Remove packages that were installed as dependencies and are no longer needed.

## Practical Notes

- Run `apt-get update` before installing when package names or versions cannot be found.
- Use `apt-get -s` before large upgrades on servers.
- Be careful with `-y` in scripts because it can approve removals too.
- If a local `.deb` install broke dependencies, try `sudo apt-get install -f`.
