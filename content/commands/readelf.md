---
name: readelf
summary: Display ELF file structure information.
category: Development
tags: elf, binary, executable, sections, headers, debugging
popular: false
---

## Additional Notes

`readelf` displays detailed information about ELF (Executable and Linkable Format) files, which is the standard binary format on Linux systems. It can show file headers, program headers (segments), section headers, symbol tables, dynamic linking information, relocation entries, and more.

`readelf` is more detailed than `objdump` for ELF-specific information and does not require the binary to be compiled with debug symbols. It is the standard tool for examining ELF binaries, understanding how executables and shared libraries are structured, and diagnosing linking and loading problems.

## Syntax

```bash
readelf [options] [elf-files...]
```

## Parameters

- `elf-files`: One or more ELF format files to examine (executables, shared libraries, object files).

## Common Options

- `-h`, `--file-header`: Display the ELF file header.
- `-l`, `--program-headers`, `--segments`: Display the program headers (segments for loading).
- `-S`, `--section-headers`, `--sections`: Display the section headers.
- `-g`, `--section-groups`: Display section groups.
- `-t`, `--section-details`: Display full section details.
- `-e`, `--headers`: Display all headers (file, program, section).
- `-s`, `--symbols`, `--syms`: Display the symbol table.
- `-d`, `--dynamic`: Display the dynamic section (shared library dependencies).
- `-r`, `--relocs`: Display relocation entries.
- `-u`, `--unwind`: Display unwind information.
- `-n`, `--notes`: Display core notes or version notes.
- `-V`, `--version-info`: Display version information sections.
- `-A`, `--arch-specific`: Display architecture-specific information.
- `-p section`, `--string-dump=section`: Dump the contents of a section as strings.
- `-x section`, `--hex-dump=section`: Dump the contents of a section as hexadecimal.
- `-w[lLiaprmfFsoRt]`, `--debug-dump`: Display debug information.
- `-I`, `--histogram`: Display a histogram of bucket list lengths.
- `-a`, `--all`: Display all possible information.
- `-W`, `--wide`: Do not truncate long lines.
- `-H`, `--help`: Show help.
- `-v`, `--version`: Show version.

## Examples

```bash
readelf -h /bin/ls
```

Show the ELF header of the `ls` binary.

```bash
readelf -l /bin/bash
```

Show the program headers (segments) of `bash`.

```bash
readelf -S /usr/lib/libc.so.6
```

Show all section headers of the C library.

```bash
readelf -s /bin/ls | head -20
```

Show the first 20 symbol table entries.

```bash
readelf -d /usr/bin/python3
```

Show the dynamic section, including shared library dependencies.

```bash
readelf -a /bin/ls | less
```

Show all available ELF information.

```bash
readelf -p .rodata /bin/ls
```

Dump string data from the read-only data section.

```bash
readelf -W -s /bin/ls
```

Show symbols with wide (untruncated) output.

```bash
readelf -n /bin/ls
```

Show notes (e.g., ABI tag, build ID).

```bash
readelf -r main.o
```

Show relocation entries for an object file.

```bash
readelf -x .text /bin/ls | head -20
```

Hex dump the first 20 lines of the text section.

## Practical Notes

- `readelf` does not use the BFD library (unlike `objdump`). It reads ELF structures directly, making it more reliable for examining ELF files that may have minor corruption.
- The ELF header shows the architecture (32/64-bit), endianness, OS/ABI, entry point address, and section/program header table locations.
- Program headers (`-l`) describe segments used by the kernel to load the executable into memory.
- Section headers (`-S`) describe parts of the file used by the linker and debugger.
- The dynamic section (`-d`) lists shared library dependencies (NEEDED entries) and runtime linking information.
- `readelf -s` shows the symbol table; use `nm` for a more compact symbol listing.
- For stripped binaries, the symbol table may be empty but the dynamic symbol table (`readelf --dyn-syms`) often retains exported symbols.
- `readelf` is part of GNU `binutils`. It is available on all Linux systems.
