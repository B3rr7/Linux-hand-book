---
name: modinfo
summary: Show information about a Linux kernel module.
category: System
tags: kernel, module, driver, system
popular: false
---

## Additional Notes

`modinfo` is a system command used to show information about a Linux kernel module. It displays details including version, description, author, license, and supported hardware aliases.

Use `modinfo -F FIELD MODULE` to extract a single field, such as `-F description` or `-F parm`. Use `modinfo -n MODULE` to show the full path to the module file.

## Syntax

```bash
modinfo [options] [arguments]
```

## Parameters

- `options`: Flags that change how `modinfo` behaves.
- `'module'`: Name of the kernel module.

## Common Options

- `-F FIELD`: Show one field.
- `-n`: Show module filename.
- `-d`: Show module description.

## Examples

```bash
modinfo overlay
modinfo -n kvm
modinfo -F description e1000e
```

## Practical Notes

`modinfo` helps identify module version, author, parameters, and supported hardware aliases.
