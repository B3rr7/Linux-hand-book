---
name: vi
summary: The classic modal text editor.
category: Text
tags: editor, text, modal, ex, terminal
popular: true
---

## Additional Notes

`vi` (short for visual) is a modal text editor and the standard editor on virtually all Unix and Linux systems. It was originally written by Bill Joy in 1976 and is the direct ancestor of Vim (Vi IMproved). Most modern systems ship `vim` when `vi` is invoked, but the traditional `nvi` (new vi) or `elvis` variants are still available.

Vi uses a modal interface: different keystrokes have different meanings depending on the current mode. The modes are: Normal mode (for navigation and manipulation), Insert mode (for entering text), Command-line mode (for ex commands like `:wq`), and Visual mode (for text selection). This design allows efficient text editing without lifting hands from the home row.

## Syntax

```bash
vi [options] [file...]
```

## Parameters

- `file`: One or more files to edit. Multiple files can be navigated with `:n` (next) and `:prev` (previous).

## Common Options

- `-R`: Read-only mode (like `view`).
- `-r`: Recover a file from a swap file after a crash.
- `-c command`: Run an ex command after opening the file.
- `-s script`: Source a script file of ex commands.
- `-w N`: Set the window size to N lines.
- `+N`: Open the file at line N (e.g. `vi +50 file.txt`).
- `+/pattern`: Open at the first line matching pattern.

## Modes

- **Normal mode**: Default mode. Keys move the cursor, delete text, copy/paste, and enter other modes.
- **Insert mode**: Entered with `i`, `a`, `o`, `I`, `A`, `O`, etc. Text typed goes into the buffer. Press `Esc` to return to Normal mode.
- **Command-line mode**: Entered with `:`, `/`, or `?`. Used for ex commands, searches, and substitutions.
- **Visual mode**: Entered with `v` (character), `V` (line), or `Ctrl+v` (block). Select text for operations.

## Essential Normal Mode Commands

### Movement

- `h j k l`: Left, down, up, right (arrow keys also work).
- `w b`: Next/previous word.
- `0 ^ $`: Start of line, first non-whitespace, end of line.
- `gg G`: First line, last line.
- `Ngg` or `N G`: Go to line N.
- `Ctrl+f Ctrl+b`: Page down, page up.
- `Ctrl+d Ctrl+u`: Half page down, half page up.
- `%`: Jump to matching bracket.
- `{ }`: Previous/next paragraph.

### Editing

- `i`: Insert before cursor.
- `a`: Append after cursor.
- `I`: Insert at beginning of line.
- `A`: Append at end of line.
- `o`: Open a new line below.
- `O`: Open a new line above.
- `x`: Delete character under cursor.
- `dd`: Delete current line.
- `D`: Delete from cursor to end of line.
- `yy`: Yank (copy) current line.
- `p P`: Paste after/before cursor.
- `u`: Undo.
- `Ctrl+r`: Redo.
- `.`: Repeat last change.

### Search and Replace

- `/pattern`: Search forward.
- `?pattern`: Search backward.
- `n N`: Next/previous match.
- `:s/old/new/g`: Substitute on current line.
- `:%s/old/new/g`: Substitute in entire file.
- `:%s/old/new/gc`: Substitute with confirmation.

### File Operations

- `:w`: Write (save) the file.
- `:q`: Quit.
- `:wq` or `ZZ`: Save and quit.
- `:q!`: Quit without saving.
- `:e file`: Open another file.
- `:e!`: Reload the current file.
- `:n`: Edit the next file.
- `:prev`: Edit the previous file.

## Examples

```bash
vi file.txt
```

Open `file.txt` for editing.

```bash
vi +100 /etc/hosts
```

Open `/etc/hosts` at line 100.

```bash
vi -R /etc/passwd
```

Open `/etc/passwd` in read-only mode.

```bash
vi +/error app.log
```

Open `app.log` at the first occurrence of `error`.

```bash
vi -c "set number" -c "/TODO" file.py
```

Open `file.py` with line numbers and jump to the first `TODO`.

## Practical Notes

- When unsure which mode you are in, press `Esc` twice to return to Normal mode.
- Use `:help` in Vim to access the built-in tutorial and documentation.
- Start with `vimtutor` (or `vim -c Tutor`) for an interactive 30-minute tutorial.
- Many distributions ship `vim` as `vi`. Check `vi --version` or `readlink -f $(which vi)` to see what is installed.
- Set options temporarily with `:set option` (e.g. `:set number`, `:set ignorecase`).
- `:set paste` disables auto-indent for pasting text, `:set nopaste` re-enables it.
- Swap files (`.file.swp`) handle crash recovery. Use `vi -r` to recover.
- Learn touch-typing; it dramatically improves vi efficiency.
