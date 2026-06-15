---
name: rpmdb
summary: Rebuild or manage the RPM database.
category: Packages
tags: rpm, database, rebuild, package
popular: false
---

## Additional Notes

`rpmdb` manages the RPM package database stored under `/var/lib/rpm`. It is primarily used to rebuild the database if it becomes corrupted, or to migrate it between Berkeley DB versions. The RPM database tracks every installed package, including files, versions, dependencies, and metadata.

Database corruption can occur due to power loss, disk errors, or improper system shutdown. `rpmdb` provides tools to verify and rebuild the database from the installed package headers.

## Syntax

```bash
rpmdb [options]
```

## Parameters

- `options`: Flags that change how `rpmdb` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--rebuilddb`: Rebuild the RPM database from installed package headers. This reads all installed RPM headers and creates a fresh database.
- `--initdb`: Initialize a new RPM database. Creates the database files if they do not exist.
- `--verify`: Verify the integrity of the RPM database.
- `--dump`: Dump database contents in a human-readable format.
- `--import`: Import a public key into the RPM database.
- `--export`: Export all public keys from the RPM database.
- `--all`: Operate on all packages in the database (used with query modes).
- `-v`: Verbose output.

## Examples

```bash
rpmdb --rebuilddb
```

Rebuild the RPM database from installed package headers.

```bash
rpmdb --initdb
```

Initialize a new empty RPM database.

```bash
rpmdb --verify
```

Check the RPM database for corruption.

## Practical Notes

- The RPM database lives in `/var/lib/rpm` and uses Berkeley DB format.
- Always back up `/var/lib/rpm` before running `--rebuilddb`.
- A corrupted database will cause `rpm` queries and installations to fail.
- Running `--rebuilddb` requires read access to all installed RPM headers.
- The database files are named `Packages`, `Name`, `Basenames`, `Group`, etc.
