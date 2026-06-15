---
name: ncdu
summary: NCurses Disk Usage; interactive disk usage analyzer.
category: Files
tags: disk, usage, ncurses, analyze, storage, du
popular: false
---

## Additional Notes

`ncdu` (NCurses Disk Usage) is an interactive disk usage analyzer that shows a navigable, text-based interface of disk usage. It scans a directory tree and displays directories and files sorted by size, allowing you to quickly identify what is consuming the most space.

It is more convenient than repeatedly running `du -sh` because you can browse interactively, delete files from within the interface, and see a real-time breakdown of space usage. It is invaluable for cleaning up old log files, caches, virtual machines, and large media files.

## Syntax

```bash
ncdu [options] [directory]
```

## Parameters

- `directory`: The directory to scan. Defaults to the current directory.

## Common Options

- `-o file`: Export the scan results to a file for later analysis.
- `-f file`: Load a previously exported scan file instead of scanning.
- `-x`: Stay on the same filesystem (do not cross mount points).
- `-e`: Enable extended information (file modification time, permissions, etc.).
- `-q`: Quiet mode; reduce refresh rate for faster scanning on slow terminals.
- `-r`: Read-only mode; disable delete and shell spawning.
- `-s`: Show only directories (skip individual files).
- `--exclude pattern`: Exclude files matching a pattern.
- `--exclude-caches`: Exclude cache directories.
- `--color scheme`: Choose color scheme (`off`, `dark`, `dark-bg`).
- `--si`: Use SI units (1000) instead of binary (1024).

## Interactive Keys

- Arrow keys or `j`/`k`: Navigate the file list.
- `Enter`: Enter a directory.
- `g`: Jump to the top of the list.
- `n`: Sort by name.
- `s`: Sort by size.
- `d`: Delete the selected file or directory.
- `r`: Refresh/rescan the current directory.
- `i`: Show information about the selected item.
- `t`: Toggle between showing directories and files.
- `q`: Quit ncdu.

## Examples

```bash
ncdu
```

Scan the current directory and show disk usage interactively.

```bash
ncdu /var/log
```

Scan `/var/log` to see which log files are using the most space.

```bash
ncdu -x /
```

Scan the root filesystem but do not cross filesystem boundaries.

```bash
ncdu -o scan.txt /home
ncdu -f scan.txt
```

Export a scan to a file, then view it later without re-scanning.

```bash
ncdu --exclude "*.bak" --exclude ".cache" /home/user
```

Scan the home directory excluding backup and cache files.

## Practical Notes

- Press `d` to delete a file or directory from within ncdu. This is irreversible.
- Use `-x` when scanning `/` to avoid scanning mounted filesystems like `/proc`, `/sys`, or network mounts.
- Exporting a scan (`-o`) is useful for sharing disk usage data without sharing file contents.
- ncdu refreshes its display after each keypress, making it fast even on large directory trees.

