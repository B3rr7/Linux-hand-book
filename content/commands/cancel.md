---
name: cancel
summary: Cancel print jobs in a CUPS print queue.
category: Printing
tags: printer, cups, queue, jobs
popular: false
---

## Additional Notes

`cancel` removes print jobs from CUPS queues. It can cancel a specific job ID or jobs for a destination.

Use it with `lpstat`, `lpq`, `lprm`, and printer administration commands.

## Syntax

```bash
cancel [options] [job-id|destination]
```

## Parameters

- `job-id`: Print job ID shown by `lpstat`.
- `destination`: Printer or class name.
- `options`: User, destination, and all-jobs controls.

## Common Options

- `-a`: Cancel all jobs, or all jobs for a destination when one is given.
- `-u USER`: Cancel jobs belonging to USER when permitted.
- `-h SERVER`: Connect to a specific CUPS server.

## Examples

```bash
lpstat -o
```

List pending print jobs.

```bash
cancel 42
```

Cancel job 42.

```bash
cancel -a office-printer
```

Cancel all jobs for a printer.

## Practical Notes

- Permissions decide whether you can cancel other users' jobs.
- Use `lpstat -o` before canceling to confirm the job ID.
- `cancel` removes jobs; it does not fix printer hardware or driver problems.
