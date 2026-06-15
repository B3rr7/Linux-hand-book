---
name: cupsenable
summary: Enable a CUPS printer to process queued jobs.
category: Printing
tags: cups, printer, enable, queue
popular: false
---

## Additional Notes

`cupsenable` enables a CUPS printer or class so it can process queued jobs. It is the counterpart to `cupsdisable`.

Use it after maintenance, paper replacement, driver fixes, or queue troubleshooting.

## Syntax

```bash
cupsenable [options] destination...
```

## Parameters

- `destination`: Printer or class name.
- `options`: Server and queue controls depending on implementation.

## Common Options

- `-h SERVER`: Use a specific CUPS server.
- `--release`: Release held jobs on some systems.

## Examples

```bash
lpstat -p
```

Check whether printers are enabled.

```bash
sudo cupsenable office-printer
```

Enable a printer.

```bash
sudo accept office-printer
```

Allow new jobs if the destination was rejecting them.

## Practical Notes

- Enabling processing does not always mean new jobs are accepted; check `lpstat -a` too.
- Use `cupsdisable` to pause job processing.
- CUPS commands may require administrative permissions.
