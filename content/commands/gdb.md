---
name: gdb
summary: Debug programs with the GNU Debugger.
category: Development
tags: development, debug, build
popular: false
---

## Additional Notes

`gdb` is a development command used to debug programs with the GNU Debugger. It provides an interactive shell for inspecting program state, setting breakpoints, stepping through code, and examining memory. It supports C, C++, Rust, and many other languages.

## Syntax

```bash
gdb [options] [arguments]
```

## Parameters

- `options`: Flags that change how `gdb` behaves.
- `source-or-target`: File, binary, object, or project target to inspect or process.
- `arguments`: Tool-specific build, debug, or inspection parameters.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
gdb --help
man gdb
```

## Practical Notes

Options can vary by distribution and package version. Use `man gdb`, `gdb --help`, or the package documentation for exact syntax.
