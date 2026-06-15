---
name: reject
summary: Reject print jobs to a printer queue.
category: Administration
tags: printing, cups, lpd, queue, printer
popular: false
---

## Additional Notes

`reject` tells the print system to stop accepting print jobs on a specified printer queue. New print jobs are refused, but jobs already in the queue continue to process. It is used by system administrators to take a printer offline for maintenance, troubleshooting, or replacement.

On modern Linux systems using CUPS (Common Unix Printing System), `reject` is a wrapper around `cupsreject`. On legacy LPD systems, it interacts directly with the line printer daemon. The companion command `accept` re-enables the printer queue.

## Syntax

```bash
reject [options] [destination...]
```

## Parameters

- `destination`: Printer name or queue name.

## Common Options

- `-E`: Force encryption when connecting to the CUPS server.
- `-h host[:port]`: Specify the CUPS server hostname and port.
- `-r reason`: Provide a reason for rejecting jobs, shown to users.
- `-U username`: Specify the username for authentication.
- `--help`: Show help and exit.

## Examples

```bash
reject laserjet
```

Stop accepting jobs on the `laserjet` printer.

```bash
reject -r "Maintenance until 5pm" laserjet
```

Reject jobs with a message explaining the reason.

```bash
reject -h printserver.example.com:631 laserjet
```

Reject jobs on a remote CUPS server.

```bash
accept laserjet
```

Re-enable the printer queue (counterpart to `reject`).

```bash
reject -E -U admin laserjet
```

Reject jobs using encrypted connection as user `admin`.

## Practical Notes

- Use `lpstat -p` to see the current status of printer queues.
- Jobs already in the queue continue printing after `reject`. Use `cancel` to remove them.
- The `-r` reason message is displayed when users try to print with `lpstat -p` or printing applications.
- On CUPS systems, `reject` and `accept` modify the printer's `printer-is-accepting-jobs` attribute.
- For more advanced printer management, use the CUPS web interface at `http://localhost:631`.
