---
name: xclip
summary: Command-line interface to the X clipboard.
category: System
tags: x11, clipboard, copy, paste, selection
popular: true
---

## Additional Notes

`xclip` sends data to or retrieves data from the X11 clipboard selections. X11 has multiple clipboards: the PRIMARY selection (middle-click paste), the CLIPBOARD selection (Ctrl+C/Ctrl+V), and the SECONDARY selection (rarely used). By default, `xclip` uses the PRIMARY selection.

It is widely used in shell scripts and terminal workflows to pipe command output directly into the clipboard, or to retrieve clipboard content for further processing. Combined with aliases or shell functions, it provides clipboard integration for terminal users.

## Syntax

```bash
xclip [options] [file...]
```

## Parameters

- `file`: File to copy into the clipboard. If omitted, reads from standard input.

## Common Options

- `-i`, `-in`: Read input into the selection (default).
- `-o`, `-out`: Print the selection to standard output.
- `-selection name`: Specify which selection to use: `primary`, `secondary`, or `clipboard`.
- `-t type`: Set the target MIME type.
- `-l`, `-loops N`: Run in a loop, providing the selection for N requests (for clipboard daemon behavior).
- `-d`, `-display display`: Use the specified X display.
- `-f`, `-filter`: Filter mode: copy input to selection and also pass to stdout.
- `-silent`: Suppress error messages.
- `-rmlastnl`: Remove the trailing newline.

## Examples

```bash
echo "Hello" | xclip
```

Copy "Hello" to the PRIMARY selection (middle-click paste).

```bash
echo "Hello" | xclip -selection clipboard
```

Copy "Hello" to the CLIPBOARD selection (Ctrl+V paste).

```bash
xclip -o
```

Print the PRIMARY selection content.

```bash
xclip -o -selection clipboard
```

Print the CLIPBOARD selection content.

```bash
cat output.txt | xclip -selection clipboard
```

Copy a file to the clipboard.

```bash
screenshot | xclip -t image/png -selection clipboard
```

Copy an image to the clipboard.

## Practical Notes

- `xclip` requires a running X server. It does not work in a pure terminal (tty) environment.
- On Wayland, `xclip` may not work. Use `wl-clipboard` tools (`wl-copy`, `wl-paste`) instead.
- Common alias: `alias xcopy='xclip -selection clipboard'` and `alias xpaste='xclip -o -selection clipboard'`.
- For persisting clipboard content after an application closes, use `xclip -loops 0` (clipboard daemon mode).
- The `xclipboard` GUI tool displays and manages clipboard history.
