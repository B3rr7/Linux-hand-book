---
name: ack
summary: Search source code with an ack-style text searcher.
category: Text
tags: search, grep, code, text
popular: false
---

## Additional Notes

`ack` is a grep-like search tool designed for source code. It skips many irrelevant directories and files by default, such as version-control metadata, and offers convenient file-type filtering.

Use `ack` when searching codebases interactively. For maximum speed in large projects, tools such as `rg` or `ag` are also common.

## Syntax

```bash
ack [options] pattern [path...]
```

## Parameters

- `pattern`: Text or regular expression to search for.
- `path`: File or directory to search. Defaults to the current directory.
- `options`: Matching, output, and file-type filters.

## Common Options

- `-i`: Case-insensitive search.
- `-w`: Match whole words.
- `-l`: Show only filenames with matches.
- `-L`: Show only filenames without matches.
- `-n`: Do not recurse into subdirectories.
- `--type=TYPE`: Search only files of a known type.
- `--ignore-dir=DIR`: Ignore a directory.

## Examples

```bash
ack "TODO"
```

Search recursively from the current directory.

```bash
ack -i "error" ./src
```

Search case-insensitively under `src`.

```bash
ack --type=js "fetch"
```

Search only JavaScript files when the file type is recognized.

```bash
ack -l "main"
```

Print only filenames that contain matches.

## Practical Notes

- `ack` is optimized for human code search, not POSIX portability.
- Use quotes around patterns that contain shell metacharacters.
- If `ack` is not installed, try `grep -R`, `rg`, or `ag`.
