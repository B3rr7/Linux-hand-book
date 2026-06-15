---
name: ldd
summary: Print shared library dependencies.
category: Development
tags: development, debug, build
popular: false
---

## Additional Notes

`ldd` is a development command used to print shared library dependencies. It shows which shared libraries an executable or library requires and where they are resolved from.

Do not run `ldd` on untrusted executables, as it may execute the target. Use `objdump -p` or `readelf -d` for safe inspection of unknown binaries.

## Syntax

```bash
ldd [options] [arguments]
```

## Parameters

- `options`: Flags that change how `ldd` behaves.
- `source-or-target`: File, binary, object, or project target to inspect or process.
- `arguments`: Tool-specific build, debug, or inspection parameters.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
ldd --help
man ldd
```

## Practical Notes

Options can vary by distribution and package version. Use `man ldd`, `ldd --help`, or the package documentation for exact syntax.
