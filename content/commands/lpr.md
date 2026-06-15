---
name: lpr
summary: Print files with BSD-style printing commands.
category: Printing
tags: printer, queue, jobs
popular: false
---

## Additional Notes

`lpr` is a printing command used to print files with BSD-style printing commands. It is the BSD-style command for submitting files to a printer queue.

Use `lpr -P PRINTER file` to print to a specific printer. The System V-style equivalent is `lp`.

## Syntax

```bash
lpr [options] [arguments]
```

## Parameters

- `options`: Flags that change how `lpr` behaves.
- `printer`: Printer name or destination queue.
- `job`: Print job ID to inspect or manage.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
lpr --help
man lpr
```

## Practical Notes

Options can vary by distribution and package version. Use `man lpr`, `lpr --help`, or the package documentation for exact syntax.
