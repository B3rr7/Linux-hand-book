---
name: createrepo
summary: Create RPM repository metadata.
category: Packages
tags: rpm, repository, metadata, yum, dnf
popular: false
---

## Additional Notes

`createrepo` generates repository metadata for a directory of RPM packages. This metadata lets tools such as `yum` and `dnf` use the directory as a package repository.

Use it when building a local RPM repo, internal mirror, lab repo, or package staging area.

## Syntax

```bash
createrepo [options] directory
```

## Parameters

- `directory`: Directory containing RPM packages.
- `options`: Update, checksum, group, and metadata controls.

## Common Options

- `--update`: Reuse existing metadata and update changed packages.
- `-v`: Verbose output.
- `--database`: Generate sqlite database metadata when supported.
- `-g FILE`: Include comps group metadata.
- `--checksum TYPE`: Select checksum type.

## Examples

```bash
createrepo /srv/repo
```

Create metadata for RPMs in `/srv/repo`.

```bash
createrepo --update /srv/repo
```

Update metadata after adding packages.

```bash
find /srv/repo -name '*.rpm' | head
```

Check that packages exist before generating metadata.

## Practical Notes

- The repository still needs to be served or referenced by a repo file.
- Run `createrepo --update` after adding or removing RPMs.
- Newer systems may use `createrepo_c`, a faster C implementation.
