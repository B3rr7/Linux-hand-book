---
name: strace
summary: Trace system calls and signals.
category: Development
tags: development, debug, build
popular: false
---

## Additional Notes

`strace` is a development command used to trace system calls and signals. It intercepts and records system calls made by a process, which is invaluable for debugging and performance analysis.

`strace` can trace child processes with `-f`. Use `-e trace=open,read,write` to filter specific calls and `-o FILE` to save output.

## Syntax

```bash
strace [options] [arguments]
```

## Parameters

- `options`: Flags that change how `strace` behaves.
- `source-or-target`: File, binary, object, or project target to inspect or process.
- `arguments`: Tool-specific build, debug, or inspection parameters.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
strace --help
man strace
```

## Practical Notes

Options can vary by distribution and package version. Use `man strace`, `strace --help`, or the package documentation for exact syntax.
