---
name: pathchk
summary: Check file path names for validity or portability.
category: Files
tags: paths, filenames, validation, portable, shell
popular: false
---

## Additional Notes

`pathchk` checks whether file pathnames are valid or portable. It validates that path components exist (or could be created in their parent directories), are not too long for the filesystem, and do not contain characters that would be problematic in portable scripts or cross-platform environments.

It is useful in build scripts, installation scripts, and configuration tools that need to ensure file paths conform to standards before using them. By default, `pathchk` checks against POSIX portability constraints; with specific options, it checks limits imposed by the running filesystem or the system's filename length limits.

## Syntax

```bash
pathchk [options] [pathname...]
```

## Parameters

- `pathname`: One or more filesystem paths to check.

## Common Options

- `-p`: Check for POSIX portability. Rejects empty path components, filenames longer than 14 bytes, and filenames containing characters outside the portable filename character set.
- `-P`: Check for empty path components or leading dashes in filenames (a stricter portability check).
- `--help`: Show help and exit.
- `--version`: Show version information.

## Examples

```bash
pathchk /etc/passwd
```

Check if the path is valid (exits with status 0 if valid).

```bash
pathchk -p "my file!.txt"
```

Check if the filename is POSIX portable. Special characters may cause failure.

```bash
pathchk /nonexistent/dir/file.txt
```

Check a path where the parent directory does not exist. This may fail depending on the check mode.

```bash
pathchk /long/path/name/$(python -c "print('x'*300)")
```

Check if a very long filename exceeds filesystem limits.

```bash
for f in *.txt; do pathchk -p "$f" || echo "Non-portable: $f"; done
```

Check all `.txt` files in the current directory for POSIX portability.

## Practical Notes

- `pathchk` exits with status 0 if all checks pass, or non-zero if any path fails.
- The POSIX portable filename character set is: `A-Z`, `a-z`, `0-9`, `.`, `_`, `-`.
- `pathchk -p` rejects filenames with spaces, special characters, or over 14 characters, which reflects historical POSIX limits.
- Without `-p`, `pathchk` checks against the running system's filesystem limits (NAME_MAX and PATH_MAX).
- The command is part of GNU Coreutils. It is not commonly used interactively but appears in standards-compliant build and install scripts.
