---
name: unprotoize
summary: Remove ANSI C function prototypes from source files.
category: Development
tags: gcc, c, prototype, ansi, k&r, conversion
popular: false
---

## Additional Notes

`unprotoize` is part of the GNU Compiler Collection (GCC) and converts ANSI C (C89/C99) function definitions and declarations back to the older K&R (Kernighan & Ritchie) style. It is the inverse of `protoize`, which adds prototypes to K&R-style code.

This tool is rarely used today. It was designed for migrating code between K&R and ANSI C standards during the transition period in the late 1980s and 1990s. Modern C code universally uses ANSI-style prototypes. The tool exists primarily for historical codebases that need to be compiled with pre-ANSI compilers.

## Syntax

```bash
unprotoize [options] [files]
```

## Parameters

- `files`: C source files to convert. Supports wildcards.

## Common Options

- `-c`: Do not generate line directives in the output.
- `-g`: Add global declarations for external function prototypes.
- `-k`: Keep the `static` keyword for file-scope functions.
- `-p prog`: Use the specified preprocessor program.
- `-N`: Do not generate comments indicating the source of parameters.
- `-v`: Verbose output.

## Examples

```bash
unprotoize *.c
```

Convert all C files in the current directory from ANSI to K&R style.

```bash
unprotoize -v file.c
```

Convert `file.c` with verbose output.

## Practical Notes

- `unprotoize` is part of GCC but may not be installed by default on modern systems.
- It requires a working GCC installation because it uses the GCC preprocessor and internal representation.
- Make backups before running `unprotoize` on important source code.
- The converted code may need manual adjustments for correctness.
- For modern projects, there is no reason to use `unprotoize` unless targeting a pre-ANSI compiler.
