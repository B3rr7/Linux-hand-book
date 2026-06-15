---
name: pmap
summary: Display memory map of a process.
category: Processes
tags: memory, process, mapping, address space, mmap
popular: false
---

## Additional Notes

`pmap` reports the memory map of a running process. It shows each mapped memory region, its size, permissions, offset, device, inode, and the mapped file or mapping name (if any). This reveals exactly how a process uses memory: heap, stack, shared libraries, anonymous mappings, and mmap'd files.

System administrators and developers use `pmap` to diagnose memory leaks, understand memory usage patterns, find which shared libraries are loaded, identify large memory-mapped files, and troubleshoot out-of-memory conditions. It reads data from `/proc/PID/maps` and `/proc/PID/smaps` and presents it in a readable format.

## Syntax

```bash
pmap [options] [pid...]
```

## Parameters

- `pid`: Process ID(s) to inspect.

## Common Options

- `-x`, `--extended`: Show extended output with RSS, dirty, and shared memory details.
- `-XX`: Show all available memory information (very detailed).
- `-d`, `--device`: Show device format output with offset and device numbers.
- `-q`, `--quiet`: Suppress header and footer lines.
- `-A`, `--range low,high`: Restrict output to a specific address range.
- `-c`: Read configuration from file.
- `-p`: Show PID in the footer.
- `--help`: Show help and exit.
- `--version`: Show version information.

## Examples

```bash
pmap 1234
```

Show the memory map of PID 1234.

```bash
pmap -x 1234
```

Show extended memory details: RSS (resident set size), dirty pages, and mapping mode.

```bash
pmap -d 1234
```

Show the memory map in device format with read/write permissions.

```bash
pmap $(pidof bash)
```

Show the memory map of all running bash processes.

```bash
pmap -x -q 1234
```

Show extended output without headers, useful for scripts.

```bash
pmap -XX 1234 | sort -k2 -rn | head -10
```

Show the 10 largest memory mappings of a process.

## Practical Notes

- The first column shows the virtual address of each mapping. The last column shows the mapped file (or `[anon]` for anonymous mappings, `[heap]` for heap, `[stack]` for stack, `[vdso]`, `[vvar]`, etc.).
- The RSS (Resident Set Size) column in `-x` mode shows how much of each mapping is currently in physical RAM.
- Heap growth over time can indicate memory leaks. Run `pmap` at intervals to compare.
- Shared libraries appear as read-only executable (`r-x`) mappings. Each loaded library adds one or more segments to the process map.
- Large anonymous mappings (`[anon]`) may indicate memory-mapped buffers, thread stacks, or JIT-compiled code.
- For a real-time memory usage overview, use `top` or `htop`. For detailed per-process maps, use `pmap`.
- The total memory shown by `pmap` may differ from `ps` or `top` because they account for shared pages differently.
