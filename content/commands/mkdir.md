---
name: mkdir
summary: Create directories.
category: Files
tags: directory, create, filesystem, path
popular: true
---

## Additional Notes

`mkdir` creates directories. It can create one directory, multiple directories, or a full parent path when used with `-p`.

Directories need execute permission to be entered, so permissions matter when creating shared or service directories.

## Syntax

```bash
mkdir [options] directory...
```

## Parameters

- `options`: Flags that change how `mkdir` behaves.
- `path`: File or directory path to inspect or change.
- `arguments`: Names, patterns, or values used by the command.

## Common Options

- `-p`, `--parents`: Create parent directories as needed and do not fail if the directory already exists.
- `-v`, `--verbose`: Print each created directory.
- `-m MODE`, `--mode=MODE`: Set permissions when creating the directory.

## Examples

```bash
mkdir logs
```

Create one directory.

```bash
mkdir images scripts backups
```

Create multiple directories.

```bash
mkdir -p project/src/components
```

Create a nested path, including missing parents.

```bash
mkdir -v reports
```

Show the created directory.

```bash
mkdir -m 700 private
```

Create a private directory.

## Practical Notes

- Use `mkdir -p` in scripts when parent directories may not exist.
- Directory write permission controls creating/removing names inside it.
- Directory execute permission controls entering/traversing it.
- Use `ls -ld directory` to inspect directory permissions.
