---
name: ipcs
summary: Show System V IPC objects.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`ipcs` is a system command used to show System V IPC objects. It displays active shared memory segments, semaphore arrays, and message queues on the system.

Use `ipcs -a` for a comprehensive view of all IPC facilities. Use `ipcs -p` to see the process IDs of the creators and last operators of each object.

## Syntax

```bash
ipcs [options] [arguments]
```

## Parameters

- `options`: Flags that change how `ipcs` behaves.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
ipcs --help
man ipcs
```

## Practical Notes

Options can vary by distribution and package version. Use `man ipcs`, `ipcs --help`, or the package documentation for exact syntax.
