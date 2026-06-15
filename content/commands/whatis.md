---
name: whatis
summary: Display one-line manual page descriptions.
category: System
tags: man, help, documentation, search, description
popular: true
---

## Additional Notes

`whatis` searches the manual page name and short description fields (the `NAME` section) and displays matching entries. Each result shows the command name, the manual section number, and a brief description. It uses the same database as `apropos` (the `mandb` index) but only matches the exact command name, not partial or keyword matches.

The database is created and updated by `mandb` (or `makewhatis` on some distributions). If the database is missing or outdated, `whatis` may fail to find entries even when the man pages exist. Running `sudo mandb` updates the database.

## Syntax

```bash
whatis [options] name...
```

## Parameters

- `name`: Command, system call, library function, or other man page name to look up.

## Common Options

- `-r`, `--regex`: Interpret each name as a regular expression.
- `-w`, `--wildcard`: Interpret each name as a wildcard pattern (similar to shell globs).
- `-s section`, `--section section`: Limit the search to a specific manual section.
- `-l`, `--long`: Do not truncate the description to the terminal width.
- `-M path`, `--manpath path`: Specify an alternative man page path.
- `-p`, `--sections`: List available sections and exit.

## Examples

```bash
whatis ls
```

Show the description for `ls`: "list directory contents".

```bash
whatis -r '^pri.*$'
```

Search for commands starting with "pri" using regex.

```bash
whatis -w 'zip*'
```

Search for all commands matching the wildcard pattern `zip*`.

```bash
whatis -s 3 printf
```

Look up the C library function `printf` in section 3.

```bash
whatis -M /usr/share/man/man-pages/ socket
```

Search a custom man page path.

## Practical Notes

- `whatis` is equivalent to `man -f name`.
- For broader keyword searches, use `apropos` (or `man -k`).
- If `whatis` returns "nothing appropriate," ensure the mandb database is up to date with `sudo mandb`.
- The output format is: `command (section) - description text`.
- Pipe `whatis` output through `column -t` or `sort` for easier reading.
