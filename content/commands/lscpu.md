---
name: lscpu
summary: Show CPU architecture and processor information.
category: System
tags: cpu, architecture, cores, system, hardware
popular: true
---

## Additional Notes

`lscpu` displays CPU architecture information collected from sysfs and `/proc/cpuinfo`. It shows architecture, CPU count, threads, cores, sockets, model name, virtualization support, caches, and CPU flags.

It is useful when checking performance, virtualization support, kernel builds, and binary compatibility.

## Syntax

```bash
lscpu [options]
```

## Parameters

- `options`: Flags that change how `lscpu` behaves.

## Common Options

- `-e`: Show extended CPU table.
- `-p`: Show parseable output.
- `-J`: Output JSON when supported.
- `--online`: Show online CPUs.
- `--offline`: Show offline CPUs.

## Examples

```bash
lscpu
```

Show CPU information.

```bash
lscpu | grep "Model name"
```

Show CPU model.

```bash
lscpu | grep Virtualization
```

Check virtualization support.

```bash
lscpu -e
```

Show CPU table.

## Practical Notes

- `Architecture` matters when downloading binaries.
- `CPU(s)` shows logical CPUs, including threads.
- Check virtualization before using KVM or some emulators.
- Use `nproc` when you only need the number of processing units.
