---
name: pico
summary: Simple text editor (usually symlinked to nano).
category: Text
tags: editor, text, terminal, console
popular: false
---

## Additional Notes

`pico` was the original editor included with the Pine email client from the University of Washington. On most modern Linux distributions, `pico` is a symbolic link to `nano`, a compatible clone that replaced the original Pine license with the GNU GPL.

`pico` (and `nano`) provide a simple, user-friendly text editor interface for the terminal. It provides on-screen command shortcuts, mouse support (if enabled), syntax highlighting, line numbers, search and replace, and spell checking. It is often recommended as a beginner-friendly alternative to `vi` or `emacs`.

## Syntax

```bash
pico [options] [file...]
```

## Parameters

- `file`: One or more files to edit. Opens an empty buffer if no file is given.

## Common Options

- `-B`, `--backup`: Save backups of modified files.
- `-c`, `--constantshow`: Show cursor position constantly.
- `-E`, `--tabstospaces`: Convert typed tabs to spaces.
- `-i`, `--autoindent`: Auto-indent new lines to match the previous line.
- `-k`, `--cutfromcursor`: Cut from cursor to end of line instead of the whole line.
- `-l`, `--line-numbers`: Show line numbers to the left of the text.
- `-m`, `--mouse`: Enable mouse support.
- `-r cols`, `--fill=cols`: Set the target width for line wrapping.
- `-s program`, `--speller=program`: Use a different spell-checking program.
- `-S`, `--smooth`: Use smooth scrolling.
- `-t`, `--tempfile`: Auto-save on exit without prompting.
- `-v`, `--view`: View-only mode (read-only).
- `-w`, `--nowrap`: Disable long-line wrapping.
- `-x`, `--nohelp`: Hide the help screen at the bottom.
- `-Y syntax`, `--syntax=syntax`: Use a specific syntax highlighting definition.

## Examples

```bash
pico
```

Open an empty buffer in the editor.

```bash
pico notes.txt
```

Open or create a file for editing.

```bash
pico -w /etc/fstab
```

Edit a configuration file without line wrapping.

```bash
pico -l script.py
```

Open a Python script with line numbers enabled.

```bash
pico -v /etc/passwd
```

View a file in read-only mode.

```bash
pico -m -x notes.txt
```

Open with mouse support but without the help lines.

## Practical Notes

- On modern systems, `pico` is almost always `nano`. If you specifically need the original Pine editor, install the `alpine` package.
- Keyboard shortcuts are shown at the bottom of the editor. `^` means the Ctrl key: `^O` is Ctrl+O (save), `^X` is Ctrl+X (exit).
- `^K` cuts a line, `^U` pastes it. `^W` opens the search prompt, and `^\` opens search-and-replace.
- Use `-w` when editing configuration files to prevent automatic line wrapping from corrupting long lines.
- For more advanced editing, consider `vim`, `emacs`, or `micro`.
