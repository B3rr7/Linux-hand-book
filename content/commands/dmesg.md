---
name: dmesg
summary: Print kernel ring buffer messages.
category: System
tags: kernel, boot, hardware, logs
popular: true
---

## Additional Notes

`dmesg` prints the kernel ring buffer messages, which contain hardware detection, driver loading, filesystem, and system event information. It is especially useful for debugging hardware issues, viewing boot messages, and monitoring device events.

## Syntax

```bash
dmesg [options] [arguments]
```

## Parameters

- `options`: Flags that change how `dmesg` behaves.

## Common Options

- `-T`: Show human readable timestamps when supported.
- `-w`: Follow new messages.
- `-l LEVEL`: Filter by log level.
- `-H`: Human friendly output.

## Examples

```bash
dmesg
dmesg -T
dmesg -w
dmesg -l err
```

## Practical Notes

`dmesg` is useful for hardware, driver, boot, and kernel troubleshooting.
