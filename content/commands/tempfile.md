---
name: tempfile
summary: Create a temporary file safely.
category: Files
tags: temp, temporary, file, create, safe
popular: false
---

## Additional Notes

`tempfile` creates a temporary file with a unique name in a secure way. The generated filename is printed to standard output so it can be captured by a script. It avoids race conditions and symlink attacks that can occur when using naive methods like `mktemp` with user-generated names.

The file is created in `$TMPDIR` if set, or in `/tmp` by default. On Debian-based systems it is provided by the `debianutils` package. Many modern scripts prefer `mktemp` which is more portable across Linux distributions.

## Syntax

```bash
tempfile [options]
```

## Parameters

No positional parameters. The temporary file path is returned on stdout.

## Common Options

- `-d`, `--directory`: Create a temporary directory instead of a file.
- `-p string`, `--prefix string`: Use `string` as the prefix for the filename (defaults to `tmp`).
- `-s string`, `--suffix string`: Use `string` as the suffix for the filename.
- `-m mode`, `--mode mode`: Set the file permission mode (e.g. `0600`).
- `--help`: Display help and exit.

## Examples

```bash
tempfile
```

Create a temporary file. Output: `/tmp/tmp.XXXXXX`

```bash
TMPFILE=$(tempfile)
echo "Log data" > "$TMPFILE"
rm "$TMPFILE"
```

Create a temp file, write to it, then remove it.

```bash
tempfile -p backup- -s .txt
```

Create a temp file with a custom prefix and suffix.

## Practical Notes

- `tempfile` is less portable than `mktemp`. Use `mktemp` for scripts that should work across BSD, macOS, and other Unix-like systems.
- Always clean up temporary files in scripts, ideally with a `trap` handler.
- Use `trap 'rm -f "$TMPFILE"' EXIT` to ensure cleanup on script exit.
