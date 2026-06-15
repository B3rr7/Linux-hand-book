---
name: readlink
summary: Print symbolic link targets or canonical paths.
category: Files
tags: symlink, path, resolve, link
popular: false
---

## Additional Notes

`readlink` prints the target of a symbolic link. With canonicalization options, it can also resolve a path to an absolute path by following symlinks and handling `.` and `..` components.

Use `readlink` when debugging symlinks, discovering where a command or config path points, or resolving paths in scripts.

## Syntax

```bash
readlink [options] file
readlink -f path
```

## Parameters

- `file`: Symbolic link or path to inspect.
- `path`: Path to canonicalize.
- `options`: Canonicalization and output controls.

## Common Options

- No option: Print the immediate target of a symbolic link.
- `-f`: Canonicalize by following path components. All but the final component must exist.
- `-e`: Canonicalize and require all path components to exist.
- `-m`: Canonicalize even if path components are missing.
- `-n`: Do not print the trailing newline.
- `-q`, `-s`: Suppress most errors.
- `-v`: Print error messages.
- `-z`: End each output item with a NUL byte instead of a newline.

## Examples

```bash
readlink /usr/bin/python
```

Print where the symlink points.

```bash
readlink -f /usr/bin/python
```

Print the fully resolved path.

```bash
readlink -e /etc/hosts
```

Resolve a path and require it to exist.

```bash
script_dir=$(dirname "$(readlink -f "$0")")
```

Resolve a script path before deriving its directory.

```bash
find links -type l -print0 | xargs -0 readlink -z
```

Use NUL-separated output when filenames may contain unusual characters.

## Practical Notes

- `readlink link` and `readlink -f link` answer different questions: immediate target versus canonical path.
- If the argument is not a symbolic link and no canonicalization option is used, `readlink` prints nothing and fails.
- `realpath` is usually clearer when you only need resolved absolute paths.
- Exit status `0` means success; nonzero means failure.
- Behavior for missing paths can differ between Unix variants; test scripts on the target platform.
