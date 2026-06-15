---
name: slocate
summary: Securely locate files on the filesystem.
category: Files
tags: locate, search, files, database, security
popular: false
---

## Additional Notes

`slocate` (secure locate) is a security-enhanced version of the `locate` command. It indexes the filesystem into a database (typically `/var/lib/slocate/slocate.db` or `/var/lib/mlocate/mlocate.db`) and searches it quickly for filenames matching a pattern. The "secure" aspect means it respects file permissions: users only see files they have read access to.

On most modern distributions, `slocate` has been replaced by `mlocate` (merging locate) or `plocate`, which provide similar functionality with better performance. The `locate` command is often a symlink to one of these implementations. The database is typically updated daily by a cron job or systemd timer.

## Syntax

```bash
slocate [options] pattern
```

## Parameters

- `pattern`: The filename pattern to search for. May include glob characters (`*`, `?`).

## Common Options

- `-i`, `--ignore-case`: Perform case-insensitive matching.
- `-r`, `--regex`: Interpret the pattern as a regular expression.
- `-c`, `--count`: Show only the count of matching files, not the filenames.
- `-l`, `--limit N`: Limit output to `N` matches.
- `-q`, `--quiet`: Suppress error messages about unreadable databases.
- `-u`, `--update`: Update the slocate database (run as root).
- `-U directory`: Update the database for a specific directory.
- `-e`, `--existing`: Only print entries that correspond to existing files.
- `-d database`: Use a specific database file instead of the default.
- `-A`, `--all`: Match pattern against the entire pathname, not just the filename.

## Examples

```bash
slocate myfile.txt
```

Find all files named `myfile.txt` in the database.

```bash
slocate -i readme
```

Find all files matching `readme` (case-insensitive).

```bash
slocate -c *.conf
```

Count the number of `.conf` files in the database.

```bash
slocate -l 10 log
```

Show only the first 10 matches for `log`.

## Practical Notes

- The database must be current for accurate results. Run `updatedb` as root to refresh it.
- On most systems, `slocate` is replaced by `mlocate` or `plocate`, and the command is `locate`.
- Files created after the last database update will not appear in results.
- The database is typically updated daily via `updatedb` (cron or systemd timer).
- Permission filtering means two users may see different results for the same search.
- Use `find` for real-time searching when the database is out of date.
