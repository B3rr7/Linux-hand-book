---
name: clock
summary: Read or set the hardware clock on older systems.
category: System
tags: time, hardware clock, rtc, system
popular: false
---

## Additional Notes

`clock` is an older command for reading or setting the hardware clock, also called the real-time clock or RTC. On many Linux systems, `hwclock` is the modern/common command.

Use this page mainly for legacy command recognition.

## Syntax

```bash
clock [options]
```

## Parameters

- `options`: Read, set, UTC/localtime, and system-clock synchronization controls depending on implementation.

## Common Options

- `-r`: Read the hardware clock on some implementations.
- `-w`: Write system time to the hardware clock on some implementations.
- `-s`: Set system time from the hardware clock on some implementations.
- `--utc`: Treat hardware clock as UTC when supported.
- `--localtime`: Treat hardware clock as local time when supported.

## Examples

```bash
clock -r
```

Read the hardware clock on systems that provide this command.

```bash
hwclock --show
```

Common modern equivalent.

```bash
timedatectl
```

Inspect system time configuration on systemd systems.

## Practical Notes

- Prefer `hwclock` or `timedatectl` on modern Linux.
- Incorrect hardware-clock settings can cause boot-time and certificate problems.
- Be careful with UTC versus localtime settings, especially on dual-boot systems.
