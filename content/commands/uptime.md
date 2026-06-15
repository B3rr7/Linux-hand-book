---
name: uptime
summary: Show how long the system has been running and load average.
category: System
tags: system, load, uptime, users, performance
popular: true
---

## Additional Notes

`uptime` prints the current time, how long the system has been running, logged-in user count, and load averages.

Load average is a quick signal of system pressure, but it needs context from CPU count and workload type.

## Syntax

```bash
uptime [options]
```

## Parameters

- `options`: Flags that change how `uptime` behaves.

## Common Options

- `-p`, `--pretty`: Show uptime in a friendly format.
- `-s`, `--since`: Show when the system booted.
- `-V`, `--version`: Show version.

## Examples

```bash
uptime
```

Show uptime and load average.

```bash
uptime -p
```

Show only friendly uptime.

```bash
uptime -s
```

Show boot time.

## Reading Load Average

The three load numbers are averages over:

- 1 minute.
- 5 minutes.
- 15 minutes.

On a 1-core system, load `1.00` means roughly full use. On a 4-core system, load `4.00` can be normal full use.

## Practical Notes

- Use `nproc` or `lscpu` to understand CPU count.
- High load with high CPU means CPU pressure.
- High load with high I/O wait can mean disk or network storage pressure.
- Use `top` for live process detail.
