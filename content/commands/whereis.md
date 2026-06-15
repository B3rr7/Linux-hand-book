---
name: whereis
summary: Locate binary, source, and manual files.
category: Shell
tags: path, binary, manual, source
popular: false
---

## Additional Notes

`whereis` locates command-related files such as binaries, source files, and manual pages. It searches a set of standard system locations rather than doing a broad filesystem search.

Use `whereis` when you want a quick overview of where a command's executable and documentation live. Use `which` or `command -v` when you only care what executable your shell will run.

## Syntax

```bash
whereis [options] name...
```

## Parameters

- `name`: Command or program name to locate.
- `options`: Filters that choose binary, manual, source, or search-path behavior.

## Common Options

- `-b`: Search only for binaries.
- `-m`: Search only for manual pages.
- `-s`: Search only for source files.
- `-u`: Show names with unusual results, such as missing one expected file type.
- `-B DIRS -f NAME`: Search for binaries only in specific directories.
- `-M DIRS -f NAME`: Search for manual pages only in specific directories.
- `-S DIRS -f NAME`: Search for source files only in specific directories.

## Examples

```bash
whereis ls
```

Show binary and manual locations for `ls`.

```bash
whereis -b bash
```

Show only binary paths.

```bash
whereis -m ssh
```

Show manual page locations.

```bash
whereis -u '*'
```

Look for unusual entries according to `whereis` rules.

## Practical Notes

- `whereis` is not a full filesystem search. Use `find` or `locate` for that.
- `whereis` may show files your shell will not run because it is not limited to `PATH`.
- Use `which` or `command -v` to answer, what command runs if I type this?
