---
name: protoize
summary: Add ANSI C prototypes to legacy C source code.
category: Development
tags: c, prototyping, ansi, conversion, legacy code
popular: false
---

## Additional Notes

`protoize` is a tool from the GNU Compiler Collection (GCC) that automatically adds ANSI C function prototypes to legacy K&R-style C source files. It reads C source code written in pre-ANSI style (with old-style function definitions) and generates new source files with proper ANSI/ISO C prototypes and modern function declarations.

The companion tool `unprotoize` reverts the process, converting ANSI prototypes back to K&R style. Both tools are rarely needed today since most C code follows ANSI standards, but they remain useful for maintaining or modernizing very old codebases.

## Syntax

```bash
protoize [options] [file...]
unprotoize [options] [file...]
```

## Parameters

- `options`: Flags that change how `protoize` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-c`, `--compile`: Run the compiler on the modified files after conversion.
- `-d`, `--delete`: Delete the original unmodified files after conversion.
- `-k`, `--keep`: Keep copies of original files with `.save` extension.
- `-l`, `--local`: Convert local functions as well as external ones.
- `-n`, `--no-backup`: Do not create backup files.
- `-p`, `--prompt`: Prompt before modifying each file.
- `-q`, `--quiet`: Reduce output verbosity.
- `-v`, `--verbose`: Show detailed processing information.
- `-x`, `--exclude`: Exclude specified files from conversion.
- `--help`: Show help and exit.
- `--version`: Show version information.
- `-B directory`: Specify a directory for backup files.
- `-I directory`: Add to the include file search path.
- `-D name`: Predefine a macro.
- `-U name`: Undefine a macro.

## Examples

```bash
protoize *.c
```

Add ANSI prototypes to all C source files in the current directory.

```bash
protoize -k -v main.c utils.c
```

Convert specified files, keeping `.save` backups, with verbose output.

```bash
protoize -c -q src/*.c
```

Convert and then compile-check the modified source files.

```bash
unprotoize *.c
```

Revert ANSI prototypes back to K&R style.

```bash
protoize -p *.c
```

Prompt before modifying each file.

## Practical Notes

- `protoize` makes extensive modifications to source files. Always back up your code before running it.
- The tool requires correct preprocessing; macros and `#include` directives must resolve correctly for proper conversion.
- `protoize` may fail or produce incorrect results with very complex preprocessor usage or non-standard compiler extensions.
- Modern C code does not need `protoize`. It is intended for migrating code written before the ANSI C standard (C89/C90).
- The `unprotoize` tool can generate K&R-style code that may be compilable with very old C compilers.
- These tools are part of GCC but may not be installed by default on modern systems. Install them with the `gcc` or `gcc-<version>` package.
