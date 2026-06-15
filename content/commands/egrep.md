---
name: egrep
summary: Search text using extended regular expressions (deprecated alias for grep -E).
category: Text
tags: search, text, regex, pattern, deprecated
popular: false
---

## Additional Notes

`egrep` is the deprecated alias for `grep -E`. It runs `grep` with extended regular expression support, which adds `+`, `?`, `|`, and `()` as metacharacters without needing backslash escaping. The name stands for "extended grep."

Modern scripts and documentation should use `grep -E` instead of `egrep`. The `egrep` name is provided for backward compatibility but may be removed in future versions. The behavior is identical to calling `grep -E` with the same options and arguments. See `grep` for a full description of options and behavior.

## Syntax

```bash
egrep [options] PATTERN [file...]
```

## Parameters

- `PATTERN`: Text or extended regular expression to search for.
- `file`: One or more files to search. If omitted, reads standard input.

## Common Options

- `-i`, `--ignore-case`: Match without case sensitivity.
- `-v`, `--invert-match`: Show lines that do not match.
- `-c`, `--count`: Count matching lines.
- `-l`, `--files-with-matches`: List only filenames with matches.
- `-n`, `--line-number`: Show line numbers.
- `-r`, `--recursive`: Search directories recursively.
- `-o`: Print only the matching part of each line.
- `-x`, `--line-regexp`: Match entire lines only.

## Examples

```bash
egrep "foo|bar" file.txt
```

Search for lines containing `foo` or `bar` using alternation.

```bash
egrep "^[A-Z]+:" config.txt
```

Match lines starting with one or more uppercase letters followed by a colon.

```bash
egrep -i "error|fail" log.txt
```

Search for `error` or `fail` case-insensitively.

## Practical Notes

- `egrep` is equivalent to `grep -E`. Use `grep -E` in new scripts for portability.
- Extended regex adds `+` (one or more), `?` (zero or one), `|` (alternation), and `()` (grouping) without backslashes.
- For basic regex behavior, use `grep` (or `grep -G`).
- The `egrep` binary may not be installed on minimal or newer systems; `grep -E` is always available.
