---
name: tput
summary: Query and modify terminal capabilities.
category: System
tags: terminal, terminfo, display, cursor, color
popular: false
---

## Additional Notes

`tput` uses the terminal capability database (terminfo) to query terminal characteristics and control terminal output. It can move the cursor, change text attributes (bold, underline, reverse video, colors), clear the screen, and query terminal features like the number of columns and rows.

It is commonly used in shell scripts to produce formatted and colored output without hard-coding escape sequences. The behavior depends on the `$TERM` environment variable. If the terminal type is not recognized, `tput` may produce incorrect or empty output.

## Syntax

```bash
tput [options] capability [parameters]
```

## Capabilities

- `clear`: Clear the screen.
- `cols`: Number of columns in the terminal.
- `lines`: Number of lines in the terminal.
- `bold`: Start bold text.
- `sgr0`: Reset all attributes.
- `setaf N`: Set foreground color (0-7 or 0-255).
- `setab N`: Set background color.
- `rev`: Start reverse video.
- `smul`: Start underline mode.
- `rmul`: End underline mode.
- `cup Y X`: Move cursor to row Y, column X (0-based).
- `bel`: Ring the terminal bell.
- `sc`: Save cursor position.
- `rc`: Restore cursor position.
- `civis`: Hide cursor.
- `cnorm`: Show normal cursor.

## Parameters

- `options`: Flags that change how `tput` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-T type`: Use the terminfo entry for `type` instead of the current `$TERM`.
- `-S`: Read capabilities from stdin for batch processing.
- `-x`: Allow extended capabilities that are not part of the standard terminfo.

## Examples

```bash
tput cols
```

Print the number of columns in the terminal.

```bash
tput cup 10 20
```

Move the cursor to row 10, column 20.

```bash
echo "$(tput bold)Important$(tput sgr0) message"
```

Print bold text and reset attributes.

```bash
echo "$(tput setaf 2)Green text$(tput sgr0)"
```

Print green text.

```bash
tput clear
```

Clear the terminal screen.

## Practical Notes

- `tput` depends on the terminfo database. If a terminal type is missing, install the `ncurses-term` package.
- Use `sgr0` to reset all text attributes; `rmso` or `rmul` reset only individual attributes.
- For 256-color terminals, use colors 0-255 with `setaf`/`setab`.
- Always reset attributes after applying them, or the terminal state may bleed into subsequent output.
- The `infocmp` command can show the full terminfo entry for a terminal type.
