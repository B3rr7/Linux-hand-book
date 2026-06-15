---
name: rmmod
summary: Remove a module from the Linux kernel.
category: System
tags: kernel, module, driver, remove
popular: false
---

## Additional Notes

`rmmod` removes a loaded kernel module from the running kernel. It is the counterpart to `insmod` and `modprobe`. Only modules that are not currently in use by other kernel components or processes can be removed.

Kernel modules are pieces of code that can be loaded and unloaded on demand, extending the kernel's functionality without rebooting. Common examples are device drivers, filesystem drivers, and network protocol handlers. The `modprobe` command is generally preferred over `rmmod` because it handles dependencies automatically.

## Syntax

```bash
rmmod [options] module_name
```

## Parameters

- `module_name`: The name of the kernel module to remove.

## Common Options

- `-f`, `--force`: Force removal even if the module is in use or references are pending (dangerous).
- `-s`, `--syslog`: Log messages via syslog instead of standard output.
- `-v`, `--verbose`: Print messages about the removal process.
- `-w`, `--wait`: Wait for the module to become unused before removing it.
- `--version`: Show version information.

## Examples

```bash
rmmod floppy
```

Remove the `floppy` kernel module.

```bash
rmmod -v usb_storage
```

Remove the USB storage driver with verbose output.

```bash
rmmod -f e1000
```

Force-remove the e1000 network driver (use with caution).

## Practical Notes

- List loaded modules with `lsmod` before removing.
- Use `modprobe -r` instead of `rmmod` to handle dependencies automatically.
- Force-removing a module (`-f`) can crash the system or leave it in an unstable state.
- Modules that are in use (refcount > 0) cannot be removed without `--force`.
- The module name is case-sensitive and matches the name shown by `lsmod`.
