---
name: chgrp
summary: Change group ownership of files and directories.
category: Permissions
tags: group, ownership, files, permissions, admin
popular: false
---

## Additional Notes

`chgrp` changes the group ownership of files and directories. Group ownership controls which group can read, write, or execute a file when the group permission bits apply.

Together with `chown` and `chmod`, it controls access. Only the file owner or root can usually change group ownership, and the user must belong to the target group (unless running as root).

## Syntax

```bash
chgrp [options] GROUP FILE...
```

## Parameters

- `options`: Flags that change how `chgrp` behaves.
- `GROUP`: The new group name or numeric GID.
- `FILE`: One or more files or directories to change.

## Common Options

- `-R`, `--recursive`: Change group ownership recursively.
- `-v`, `--verbose`: Print what changed.
- `-c`, `--changes`: Print only files that changed.
- `-h`, `--no-dereference`: Change the group of a symlink itself, not its target.
- `--reference=FILE`: Copy the group from another file.
- `--dereference`: Follow symlinks and change the target (default for non-links).

## Examples

```bash
chgrp staff report.txt
```

Set the group of `report.txt` to `staff`.

```bash
chgrp -R www-data /var/www
```

Recursively set group ownership of a web directory.

```bash
chgrp -c :developers config/
```

Change group and report only the files that actually changed.

```bash
chgrp --reference=known-good.conf new.conf
```

Copy the group setting from an existing file.

```bash
chgrp -h wheel link-to-app
```

Change the group of a symbolic link itself.

## Practical Notes

- The user must be a member of the target group, or run `chgrp` as root.
- Use `-R` carefully; it changes many files quickly.
- Combine with group permission bits via `chmod g+rw` to grant group access.
- Use `-h` when you mean to change a symlink, not what it points to.
