---
name: realpath
summary: Print resolved absolute paths.
category: Files
tags: path, absolute, symlink, resolve
popular: false
---

## Additional Notes

`realpath` converts paths into canonical absolute paths. It resolves `.`, `..`, duplicate slashes, and symbolic links according to the options used.

Use `realpath` in scripts when relative paths need to become predictable absolute paths, or when you need to compare paths after symlink resolution.

## Syntax

```bash
realpath [options] path...
```

## Parameters

- `path`: File or directory path to resolve.
- `options`: Controls for missing paths, symlink handling, and relative output.

## Common Options

- `-e`: Require all path components to exist.
- `-m`: Resolve even if path components are missing.
- `-L`: Resolve `..` before symlinks, logical mode.
- `-P`: Resolve symlinks as encountered, physical mode.
- `--relative-to=DIR`: Print a path relative to DIR.
- `--relative-base=DIR`: Print relative output only if the path is under DIR.
- `-s`: Do not expand symlinks where supported.

## Examples

```bash
realpath .
```

Print the absolute path of the current directory.

```bash
realpath ../config
```

Resolve a relative path.

```bash
realpath -e /etc/hosts
```

Resolve only if the path exists.

```bash
realpath -m ./missing/../target
```

Normalize a path even if parts are missing.

```bash
realpath --relative-to=/srv /srv/app/config
```

Print a path relative to `/srv`.

## Practical Notes

- Use `realpath -e` when missing paths should be treated as errors.
- Use `realpath -m` when constructing paths that may not exist yet.
- Use quotes around path variables in scripts because resolved paths can still contain spaces.
