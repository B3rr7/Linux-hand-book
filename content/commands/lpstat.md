---
name: lpstat
summary: Show printer and print job status.
category: Printing
tags: printer, queue, jobs
popular: false
---

## Additional Notes

`lpstat` is a printing command used to show printer and print job status. It shows printer status, queue state, and detailed information about print jobs.

Use `lpstat -p` to list all available printers and their status. Use `lpstat -o` to show active print jobs. The BSD-style equivalent is `lpq`.

## Syntax

```bash
lpstat [options] [arguments]
```

## Parameters

- `options`: Flags that change how `lpstat` behaves.
- `printer`: Printer name or destination queue.
- `job`: Print job ID to inspect or manage.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
lpstat --help
man lpstat
```

## Practical Notes

Options can vary by distribution and package version. Use `man lpstat`, `lpstat --help`, or the package documentation for exact syntax.
