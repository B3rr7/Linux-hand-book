---
name: nproc
summary: Print the number of processing units available.
category: System
tags: cpu, cores, threads, processing, hardware
popular: false
---

## Additional Notes

`nproc` prints the number of processing units available to the current process. This includes all online CPU cores and threads. It reads from `sched_getaffinity` and CPU information under `/sys` and `/proc` to determine availability.

It is commonly used in build scripts and parallel processing to determine how many jobs to run concurrently. For example, `make -j$(nproc)` tells `make` to run as many parallel jobs as there are CPU cores, maximizing build speed.

## Syntax

```bash
nproc [options]
```

## Parameters

- `options`: Flags that change how `nproc` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--all`: Print the total number of installed processors, including offline CPUs.
- `--ignore=N`: Exclude N processing units from the count.
- `--help`: Show help and exit.
- `--version`: Show version information.

## Examples

```bash
nproc
```

Print the number of processing units available.

```bash
make -j$(nproc)
```

Run make with as many parallel jobs as there are cores.

```bash
nproc --all
```

Show the total number of installed processors, including offline ones.

```bash
nproc --ignore=2
```

Return the number of available processing units minus 2.

```bash
echo $(($(nproc) / 2))
```

Half the available cores, useful for I/O-bound workloads.

## Practical Notes

- `nproc` respects CPU affinity. If the process is restricted to specific cores, `nproc` reports only those cores.
- For containers and cgroups, `nproc` reports the limit set by the cgroup CPU quota.
- Use `lscpu` or `nproc --all` to see the total hardware CPUs regardless of affinity or offline state.
- In scripts, always quote `$(nproc)` properly: `make -j "$(nproc)"`.
- Older systems may not have `nproc` installed; it is part of GNU Coreutils since version 8.4.
