---
name: lsattr
summary: List file attributes on Linux ext2/ext3/ext4 filesystems.
category: Files
tags: filesystem, attributes, ext4, immutable, permissions
popular: false
---

## Additional Notes

`lsattr` lists the file attributes on Linux ext2, ext3, and ext4 filesystems. These attributes are distinct from file permissions and control low-level filesystem behavior such as immutability, append-only mode, compression, and no-modification-of-access-time updates.

Attributes are stored in the inode and managed with `chattr`. They provide an additional security layer: for example, making a file immutable (`i` attribute) prevents even root from modifying, deleting, or renaming it until the attribute is removed.

## Syntax

```bash
lsattr [options] [file...]
```

## Parameters

- `file`: One or more files or directories to inspect. Defaults to files in the current directory.

## Common Options

- `-R`, `--recursive`: List attributes recursively through directories.
- `-a`, `--all`: List all files, including hidden files (those starting with `.`).
- `-d`, `--directory`: List directory attributes instead of their contents.
- `-l`, `--long`: Show attribute names in long format instead of single letters.
- `-v`, `--version`: Show version information.

## Attribute Letters

- `i`: Immutable. File cannot be modified, deleted, renamed, or linked.
- `a`: Append-only. File can only be opened in append mode.
- `A`: No atime updates. Access timestamp is not updated when the file is read.
- `c`: Compressed. File is automatically compressed on disk (if supported).
- `d`: No dump. File is skipped by the `dump` backup utility.
- `D`: Synchronous directory updates. Directory changes are written immediately.
- `e`: Extent format. File uses extents for block mapping (default on ext4).
- `j`: Data journaling. File data is written to the journal before the main filesystem.
- `s`: Secure deletion. File blocks are zeroed when deleted.
- `S`: Synchronous updates. File changes are written immediately (like `sync`).
- `t`: No tail-merging. File does not have partial block fragments merged.
- `T`: Top-level directory hint. Used by Orlov block allocator.
- `u`: Undeletable. File content is saved for possible undeletion.

## Examples

```bash
lsattr
```

List attributes of all files in the current directory.

```bash
lsattr -a
```

List attributes including hidden files.

```bash
lsattr -R /etc
```

Recursively list attributes of `/etc`.

```bash
lsattr -l important.txt
```

Show attributes in long descriptive format.

```bash
lsattr -d /var/log
```

Show the attributes of the `/var/log` directory itself.

```bash
lsattr /etc/shadow
```

Check if the shadow password file has special attributes.

## Practical Notes

- The `i` (immutable) and `a` (append-only) attributes can only be set or removed by root (or a process with `CAP_LINUX_IMMUTABLE`).
- Removing the immutable attribute requires `chattr -i file`, which also needs root privileges.
- Not all attributes are supported by all filesystems. Most are specific to ext2/ext3/ext4.
- To see which attributes are supported on your filesystem, check the `chattr` man page.

