---
name: modprobe
summary: Add or remove Linux kernel modules.
category: System
tags: kernel, module, driver, system
popular: false
---

## Additional Notes

`modprobe` is a system command used to add or remove Linux kernel modules. It handles module loading and unloading while automatically resolving and loading dependencies.

Use `modprobe -r MODULE` to remove a module and its unused dependencies. Use `modprobe --show-depends MODULE` to preview what would be loaded before taking action.

## Syntax

```bash
modprobe [options] [arguments]
```

## Parameters

- `options`: Flags that change how `modprobe` behaves.
- `'module'`: Name of the kernel module.
- `'parameters'`: Module parameters (e.g., param=value).

## Common Options

- `-r MODULE`: Remove a module.
- `-v`: Verbose output.
- `--show-depends MODULE`: Show dependencies.

## Examples

```bash
sudo modprobe kvm
sudo modprobe -r kvm
modprobe --show-depends overlay
```

## Practical Notes

Changing kernel modules can affect hardware and services. Use administrator privileges carefully.
