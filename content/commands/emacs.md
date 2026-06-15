---
name: emacs
summary: Extensible, customizable text editor and computing environment.
category: Development
tags: editor, text, lisp, development, IDE
popular: true
---

## Additional Notes

`emacs` (GNU Emacs) is a highly extensible, self-documenting text editor with a built-in Lisp interpreter. It can be used for editing code, writing documents, managing files, reading email, browsing the web, running a terminal, and many other tasks through its package ecosystem.

The core of Emacs is a Lisp dialect called Emacs Lisp (Elisp), which you can use to write new commands, customize existing behavior, and extend the editor in virtually any direction. It has built-in support for syntax highlighting, version control integration, project management, debugging, and a windowing system. Emacs runs in both terminal and GUI modes.

## Syntax

```bash
emacs [options] [file...]
```

## Parameters

- `file`: One or more files to open for editing.

## Common Options

- `-nw`, `--no-window-system`: Run in the terminal without opening a GUI frame.
- `-Q`, `--quick`: Start with minimal customizations (no init file).
- `--batch`: Run in noninteractive batch mode for scripted processing.
- `-l file`, `--load file`: Load a Lisp file at startup.
- `-f function`, `--funcall function`: Call a Lisp function at startup.
- `--script file`: Run a file as a script in batch mode.
- `-t file`, `--terminal file`: Use the specified file as the terminal instead of stdin/stdout.
- `--daemon`: Start Emacs as a server daemon for `emacsclient`.
- `--eval expr`: Evaluate a Lisp expression at startup.
- `-d display`, `--display display`: Use the specified X display.
- `-T title`, `--title title`: Set the frame title.
- `+line`: Open a file with the cursor positioned at a specific line number.

## Examples

```bash
emacs
```

Start Emacs with the GUI.

```bash
emacs -nw
```

Start Emacs inside the terminal.

```bash
emacs --batch --eval '(print "hello")'
```

Run a Lisp expression in batch mode and print the result.

```bash
emacs --batch foo.org --load my-export.el --funcall org-html-export-to-html
```

Export an Org file to HTML using a batch command.

```bash
emacs -Q --eval "(package-initialize)" -f package-list-packages
```

Start Emacs without customizations and open the package manager.

```bash
emacs +42 file.c
```

Open `file.c` with the cursor on line 42.

```bash
emacs --daemon
```

Start the Emacs daemon for fast client connections.

## Practical Notes

- The Emacs tutorial is available inside Emacs: press `C-h t` (Ctrl+h then t).
- The `emacsclient` command connects to a running Emacs daemon for nearly instant startup.
- Key chords use modifier keys: `C-` is Ctrl, `M-` is Alt/Meta, `S-` is Shift.
- Configuration is stored in `~/.emacs`, `~/.emacs.el`, or `~/.config/emacs/init.el`.
- Package management is built-in (`M-x list-packages`). Popular package repos include ELPA, MELPA, and NonGNU ELPA.
- For basic editing: `C-x C-f` opens a file, `C-x C-s` saves, `C-x C-c` exits, `C-s` searches forward, `C-_` undoes.
- Emacs can replace a full IDE with packages for language servers (eglot/lsp-mode), project management (project.el), debugging (gud/dap-mode), and version control (magit).
