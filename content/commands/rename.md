---
name: rename
summary: Rename multiple files using a Perl expression.
category: Files
tags: rename, batch, files, regex, perl
popular: true
---

## Additional Notes

`rename` renames multiple files according to a Perl regular expression. It applies a substitution expression to filenames, making it powerful for batch renaming operations that would be cumbersome with `mv`.

There are two common versions of `rename`: the Perl version (prevalent on Debian/Ubuntu) and the `util-linux` version (prevalent on RHEL/CentOS/Fedora). The Perl version uses a Perl expression for the rename operation and is more flexible. The `util-linux` version supports simple substitution patterns. This page describes the Perl version.

## Syntax

```bash
rename [options] 's/pattern/replacement/' [files...]
rename [options] 'y/search/replace/' [files...]
```

## Parameters

- `'s/pattern/replacement/'`: Substitute `pattern` with `replacement` in filenames.
- `'y/search/replace/'`: Transliterate characters (like `tr///` in Perl).
- `files`: One or more files to rename. Supports glob patterns.

## Common Options

- `-n`, `--no-act`: Dry run. Show what would be renamed without making changes.
- `-v`, `--verbose`: Show renamed files.
- `-f`, `--force`: Force overwrite of existing files.
- `-e`: Explicitly specify the expression (useful for complex expressions).
- `-0`: Read filenames from stdin separated by null bytes (for `find -print0`).

## Examples

```bash
rename 's/\.txt$/.md/' *.txt
```

Rename all `.txt` files to `.md`.

```bash
rename 'y/A-Z/a-z/' *
```

Convert all filenames in the current directory to lowercase.

```bash
rename 's/ /_/g' *.pdf
```

Replace spaces with underscores in PDF filenames.

```bash
rename -n 's/photo/img/' *.jpg
```

Dry run: show what would happen without actually renaming.

```bash
rename -v 's/old/new/' file*.txt
```

Rename with verbose output showing changes.

```bash
rename 's/^/backup_/' *.conf
```

Prepend `backup_` to all `.conf` filenames.

```bash
find . -name "*.jpeg" -exec rename 's/\.jpeg$/.jpg/' {} \;
```

Rename `.jpeg` extensions to `.jpg` recursively using `find`.

```bash
rename 's/(\d{4})-(\d{2})-(\d{2})/$3.$2.$1/' *.txt
```

Reorder date patterns from YYYY-MM-DD to DD.MM.YYYY in filenames.

```bash
rename 's/\.[^.]*$//' * 2>/dev/null; mv * .bak 2>/dev/null
```

Remove all file extensions (note: use with extreme caution).

## Practical Notes

- Always use `-n` (dry run) first to verify the rename operation before applying changes.
- On Debian/Ubuntu, `rename` is the Perl version. On RHEL/CentOS/Fedora, `prename` or `rename` may be the `util-linux` version. Install the Perl version with `sudo apt install rename` or `sudo yum install prename`.
- The Perl version supports full regular expressions with backreferences (`$1`, `$2`, etc.).
- The transliteration form (`y///`) is useful for character replacements, like converting uppercase to lowercase.
- For complex multi-file renames, consider using a shell loop with `mv` for safer operation.
- To handle filenames with special characters or newlines, use `find ... -print0 | xargs -0 rename`.
