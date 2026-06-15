---
name: lsmod
summary: List loaded Linux kernel modules.
category: System
tags: kernel, module, driver, system
popular: false
---

## Additional Notes

`lsmod` is a system command used to list loaded Linux kernel modules. It shows the currently loaded modules along with their sizes and dependency usage counts.

`lsmod` reads from `/proc/modules` and formats the output. It takes no options. For detailed information about a specific module, use `modinfo`.

## Syntax

```bash
lsmod [options] [arguments]
```

## Parameters

- `options`: Flags that change how `lsmod` behaves.

## Common Options

`lsmod` does not commonly require options.

## Examples

```bash
lsmod
lsmod | grep kvm
```

## Practical Notes

Use `modprobe` to load or remove modules and `modinfo` to inspect module details.
