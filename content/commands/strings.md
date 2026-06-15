---
name: strings
summary: Extract printable strings from binary or text files.
category: Development
tags: binary, strings, extract, reverse-engineering, analysis
popular: false
---

## Additional Notes

`strings` scans binary files (executables, libraries, object files, or any data files) and extracts sequences of printable characters that resemble human-readable text. It is commonly used in reverse engineering, malware analysis, forensics, and debugging to find embedded text in compiled programs.

The tool identifies strings by looking for runs of printable ASCII or Unicode characters of a minimum length (default 4 characters). It can search the entire file or specific sections of an executable (like `.text`, `.data`, `.rodata`). `strings` is part of the GNU binutils package and is available on virtually every Unix-like system.

## Syntax

```bash
strings [options] file...
```

## Parameters

- `file`: The binary or data file to scan.

## Common Options

- `-a`, `--all`: Scan the entire file, not just the initialized data sections (default for object files).
- `-d`, `--data`: Only scan the initialized data sections (not the whole file).
- `-f`, `--print-file-name`: Print the filename before each string.
- `-n length`, `--bytes=length`: Set the minimum string length (default: 4).
- `-t format`, `--radix=format`: Print the offset of each string. Format: `d` (decimal), `o` (octal), `x` (hex).
- `-o`: Print the offset in decimal (equivalent to `-t d`).
- `-e encoding`: Specify character encoding:
  - `s`: Single 7-bit or 8-bit characters (default).
  - `S`: Single 8-bit characters with the high bit set.
  - `b`: 16-bit big-endian (UTF-16 BE).
  - `l`: 16-bit little-endian (UTF-16 LE).
  - `B`: 32-bit big-endian (UTF-32 BE).
  - `L`: 32-bit little-endian (UTF-32 LE).
- `-T target`: Specify the object code format (e.g., `elf64-x86-64`).
- `-w`, `--include-all-whitespace`: Include whitespace characters (spaces, tabs) in strings.
- `--help`: Show usage information.
- `-v`, `--version`: Show version information.

## Examples

```bash
strings a.out
```

Extract all printable strings (minimum 4 characters) from the executable `a.out`.

```bash
strings -n 6 /bin/ls
```

Extract strings of at least 6 characters from the `ls` binary.

```bash
strings -e l program.exe
```

Extract UTF-16 little-endian strings (common in Windows executables).

```bash
strings -t x /sbin/init
```

Print strings with their hexadecimal offsets in the file.

```bash
strings -f /usr/bin/* | grep -i "usage"
```

Find usage messages across all binaries in `/usr/bin/`.

```bash
strings /bin/ls | grep "usage"
```

Extract strings and filter with grep to find usage information.

```bash
strings --all -n 10 core.dump
```

Extract long strings from a core dump file.

```bash
strings -o library.so | head -20
```

Show the first 20 strings with their decimal offsets from a shared library.

## Practical Notes

- The default minimum length of 4 characters can be adjusted with `-n` to catch shorter or longer strings.
- UTF-16 encoding (`-e l`) is essential for analyzing Windows PE files.
- `strings` on an ELF binary reveals function names, error messages, library paths, and log strings.
- For malware analysis, `strings` often reveals IP addresses, URLs, registry keys, and command strings.
- Compiler optimizations (like `-O2` or link-time optimization) may inline strings and reduce what `strings` finds.
- Stripped binaries will show fewer strings since symbol names are removed, but embedded string literals remain.
- Combine with `grep`, `sort`, and `uniq` for effective analysis of large binaries.
- For encrypted or packed binaries, `strings` may not find meaningful text without first unpacking the binary.
