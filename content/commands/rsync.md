---
name: rsync
summary: Efficiently copy and synchronize files locally or over SSH.
category: Network
tags: sync, copy, backup, ssh, files
popular: true
---

## Additional Notes

`rsync` efficiently copies and synchronizes files locally or to remote systems over SSH. It transfers only the differences between source and destination, making it faster than `scp` for repeated transfers or large directory trees.

It is commonly used for backups, mirroring, deployment, and large file transfers.

## Syntax

```bash
rsync [options] source destination
rsync [options] source/ user@host:/remote/path/
rsync [options] user@host:/remote/path/ local/path/
```

## Parameters

- `source`: Source file or directory to copy.
- `destination`: Target file or directory.
- `user`: Remote username for SSH transfers.
- `host`: Remote hostname or IP address.

## Common Options

- `-a`, `--archive`: Archive mode. Preserves permissions, timestamps, owner, group, and copies recursively.
- `-v`, `--verbose`: Show detailed transfer information.
- `-z`, `--compress`: Compress data during transfer.
- `-r`, `--recursive`: Copy directories recursively.
- `-e`, `--rsh`: Specify remote shell (e.g., `-e ssh`).
- `--delete`: Delete destination files that are missing from the source.
- `--dry-run`, `-n`: Preview changes without transferring.
- `--progress`: Show transfer progress.
- `--exclude PATTERN`: Exclude files matching a pattern.
- `-u`, `--update`: Skip files that are newer on the destination.
- `-P`: Equivalent to `--partial --progress`.

## Examples

```bash
rsync -av ./site/ /var/www/site/
```
Synchronize a local directory.

```bash
rsync -avz ./backup/ user@example.com:/backups/
```
Sync to a remote host with compression.

```bash
rsync -av --dry-run --delete ./site/ /var/www/site/
```
Preview a sync that removes extra files.

```bash
rsync -av --exclude='*.tmp' ./src/ ./dest/
```
Copy excluding temp files.

```bash
rsync -avz -e "ssh -p 2222" ./ user@example.com:/dest/
```
Use a custom SSH port.

## Practical Notes

- A trailing slash on the source changes what is copied. `src/` copies the contents, while `src` copies the directory itself.
- Use `--dry-run` first to verify what will change.
- `rsync` over SSH uses the same authentication as `ssh`.
