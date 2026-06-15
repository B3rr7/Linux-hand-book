---
name: objdump
summary: Display information from object files and executables.
category: Development
tags: binary, disassembly, elf, object files, debugging, analysis
popular: false
---

## Additional Notes

`objdump` displays information about object files, executables, and shared libraries. It can disassemble machine code, show symbol tables, display section headers, dump raw binary content, and report file headers. It works primarily with ELF format files on Linux systems.

Developers use `objdump` for reverse engineering, debugging compiler output, comparing optimized versus unoptimized code, inspecting binary sizes, verifying linker operations, and analyzing malware or unknown binaries. It is a standard tool in the `binutils` package and is available on virtually all Linux distributions.

## Syntax

```bash
objdump [options] [object-files...]
```

## Parameters

- `object-files`: One or more object files, executables, static libraries, or shared libraries to inspect.

## Common Options

- `-d`, `--disassemble`: Disassemble executable sections into assembly instructions.
- `-D`, `--disassemble-all`: Disassemble all sections, not just executable ones.
- `-S`, `--source`: Interleave source code with disassembly when debug information is available.
- `-x`, `--all-headers`: Display all available header information.
- `-f`, `--file-headers`: Display only the ELF file header.
- `-p`, `--private-headers`: Display format-specific header information.
- `-h`, `--section-headers`: Display section header table.
- `-t`, `--syms`: Display symbol table entries.
- `-T`, `--dynamic-syms`: Display dynamic symbol table entries.
- `-r`, `--reloc`: Display relocation entries.
- `-R`, `--dynamic-reloc`: Display dynamic relocation entries.
- `-s`, `--full-contents`: Display the full contents of all sections.
- `-j section`: Display information only for a specific section.
- `-M options`: Pass disassembler options (e.g., `intel` for Intel syntax).
- `--no-show-raw-insn`: Omit raw instruction bytes in disassembly output.
- `-C`, `--demangle`: Demangle C++ symbol names.
- `-l`, `--line-numbers`: Include source line numbers.
- `-g`, `--debugging`: Display debug information.

## Examples

```bash
objdump -d main
```

Disassemble executable code sections.

```bash
objdump -d -M intel main
```

Disassemble using Intel syntax instead of AT&T syntax.

```bash
objdump -S main
```

Interleave source code with disassembly. Compile with `-g` for best results.

```bash
objdump -x libfoo.so
```

Show all headers and metadata for a shared library.

```bash
objdump -t main.o
```

Display the symbol table of an object file.

```bash
objdump -s -j .rodata main
```

Dump the contents of the read-only data section.

```bash
objdump -r main.o
```

Show relocation entries, useful for understanding linker operations.

```bash
objdump -C -d libapp.so
```

Disassemble a shared library with demangled C++ symbol names.

```bash
objdump -h /bin/ls
```

List section headers and sizes in the `ls` binary.

## Practical Notes

- `objdump -S` requires debug symbols. Compile with `-g` for annotated disassembly.
- Use `-M intel` for Intel syntax, which most developers find easier to read than the default AT&T syntax.
- For stripped binaries, `objdump -d` still works, but symbol names are lost.
- The `binutils` package also includes `readelf`, `nm`, `size`, `strings`, and `strip` for complementary binary analysis.
- For cross-platform development, use the cross-compilation version like `aarch64-linux-gnu-objdump`.
- For deeper debugging, combine `objdump` with `gdb`, `strace`, and `ltrace`.
