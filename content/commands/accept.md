---
name: accept
summary: Allow print jobs to be submitted to a printer destination.
category: Printing
tags: printer, cups, queue, jobs
popular: false
---

## Additional Notes

`accept` tells CUPS that a printer or class should accept new print jobs. It does not necessarily start printing immediately; it controls whether new jobs may enter the queue.

Use it with `reject`, `lpstat`, and `cupsenable` when managing printer queues.

## Syntax

```bash
accept destination...
```

## Parameters

- `destination`: Printer or printer class name.
- `options`: This command is usually used with destination names rather than many flags.

## Common Commands

- `accept PRINTER`: Allow new jobs for a printer.
- `reject PRINTER`: Stop accepting new jobs for a printer.
- `lpstat -a`: Show whether destinations accept jobs.

## Examples

```bash
lpstat -a
```

Check which destinations accept jobs.

```bash
sudo accept office-printer
```

Allow jobs to be submitted to `office-printer`.

```bash
sudo reject office-printer
```

Stop accepting new jobs.

## Practical Notes

- `accept` controls queue acceptance, while `cupsenable` controls whether queued jobs are processed.
- Printer administration may require root or printer-admin permissions.
- Destination names can be listed with `lpstat -v` or `lpstat -a`.
