---
name: apk
summary: Manage packages on Alpine Linux.
category: Packages
tags: alpine, package, install, update
popular: false
---

## Additional Notes

`apk` is Alpine Linux's package manager. It installs, removes, upgrades, searches, and lists packages from Alpine repositories.

Use it in Alpine systems, containers, and lightweight server images. It is common in Dockerfiles based on Alpine.

## Syntax

```bash
apk [options] command [package...]
```

## Parameters

- `command`: Operation such as `add`, `del`, `update`, `upgrade`, `search`, or `info`.
- `package`: Package name to install, remove, or inspect.
- `options`: Repository, cache, and output controls.

## Common Commands

- `update`: Refresh package index files.
- `add PACKAGE`: Install a package.
- `del PACKAGE`: Remove a package.
- `upgrade`: Upgrade installed packages.
- `search TERM`: Search package names.
- `info PACKAGE`: Show package information.
- `list --installed`: List installed packages.

## Common Options

- `--no-cache`: Do not store index files locally. Common in Dockerfiles.
- `-U`: Update indexes before the operation.
- `-v`: Verbose output.
- `--repository URL`: Use an additional repository.

## Examples

```bash
apk update
```

Refresh package indexes.

```bash
apk add curl
```

Install `curl`.

```bash
apk add --no-cache bash ca-certificates
```

Install packages without keeping cache files, useful in containers.

```bash
apk del curl
```

Remove a package.

## Practical Notes

- Use `apk add --no-cache` in Dockerfiles to keep images smaller.
- Alpine uses musl libc, so some packages behave differently than on glibc distributions.
- Root privileges are usually required outside containers running as root.
