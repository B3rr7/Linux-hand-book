---
name: kernelversion
summary: Print the currently running Linux kernel version.
category: System
tags: kernel, version, system, info
popular: false
---

## Additional Notes

`kernelversion` is a simple utility that prints the version string of the currently running Linux kernel. It extracts the version from the `/proc/sys/kernel/osrelease` file or similar system interfaces.

It provides a quick way to check the kernel version in scripts or automation without parsing `/proc/version` or using `uname -r`.

## Syntax

```bash
kernelversion
```

The command takes no options or arguments. It simply prints the kernel version to stdout.

## Parameters

- `options`: Flags that change how `kernelversion` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Examples

```bash
kernelversion
```

Output example: `6.8.0-arch1-1`

```bash
kernelversion | cut -d. -f1
```

Extract the major version number.

## Practical Notes

- `uname -r` is a more widely available alternative that works on all POSIX systems.
- This command may not be installed by default on all distributions.

