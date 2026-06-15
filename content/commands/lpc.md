---
name: lpc
summary: Line printer control; manage printer queues in CUPS/LPD.
category: Administration
tags: printer, queue, lpd, cups, control
popular: false
---

## Additional Notes

`lpc` is a printer control command that provides an interactive interface for managing printer queues. It can start, stop, enable, disable, and check the status of print queues on a CUPS or LPD printing system.

While largely a legacy command from the Berkeley LPD system, `lpc` is still available in CUPS for backward compatibility. Most functionality is now available through `lpadmin`, `lpstat`, and `cupsenable`/`cupsdisable`.

## Syntax

```bash
lpc [command [arguments]]
```

When run without arguments, `lpc` enters interactive mode.

## Interactive Commands

- `status [printer]`: Show the current status of a printer queue.
- `start [printer]`: Start a printer queue.
- `stop [printer]`: Stop a printer queue (no new jobs accepted).
- `enable [printer]`: Enable the queue so it can accept jobs.
- `disable [printer]`: Disable the queue so it does not accept jobs.
- `restart [printer]`: Stop and restart the printer queue.
- `down [printer] [message]`: Take the queue down with a status message.
- `up [printer]`: Bring the queue back up.
- `topq printer job-id`: Move a job to the top of the queue.
- `clean [printer]`: Remove temporary files.
- `help [command]`: Show help.
- `exit` or `quit`: Leave interactive mode.

## Parameters

- `options`: Flags that change how `lpc` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Examples

```bash
lpc status all
```

Show the status of all printer queues.

```bash
lpc status OfficePrinter
```

Show the status of a specific printer.

```bash
lpc stop OfficePrinter
```

Stop the printer queue; jobs remain in the queue but are not processed.

```bash
lpc disable OfficePrinter
```

Prevent the queue from accepting new jobs.

```bash
lpc start OfficePrinter
```

Restart processing jobs in the queue.

```bash
lpc topq OfficePrinter 42
```

Move job ID 42 to the top of the queue.

```bash
lpc
```

Enter interactive mode for multiple commands.

## Practical Notes

- `lpc` is part of CUPS for LPD compatibility but many tasks are better done with `cupsenable`, `cupsdisable`, `lpstat`, and `lpadmin`.
- `stop` pauses queue processing but does not affect job acceptance; `disable` stops job acceptance.
- Some LPD-only features of `lpc` may not work with CUPS backends.

