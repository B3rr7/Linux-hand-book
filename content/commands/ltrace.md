---
name: ltrace
summary: Trace library calls made by a process.
category: Development
tags: development, debug, build
popular: false
---

## Additional Notes

`ltrace` is a development command used to trace library calls made by a process. It intercepts and records dynamic library calls, which is useful for understanding program behavior without source access.

Use `ltrace -e LIBRARY` to filter calls to a specific library. Use `ltrace -S` to also trace system calls (similar to `strace` combined with `ltrace`).

## Syntax

```bash
ltrace [options] [arguments]
```

## Parameters

- `options`: Flags that change how `ltrace` behaves.
- `source-or-target`: File, binary, object, or project target to inspect or process.
- `arguments`: Tool-specific build, debug, or inspection parameters.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
ltrace --help
man ltrace
```

## Practical Notes

Options can vary by distribution and package version. Use `man ltrace`, `ltrace --help`, or the package documentation for exact syntax.
