---
name: chgrp
summary: Change group ownership of files and directories.
category: Permissions
tags: group, ownership, files, permissions
popular: false
---

## Additional Notes

`chgrp` changes the group owner of files and directories. It is similar to the group part of `chown`, but focused only on groups.

Group ownership is useful when multiple users or services need controlled shared access.

## Syntax

```bash
chgrp [options] GROUP file...
```

## Parameters

- `options`: Flags that change how `chgrp` behaves.
- `user`: User account affected by the command.
- `group`: Group account affected by the command.
- `file`: File or directory whose ownership, mode, or access policy is being changed.

## Common Options

- `-R`, `--recursive`: Change group recursively.
- `-v`, `--verbose`: Show processed files.
- `-c`, `--changes`: Show only files that changed.
- `--reference=FILE`: Copy group ownership from another file.
- `-h`: Change symbolic links themselves when supported.

## Examples

```bash
sudo chgrp developers project.txt
```

Change a file's group to `developers`.

```bash
sudo chgrp -R www-data /var/www/site
```

Recursively set group ownership for a website directory.

```bash
chgrp --reference=old.conf new.conf
```

Copy group ownership from another file.

```bash
ls -l file.txt
```

Check group ownership.

## Practical Notes

- Use `chown owner:group file` when changing owner and group together.
- Use `chmod g+rw file` when the group also needs write permission.
- Recursive group changes should start from a narrow, confirmed path.
- You need permission to change group ownership.
