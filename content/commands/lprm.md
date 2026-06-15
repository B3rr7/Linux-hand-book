---
name: lprm
summary: Remove jobs from a print queue.
category: Printing
tags: printer, queue, jobs
popular: false
---

## Additional Notes

`lprm` is a printing command used to remove jobs from a print queue. It allows users to cancel their own print jobs, or administrators to cancel any job.

Use `lprm JOB_ID` to remove a specific job, or `lprm -` to cancel all jobs. Use `lpq` first to find job IDs.

## Syntax

```bash
lprm [options] [arguments]
```

## Parameters

- `options`: Flags that change how `lprm` behaves.
- `printer`: Printer name or destination queue.
- `job`: Print job ID to inspect or manage.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
lprm --help
man lprm
```

## Practical Notes

Options can vary by distribution and package version. Use `man lprm`, `lprm --help`, or the package documentation for exact syntax.
