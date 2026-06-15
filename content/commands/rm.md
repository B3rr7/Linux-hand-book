---
name: rm
summary: Remove files and directories.
category: Files
tags: files, delete, remove, directories, dangerous
popular: true
---

## Additional Notes

`rm` removes files. With recursive options, it can remove directories and everything inside them.

This command is powerful and dangerous because normal `rm` deletion does not move files to a desktop trash folder. In many cases, removed files are difficult or impossible to recover.

## Syntax

```bash
rm [options] file...
```

## Parameters

- `file`: File, link, or directory path to remove.

## Common Options

- `-i`, `--interactive`: Ask before every removal.
- `-I`: Ask once before removing many files or recursive targets.
- `-f`, `--force`: Ignore missing files and never prompt.
- `-r`, `-R`, `--recursive`: Remove directories and their contents.
- `-d`, `--dir`: Remove empty directories.
- `-v`, `--verbose`: Show what is removed.

## Examples

```bash
rm old.txt
```

Remove one file.

```bash
rm -i important.txt
```

Ask before removing.

```bash
rm -v *.tmp
```

Remove temporary files and show each deletion.

```bash
rm -r old-project
```

Remove a directory and everything inside it.

```bash
rm -I *.log
```

Ask once before removing many matching files.

```bash
find . -name "*.tmp" -print
find . -name "*.tmp" -delete
```

Safer workflow: preview with `find`, then delete.

## Practical Notes

- Always check your current directory with `pwd` before broad deletion.
- Use `ls` or `find ... -print` before deleting wildcard matches.
- Be very careful with `rm -rf`; it removes recursively and ignores prompts.
- Quote paths that contain spaces.
- To remove empty directories only, use `rmdir` or `rm -d`.
- For safer desktop-style deletion, use a trash tool if installed.
