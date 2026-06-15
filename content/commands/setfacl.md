---
name: setfacl
summary: Set file access control lists (ACLs).
category: Files
tags: files, permissions, acl, access, security
popular: false
---

## Additional Notes

`setfacl` sets ACLs (Access Control Lists) on files and directories. ACLs provide finer-grained permissions beyond the traditional Unix owner/group/other model, allowing specific users and groups to be granted or denied access individually.

Each ACL entry specifies a user or group and the permissions (read, write, execute) to grant or deny. Directories can have default ACLs that are inherited by newly created files and subdirectories. The `getfacl` command displays current ACLs.

## Syntax

```bash
setfacl [-bkndRLP] {-m|-M|-x|-X ...} file...
```

## Parameters

- `file`: The file or directory to modify.

## Common Options

- `-m`, `--modify acl`: Modify the ACL by adding or changing entries.
- `-x`, `--remove acl`: Remove specific ACL entries.
- `-b`, `--remove-all`: Remove all extended ACL entries (keep base owner/group/other).
- `-k`, `--remove-default`: Remove the default ACL (for directories).
- `--set acl`: Replace the entire ACL with the specified entries.
- `-d`, `--default`: Apply operations to the default ACL (for directories).
- `-R`, `--recursive`: Apply ACLs recursively to directories and their contents.
- `-L`: Follow symbolic links (used with `-R`).
- `-P`: Do not follow symbolic links (used with `-R`).
- `-n`: Do not recalculate the mask entry.

## ACL Entry Format

```
u[ser]::perms        # Owner permissions
u[ser]:username:perms # Specific user permissions
g[roup]::perms       # Group permissions
g[roup]:groupname:perms # Specific group permissions
o[ther]::perms       # Others permissions
m[ask]::perms        # Mask (maximum permissions for named users/groups)
d[efault]:u[ser]:username:perms # Default user ACL (directory only)
```

Permissions: `r`, `w`, `x`, or combinations like `rwx`, `r-x`, `rw-`.

## Examples

```bash
setfacl -m u:alice:rwx file.txt
```

Grant user `alice` read, write, and execute permissions on `file.txt`.

```bash
setfacl -m g:developers:rw- project/
```

Grant the `developers` group read and write access to `project/`.

```bash
setfacl -x u:bob file.txt
```

Remove any ACL entry for user `bob` on `file.txt`.

```bash
setfacl -b file.txt
```

Remove all extended ACL entries from `file.txt`.

```bash
setfacl -R -m u:alice:rx /shared/files
```

Recursively grant user `alice` read and execute on `/shared/files` and all contents.

```bash
setfacl -d -m g:developers:rwx shared/
```

Set a default ACL on `shared/` so new files get `developers` group read/write/execute.

## Practical Notes

- The filesystem must be mounted with the `acl` option for ACLs to work (default on most modern distributions).
- Use `getfacl` to view current ACLs on a file.
- The `mask` entry limits the maximum permissions for named users and groups.
- When `ls -l` shows a `+` after the permissions, the file has extended ACLs.
- Recursive operations with `-R` can be slow on large directory trees.
- Default ACLs on directories are inherited but do not override explicit permissions on existing files.
