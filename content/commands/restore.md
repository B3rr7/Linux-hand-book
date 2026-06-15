---
name: restore
summary: Restore files from a backup created with dump.
category: Files
tags: backup, restore, dump, filesystem, tape
popular: false
---

## Additional Notes

`restore` extracts files from backup archives created by the `dump` command. It reads dump-formatted backups (typically from tape or disk files) and restores files to their original locations or an alternate directory.

The `dump`/`restore` pair is an old but reliable backup system designed for ext filesystems. `dump` backs up filesystem data based on inodes, while `restore` extracts from these backups. `restore` supports both full and incremental restores, interactive file selection, and dry-run modes to preview what would be restored.

## Syntax

```bash
restore [options] [file...]
restore -i [options]
restore -r [options]
restore -t [options]
restore -x [options]
```

## Parameters

- `file`: Files or directories to restore (with `-x`).
- `-i`: Interactive mode. Browse the backup and select files to restore.
- `-r`: Restore the entire backup recursively (used for full restore of a filesystem).
- `-t`: List the contents of the backup.
- `-x`: Extract specific files from the backup.

## Common Options

- `-f file`, `--file=file`: Read backup from a file or device (e.g., `/dev/nst0` for tape).
- `-v`, `--verbose`: Verbose output showing files as they are restored.
- `-y`: Do not ask for confirmation; assume yes to all prompts.
- `-m`: Restore by inode number instead of filename.
- `-d`: Enable debug output.
- `-T directory`: Restore files to a different directory (not the original location).
- `-h`: Restore the actual directory entry, not its contents.
- `-N`: Dry run. Show what would be restored without doing it.
- `-s N`: Skip to the Nth backup file on a multi-file tape.
- `-b blocksize`: Specify the block size in bytes (default 1024).
- `-D filesystem`: Specify the filesystem name for restoring.
- `-C`: Compare files on the backup with files on disk, reporting differences.
- `-R`: Request the next tape volume when restoring multi-volume backups.

## Examples

```bash
restore -tf /dev/nst0
```

List the contents of a backup on tape.

```bash
restore -xf /backup/root.dump
```

Extract all files from a dump file in the current directory.

```bash
restore -xvf /backup/home.dump home/alice/file.txt
```

Extract a specific file with verbose output.

```bash
restore -i -f /backup/data.dump
```

Interactive restore: browse the backup and select files to restore.

```bash
restore -rf /dev/nst0
```

Restore an entire filesystem from a tape backup.

```bash
restore -T /tmp/restore -xf /backup/etc.dump
```

Restore files to an alternate directory `/tmp/restore` instead of the original location.

```bash
restore -C -f /backup/var.dump /var
```

Compare files in the backup with current files on `/var`.

```bash
restore -N -xf /backup.dump
```

Dry run: show what files would be restored without extracting them.

## Practical Notes

- `restore` handles incremental backups created by `dump`. Apply the full backup first, then each incremental in order.
- Before restoring, ensure the target filesystem has enough free space. Use `-T` to restore to an alternate location for safety.
- For modern backups, consider `tar`, `rsync`, `duplicity`, or `borg` instead of `dump`/`restore`.
- `restore` must typically be run as root to preserve file ownership and permissions.
- The interactive mode (`-i`) provides an `ls`-like interface for navigating the backup contents.
- `restore` operates on raw dump format files. It does not support compressed dumps directly; decompress first with `zcat`.
- The `-C` option is useful for auditing which files have changed since the backup was made.
- On modern Linux, `dump`/`restore` may need to be installed separately: `sudo apt install dump`.
