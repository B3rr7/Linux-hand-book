---
name: arch
summary: Print the machine hardware architecture.
category: System
tags: architecture, cpu, system, machine
popular: false
---

## Additional Notes

`arch` prints the machine hardware architecture name, such as `x86_64`, `aarch64`, or `armv7l`. It is a small convenience command similar to `uname -m`.

Use it when choosing binary downloads, checking container architecture, or verifying what platform a system reports.

## Syntax

```bash
arch
```

## Parameters

- No arguments: Print the architecture.
- `options`: Some implementations support `--help` and `--version`.

## Common Options

- `--help`: Show help.
- `--version`: Show version information.

## Examples

```bash
arch
```

Print the current machine architecture.

```bash
uname -m
```

Equivalent architecture check on most Linux systems.

```bash
case "$(arch)" in
  x86_64) echo "AMD64 build" ;;
  aarch64) echo "ARM64 build" ;;
esac
```

Branch in a shell script based on architecture.

## Practical Notes

- Architecture names are not always package architecture names. For example, Debian may use `amd64` where `arch` prints `x86_64`.
- Containers can report the container architecture, which may matter for multi-architecture images.
