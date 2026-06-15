---
name: nano
summary: Simple, terminal-based text editor.
category: Text
tags: editor, text, terminal, nano, pico
popular: true
---

## Additional Notes

`nano` is a simple, easy-to-use terminal text editor. It is designed as a free replacement for the Pico editor (from the Pine email client) and is included by default in most Linux distributions. It provides on-screen shortcut hints, making it accessible for beginners who find `vim` or `emacs` intimidating.

Nano is ideal for quick configuration file edits, writing short notes, and general-purpose terminal editing. It supports syntax highlighting for many file types, search and replace, undo/redo, line numbers, and mouse support. While it lacks the power of `vim` or `emacs` for heavy development, its simplicity and zero-learning-curve startup make it the go-to editor for many system administration tasks.

## Syntax

```bash
nano [options] [file...]
```

## Parameters

- `file`: One or more files to open for editing.

## Common Options

- `-c`, `--constantshow`: Show the cursor position constantly.
- `-i`, `--autoindent`: Auto-indent new lines to match the previous line.
- `-l`, `--linenumbers`: Show line numbers on the left side.
- `-m`, `--mouse`: Enable mouse support.
- `-S`, `--softwrap`: Soft-wrap long lines instead of truncating.
- `-T n`, `--tabsize=n`: Set tab width to `n` spaces.
- `-u`, `--undo`: Enable undo functionality.
- `-v`, `--view`: View-only mode (read-only).
- `-w`, `--nowrap`: Disable line wrapping.
- `-x`, `--nohelp`: Hide the help lines at the bottom.
- `-Y name`, `--syntax=name`: Specify the syntax highlighting to use.
- `-E`, `--tabstospaces`: Convert typed tabs to spaces.
- `-F`, `--multibuffer`: Read a file into a new buffer.
- `-K`, `--rebinddelete`: Fix keypad Delete key behavior.
- `-b`, `--breaklonglines`: Automatically break long lines.
- `-d`, `--rebindkeypad`: Fix numeric keypad key behavior.

## Keyboard Shortcuts

### File Operations
- `Ctrl+O`: Save (WriteOut) the file.
- `Ctrl+S`: Save file (modern nano).
- `Ctrl+X`: Exit nano. Prompts to save if unsaved changes exist.
- `Ctrl+R`: Insert a file into the current buffer.
- `Ctrl+W`: Search for text.

### Navigation
- `Ctrl+A`: Go to beginning of line.
- `Ctrl+E`: Go to end of line.
- `Ctrl+Y`: Page up.
- `Ctrl+V`: Page down.
- `Alt+\`: Go to the first line.
- `Alt+/`: Go to the last line.
- `Alt+G`: Go to a specific line number.

### Editing
- `Ctrl+K`: Cut the current line (or selected text).
- `Ctrl+U`: Paste (uncut) the cut text.
- `Alt+6`: Copy the current line (or selected text).
- `Ctrl+J`: Justify the current paragraph.
- `Ctrl+D`: Delete character under cursor.
- `Ctrl+Shift+Minus`: Undo (or `Alt+U`).
- `Alt+E`: Redo (or `Alt+Shift+U`).
- `Ctrl+T`: Run a spell checker (if available).

### Selection
- `Alt+A`: Start/end selecting text.
- `Ctrl+6`: Same as `Alt+A`.
- `Shift+Arrow`: Select with arrow keys (modern nano).

### Search and Replace
- `Ctrl+W`: Start a forward search.
- `Alt+W`: Repeat the last search.
- `Ctrl+\`: Search and replace.
- `Alt+R`: Search and replace (modern nano).

### Info and Help
- `Ctrl+G`: Show help screen.
- `Ctrl+C`: Show cursor position.
- `Ctrl+T`: Invoke the spell checker.
- `Alt+D`: Show the word count.

## Examples

```bash
nano notes.txt
```

Open `notes.txt` for editing. Creates the file if it does not exist.

```bash
nano -l -c notes.txt
```

Open with line numbers and cursor position display.

```bash
nano -w /etc/fstab
```

Edit `/etc/fstab` with line wrapping disabled (recommended for config files).

```bash
nano -m /etc/ssh/sshd_config
```

Edit with mouse support enabled.

```bash
nano -v /etc/passwd
```

Open `/etc/passwd` in read-only view mode.

```bash
nano -E -T 4 script.sh
```

Edit a shell script with tabs converted to spaces and tab width of 4.

## Practical Notes

- The two-line shortcut bar at the bottom shows `^` for Ctrl and `M-` for Alt/Meta.
- `nano -w` disables line wrapping, which is essential when editing configuration files that should not be reformatted.
- Syntax highlighting configuration is stored in `/etc/nano/` or `~/.nanorc`.
- Use `nano -l -c` as a default by adding `set linenumbers` and `set constantshow` to `~/.nanorc`.
- Nano saves backup files as `filename~` when `set backup` is configured in `~/.nanorc`.
- For development, consider `vim` or `emacs`; for quick edits, `nano` is the fastest option.

