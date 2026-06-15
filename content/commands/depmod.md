---
name: depmod
summary: Generate kernel module dependency files.
category: System
tags: kernel, module, dependencies, linux
popular: false
---

## Additional Notes

`depmod` analyzes installed kernel modules and writes dependency files used by `modprobe`. These files help the system load required modules automatically.

It is usually run automatically after installing kernel modules, but administrators may run it manually after adding custom modules.

## Syntax

```bash
depmod [options] [kernel-version]
```

## Parameters

- `kernel-version`: Kernel version whose module directory should be processed. Defaults to the running kernel.
- `options`: All, quick, base-directory, and error-reporting controls.

## Common Options

- `-a`: Process all modules for the selected kernel version.
- `-A`: Only update if module files are newer than dependency files.
- `-e`: Report unresolved symbols.
- `-n`: Print output to standard output instead of writing files.
- `-b DIR`: Use DIR as a basedir, useful for packaging or chroot-style work.
- `-F System.map`: Use a System.map file for symbol checks.

## Examples

```bash
sudo depmod -a
```

Regenerate module dependencies for the running kernel.

```bash
sudo depmod -a 6.8.0-31-generic
```

Process modules for a specific kernel version.

```bash
depmod -n | less
```

Preview generated dependency information.

```bash
modprobe module_name
```

Load a module using dependency information.

## Practical Notes

- Run `depmod` after installing custom modules into `/lib/modules/KERNEL_VERSION/`.
- The kernel version must match the module directory.
- Use `modinfo` and `modprobe` for related module inspection and loading.
