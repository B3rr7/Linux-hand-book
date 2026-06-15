---
name: cupsdisable
summary: Stop a CUPS printer from processing queued jobs.
category: Printing
tags: cups, printer, disable, queue
popular: false
---

## Additional Notes

`cupsdisable` disables a CUPS printer or class so it stops processing jobs. Jobs may remain queued, and whether new jobs are accepted is controlled separately by `accept` and `reject`.

Use it when pausing a printer for maintenance or troubleshooting.

## Syntax

```bash
cupsdisable [options] destination...
```

## Parameters

- `destination`: Printer or class name.
- `options`: Reason, cancel, and server controls.

## Common Options

- `-r REASON`: Set a reason message.
- `-c`: Cancel jobs for the destination on some systems.
- `-h SERVER`: Use a specific CUPS server.

## Examples

```bash
lpstat -p
```

Show printer status.

```bash
sudo cupsdisable office-printer
```

Disable a printer.

```bash
sudo cupsdisable -r "paper jam" office-printer
```

Disable a printer with a reason.

```bash
sudo cupsenable office-printer
```

Enable it again.

## Practical Notes

- Disabling a printer is different from rejecting new jobs.
- Use `reject` if you want to stop accepting new jobs too.
- Printer administration permissions may be required.
