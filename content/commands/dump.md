---
name: dump
summary: Back up ext2/ext3/ext4 filesystems to tape or file.
category: Disk
tags: backup, filesystem, ext, tape, dump, restore
popular: false
---

## Additional Notes

`dump` backs up an entire ext2, ext3, or ext4 filesystem to a backup medium such as tape or a file. It operates at the filesystem level, reading inodes directly and preserving permissions, ownership, timestamps, extended attributes, and sparse file holes. It supports full and incremental backup levels (0-9), where level 0 is a full backup and higher levels back up files changed since the last lower-level dump.

The companion `restore` command reads the dump archive and restores files. Dump archives can be written to tape drives, regular files, or across a network using `rdump`/`rrestore`. The dump format is filesystem-specific and is only compatible with ext-family filesystems.

## Syntax

```bash
dump [options] [dump-file] filesystem
```

## Parameters

- `dump-file`: The output file or device (e.g., `/dev/st0` for a tape drive, or `backup.dump` for a file). If not specified, the default output device is used.
- `filesystem`: The device or mount point of the filesystem to back up.

## Common Options

- `-level`: Set the dump level (0-9). Level 0 is a full backup.
- `-f file`: Write to the specified file or device instead of the default.
- `-u`: Update the dump record in `/etc/dumpdates` so incremental dumps know what was backed up.
- `-W`: Show which filesystems need to be dumped based on `/etc/dumpdates` and `/etc/fstab`.
- `-w`: Same as `-W` but only list filesystems that are mounted.
- `-a`: Auto-size the dump output to fit the medium. Disables prompting for media changes.
- `-B records`: Specify the tape block size in 1 KB increments.
- `-b blocksize`: Set the number of kilobytes per dump record (default is 10).
- `-d density`: Set tape density in bits per inch.
- `-s feet`: Set tape length in feet.
- `-T date`: Use the specified date instead of the current date for deciding what to dump.
- `-z level`: Compress the dump output using gzip-compression level.
- `-j level`: Compress the dump output using bzip2-compression level.

## Examples

```bash
sudo dump -0uf /backup/root.dump /
```

Perform a level 0 (full) backup of the root filesystem to a file, updating `/etc/dumpdates`.

```bash
sudo dump -1uf /dev/st0 /home
```

Perform a level 1 incremental backup of `/home` to a tape device.

```bash
sudo dump -W
```

Show which filesystems need backup based on the last dump dates.

```bash
sudo dump -0u -f - / | gzip > backup.dump.gz
```

Write a full dump to stdout and compress it with gzip.

## Practical Notes

- `dump` only supports ext2, ext3, and ext4 filesystems. For other filesystem types, use filesystem-specific tools or `tar`/`rsync`.
- Always unmount or remount a filesystem read-only before dumping if data consistency is critical.
- Use `restore -t` to list the contents of a dump archive without restoring.
- The `/etc/dumpdates` file tracks when each filesystem was last dumped at each level. Remove or edit it to force a full dump.
- For remote backups, `rdump` writes to a remote tape device via `rmt`.
- Dump archives from different machines or architectures may not be compatible.
