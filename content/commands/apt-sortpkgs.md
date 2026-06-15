---
name: apt-sortpkgs
summary: Sort Debian package index or source files.
category: Packages
tags: apt, package, debian, sort, metadata
popular: false
---

## Additional Notes

`apt-sortpkgs` sorts Debian package metadata files such as package index stanzas. It is mainly useful for repository metadata, packaging work, and maintaining readable package lists.

Most normal users do not need it for installing packages. It is more relevant when working with APT metadata files directly.

## Syntax

```bash
apt-sortpkgs [options] file...
```

## Parameters

- `file`: Debian package metadata file to sort.
- `options`: Sorting behavior flags.

## Common Options

- `-s`: Treat input as source package records.
- `-c FILE`: Read an APT configuration file.
- `-o KEY=VALUE`: Set an APT configuration option.
- `-h`: Show help.

## Examples

```bash
apt-sortpkgs Packages > Packages.sorted
```

Sort a binary package index file.

```bash
apt-sortpkgs -s Sources > Sources.sorted
```

Sort source package records.

## Practical Notes

- This command is for metadata formatting, not package installation.
- Keep backups before rewriting repository metadata.
- For normal package searches, use `apt search`, `apt-cache search`, or `dpkg-query`.
