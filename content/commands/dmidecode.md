---
name: dmidecode
summary: Read hardware information from DMI/SMBIOS tables.
category: System
tags: hardware, bios, system, inventory
popular: false
---

## Additional Notes

`dmidecode` is a system command used to read hardware information from DMI/SMBIOS tables. It reads SMBIOS/DMI tables provided by the system firmware to report details about the motherboard, BIOS, memory modules, and processor. It requires root access on most systems.

## Syntax

```bash
dmidecode [options] [arguments]
```

## Parameters

- `options`: Flags that change how `dmidecode` behaves.

## Common Options

- `-t TYPE`: Show a specific type such as `system`, `memory`, or `bios`.
- `-s KEYWORD`: Show a specific string.
- `-q`: Less verbose output.

## Examples

```bash
sudo dmidecode
sudo dmidecode -t memory
sudo dmidecode -s system-product-name
```

## Practical Notes

`dmidecode` usually requires root and reports firmware-provided inventory data.
