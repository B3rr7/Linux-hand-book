---
name: cp
summary: Copy files and directories.
category: Files
tags: files, copy, directories, backup, preserve
popular: true
---

## Additional Notes

`cp` copies files and directories. It creates a new copy at the destination while leaving the original source in place.

It is simple, but mistakes can overwrite files. Use interactive or verbose mode when learning or when working with important data.

## Syntax

```bash
cp [options] SOURCE DEST
cp [options] SOURCE... DIRECTORY
```

## Parameters

- `SOURCE`: File or directory to copy.
- `DEST`: New file path or target directory.
- Multiple sources: The last argument must be a directory.

## Common Options

- `-r`, `-R`, `--recursive`: Copy directories recursively.
- `-i`, `--interactive`: Ask before overwriting.
- `-v`, `--verbose`: Show what is copied.
- `-a`, `--archive`: Preserve permissions, ownership, timestamps, links, and copy recursively.
- `-p`, `--preserve`: Preserve mode, ownership, and timestamps when possible.
- `-u`, `--update`: Copy only when the source is newer or destination is missing.
- `-n`, `--no-clobber`: Do not overwrite existing files.
- `-f`, `--force`: Remove destination if needed before copying.
- `-L`: Follow symbolic links and copy the target.
- `-P`: Do not follow symbolic links; copy the link itself.

## Examples

```bash
cp notes.txt backup.txt
```

Copy one file to a new file.

```bash
cp notes.txt ~/Documents/
```

Copy a file into another directory.

```bash
cp -iv config.conf config.conf.bak
```

Copy with overwrite prompt and visible output.

```bash
cp -r site public-site
```

Copy a directory recursively.

```bash
cp -a /etc/nginx ./nginx-backup
```

Archive-copy a directory while preserving metadata.

```bash
cp -u *.jpg ~/Pictures/
```

Copy only newer or missing JPG files.

## Practical Notes

- Use `cp -i` when you are unsure about overwriting.
- Use `cp -a` for backups because it preserves more metadata.
- To copy a directory, you usually need `-r` or `-a`.
- Be careful with destination paths. `cp file dir/` and `cp file dir` behave differently if `dir` does not exist.
- For remote copies, use `scp`, `rsync`, or `sftp`.
