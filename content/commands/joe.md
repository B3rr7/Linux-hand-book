---
name: joe
summary: Full-featured terminal text editor with WordStar-like keybindings.
category: Text
tags: editor, text, terminal, wordstar, programming
popular: false
---

## Additional Notes

`joe` (Joe's Own Editor) is a full-featured terminal-based text editor with keybindings inspired by WordStar and Turbo C. It provides syntax highlighting, multiple windows, search and replace, macro recording, and shell integration.

The editor is designed to be intuitive for users familiar with the WordStar key layout. It supports editing multiple files in separate buffers, configurable key bindings, and automatic indentation for programming languages. Despite its small size compared to Emacs, it includes many features expected in a modern text editor.

## Syntax

```bash
joe [options] [file...]
```

## Parameters

- `file`: One or more files to open for editing.

## Common Options

- `-asis`: Treat characters as-is without conversion.
- `-autoindent`: Enable automatic indentation.
- `-backpath path`: Set the backup file directory.
- `-beep`: Enable beeping on errors.
- `-columns n`: Set the number of screen columns.
- `-ccomment`: Enable C-style comment formatting.
- `-crlf`: Use CR-LF line endings.
- `-linums`: Show line numbers.
- `-lmargin n`: Set the left margin.
- `-marking`: Enable block marking.
- `-mid`: Scroll to keep the cursor in the middle of the screen.
- `-nobackups`: Do not create backup files.
- `-noijk`: Disable `I`, `J`, `K` cursor key emulation.
- `-nonotice`: Suppress the copyright notice.
- `-nosta`: Do not show the status line.
- `-noxon`: Disable XON/XOFF flow control.
- `-orphan`: Treat orphaned files specially.
- `-overwrite`: Enable overwrite mode by default.
- `-path path`: Set the search path for configuration files.
- `-rmargin n`: Set the right margin.
- `-syntax name`: Force a syntax highlighting mode.
- `-tab n`: Set the tab width in spaces.
- `-wordwrap`: Enable word wrap.
- `+n`: Open the file at line number `n`.

## Examples

```bash
joe document.txt
```

Open a file for editing.

```bash
joe +50 script.py
```

Open a Python file and jump to line 50.

```bash
joe -syntax c -autoindent -linums main.c
```

Open a C file with syntax highlighting, auto-indent, and line numbers.

```bash
joe -nobackups -wordwrap readme.txt
```

Edit a text file without creating backups and with word wrap enabled.

## Practical Notes

- Key combinations use Ctrl+letter sequences, similar to WordStar. For example: `^K X` saves and exits, `^K H` toggles help, `^K B` and `^K K` mark blocks.
- Press `^K H` to toggle the help screen, which shows available keybindings.
- The configuration directory is typically `~/.joe/` or `/etc/joe/`.
- Joerc (global), jstarrc, jpicorc, and rjoerc are configuration files for different emulation modes.
- Editor emulations include: `joe` (WordStar), `jpico` (Pico-like), `jstar` (WordStar with shell), and `rjoe` (restricted mode).
- Syntax highlighting files are stored in `/usr/share/joe/syntax/`.
- The editor is licensed under the GNU GPL and has been available since the early 1990s.
