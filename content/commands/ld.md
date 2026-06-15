---
name: ld
summary: The GNU linker; combine object files into executables or libraries.
category: Development
tags: linker, object, binary, elf, build
popular: false
---

## Additional Notes

`ld` is the GNU linker that takes one or more object files produced by a compiler (such as `gcc`), resolves symbol references, relocates code, and produces an executable, shared library, or object file. It is the final stage of the compilation pipeline.

In practice, developers rarely invoke `ld` directly. The compiler driver (e.g., `gcc` or `clang`) calls `ld` behind the scenes with the correct arguments. Direct use of `ld` is needed for low-level tasks such as linkers scripts, bootloaders, kernel modules, or embedded development where full control over memory layout is required.

## Syntax

```bash
ld [options] object-files...
```

## Parameters

- `object-files`: One or more `.o` files, static libraries (`.a`), or shared objects (`.so`) to link.

## Common Options

- `-o file`: Set the output file name.
- `-l library`: Link against a library (e.g., `-lm` for libm).
- `-L path`: Add a directory to the library search path.
- `-shared`: Create a shared library instead of an executable.
- `-r`, `--relocateable`: Produce a relocatable object file (partial linking).
- `-e symbol`: Set the entry point symbol.
- `-T script`, `--script script`: Use a custom linker script.
- `-Map file`: Write a link map to the specified file.
- `-static`: Produce a statically linked binary.
- `-pie`: Produce a position-independent executable.
- `--gc-sections`: Remove unused sections from the output.
- `-M`: Print the link map to stdout.
- `-v`: Display version and show the linker emulation.

## Examples

```bash
ld -o hello hello.o -lc
```

Link `hello.o` with the C library to produce an executable called `hello`.

```bash
ld -shared -o libfoo.so foo.o bar.o
```

Create a shared library from two object files.

```bash
ld -r -o combined.o part1.o part2.o
```

Partially link two object files into a single relocatable object.

```bash
ld -T kernel.ld -o kernel.bin boot.o main.o
```

Link kernel object files using a custom linker script.

```bash
ld -Map output.map -o program prog.o -lc
```

Generate a link map file showing symbol addresses and section layout.

## Practical Notes

- Use `gcc -v` or `gcc -Wl,--verbose` to see the linker commands that the compiler generates. This helps when you need to reproduce or customize linker behavior.
- Linker scripts (`.ld` files) control the layout of sections, memory regions, and symbol addresses. They are essential for embedded and OS development.
- The `-l` flag searches for `lib<name>.so` or `lib<name>.a` in the standard library paths and any paths added with `-L`.
- Use `ldd` to inspect which shared libraries a linked binary depends on.
- The `collect2` tool wraps `ld` on many systems; calling `ld` directly bypasses constructor/destructor handling.

