---
name: ag
summary: Search source code quickly with The Silver Searcher.
category: Text
tags: search, grep, code, silver searcher
popular: false
---

## Additional Notes

`ag`, The Silver Searcher, is a fast recursive search tool for code and text. It honors many ignore files and is usually faster than traditional recursive `grep` on large projects.

Use it when you need quick project-wide search from the terminal.

## Syntax

```bash
ag [options] pattern [path...]
```

## Parameters

- `pattern`: Text or regular expression to search for.
- `path`: File or directory to search.
- `options`: Matching, output, and file-selection controls.

## Common Options

- `-i`: Case-insensitive search.
- `-w`: Match whole words.
- `-l`: Show only matching filenames.
- `-L`: Show only files that do not match.
- `-Q`: Treat the pattern as a literal string.
- `--hidden`: Search hidden files.
- `--ignore PATTERN`: Ignore matching paths.

## Examples

```bash
ag "TODO"
```

Search the current project.

```bash
ag -i "login" ./src
```

Search case-insensitively in `src`.

```bash
ag -Q "user.name"
```

Search for a literal string containing regex punctuation.

```bash
ag -l "main"
```

Print only matching file names.

## Practical Notes

- `ag` is great for interactive code search, but `rg` is more common in many modern setups.
- Use `-Q` when searching for literal punctuation-heavy strings.
- Ignore rules can hide files you expected to search; try `--hidden` or review ignore files.
