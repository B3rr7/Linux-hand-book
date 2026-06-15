---
name: ldconfig
summary: Configure dynamic linker runtime bindings.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`ldconfig` is a system command used to configure dynamic linker runtime bindings. It updates the shared library cache and creates necessary symlinks after installing new libraries.

Run `ldconfig` with no arguments to update the default cache in `/etc/ld.so.cache`. Use `ldconfig -p` to list all cached libraries without needing root privileges.

## Syntax

```bash
ldconfig [options] [arguments]
```

## Parameters

- `options`: Flags that change how `ldconfig` behaves.
- `'dir'`: Directory to scan instead of default paths (optional).

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
ldconfig --help
man ldconfig
```

## Practical Notes

Options can vary by distribution and package version. Use `man ldconfig`, `ldconfig --help`, or the package documentation for exact syntax.
