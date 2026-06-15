---
name: apropos
summary: Search manual page names and descriptions.
category: Help
tags: help, manual, search, man
popular: false
---

## Additional Notes

`apropos` searches manual page names and short descriptions. It is useful when you know the task but not the command name.

It searches the same manual-page database used by `man -k` on many systems.

## Syntax

```bash
apropos [options] keyword...
```

## Parameters

- `keyword`: Word or regular expression to search for in manual page names and descriptions.
- `options`: Matching and section filters.

## Common Options

- `-e`: Match each keyword exactly.
- `-a`: Require all keywords to match.
- `-s SECTION`: Search only a manual section.
- `-r`: Treat keywords as regular expressions.
- `-w`: Use wildcard matching.

## Examples

```bash
apropos password
```

Find manual pages related to passwords.

```bash
apropos -a copy file
```

Find entries matching both words.

```bash
apropos -s 1 network
```

Search user-command manual pages for network-related entries.

```bash
man -k ssh
```

Equivalent style of search on many systems.

## Practical Notes

- If results are empty, the manual database may need to be updated with `mandb`.
- Use `whatis COMMAND` when you already know the command name.
- Manual section 1 is user commands, 5 is file formats, and 8 is administration commands.
