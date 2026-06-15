---
name: touch
summary: Create empty files or update file timestamps.
category: Files
tags: file, create, timestamp, mtime, atime
popular: true
---

## Additional Notes

`touch` creates an empty file if it does not exist. If the file already exists, it updates the file's access and modification timestamps.

It is often used to quickly create placeholder files or refresh timestamps for build systems and scripts.

## Syntax

```bash
touch [options] file...
```

## Parameters

- `options`: Flags that change how `touch` behaves.
- `path`: File or directory path to inspect or change.
- `arguments`: Names, patterns, or values used by the command.

## Common Options

- `-a`: Change only access time.
- `-m`: Change only modification time.
- `-c`, `--no-create`: Do not create missing files.
- `-d TEXT`: Use a date/time string.
- `-t STAMP`: Use timestamp format `[[CC]YY]MMDDhhmm[.ss]`.
- `-r FILE`: Copy timestamps from another file.

## Examples

```bash
touch notes.txt
```

Create `notes.txt` if missing, or update its timestamps.

```bash
touch file1 file2 file3
```

Create or update multiple files.

```bash
touch -c existing.txt
```

Update timestamp only if the file already exists.

```bash
touch -d "2026-06-08 10:30" report.txt
```

Set a specific timestamp.

```bash
touch -r old.txt new.txt
```

Copy timestamps from `old.txt` to `new.txt`.

## Practical Notes

- `touch` does not edit file contents.
- Use `stat file` to inspect timestamps.
- Build tools sometimes use timestamps to decide what needs rebuilding.
- To create a file and write content, use an editor, redirection, or `printf`.
