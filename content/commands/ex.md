---
name: ex
summary: Line-oriented text editor, the base of vi.
category: Text
tags: editor, line, vi, text, ex
popular: false
---

## Additional Notes

`ex` is the line-editor mode of `vi`. When you run `vi`, you are actually running `ex`'s visual mode. The `ex` command provides the same line-oriented editing commands that are available in `vi`'s command mode when preceded by `:`. It supports the full `ex` command set: search and replace, file operations, buffer management, and scripted editing.

`ex` can be used interactively as a line editor or driven by scripts for batch text processing. It is standardized by POSIX and is the direct successor of `ed`. The `ex` command language includes `vi`'s command-line commands (`:s`, `:g`, `:w`, `:q`, etc.) without the visual interface.

## Syntax

```bash
ex [options] [file...]
```

## Parameters

- `file`: File to edit.

## Common Options

- `-R`: Open files in read-only mode (like `view`).
- `-r file`: Recover the specified file after a crash.
- `-s`: Enter batch mode with suppressed prompts (for scripting).
- `-c command`, `--cmd command`: Run a command after opening the file.
- `-t tag`: Edit the file containing the specified tag.
- `-w number`: Set the window size for the `^Z` command.
- `-E`: Display text with tabs expanded.
- `-v`: Start in visual mode (equivalent to running `vi`).

## Examples

```bash
ex file.txt
```

Open `file.txt` in `ex` line-editor mode.

```bash
ex -s file.txt <<< $'%s/foo/bar/g\nwq'
```

Replace all occurrences of `foo` with `bar` and save.

```bash
ex -c '%s/old/new/g' -c 'wq' file.txt
```

Replace text from the command line and quit.

```bash
ex -R file.txt
```

Open a file in read-only mode.

## Practical Notes

- All `vi` colon commands (`:s`, `:g`, `:w`, `:q`, etc.) are `ex` commands.
- In batch mode (`-s`), `ex` suppresses prompts and error messages, making it suitable for scripted editing.
- `ex` is often used as the editor for `crontab -e` and other tools that require a POSIX-standard editor.
- To switch to visual mode from within `ex`, type `vi` or `visual`.
- The `ex` command set is documented in the `ex` man page (section 1) and the POSIX specification.
