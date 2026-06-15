---
name: find
summary: Search for files and directories by name, type, time, size, and more.
category: Files
tags: files, directories, search, delete, permissions, time
popular: true
---

## Additional Notes

`find` walks through directory trees and matches files using rules. It can search by name, type, size, owner, permissions, modification time, and many other properties.

Unlike `ls`, which mostly shows what is in one place, `find` is built for serious searching and batch actions. It can also run commands on each result, so it is powerful and should be used carefully.

## Syntax

```bash
find [path...] [tests] [actions]
```

## Parameters

- `path`: Where to start searching. Use `.` for the current directory.
- `tests`: Conditions such as name, type, size, or time.
- `actions`: What to do with matches. If no action is given, `find` prints matching paths.

## Common Tests

- `-name "PATTERN"`: Match filename using shell-style patterns.
- `-iname "PATTERN"`: Match filename without case sensitivity.
- `-type f`: Match regular files.
- `-type d`: Match directories.
- `-type l`: Match symbolic links.
- `-size +100M`: Match files larger than 100 MB.
- `-size -1M`: Match files smaller than 1 MB.
- `-mtime -1`: Modified less than one day ago.
- `-mtime +30`: Modified more than 30 days ago.
- `-user NAME`: Match files owned by a user.
- `-group NAME`: Match files owned by a group.
- `-perm MODE`: Match permissions.
- `-empty`: Match empty files or empty directories.

## Common Actions

- `-print`: Print matching paths. This is the default action.
- `-delete`: Delete matching files or directories.
- `-exec COMMAND {} \;`: Run a command once per match.
- `-exec COMMAND {} +`: Run a command with many matches at once when possible.
- `-ls`: Print detailed information for each match.

## Examples

```bash
find . -name "*.log"
```

Find log files below the current directory.

```bash
find /var/log -type f -mtime -1
```

Find files in `/var/log` modified during the last day.

```bash
find . -type d -name "node_modules"
```

Find directories named `node_modules`.

```bash
find . -type f -size +100M
```

Find files larger than 100 MB.

```bash
find . -type f -empty
```

Find empty files.

```bash
find . -type f -name "*.tmp" -print
```

Preview temporary files before deleting anything.

```bash
find . -type f -name "*.tmp" -delete
```

Delete matching temporary files after checking the result.

```bash
find . -type f -name "*.sh" -exec chmod +x {} \;
```

Add executable permission to every shell script found.

```bash
find . -type f -name "*.conf" -exec grep -n "listen" {} +
```

Search all matching config files with `grep`.

## Practical Notes

- Always preview destructive matches before using `-delete` or `-exec rm`.
- Put patterns in quotes, such as `"*.log"`, so the shell does not expand them too early.
- `-exec ... {} \;` runs once per file. `-exec ... {} +` groups files and is usually faster.
- Use `-type f` or `-type d` to avoid acting on the wrong kind of path.
- Prefer `find` over parsing `ls` output in scripts.
