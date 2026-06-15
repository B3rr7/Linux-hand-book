---
name: nm
summary: List symbols from object files, executables, and libraries.
category: Development
tags: symbols, object files, debugging, linking, binary, compilation
popular: false
---

## Additional Notes

`nm` lists symbols from object files, executables, and shared libraries. Each symbol entry shows the symbol value, type, and name. Symbol types include whether a symbol is defined (text, data, BSS), undefined (external reference), absolute, or a section name.

Developers use `nm` to inspect compiled binaries, verify that expected symbols are exported, debug linker errors (undefined references, duplicate symbols), and check library interfaces. It is especially useful when working with static libraries (`.a` files), shared objects (`.so` files), and relocatable object files (`.o` files).

The symbol types and their meanings follow the ELF (Executable and Linkable Format) standard on Linux systems. The letter case indicates whether the symbol is local (lowercase) or global (uppercase), which matters for visibility and linking scope.

## Syntax

```bash
nm [options] [object-files...]
```

## Parameters

- `object-files`: One or more object files, executables, static libraries, or shared libraries to inspect.

## Common Options

- `-a`, `--debug-syms`: Show debugger-only symbols.
- `-C`, `--demangle`: Decode C++ symbol names to human-readable form.
- `-D`, `--dynamic`: Display dynamic symbols instead of normal symbols. Useful for shared libraries.
- `-g`, `--extern-only`: Show only external symbols.
- `-l`, `--line-numbers`: Include source file and line numbers when debug info is available.
- `-n`, `--numeric-sort`: Sort symbols numerically by address instead of alphabetically.
- `-o`: Print symbol type using older BSD-style output format.
- `-p`, `--no-sort`: Show symbols in the order they appear in the object file.
- `-r`, `--reverse-sort`: Reverse the sort order.
- `-S`, `--print-size`: Print the size of defined symbols.
- `-u`, `--undefined-only`: Show only undefined symbols.
- `--defined-only`: Show only defined symbols.
- `-size-sort`: Sort symbols by size.

## Symbol Types

- `T`: Text (code) section, global.
- `t`: Text section, local.
- `D`: Initialized data section, global.
- `d`: Initialized data section, local.
- `B`: Uninitialized data (BSS) section, global.
- `b`: Uninitialized data (BSS) section, local.
- `U`: Undefined symbol (referenced but not defined in the file).
- `A`: Absolute symbol (fixed value, not relocatable).
- `C`: Common symbol (uninitialized data, mergeable).
- `W`: Weak symbol (can be overridden by a strong definition).
- `V`: Weak object symbol.
- `N`: Debugging symbol.
- `S`: Symbol in an uninitialized data section for small objects.

## Examples

```bash
nm main.o
```

List all symbols in a relocatable object file.

```bash
nm -C libapp.a
```

Demangle C++ symbol names from a static library.

```bash
nm -u main.o
```

Show undefined symbols in an object file to find unresolved references.

```bash
nm -D libcrypto.so | grep SSL
```

List dynamic symbols exported by a shared library and filter for SSL-related symbols.

```bash
nm -S --size-sort /usr/bin/bash
```

Show symbol sizes in a binary, sorted from smallest to largest.

```bash
nm -g libfoo.a
```

List only global (external) symbols in a static library.

```bash
nm -l main.o
```

Show symbols with source line numbers if debug information is present.

## Practical Notes

- Use `nm -C` when inspecting C++ binaries or libraries. Without demangling, C++ symbol names appear as mangled identifiers like `_ZN3foo3barEi`.
- The `-D` flag shows only dynamic symbols, which are the symbols exported by shared libraries. The dynamic symbol table controls which functions and variables are available to programs linking against the library.
- Undefined symbols (`U` type) indicate external references that must be resolved at link time. Missing undefined symbols during linking is the cause of unresolved reference linker errors.
- Use `nm -S` to see symbol sizes, which helps understand which functions or variables contribute most to binary size.
- For ELF binaries compiled with `-g` (debug information), `nm -l` can map symbols back to source lines, aiding in debugging and reverse engineering.
