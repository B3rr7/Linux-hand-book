---
name: setpci
summary: Configure PCI device registers.
category: System
tags: pci, hardware, device, configuration
popular: false
---

## Additional Notes

`setpci` is a utility for querying and configuring PCI (Peripheral Component Interconnect) device configuration registers. It is part of the `pciutils` package alongside `lspci`. The PCI configuration space contains registers that control device behavior, such as interrupt settings, memory addresses, and vendor-specific features.

This tool is intended for advanced hardware debugging and development. Incorrectly modifying PCI configuration registers can cause system instability or hardware damage. It should only be used when you understand the specific register you are modifying and its effects.

## Syntax

```bash
setpci [options] devices operations...
```

## Parameters

- `devices`: PCI device selector (e.g., `0:1f.0` for bus:device.function).
- `operations`: Register read/write operations (e.g., `COMMAND.w=0x07`).

## Common Options

- `-s [[[[domain]:]bus]:][slot][.func]`: Select devices by bus/slot/function.
- `-d [vendor]:[device]`: Select devices by vendor and device ID.
- `-v`, `--verbose`: Show verbose output.
- `-D`, `--dump`: Dump all configuration registers for matching devices.
- `-G`, `--generate`: Generate output suitable for parsing.
- `-M`, `--map`: Show PCI memory mapping.

## Operations Format

Register operations use the format:
```
register.operation=value
```

- `register`: Hex offset of the configuration register (e.g., `10`, `3c`).
- `.operation`: `b` (byte, 8-bit), `w` (word, 16-bit), `l` (long, 32-bit).
- `=value`: Write the specified value to the register.
- No `=value`: Read the register value.

## Examples

```bash
setpci -s 0:1f.0 COMMAND.w
```

Read the command register for PCI device at bus 0, device 31, function 0.

```bash
setpci -s 0:1f.0 COMMAND.w=0x07
```

Write `0x07` to the command register (enable I/O, memory, and bus mastering).

```bash
setpci -d 8086:100e 10.l
```

Read the 32-bit value at offset 0x10 for any Intel (8086) device 100e.

```bash
setpci -D -s 0:02.0
```

Dump all configuration registers for the device at bus 0, device 2, function 0.

## Practical Notes

- The `lspci` command lists PCI devices with their bus:device.function addresses.
- Register names (`COMMAND`, `STATUS`, `REVISION`) are defined in `/usr/share/pci.ids`.
- Hex register offsets can be used instead of names: `setpci -s 0:1f.0 0x04.w`.
- Always read a register before writing to verify you have the correct device.
- Changes to PCI configuration registers are lost after a system reboot.
- Use `-D` to explore available registers before making changes.
