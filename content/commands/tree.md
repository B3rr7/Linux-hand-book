---
name: tree
summary: Display directories as an indented tree.
category: Files
tags: directory, files, list, tree, recursive, depth
popular: true
---

## Additional Notes

`tree` recursively lists directory contents in an indented tree format. It is useful for visualizing project structures, exploring nested directories, and documenting folder layouts.

By default, `tree` prints all directories and files starting from the current directory, with indentation lines showing the hierarchy. The final report shows the total number of files and directories listed.

## Syntax

```bash
tree [options] [directory...]
```

## Parameters

- `directory`: Path to one or more directories to display. Defaults to the current directory if omitted.

## Listing Options

- `-a`: Include hidden files and directories (those starting with `.`). Never shows `.` or `..`.
- `-d`: List directories only, omit files.
- `-L N`: Limit display depth to `N` levels.
- `-f`: Print the full path prefix for each file.
- `-l`: Follow symbolic links to directories.
- `-x`: Stay on the current filesystem only (do not cross mount points).
- `-R`: Recursively cross down directories, generating `00Tree.html` at each level.
- `-o FILE`: Send output to a file.

## File Information Options

- `-p`: Print file type and permissions (like `ls -l`).
- `-u`: Print username or UID.
- `-g`: Print group name or GID.
- `-s`: Print file size in bytes.
- `-h`: Print file sizes in human-readable format (K, M, G, T, P, E).
- `--si`: Like `-h` but use SI units (powers of 1000).
- `--du`: Report directory sizes accumulated from all contents. Implies `-s`. Also prints a total in the final report (like `du -c`).
- `-D`: Print last modification date (or status change time if `-c` is also used).
- `--timefmt FORMAT`: Format the date using `strftime(3)` syntax. Implies `-D`.
- `-F`: Append type indicators like `ls -F` (`/` for directories, `*` for executables, `@` for symlinks, `=` for sockets, `|` for FIFOs).
- `--inodes`: Print inode numbers.
- `--device`: Print device numbers.
- `--acl`: Print permissions with `+` appended if an ACL is present (Linux only). Implies `-p`.
- `--selinux`: Print SELinux context labels (Linux only).
- `-Q`: Quote file names in double quotes.
- `-q`: Replace non-printable characters with `?`.
- `-N`: Print non-printable characters as-is.

## Sorting Options

- *(no flag)*: Sort alphabetically by name (default).
- `-t`: Sort by last modification time.
- `-v`: Sort by version number.
- `-c`: Sort by last status change time. Also changes `-D` to show status change instead of modification time.
- `-U`: Do not sort. List files in directory order.
- `-r`: Reverse sort order.
- `--dirsfirst`: List directories before files.
- `--filesfirst`: List files before directories.
- `--sort TYPE`: Sort by `mtime`, `ctime`, `size`, `version`, or `none`. Default is alphabetical by name.

## Pattern Matching Options

- `-P PATTERN`: List only files matching the wildcard pattern. Supports `*`, `**`, `?`, `[...]`, `[^...]`, and `|` for alternatives. A trailing `/` matches only directories.
- `-I PATTERN`: Exclude files matching the pattern.
- `--ignore-case`: Make `-P` and `-I` case-insensitive.
- `--matchdirs`: Apply `-P` pattern to directory names too.
- `--gitignore`: Use `.gitignore` files for filtering.
- `--prune`: Remove empty directories from output. Useful with `-P` or `-I`.
- `--filelimit N`: Do not descend directories with more than `N` entries.

## Output Control Options

- `--noreport`: Suppress the final file/directory count report.
- `-i`: Remove indentation lines. Useful with `-f`. Also minimizes whitespace with `-J` or `-X`.
- `-C`: Force color output even when piping.
- `-n`: Disable color output.
- `-A`: Enable ANSI line graphics.
- `-S`: Use CP437 line graphics for console fonts.
- `--charset CHARSET`: Set character set for line drawing and HTML.
- `-X`: Output as XML.
- `-J`: Output as JSON.
- `-H baseHREF`: Output as HTML with hyperlinks.
- `-T TITLE`: Set the HTML page title.
- `--nolinks`: Disable hyperlinks in HTML output.
- `--help`: Show full usage information.
- `--version`: Show the program version.

## Examples

```bash
tree
```
Display the directory tree starting from the current directory.

```bash
tree -L 2
```
Show two levels of nesting only.

```bash
tree -a
```
Include hidden files and directories.

```bash
tree -d /etc
```
Show only the directory structure under `/etc`.

```bash
tree -L 1 -d
```
List top-level subdirectories only.

```bash
tree -h -p /var/log
```
Show permissions and human-readable sizes.

```bash
tree -P "*.sh" --prune
```
List only shell script files and prune empty directories.

```bash
tree -I "node_modules|.git|__pycache__"
```
Exclude common development directories.

```bash
tree -o project-tree.txt
```
Save the tree to a file.

```bash
tree -J
```
Output the tree as JSON.

```bash
tree -C | less -R
```
View colorized tree output in a pager.

```bash
tree --du -h
```
Show accumulated disk usage per directory.

```bash
tree -t -r
```
Sort by modification time, newest last.

## Reading Output

Example output:

```bash
.
├── src
│   ├── main.c
│   ├── utils.c
│   └── utils.h
├── Makefile
└── README.md

2 directories, 4 files
```

The drawing characters indicate:

- `├──`: Intermediate entry in a directory.
- `└──`: Last entry in a directory.
- `│`: Vertical line connecting deeper levels.
- The final line reports the total count of directories and files.

## Practical Notes

- Use `tree -L 1 -d` for a quick overview of top-level subdirectories.
- Pipe to `less -R` when output is long, to preserve colors and scrolling.
- Use `-P` and `-I` with `--prune` to focus on specific file types.
- `tree` does not follow symlinks by default. Add `-l` to follow them, but watch for circular links.
- The `--du` option can be slow on large trees because it must read every file.
- Use `-o FILE` to save output for documentation or sharing.
- Without `-C`, color is usually disabled when piping. Use `-C` to force it.
