---
name: insmod
summary: Insert a kernel module.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`insmod` is a system command used to insert a kernel module. It loads a kernel module by full path without resolving dependencies automatically, unlike `modprobe`.

Using `insmod` directly requires that all module dependencies are already loaded. For most use cases, `modprobe` is preferred because it handles dependencies automatically.

## Syntax

```bash
insmod [options] [arguments]
```

## Parameters

- `options`: Flags that change how `insmod` behaves.
- `'module'`: Path to the kernel module file (.ko).

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
insmod --help
man insmod
```

## Practical Notes

Options can vary by distribution and package version. Use `man insmod`, `insmod --help`, or the package documentation for exact syntax.
