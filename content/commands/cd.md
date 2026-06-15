---
name: cd
summary: Change the current shell directory.
category: Shell
tags: directory, navigation, shell, path, builtin
popular: true
---

## Additional Notes

`cd` changes the current directory of your shell. It is usually a shell builtin, not a separate program, because the current directory belongs to the running shell process.

Learning `cd`, `pwd`, and `ls` together is the foundation of moving through Linux.

## Syntax

```bash
cd [directory]
```

## Parameters

- `directory`: Target directory to move into.
- No directory: Move to your home directory.

## Common Forms

- `cd /path`: Move to an absolute path.
- `cd relative/path`: Move relative to the current directory.
- `cd`: Move to your home directory.
- `cd ~`: Move to your home directory.
- `cd ..`: Move to the parent directory.
- `cd ../..`: Move up two directories.
- `cd -`: Switch to the previous directory.
- `cd .`: Stay in the current directory.

## Examples

```bash
cd /var/log
```

Move to `/var/log`.

```bash
cd ~/projects
```

Move to the `projects` directory inside your home.

```bash
cd ..
```

Move to the parent directory.

```bash
cd -
```

Return to the previous directory.

```bash
pwd
```

Check where you are after moving.

## Practical Notes

- Absolute paths start with `/`.
- Relative paths start from your current directory.
- `~` means your home directory.
- Use quotes for directories with spaces: `cd "My Folder"`.
- If `cd` says permission denied, you may not have execute permission on that directory.
