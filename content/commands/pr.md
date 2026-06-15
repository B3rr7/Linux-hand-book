---
name: pr
summary: Format text files for printing or column output.
category: Text
tags: formatting, columns, print, pagination, text
popular: false
---

## Additional Notes

`pr` formats text files for printing by adding headers, footers, page numbers, line numbers, multi-column output, and date/time stamps. Despite its name (originally "print"), `pr` does not send output to a printer; it formats text for terminal display or file output.

`pr` is useful for preparing text for paginated output, viewing files in multiple columns, creating formatted reports, and preparing documents for printing. It is part of GNU Coreutils and is available on all Linux systems.

## Syntax

```bash
pr [options] [file...]
```

## Parameters

- `file`: One or more files to format. If no file is given, `pr` reads from standard input.

## Common Options

- `-k`, `--columns=k`: Produce k columns of output.
- `-a`, `--across`: Fill columns across the page (row-major) instead of down (column-major).
- `-m`, `--merge`: Merge and print files in parallel, one per column.
- `-d`, `--double-space`: Double-space the output.
- `-F`, `--form-feed`: Use form feeds instead of newlines to separate pages.
- `-h header`, `--header=header`: Use a custom header on each page.
- `-l lines`, `--length=lines`: Set the page length to lines (default 66).
- `-o margin`, `--indent=margin`: Set the left margin to `margin` spaces.
- `-n[delimiter[,digits]]`, `--number-lines[=delimiter[,digits]]`: Number lines with an optional delimiter (default tab) and digit width.
- `-p`, `--pause`: Pause before each page when output goes to a terminal.
- `-r`, `--no-file-warnings`: Suppress warnings about files that cannot be opened.
- `-s delimiter`, `--separator=delimiter`: Use a custom column separator.
- `-w width`, `--width=width`: Set the page width (default 72).
- `-t`, `--omit-header`: Omit headers and footers.
- `-T`, `--omit-pagination`: Omit headers, footers, and pagination entirely.
- `-v`, `--show-nonprinting`: Show non-printing characters visibly.
- `--help`: Show help and exit.
- `--version`: Show version information.

## Examples

```bash
pr file.txt
```

Format a file with headers, footers, and page breaks for printing.

```bash
pr -l 50 file.txt
```

Format a file with 50-line pages.

```bash
pr -2 file.txt
```

Display file content in two columns (column-major order).

```bash
pr -a -3 file.txt
```

Display in three columns filled across the page (row-major).

```bash
ls | pr -4 -t
```

List files in 4 columns without headers.

```bash
pr -m file1.txt file2.txt
```

Merge two files side by side in two columns.

```bash
pr -n file.txt
```

Number all lines in the formatted output.

```bash
pr -n: -w 100 -l 60 report.txt
```

Format a report with line numbers (separated by `:`), width of 100, page length of 60.

```bash
pr -h "My Report" -d document.txt
```

Add a custom header and double-space the output.

## Practical Notes

- `pr` writes to standard output. Redirect to a file with `>` or pipe to a printer with `lp`.
- Combine with `lp` or `lpr` for actual printing: `pr report.txt | lp`.
- The default page length of 66 lines (11 inches at 6 lines per inch) matches standard US letter paper.
- Use `pr -t` when you want column formatting without header/footer pagination. This is the most common use case.
- For simple multi-column display, `column` is often easier than `pr`.
- The merge mode (`-m`) is useful for side-by-side comparison of files.
