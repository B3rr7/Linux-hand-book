---
name: pstack
summary: Print stack traces of a running process.
category: Processes
tags: stack, trace, process, debugging, threads
popular: false
---

## Additional Notes

`pstack` attaches to a running process and prints a stack trace for each thread. It shows the function call chain at the point of inspection, including function names and addresses. This is useful for understanding what a process is doing at a specific moment, diagnosing hangs, deadlocks, or unexpected behavior.

`pstack` works by using `ptrace` to attach to the target process, reading its stack frames, and symbolizing the addresses using the process's symbol table. On modern systems, `pstack` is often a shell script that invokes `gdb` with a batch command to dump thread backtraces.

## Syntax

```bash
pstack [options] [pid...]
```

## Parameters

- `pid`: Process ID(s) to examine.

## Common Options

- `-p pid`: Specify the PID (alternative syntax).
- `-w`: Wait if the process is stopped.
- `-D`: Show debug information.
- `-M`: Enable multi-process mode.
- `--help`: Show help and exit.
- `--version`: Show version information.

## Examples

```bash
pstack 1234
```

Print the stack trace of PID 1234.

```bash
pstack $(pidof mysqld)
```

Stack trace of all mysqld processes.

```bash
pstack -p 5678
```

Stack trace using the `-p` syntax.

```bash
for pid in $(pidof java); do pstack $pid >> java_stacks.log; done
```

Collect stack traces from all Java processes over time for analysis.

## Practical Notes

- `pstack` is part of the `gdb` or `pstack` package. Install with `sudo apt install gdb` or `sudo apt install pstack`.
- The target process must have read permissions. `pstack` typically needs the same user or root.
- Stacks from optimized code may show incomplete or incorrect backtraces due to inlining and frame pointer omission.
- For Java processes, use `jstack` instead, which understands JVM internals and produces Java-level stack traces.
- Continuous sampling with `pstack` can help identify where a process is spending time. Collect multiple samples over a period.
- For kernel-level stack traces of threads, use `/proc/PID/stack` or `cat /proc/PID/wchan`.
- The `gdb`-based `pstack` script is more portable than compiled alternatives, but it is slower because it starts `gdb` for each invocation.
