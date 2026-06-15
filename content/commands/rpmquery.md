---
name: rpmquery
summary: Query the RPM database or package files.
category: Packages
tags: rpm, query, package, metadata
popular: false
---

## Additional Notes

`rpmquery` is an alias or symbolic link to `rpm --query` functionality on some systems. It queries the RPM database (installed packages) or individual RPM files to retrieve package metadata, file lists, dependencies, changelogs, and more.

Querying is one of the most common RPM operations. You can check whether a package is installed, what version is present, which files it owns, what packages depend on it, and which package owns a given file.

## Syntax

```bash
rpmquery [query-options] package_name
rpmquery [query-options] -p package_file.rpm
```

## Parameters

- `package_name`: The name of an installed package to query.
- `package_file.rpm`: An RPM file to query (requires `-p`).

## Common Options

- `-a`, `--all`: Query all installed packages.
- `-f`, `--file file`: Query the package that owns a specific file.
- `-g`, `--group group`: Query packages in a specific group.
- `-p`, `--package package.rpm`: Query an uninstalled RPM package file.
- `-i`: Show package information (name, version, architecture, etc.).
- `-l`: List all files owned by the package.
- `-s`: Show file states (normal, not installed, replaced).
- `-d`: List only documentation files.
- `-c`: List only configuration files.
- `--changelog`: Show the package changelog.
- `--provides`: List what the package provides (capabilities).
- `--requires`: List what the package depends on.
- `--obsoletes`: List what the package obsoletes.
- `--conflicts`: List what the package conflicts with.
- `--scripts`: Show pre/post installation scripts.
- `--last`: Order packages by install time (used with `-a`).

## Examples

```bash
rpmquery -i openssh-server
```

Show information about the installed `openssh-server` package.

```bash
rpmquery -l openssh-server
```

List all files owned by the installed `openssh-server`.

```bash
rpmquery -f /etc/ssh/sshd_config
```

Find which installed package owns `/etc/ssh/sshd_config`.

```bash
rpmquery -p package.rpm --requires
```

Show the dependencies of an uninstalled RPM package file.

```bash
rpmquery -a --last
```

List all installed packages sorted by installation time.

## Practical Notes

- `rpmquery` may not be available on all distributions; `rpm -q` is the universal alternative.
- Combine options like `-qi`, `-ql`, `-qa` for common query patterns.
- Use `--requires` and `--provides` to troubleshoot dependency issues.
- Querying installed packages is faster than querying RPM files.
