---
name: chmod
summary: Change file and directory permissions.
category: Files
tags: permissions, executable, files, security, mode
popular: false
---

## Additional Notes

`chmod` changes the permission mode of files and directories. Permissions decide who can read, write, or execute a file.

Linux permissions are usually shown as three groups: user, group, and others. For example, `rwxr-xr-x` means the owner can read/write/execute, the group can read/execute, and others can read/execute.

## Syntax

```bash
chmod [options] MODE file...
```

## Parameters

- `options`: Flags that change how `chmod` behaves.
- `path`: File or directory path to inspect or change.
- `arguments`: Names, patterns, or values used by the command.

## Permission Meaning

- `r`: Read permission.
- `w`: Write permission.
- `x`: Execute permission. For directories, this means enter/traverse the directory.
- `u`: User/owner.
- `g`: Group.
- `o`: Others.
- `a`: All users.

## Symbolic Modes

- `u+x`: Add execute permission for the owner.
- `g-w`: Remove write permission from the group.
- `o-rwx`: Remove all permissions from others.
- `a+r`: Add read permission for everyone.
- `u=rw,g=r,o=`: Set exact permissions symbolically.
- `X`: Add execute only to directories and files that already have execute permission.

## Numeric Modes

Each permission has a number:

- `4`: Read.
- `2`: Write.
- `1`: Execute.

Common modes:

- `600`: Owner can read/write. Nobody else has access.
- `644`: Owner can read/write. Group and others can read.
- `700`: Owner has full access. Nobody else has access.
- `755`: Owner has full access. Others can read and execute.
- `777`: Everyone has full access. Avoid this unless you fully understand the risk.

## Common Options

- `-R`, `--recursive`: Change permissions recursively.
- `-v`, `--verbose`: Print what changed.
- `-c`, `--changes`: Print only files that changed.
- `--reference=FILE`: Copy permissions from another file.

## Examples

```bash
chmod +x script.sh
```

Make a script executable.

```bash
chmod 644 config.ini
```

Set a normal readable config-file mode.

```bash
chmod 600 ~/.ssh/id_rsa
```

Protect a private SSH key.

```bash
chmod 755 deploy.sh
```

Allow everyone to run the script while only the owner can edit it.

```bash
chmod -R u+rwX,g+rX,o-rwx private-data
```

Recursively give the owner access, allow group read/traverse, and remove access for others.

```bash
chmod --reference=known-good.conf new.conf
```

Copy permission mode from another file.

## Practical Notes

- Be careful with `chmod -R`; it can change thousands of files quickly.
- Do not use `chmod 777` as a quick fix. It often creates security problems.
- Directories need execute permission to be entered.
- Files need execute permission to run as programs or scripts.
- For SSH keys, strict permissions matter. Private keys are commonly `600`.
