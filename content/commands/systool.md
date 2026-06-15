---
name: systool
summary: View system device information from sysfs.
category: System
tags: sysfs, devices, hardware, bus, driver
popular: false
---

## Additional Notes

`systool` displays device information from the sysfs filesystem (`/sys/`). It shows the hierarchical structure of devices, buses, classes, and drivers on the system. It is part of the `sysfsutils` package and provides a structured view of the kernel's device model.

The output organizes devices by bus type (PCI, USB, SCSI, etc.), class (net, input, sound, etc.), and driver. This makes `systool` useful for understanding hardware topology, finding device dependencies, and troubleshooting driver issues without navigating `/sys/` manually.

## Syntax

```bash
systool [options] [object...]
```

## Parameters

- `object`: A device, bus, class, or driver name to inspect.

## Common Options

- `-a`, `--show-attributes`: Show device attributes (e.g., vendor ID, device ID, speed).
- `-b bus`, `--bus bus`: Show information for devices on a specific bus (pci, usb, scsi).
- `-c class`, `--class class`: Show information for a specific device class (net, input, sound, block).
- `-d driver`, `--driver driver`: Show information for a specific driver.
- `-m`, `--show-module`: Show the kernel module associated with a driver.
- `-p`, `--devpath`: Show the device path in the sysfs filesystem.
- `-t`, `--show-topology`: Show device topology and relationships.
- `-v`, `--verbose`: Show detailed information (attributes, paths, etc.).
- `-h`, `--help`: Show usage information.

## Examples

```bash
systool
```

List all buses, classes, and drivers known to sysfs.

```bash
systool -b pci
```

Show all PCI devices and their attributes.

```bash
systool -c net
```

Show all network devices and their attributes.

```bash
systool -c net -v
```

Show detailed information about network devices, including attributes.

```bash
systool -b usb -v
```

Show detailed information about USB devices, including speed and manufacturer.

```bash
systool -c block -a
```

Show all block devices with their attributes (size, model, queue parameters).

## Practical Notes

- `systool` reads from `/sys/` which is a virtual filesystem provided by the kernel.
- The `lspci`, `lsusb`, and `lsscsi` commands are often more convenient for specific bus types.
- Device attributes include vendor IDs, product IDs, driver bindings, power state, and more.
- For scripting, parsing `/sys/` directly may be more flexible than using `systool`.
- The `sysfsutils` package may not be installed by default on all distributions.
