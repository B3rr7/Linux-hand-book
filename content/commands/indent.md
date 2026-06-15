---
name: indent
summary: Format C and C++ source code with consistent indentation.
category: Development
tags: c, formatting, code, style, indent
popular: false
---

## Additional Notes

`indent` reformats C and C++ source code according to configurable indentation and formatting rules. It adjusts indentation, line breaks, spacing, brace placement, comment formatting, and other code layout aspects to match a specified style.

It supports several built-in coding styles (Kernighan & Ritchie, GNU, Berkeley, Linux kernel) and allows fine-grained control over virtually every formatting detail through command-line options. It is useful for enforcing consistent code style across a project, cleaning up poorly formatted code, or batch-formatting many files at once.

## Syntax

```bash
indent [options] file...
```

## Parameters

- `file`: One or more C or C++ source files to format. Files are modified in place unless backup options are specified.

## Common Style Options

- `-kr`: Use Kernighan & Ritchie style.
- `-gnu`: Use GNU style (default).
- `-orig`: Use Berkeley style.
- `-linux`: Use Linux kernel style.
- `-bap`: Blank line after procedure bodies.
- `-bad`: Blank line after declarations.
- `-bap`: Blank line after function bodies.
- `-bbb`: Blank line before block comments.
- `-nbad`: Do not force blank lines after declarations.
- `-bbo`: Prefer break before boolean operators.
- `-bc`: Put `else` on new line after closing brace.
- `-bl`: Put opening braces on new lines.
- `-bli n`: Indent braces by `n` spaces.
- `-bls`: Put braces of struct/union/enum on new lines.
- `-br`: Put opening braces on the same line as the statement.
- `-bs`: Prefer a space between `sizeof` and its argument.
- `-c n`: Comment indentation column.
- `-cd n`: Declaration comment column.
- `-cdb`: Comment delimiters on blank lines.
- `-ce`: Cuddle `else` with preceding `}`.
- `-ci n`: Continuation indent of `n` spaces.
- `-cli n`: Case label indent of `n` spaces.
- `-d n`: Set indentation for comments not to the right of code.
- `-di n`: Put variables in columns.
- `-fc1`: Format comments in first column.
- `-fca`: Format all comments.
- `-hnl`: Prefer to break long lines at newlines.
- `-i n`: Set indentation level to `n` spaces (default is 2).
- `-ip n`: Indent parameter types in old-style function definitions by `n` spaces.
- `-l n`: Set maximum line length to `n` columns (default is 78).
- `-lc n`: Set maximum comment line length.
- `-lp`: Align continued line parameter lists.
- `-npsl`: Put return type on the same line as function name.
- `-psl`: Put return type on its own line before function name.
- `-sc`: Put `*/` at the right of comments.
- `-sob`: Swallow optional blank lines.
- `-st`: Write output to stdout instead of modifying files in place.
- `-T typename`: Add `typename` to the type recognition list.
- `-ts n`: Set tab size to `n` columns.
- `-ut`: Use tabs for indentation.
- `-nut`: Use spaces for indentation (no tabs).
- `-v`: Verbose mode.

## Examples

```bash
indent -kr file.c
```

Format `file.c` in Kernighan & Ritchie style.

```bash
indent -linux -i8 file.c
```

Format using Linux kernel style with 8-space indentation.

```bash
indent -st -br -ce file.c > formatted.c
```

Format `file.c` with braces on the same line and `else` cuddled, writing to stdout.

```bash
indent -gnu -l120 -nut *.c
```

Format all C files in the current directory with GNU style, 120-character line length, and spaces instead of tabs.

```bash
indent -kr -bad -bap -i4 -br -ce -nut source.c
```

Apply a custom style based on K&R but with 4-space indentation and no tabs.

## Practical Notes

- `indent` modifies files in place by default. Use `-st` to send output to stdout and inspect changes first.
- Always back up your source files (`-b` flag creates a backup with `~` suffix) before batch-formatting.
- Not all code formats perfectly; `indent` may struggle with preprocessor macros, `#ifdef` blocks, or unusual constructs.
- For large projects, use `indent` with version control (e.g., `git diff` afterward) to review all changes.
- `indent` only handles C and C++. For other languages, use language-specific formatters.
- The tool is most useful when applied consistently to an entire codebase.
