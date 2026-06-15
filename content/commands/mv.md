---
name: mv
summary: Move or rename files and directories.
category: Files
tags: files, move, rename, directories, overwrite
popular: true
---

## Additional Notes

`mv` moves files and directories from one place to another. It is also the normal command for renaming files.

Moving within the same filesystem is usually fast because Linux only changes directory entries. Moving across filesystems may copy the data and then remove the original.

## Syntax

```bash
mv [options] SOURCE DEST
mv [options] SOURCE... DIRECTORY
```

## Parameters

- `SOURCE`: File or directory to move or rename.
- `DEST`: New name or destination directory.
- Multiple sources: The last argument must be a directory.

## Common Options

- `-i`, `--interactive`: Ask before overwriting.
- `-v`, `--verbose`: Show what is moved.
- `-n`, `--no-clobber`: Do not overwrite existing files.
- `-f`, `--force`: Overwrite without asking.
- `-u`, `--update`: Move only when source is newer or destination is missing.
- `-b`, `--backup`: Make a backup of overwritten files.

## Examples

```bash
mv old-name.txt new-name.txt
```

Rename a file.

```bash
mv report.pdf ~/Documents/
```

Move a file into another directory.

```bash
mv -iv *.log logs/
```

Move log files with confirmation before overwriting.

```bash
mv project archived-project
```

Rename or move a directory.

```bash
mv -n config.conf /etc/example/
```

Move without replacing an existing destination.

## Practical Notes

- `mv` can overwrite files. Use `-i` while learning or during sensitive work.
- Rename and move are the same command in Linux.
- If a destination directory exists, the source moves inside it.
- If the destination does not exist, the source is renamed to that path.
- Use `ls` before and after important moves to confirm paths.
