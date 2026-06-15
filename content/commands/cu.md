---
name: cu
summary: Connect to another system or serial line.
category: Network
tags: serial, modem, terminal, connection
popular: false
---

## Additional Notes

`cu` is an older call-up utility for connecting to serial lines, modems, or remote systems. It may appear in UUCP-era documentation and serial console workflows.

Modern users often use `screen`, `minicom`, `picocom`, or `socat` for serial console access.

## Syntax

```bash
cu [options] [system]
cu -l device -s speed
```

## Parameters

- `system`: Named remote system from configuration.
- `device`: Serial device such as `/dev/ttyUSB0`.
- `speed`: Baud rate such as `115200`.
- `options`: Line, speed, and debug controls.

## Common Options

- `-l DEVICE`: Use a specific line or device.
- `-s SPEED`: Set connection speed.
- `-d`: Debug mode on some implementations.
- `-e`: Set escape character on some implementations.

## Examples

```bash
cu -l /dev/ttyUSB0 -s 115200
```

Open a serial connection.

```bash
screen /dev/ttyUSB0 115200
```

Common modern alternative.

## Practical Notes

- Serial devices often require membership in groups such as `dialout` or `uucp`.
- Exit sequences depend on the implementation and escape character.
- Use modern serial tools if `cu` is not installed or is awkward.
