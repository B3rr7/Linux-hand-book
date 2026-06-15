---
name: dpkg-query
summary: Query the dpkg package database for installed packages.
category: Packages
tags: debian, package, dpkg, database, query
popular: false
---

## Additional Notes

`dpkg-query` is a tool for searching and displaying information from the dpkg package database. It can list installed packages, find which package owns a file, check package status, and display package metadata such as version, description, and dependencies.

While `dpkg --list` and `dpkg --search` provide similar functionality, `dpkg-query` offers more flexible output formatting with `--showformat` and supports detailed status reporting. It works only with installed packages listed in dpkg's database, not with remote repository data (use `apt-cache` for that).

## Syntax

```bash
dpkg-query [options] command
```

## Parameters

- `command`: One of `-l`, `-W`, `-s`, `-p`, `-L`, `-S`, or `--control-list` to specify the query type.

## Common Commands

- `-l`, `--list [pattern]`: List installed packages matching a glob pattern.
- `-W`, `--show [pattern]`: Show information about packages using a configurable format.
- `-s`, `--status package`: Show detailed status of a specific installed package.
- `-p`, `--print-avail package`: Show details from the available (not necessarily installed) package.
- `-L`, `--listfiles package`: List files installed by a package.
- `-S`, `--search pattern`: Find which installed package owns a file matching the pattern.
- `--control-list package`: List control files provided by a package.
- `--control-show package control-file`: Show the contents of a specific control file.

## Common Options

- `-f`, `--showformat format`: Specify output format for `-W` using `${field}` placeholders.
- `-F`, `--listformat format`: Specify output format for `-l`.
- `--admindir dir`: Use an alternate dpkg database directory.

## Examples

```bash
dpkg-query -l 'bash*'
```

List all installed packages whose names start with `bash`.

```bash
dpkg-query -S /bin/ls
```

Find which package owns `/bin/ls`.

```bash
dpkg-query -L openssh-client
```

List all files installed by `openssh-client`.

```bash
dpkg-query -s nginx
```

Show detailed status and metadata for the `nginx` package.

```bash
dpkg-query -W -f '${Package} ${Version} ${Status}\n'
```

Show package name, version, and status for all installed packages.

## Practical Notes

- Use `-W -f` for custom-formatted reports in scripts. Placeholders include `${Package}`, `${Version}`, `${Status}`, `${Section}`, `${Maintainer}`, and `${Description}`.
- Unlike `apt-cache`, `dpkg-query` can only search installed packages.
- The `-S` option accepts shell globs, so `dpkg-query -S '/etc/*'` finds all config files owned by packages.
- For remote package metadata, use `apt-cache show` or `apt-cache search`.
