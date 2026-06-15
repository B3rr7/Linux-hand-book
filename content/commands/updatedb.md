---
name: updatedb
summary: Update the locate/mlocate database.
category: System
tags: locate, database, search, files, index
popular: false
---

## Additional Notes

`updatedb` builds or refreshes the database used by the `locate` command. It scans the filesystem (subject to configured exclusions) and indexes filenames so that `locate` can return results almost instantly. The database is typically stored at `/var/lib/mlocate/mlocate.db` and is updated daily via a systemd timer or cron job.

The command traverses the filesystem according to its configuration file `/etc/updatedb.conf`, which controls which filesystems to include or exclude, which directories to skip, and which bind mounts to follow. By default, it excludes pseudo-filesystems (`/proc`, `/sys`, `/dev`) and network filesystems. Changes to the configuration take effect on the next run.

## Syntax

```bash
updatedb [options]
```

## Parameters

- `options`: Flags that change how `updatedb` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-U PATH`, `--database-root PATH`: Only index files under `PATH` instead of the root filesystem.
- `-o FILE`, `--output FILE`: Write the database to `FILE` instead of the default location.
- `-e DIRECTORY`, `--exclude DIRECTORY`: Exclude the given directory from indexing (can be specified multiple times, colon-separated, or use `PRUNEPATHS` in the config).
- `-f FILESYSTEM`, `--add-prunefs FILESYSTEM`: Exclude the given filesystem type.
- `-l`, `--localpaths`: Limit the search to local filesystems (as defined by `LOCALPATHS` in config).
- `-n`, `--netpaths`: Also index network filesystem paths.
- `-v`, `--verbose`: Show progress during indexing.

## Examples

```bash
sudo updatedb
```

Update the locate database for the entire system.

```bash
updatedb -U /home -o /tmp/home.db
```

Index only `/home` and save the database to a custom location.

```bash
sudo updatedb -v
```

Update the database with verbose progress output.

## Practical Notes

- `updatedb` must typically be run as root to scan directories that ordinary users cannot read.
- Search with `locate` afterward: `locate filename`.
- Exclude noisy directories like build artifacts and caches by editing `/etc/updatedb.conf`.
- The database is usually updated daily; you can force a manual update with `sudo updatedb`.
- For real-time file searching, use `find` or `fdfind`. `locate`/`updatedb` is best for quick filename lookups on a snapshot of the filesystem.
