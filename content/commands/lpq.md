---
name: lpq
summary: Show print queue status.
category: Printing
tags: printer, queue, jobs
popular: false
---

## Additional Notes

`lpq` is a printing command used to show print queue status. It displays the current print queue, showing job IDs, sizes, and statuses for queued documents.

Use `lpq -P PRINTER` to check a specific printer. The System V-style equivalent is `lpstat -o`.

## Syntax

```bash
lpq [options] [arguments]
```

## Parameters

- `options`: Flags that change how `lpq` behaves.
- `printer`: Printer name or destination queue.
- `job`: Print job ID to inspect or manage.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
lpq --help
man lpq
```

## Practical Notes

Options can vary by distribution and package version. Use `man lpq`, `lpq --help`, or the package documentation for exact syntax.
