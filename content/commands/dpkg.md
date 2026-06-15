---
name: dpkg
summary: Install, inspect, and remove Debian package files.
category: Packages
tags: debian, package, deb, install
popular: true
---

## Additional Notes

`dpkg` is the low-level Debian package tool. It installs, removes, lists, and inspects `.deb` packages, but it does not automatically resolve dependencies from repositories the way `apt` and `apt-get` do.

Use `dpkg` when you already have a local `.deb` file, need to inspect package contents, or need to ask which package owns a file. For normal package installation from repositories, use `apt` or `apt-get` instead.

## Syntax

```bash
dpkg [options] action [package-or-file]
```

## Parameters

- `action`: Operation such as `-i`, `-r`, `-l`, `-L`, `-S`, or `-s`.
- `package`: Installed package name such as `bash` or `coreutils`.
- `file`: Local `.deb` file or filesystem path.

## Common Options

- `-i FILE.deb`: Install a local Debian package file.
- `-r PACKAGE`: Remove an installed package but keep configuration files.
- `-P PACKAGE`: Purge a package and its configuration files.
- `-l [PATTERN]`: List installed packages.
- `-s PACKAGE`: Show package status and metadata.
- `-L PACKAGE`: List files installed by a package.
- `-S PATH`: Find which installed package owns a path.
- `--configure PACKAGE`: Configure an unpacked package.

## Examples

```bash
sudo dpkg -i ./package.deb
```

Install a local package file.

```bash
dpkg -l | less
```

Browse installed packages.

```bash
dpkg -L bash
```

Show files installed by the `bash` package.

```bash
dpkg -S /bin/ls
```

Find the package that owns `/bin/ls`.

```bash
sudo dpkg --configure -a
```

Continue configuring packages after an interrupted install.

## Practical Notes

- `dpkg -i` can leave dependency problems. Repair them with `sudo apt-get install -f`.
- Use `dpkg -S` for installed files only. It cannot search packages that are not installed.
- Prefer `apt remove` or `apt purge` unless you specifically need low-level package control.
