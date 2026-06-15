---
name: dpkg-divert
summary: Override the location of a package file during installation.
category: Packages
tags: debian, package, dpkg, diversion, override
popular: false
---

## Additional Notes

`dpkg-divert` manages file diversions, which force `dpkg` to install a file to a different location instead of its default path. This is useful when two packages ship the same filename and you want to keep both, or when you need to replace a configuration file with a custom version without triggering package manager conflicts.

A diversion tells `dpkg` to rename the original file and install the package's version at a different path. When the package is removed, the diversion can be removed and the original file restored. Diversions are recorded in the `dpkg` database and survive package updates.

## Syntax

```bash
dpkg-divert [options] [--add|--remove] file
```

## Parameters

- `--add`: Add a diversion.
- `--remove`: Remove a diversion.
- `file`: The filename to divert.

## Common Options

- `--divert divert-to`: Specify the new location for the file when the package is installed.
- `--package package`: Restrict the diversion to a specific package.
- `--local`: Alias for `--divert /usr/local/dist/file --package local`.
- `--rename`: Actually move the file aside when adding the diversion.
- `--no-rename`: Do not move the file, just record the diversion.
- `--list`: List all current diversions.
- `--listpackage file`: Show which package diverts a file.
- `--truename file`: Return the real path of a diverted file.

## Examples

```bash
dpkg-divert --add --rename --divert /etc/example.conf.bak /etc/example.conf
```

Divert `/etc/example.conf` so that future installations place it at `/etc/example.conf.bak`.

```bash
dpkg-divert --list
```

Show all current diversions on the system.

```bash
dpkg-divert --remove --rename /etc/example.conf
```

Remove the diversion and restore the original file location.

```bash
dpkg-divert --listpackage /etc/example.conf
```

Show which package, if any, diverts the file.

## Practical Notes

- Use `--rename` carefully; it moves the file immediately and can break running services.
- Diversions are often used to customize configuration files that package updates would otherwise overwrite.
- Always use `--package` when creating package-specific diversions to avoid conflicts.
- To see if a file is diverted, run `dpkg-divert --list` or check with `dpkg --verify`.
- Removing a diversion before the diverting package is removed can cause file conflicts.
