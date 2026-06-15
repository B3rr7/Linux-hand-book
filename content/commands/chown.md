---
name: chown
summary: Change file owner and group.
category: Permissions
tags: permissions, owner, group, files, admin
popular: false
---

## Additional Notes

`chown` changes who owns a file or directory. Ownership matters because Linux permissions are checked against the owner, group, and others.

Most ownership changes require administrator privileges. A normal user usually cannot give files to another user.

## Syntax

```bash
chown [options] OWNER[:GROUP] file...
chown [options] :GROUP file...
```

## Parameters

- `OWNER`: New owner username or numeric UID.
- `GROUP`: New group name or numeric GID.
- `file`: File or directory to change.
- `OWNER:GROUP`: Change both owner and group.
- `:GROUP`: Change only the group.

## Common Options

- `-R`, `--recursive`: Change ownership recursively.
- `-v`, `--verbose`: Print processed files.
- `-c`, `--changes`: Print only changed files.
- `--reference=FILE`: Copy owner and group from another file.
- `-h`, `--no-dereference`: Change a symbolic link itself instead of the link target when supported.

## Examples

```bash
sudo chown rani notes.txt
```

Make `rani` the owner of `notes.txt`.

```bash
sudo chown rani:developers app.log
```

Change both owner and group.

```bash
sudo chown :www-data site.conf
```

Change only the group.

```bash
sudo chown -R www-data:www-data /var/www/site
```

Recursively assign a web directory to the web-server user and group.

```bash
sudo chown --reference=old.conf new.conf
```

Copy owner and group from `old.conf`.

```bash
ls -l file.txt
```

Check ownership after changing it.

## Practical Notes

- Use `ls -l` to inspect current owner and group.
- Avoid recursive ownership changes from `/` or a broad path.
- Web servers often need ownership or group access to specific directories, not the whole system.
- `chown` changes ownership; `chmod` changes permissions.
- Use groups when several users or services need controlled shared access.
