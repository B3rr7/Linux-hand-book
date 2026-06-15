---
name: ed
summary: The original Unix line-oriented text editor.
category: Text
tags: editor, line, text, script, posix
popular: false
---

## Additional Notes

`ed` is the original Unix text editor, designed for editing text files line by line. It is a line editor meaning you navigate and edit by specifying line numbers and search patterns rather than using a full-screen interface. It is standardized by POSIX and available on virtually every Unix-like system.

Despite its minimal interface, `ed` is powerful for scripting and automated editing. It can be driven by redirecting commands from a file or pipe, making it useful in shell scripts that need to perform simple text transformations. The `ed` command language influenced later interactive editors like `ex`, `vi`, and `sed`. When run without a filename, `ed` gives an empty buffer and prints a single `?` prompt for errors.

## Syntax

```bash
ed [options] [file]
```

## Parameters

- `file`: File to edit. If omitted, `ed` starts with an empty buffer.

## Common Options

- `-p prompt`: Set the command prompt string. The default is no prompt.
- `-s`, `-q`, `--quiet`: Suppress diagnostics and byte counts. Useful for scripting.
- `-G`: Enable traditional ed behavior (stricter command parsing).
- `-l`: Enable more verbose error messages.
- `--`: Treat remaining arguments as filenames, even if they start with `-`.

## Common Commands

- `a`: Append text after the current line.
- `i`: Insert text before the current line.
- `c`: Change (replace) the current line.
- `d`: Delete the current line.
- `p`: Print the current line.
- `n`: Print the current line with its line number.
- `=`: Print the current line number.
- `l`: Print the current line showing non-printing characters.
- `r file`: Read a file into the buffer after the current line.
- `w file`: Write the buffer to a file.
- `q`: Quit.
- `Q`: Quit without checking for unsaved changes.
- `h`: Explain the last error.
- `H`: Enable verbose error explanation mode.
- `/pattern/`: Search forward for a pattern.
- `?pattern?`: Search backward for a pattern.
- `s/old/new/`: Substitute on the current line.
- `+`, `-`: Move forward or backward one line.
- `$`: Go to the last line.

## Examples

```bash
ed
```

Start `ed` with an empty buffer. Type `i`, then text, then `.` on a line by itself to exit insert mode. `w filename` saves, `q` quits.

```bash
echo -e "1s/foo/bar/\nw\nq" | ed -s file.txt
```

Replace the first occurrence of `foo` with `bar` in `file.txt` using a scripted ed session.

```bash
ed -s file.txt <<< $'1s/old/new/\nw\nq'
```

Replace `old` with `new` on line 1 using a here-string.

```bash
ed file.txt
```

Open `file.txt` interactively. Commands: `1p` prints line 1, `$p` prints the last line, `1,$l` lists all lines, `wq` saves and quits.

## Practical Notes

- `ed` prints nothing by default on success. A bare `?` indicates an error; type `h` to see the explanation, `H` to enable verbose errors.
- The `.` (dot) command on an empty line exits insert mode, not to be confused with the dot command meaning `current line`.
- For scripting, always use `-s` to suppress diagnostics and line counts.
- `ed` reads commands from standard input, so you can pipe an editing script into it.
- GNU `ed` is the most common Linux implementation. The traditional `ed` has some behavioral differences.
- If you need screen-based editing, use `vi`, `nano`, or a GUI editor instead.
