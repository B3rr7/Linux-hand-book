---
name: lp
summary: Print files.
category: Printing
tags: printer, queue, jobs
popular: false
---

## Additional Notes

`lp` is a printing command used to print files. It is the System V-style command for submitting files to a printer queue.

Use `lp -d PRINTER file` to print to a specific printer. Use `lp -n N file` to print multiple copies. The BSD-style equivalent is `lpr`.

## Syntax

```bash
lp [options] [arguments]
```

## Parameters

- `options`: Flags that change how `lp` behaves.
- `printer`: Printer name or destination queue.
- `job`: Print job ID to inspect or manage.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
lp --help
man lp
```

## Practical Notes

Options can vary by distribution and package version. Use `man lp`, `lp --help`, or the package documentation for exact syntax.
