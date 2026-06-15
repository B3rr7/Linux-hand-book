---
name: unlink
summary: Remove a file using the unlink system call.
category: Files
tags: file, remove, delete, unlink, directory entry
popular: false
---

## Additional Notes

`unlink` removes a file by calling the `unlink()` system call directly. It deletes the directory entry for the specified file and decrements its link count. If the link count reaches zero and no process has the file open, the file is removed from disk.

Unlike `rm`, `unlink` accepts only a single file argument and provides no options for recursive deletion, prompting, or interactive behavior. It is a minimal command that closely reflects the underlying system call. If the file does not exist or if the user lacks write permission on the parent directory, `unlink` fails with an error.

## Syntax

```bash
unlink filename
```

## Parameters

- `filename`: Path to the file to remove.

## Examples

```bash
unlink file.txt
```

Remove `file.txt`.

```bash
unlink /tmp/socket.lock
```

Remove a lock file or socket.

## Practical Notes

- `unlink` cannot remove directories. Use `rmdir` or `rm -r` for that.
- `unlink` does not prompt or confirm deletions.
- The command is defined by POSIX and available on all Unix-like systems.
- For most purposes, `rm` is preferred because it offers more flexibility and safety options. Use `unlink` when you need strict POSIX compliance or when a script must use the direct system call semantics.
