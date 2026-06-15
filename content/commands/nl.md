---
name: nl
summary: Number lines of files.
category: Text
tags: line-numbers, numbering, text, file, format
popular: false
---

## Additional Notes

`nl` numbers the lines of a file. It is the line-numbering counterpart of `cat -n`, but offers much more control over the numbering format, including the ability to number only non-empty lines, use different numbering styles, custom separators, and page-wise numbering (headers, footers, and body).

It is useful for printing source code with line numbers, creating numbered reference lists, or formatting documents where line numbers are needed. The number format, width, and separator are all configurable.

## Syntax

```bash
nl [options] [file...]
```

## Parameters

- `file`: One or more files to number. Reads from stdin if no file is given.

## Common Options

- `-b style`, `--body-numbering=style`: Line numbering style for the body.
  - `a`: Number all lines.
  - `t`: Number only non-empty lines (default).
  - `n`: No line numbering.
  - `pREGEX`: Number only lines matching a regular expression.
- `-n format`, `--number-format=format`: Number format.
  - `ln`: Left-justified, no leading zeros.
  - `rn`: Right-justified, no leading zeros (default).
  - `rz`: Right-justified, with leading zeros.
- `-w width`, `--number-width=width`: Set the number column width (default 6).
- `-s string`, `--number-separator=string`: String to separate the number from the text (default is tab).
- `-i number`, `--line-increment=number`: Increment line numbers by `number` (default 1).
- `-v number`, `--starting-line-number=number`: Starting line number (default 1).
- `-p`, `--page-increment`: Do not reset line numbers at page boundaries.
- `-l n`, `--join-blank-lines=n`: Group `n` blank lines into one.
- `-d xy`, `--section-delimiter=xy`: Set the delimiter characters for page sections (default `:\:`).

## Page Sections

`nl` treats input as composed of three sections: header, body, and footer. Each section starts with a delimiter line:

- `\:\:\:`: Start of header.
- `\:\:`: Start of body (also resets line numbers).
- `\:`: Start of footer.

## Examples

```bash
nl file.txt
```

Number lines of `file.txt`, skipping blank lines (default).

```bash
nl -b a file.txt
```

Number all lines, including blank ones (like `cat -n`).

```bash
nl -b a -w 3 -s ": " file.txt
```

Number all lines; use a 3-character wide number with `: ` as separator.

```bash
nl -b p^# config.conf
```

Number only lines that start with `#` (comments).

```bash
nl -n rz -w 4 file.txt
```

Number with zero-padded, right-justified format (width 4).

```bash
nl -v 10 -i 5 file.txt
```

Start numbering at 10, increment by 5.

```bash
nl -b t -s ". " notes.txt
```

Number non-empty lines with a period and space as separator.

## Practical Notes

- `cat -n` is simpler but less flexible; use `nl` when you need control over formatting.
- The default style (`-b t`) skips empty lines, which is useful for source code.
- For quick line numbering of files that also show non-printing characters, use `cat -An`.
- The official `nl` behavior is defined by POSIX, so it should work identically across different Unix systems.

