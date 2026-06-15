---
name: ln
summary: Create hard links and symbolic links.
category: Files
tags: link, symlink, hard link, files, path
popular: true
---

## Additional Notes

`ln` creates links. A link is another name or pointer for a file or path.

There are two main types: hard links and symbolic links. Symbolic links are more common for everyday use because they can point to directories and paths across filesystems.

## Syntax

```bash
ln [options] TARGET LINK_NAME
ln [options] TARGET... DIRECTORY
```

## Parameters

- `options`: Flags that change how `ln` behaves.
- `path`: File or directory path to inspect or change.
- `arguments`: Names, patterns, or values used by the command.

## Link Types

- Hard link: Another directory entry pointing to the same inode as a file.
- Symbolic link: A small special file that points to another path.

## Common Options

- `-s`, `--symbolic`: Create a symbolic link.
- `-f`, `--force`: Remove existing destination files.
- `-n`: Treat a symlink to a directory as a normal file when replacing.
- `-v`, `--verbose`: Show created links.
- `-T`: Treat destination as a normal file, not a directory.

## Examples

```bash
ln original.txt hardlink.txt
```

Create a hard link.

```bash
ln -s /var/log/nginx nginx-logs
```

Create a symbolic link to a directory.

```bash
ln -sv ~/projects/app app-link
```

Create a symlink and show the action.

```bash
ls -l app-link
```

Inspect a symbolic link.

```bash
readlink app-link
```

Print where a symlink points.

## Practical Notes

- Use `ln -s` for most practical linking.
- Hard links usually cannot link directories and cannot cross filesystems.
- A symlink can become broken if its target is moved or deleted.
- Relative symlinks are often more portable inside project folders.
- Use `ls -li` to compare inode numbers for hard links.
