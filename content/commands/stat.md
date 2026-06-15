---
name: stat
summary: Show detailed file or filesystem metadata.
category: Files
tags: file, metadata, permissions, timestamp
popular: false
---

## Additional Notes

`stat` prints detailed metadata about files, directories, links, and filesystems. It shows information that `ls -l` summarizes, including inode number, size, block count, permissions, owner IDs, device IDs, and timestamps.

Use `stat` when you need exact metadata for debugging permissions, scripts, backups, sync tools, or filesystem behavior.

## Syntax

```bash
stat [options] file...
stat -f [options] filesystem-path
```

## Parameters

- `file`: File, directory, or link to inspect.
- `filesystem-path`: Path whose containing filesystem should be inspected with `-f`.
- `options`: Output formatting and symlink handling flags.

## Common Options

- `-c FORMAT`: Print a custom format.
- `--printf FORMAT`: Print a custom format without automatic trailing newline.
- `-f`: Show filesystem status instead of file status.
- `-L`: Follow symbolic links.
- `-t`: Terse output.

## Useful Format Codes

- `%n`: File name.
- `%s`: Size in bytes.
- `%U`: Owner user name.
- `%G`: Owner group name.
- `%u`: Numeric user ID.
- `%g`: Numeric group ID.
- `%a`: Permissions in octal form.
- `%A`: Permissions in human-readable form.
- `%i`: Inode number.
- `%y`: Modification time.

## Examples

```bash
stat app.log
```

Show full metadata for a file.

```bash
stat -c "%n %s bytes" app.log
```

Print a compact custom line.

```bash
stat -c "%a %U:%G %n" /var/www/html
```

Show octal permissions and owner information.

```bash
stat -L symlink
```

Show metadata for the symlink target.

```bash
stat -f /
```

Show filesystem metadata for the root filesystem.

## Practical Notes

- Use `stat` in scripts when parsing `ls` output would be fragile.
- Remember that access time may be affected by mount options such as `noatime` or `relatime`.
- Use `-L` only when you want target metadata instead of symlink metadata.
