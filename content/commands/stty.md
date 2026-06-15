---
name: stty
summary: Change and report terminal line settings.
category: System
tags: terminal, tty, settings, serial, configuration
popular: false
---

## Additional Notes

`stty` displays and modifies the parameters of a terminal device. It controls the terminal driver's behavior, including baud rate, character size, flow control, line discipline, and how special characters (like erase, kill, interrupt) are interpreted.

This command is essential for configuring serial ports, fixing terminal display issues, and setting up embedded device connections. Without arguments, `stty` shows the current terminal settings in a human-readable format. The `-a` flag shows all settings.

## Syntax

```bash
stty [options] [setting...]
```

## Parameters

- `-F device`: Specify the terminal device (e.g., `/dev/ttyUSB0`, `/dev/ttyS0`).
- `setting`: Configuration changes in the form `keyword value` or `keyword`.

## Common Options

- `-a`, `--all`: Show all current settings in human-readable form.
- `-g`, `--save`: Show settings in a stty-readable format (for saving and restoring).
- `-F`, `--file device`: Open and operate on the specified device instead of stdin.

## Common Settings

**Speed:**
- `speed N`: Set baud rate (e.g., `9600`, `115200`).
- `ispeed N`: Set input baud rate.
- `ospeed N`: Set output baud rate.

**Character Size and Parity:**
- `cs5`, `cs6`, `cs7`, `cs8`: Set character size to 5, 6, 7, or 8 bits.
- `parity`: Enable parity generation and checking.
- `-parity`: Disable parity.
- `parodd`: Set odd parity (default even).
- `cmspar`: Use stick parity.

**Flow Control:**
- `ixon`: Enable XON/XOFF flow control (Ctrl-S/Ctrl-Q).
- `-ixon`: Disable XON/XOFF flow control.
- `ixoff`: Enable sending of XON/XOFF characters.
- `crtscts`: Enable hardware (RTS/CTS) flow control.
- `-crtscts`: Disable hardware flow control.

**Stop Bits:**
- `cstopb`: Two stop bits.
- `-cstopb`: One stop bit.

**Input Processing:**
- `ignbrk`: Ignore break signals.
- `brkint`: Make break signal generate an interrupt.
- `icrnl`: Map carriage return to newline on input.
- `opost`: Enable output processing.
- `onlcr`: Map newline to carriage return-newline on output.

**Local Settings:**
- `echo`: Echo input characters back to output.
- `-echo`: Disable echo (for password prompts).
- `echoe`: Echo erase character as backspace-space-backspace.
- `echok`: Echo newline after kill character.
- `icanon`: Enable canonical mode (line-by-line input with editing).
- `-icanon`: Enable raw mode (character-by-character input).
- `isig`: Enable signal character processing (Ctrl-C, Ctrl-Z).
- `-isig`: Disable signal character processing.

**Special Characters:**
- `intr CHAR`: Set interrupt character (default Ctrl-C).
- `quit CHAR`: Set quit character (default Ctrl-\).
- `erase CHAR`: Set erase character (default Backspace or Del).
- `kill CHAR`: Set kill character (default Ctrl-U).
- `eof CHAR`: Set EOF character (default Ctrl-D).
- `susp CHAR`: Set suspend character (default Ctrl-Z).

## Examples

```bash
stty -a
```

Show all current terminal settings.

```bash
stty -F /dev/ttyUSB0 115200 cs8 -cstopb -parity
```

Configure a serial port at 115200 baud, 8 data bits, 1 stop bit, no parity.

```bash
stty -g
```

Show settings in a format that can be saved and restored.

```bash
stty -echo
```

Disable echo (useful for password entry scripts).

```bash
stty echo
```

Re-enable echo.

```bash
stty raw
```

Set the terminal to raw mode (no line buffering, no signal processing).

```bash
stty sane
```

Reset the terminal to a reasonable default state (useful after a program crashes with garbled terminal).

```bash
stty intr '^C'
```

Set the interrupt character to Ctrl-C.

```bash
stty erase '^?'
```

Set the erase character to Delete.

## Practical Notes

- If your terminal becomes garbled, `stty sane` usually restores normal behavior.
- `stty raw` is used by programs like `ssh` and `telnet` for direct character transmission.
- Serial port configuration (`stty -F /dev/ttyUSB0`) requires appropriate permissions.
- Save and restore settings with `OLD=$(stty -g)` and `stty "$OLD"`.
- The `sane` setting is a safe default that works for most modern terminals.
- Changes affect only the terminal device associated with the current process (unless `-F` is used).
