---
name: ls
summary: List files and directories.
category: Files
tags: files, directories, list, permissions, hidden files, inode, sort
popular: true
---

## Additional Notes

`ls` is short for list. It shows the contents of a directory or information about specific files. It is one of the first commands people use when exploring Linux because it answers a simple question: what is here?

By default, `ls` shows visible file and directory names in the current directory. With options, it can show hidden files, permissions, owners, groups, sizes, timestamps, inode numbers, file types, recursive directory contents, and sorted output.

Many terminals color the output. The colors usually come from the `LS_COLORS` environment variable and help you quickly notice directories, executables, links, archives, device files, and broken links.

## Syntax

```bash
ls [options] [file-or-directory...]
```

Common long-form syntax:

```bash
ls -lah /etc
ls --all --long --human-readable /var/log
ls --sort=size --reverse
ls --time=atime -lt
ls --color=auto
```

## Parameters

- `file-or-directory`: A path to list. If it is a directory, `ls` lists the directory contents. If it is a file, `ls` shows information about that file.
- No path: Lists the current working directory.
- Multiple paths: Lists each target. Directories are shown with headings when needed.

## Common Options

- `-l`: Use long format. Shows type, permissions, hard-link count, owner, group, size, timestamp, and name.
- `-a`, `--all`: Show all entries, including hidden names that start with `.`.
- `-A`, `--almost-all`: Show hidden entries, but skip `.` and `..`.
- `-h`, `--human-readable`: With `-l` or `-s`, show sizes like `4.0K`, `12M`, or `1.5G`.
- `-d`, `--directory`: Show information about the directory itself instead of listing its contents.
- `-R`, `--recursive`: List directories and their subdirectories recursively.
- `-1`: Show one entry per line.
- `-m`: Show names horizontally, separated by commas.
- `-F`, `--classify`: Add a type marker after names, such as `/` for directories and `*` for executables.
- `-p`: Add `/` after directory names, but do not mark executables.
- `-i`, `--inode`: Show the inode number before each name.
- `-n`, `--numeric-uid-gid`: In long format, show numeric UID and GID instead of owner and group names.
- `-o`: Long format without group information.
- `-G`, `--no-group`: In long format, hide the group column.
- `-s`, `--size`: Show allocated disk blocks for each file.

## Sorting Options

- `-t`, `--sort=time`: Sort by modification time, newest first.
- `-r`, `--reverse`: Reverse the sort order.
- `-S`, `--sort=size`: Sort by file size, largest first.
- `-X`, `--sort=extension`: Sort by file extension.
- `-U`, `--sort=none`: Do not sort. This can be faster in very large directories.
- `-f`: Do not sort and enable `-a`. It also disables some formatting features.

## Time Options

- `-c`, `--time=ctime`, `--time=status`: Use status-change time. This changes when file metadata changes, such as permissions, owner, links, or content.
- `-u`, `--time=atime`, `--time=access`, `--time=use`: Use last-access time.
- `--full-time`: Show the full timestamp instead of the shorter default format.

## Name Display Options

- `-q`, `--hide-control-chars`: Replace non-printing filename characters with `?`.
- `-b`, `--escape`: Show non-printing characters using backslash escapes.
- `-Q`, `--quote-name`: Put names in double quotes.
- `-N`, `--literal`: Print names without quoting.
- `-I pattern`: Ignore names matching a shell pattern unless they are given directly on the command line.
- `-B`, `--ignore-backups`: Hide backup files ending in `~`.
- `-L`, `--dereference`: For symbolic links, show information about the target instead of the link itself.

## Output Format Options

- `-C`, `--format=vertical`: Multi-column output sorted down columns. This is common when output goes to a terminal.
- `-x`, `--format=across`, `--format=horizontal`: Multi-column output sorted across rows.
- `--format=single-column`: One entry per line.
- `--format=long`, `--format=verbose`: Same idea as `-l`.
- `--format=commas`: Same idea as `-m`.
- `-w cols`, `--width cols`: Assume the terminal is `cols` characters wide.
- `-T cols`, `--tabsize cols`: Set tab width. Use `0` to avoid tabs.
- `--color=auto`: Use colors only when output goes to a terminal.
- `--color=always`: Always use colors, even when piping output.
- `--color=none`: Disable colors.

## Examples

```bash
ls
```

List visible files and directories in the current directory.

```bash
ls -a
```

Show hidden files too. Hidden names begin with a dot, such as `.bashrc` or `.ssh`.

```bash
ls -l
```

Show detailed information in long format.

```bash
ls -lh
```

Show long format with human-readable file sizes.

```bash
ls -lah
```

Common daily-use form: long format, hidden files included, readable sizes.

```bash
ls -ld /etc
```

Show information about `/etc` itself instead of listing files inside `/etc`.

```bash
ls -lt /var/log
```

List `/var/log` by modification time, newest first.

```bash
ls -ltr
```

List by modification time, oldest first. This is useful when you want the newest files near the bottom.

```bash
ls -S
```

Sort by size, largest first.

```bash
ls -1
```

Print one name per line. This is useful for scripts or simple copying.

```bash
ls -R
```

List a directory tree recursively. Use carefully in large directories because output can become very long.

```bash
ls -i file.txt
```

Show the inode number for `file.txt`.

```bash
ls -n
```

Show numeric user and group IDs. This helps when names cannot be resolved or when checking container/filesystem ownership.

```bash
ls -F
```

Add file-type markers: `/` for directories, `*` for executables, `@` for symbolic links, `|` for FIFOs, and `=` for sockets.

```bash
ls --color=auto
```

Use color classification when output is displayed in a terminal.

## Reading `ls -l`

Example long-format output:

```bash
-rw-r--r-- 1 rani rani 2048 Jun  8 12:30 notes.txt
drwxr-xr-x 2 rani rani 4096 Jun  8 12:31 scripts
lrwxrwxrwx 1 rani rani   11 Jun  8 12:32 latest -> notes.txt
```

Read the columns from left to right:

- File type and permissions: `-rw-r--r--`, `drwxr-xr-x`, or `lrwxrwxrwx`.
- Hard-link count: Usually `1` for normal files.
- Owner: The user that owns the file.
- Group: The group assigned to the file.
- Size: File size in bytes unless `-h` is used.
- Time: Usually the last modification time.
- Name: The file, directory, or link name.

The first permission character shows the file type:

- `-`: Regular file.
- `d`: Directory.
- `l`: Symbolic link.
- `c`: Character device.
- `b`: Block device.
- `p`: FIFO or named pipe.
- `s`: Socket.

Special permission letters can appear in execute positions:

- `s`: setuid or setgid bit is set and execute is also set.
- `S`: setuid or setgid bit is set but execute is not set.
- `t`: sticky bit is set and execute is also set.
- `T`: sticky bit is set but execute is not set.

## Color Meaning

Colors vary by distribution and terminal theme, but common meanings are:

- Blue: Directory.
- Green: Executable file.
- White or default color: Normal file.
- Red: Archive or compressed file.
- Cyan: Symbolic link.
- Flashing red or highlighted link: Broken symbolic link.
- Yellow: Device file.
- Yellow with dark background: FIFO or pipe file.

Use this command to inspect your color rules:

```bash
echo "$LS_COLORS"
```

## Practical Notes

- `ls` is for looking, not changing. It does not modify files.
- Use `pwd` before important actions so you know which directory you are listing.
- Use `ls -lah` when you want a complete human-readable view.
- Use `ls -ld directory` when you need directory permissions.
- Use `ls -lt` for logs and downloads because recent files usually matter most.
- Use `find` instead of `ls -R` when you need serious recursive searching.
- Avoid parsing `ls` output in scripts when filenames may contain spaces, newlines, or unusual characters. Prefer `find`, shell globs, or structured tools.
