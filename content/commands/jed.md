---
name: jed
summary: Lightweight text editor with syntax highlighting and S-Lang scripting.
category: Text
tags: editor, text, programming, slang, terminal
popular: false
---

## Additional Notes

`jed` is a text editor designed for programming and editing configuration files. It features syntax highlighting for many languages, multiple modes (emulation of Emacs, WordStar, and others), and extensibility through the S-Lang scripting language, which was developed alongside it.

The editor supports multiple windows and buffers, a built-in file manager, shell integration, abbreviation expansion, and configurable keyboard macros. It is lighter than Emacs but offers many of the same editing conveniences for terminal-based work.

## Syntax

```bash
jed [options] [file...]
```

## Parameters

- `file`: One or more files to open for editing.

## Common Options

- `-2`: Split the window into two sections.
- `-batch`: Run in batch mode (execute commands and exit).
- `-f hook`: Execute the named function after loading files.
- `-g line`: Go to the specified line number.
- `-i file`: Load and execute an initialization file.
- `-n`: Do not load user configuration files.
- `-s string`: Search for the specified string upon startup.
- `-version`: Show version information.
- `--help`: Display help.

## Modes (via `-f` or within the editor)

- `emacs`: Emacs emulation mode.
- `wordstar`: WordStar emulation mode.
- `ide`: Integrated Development Environment mode.
- `c-mode`: C language editing mode.
- `org-mode`: Outline mode for notes and documentation.
- `html-mode`: HTML editing mode.

## Examples

```bash
jed file.c
```

Edit a C source file with syntax highlighting.

```bash
jed -2 file1.txt file2.txt
```

Edit two files with a split window.

```bash
jed -g 50 script.py
```

Open a Python file and go to line 50.

```bash
jed -f wordstar
```

Start `jed` in WordStar emulation mode.

## Practical Notes

- `jed` configuration is in `~/.jedrc` or `/etc/jed.conf`.
- The S-Lang scripting language allows writing custom editor extensions.
- Popular editor modes (Emacs, WordStar) can be chosen at startup or toggled within the editor.
- Syntax highlighting is available for C, C++, Python, Perl, Java, HTML, LaTeX, and many more.
- The editor is particularly popular on older systems or minimal environments where Emacs is too heavy.
- `jed` was developed by John E. Davis, who also created the S-Lang library.
