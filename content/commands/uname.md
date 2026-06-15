---
name: uname
summary: Print system and kernel information.
category: System
tags: system, kernel, architecture, version, linux
popular: true
---

## Additional Notes

`uname` prints information about the running system, especially the kernel name, release, version, and machine architecture.

It is useful for troubleshooting, compiling software, checking architecture, and reporting system details.

## Syntax

```bash
uname [options]
```

## Parameters

- `options`: Flags that change how `uname` behaves.

## Common Options

- `-a`, `--all`: Print all available information.
- `-s`, `--kernel-name`: Print kernel name.
- `-r`, `--kernel-release`: Print kernel release.
- `-v`, `--kernel-version`: Print kernel version.
- `-m`, `--machine`: Print machine hardware architecture.
- `-p`, `--processor`: Print processor type when available.
- `-o`, `--operating-system`: Print operating system name.

## Examples

```bash
uname
```

Print kernel name.

```bash
uname -a
```

Print full system information.

```bash
uname -r
```

Print kernel release.

```bash
uname -m
```

Print architecture, such as `x86_64` or `aarch64`.

## Practical Notes

- Use `lsb_release -a` or `/etc/os-release` for distribution information.
- Kernel version and distribution version are different things.
- Architecture matters when downloading binaries or building kernels/modules.
