---
name: as
summary: Assemble source code into object files with GNU assembler.
category: Development
tags: assembler, binutils, object file, development
popular: false
---

## Additional Notes

`as` is the GNU assembler. It converts assembly source into object files that can later be linked into executables or libraries.

Most developers invoke it indirectly through compilers such as `gcc` or `clang`, but direct use is useful when learning assembly, working with low-level code, or debugging build toolchains.

## Syntax

```bash
as [options] source.s -o output.o
```

## Parameters

- `source.s`: Assembly source file.
- `output.o`: Object file to create.
- `options`: Architecture, debug, listing, and output controls.

## Common Options

- `-o FILE`: Write output object file.
- `-g`: Generate debug information.
- `-a`: Produce an assembly listing.
- `--version`: Show version information.
- `--help`: Show supported target-specific options.

## Examples

```bash
as hello.s -o hello.o
```

Assemble one source file.

```bash
ld hello.o -o hello
```

Link an object file manually.

```bash
gcc -c hello.s -o hello.o
```

Use the compiler driver as an easier frontend.

## Practical Notes

- Assembly syntax and options depend on architecture.
- Use `gcc` or `clang` as the driver when you need include paths, startup files, or normal linking behavior.
- Inspect object files with `objdump`, `readelf`, or `nm`.
