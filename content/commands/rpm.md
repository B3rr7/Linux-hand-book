---
name: rpm
summary: Install, query, verify, and remove RPM package files.
category: Packages
tags: package, install, query, rpm, verify
popular: true
---

## Additional Notes

`rpm` is the low-level package tool used by RPM-based distributions such as Fedora, RHEL, CentOS, Rocky Linux, AlmaLinux, and openSUSE. It can install local `.rpm` files, query installed packages, list package contents, verify installed files, and remove packages.

For normal repository-based installs, use `dnf`, `yum`, or `zypper` because they resolve dependencies. Use `rpm` when inspecting package files, verifying installed package state, or working with local package artifacts.

## Syntax

```bash
rpm [mode] [options] [package-or-file]
```

## Parameters

- `mode`: Operation mode such as `-q`, `-i`, `-U`, `-e`, or `-V`.
- `package`: Installed package name.
- `file`: Local `.rpm` file or installed filesystem path.

## Common Options

- `-q PACKAGE`: Query whether a package is installed.
- `-qa`: List all installed RPM packages.
- `-qi PACKAGE`: Show installed package information.
- `-ql PACKAGE`: List files installed by a package.
- `-qf PATH`: Show which package owns a file.
- `-ivh FILE.rpm`: Install a local RPM package with progress output.
- `-Uvh FILE.rpm`: Upgrade or install a local RPM package.
- `-e PACKAGE`: Remove an installed package.
- `-V PACKAGE`: Verify installed files against package metadata.

## Examples

```bash
rpm -qa | less
```

List installed packages.

```bash
rpm -qi bash
```

Show package metadata for `bash`.

```bash
rpm -ql bash
```

List files installed by the package.

```bash
rpm -qf /bin/ls
```

Find which installed package owns a file.

```bash
sudo rpm -Uvh ./package.rpm
```

Upgrade or install a local RPM file.

## Practical Notes

- Prefer `dnf install ./package.rpm` when you want dependency resolution.
- Use `rpm -V` when checking whether installed files changed from package defaults.
- Removing packages with `rpm -e` can break dependencies; package managers usually handle removals more safely.
