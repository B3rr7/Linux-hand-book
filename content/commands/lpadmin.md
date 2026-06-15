---
name: lpadmin
summary: Configure CUPS printers and classes.
category: Administration
tags: printer, cups, admin, queue, configure
popular: false
---

## Additional Notes

`lpadmin` is the primary tool for configuring printers and print classes in the CUPS (Common Unix Printing System) printing system. It can add, remove, and modify printers as well as set the default printer and configure printer class membership.

It requires root privileges or membership in the `lpadmin` group. Configuration changes made with `lpadmin` are persistent and stored in the CUPS configuration directory (`/etc/cups/`).

## Syntax

```bash
lpadmin [options] [printer-name]
```

## Parameters

- `printer-name`: The name of the printer to add, modify, or remove.

## Common Options

- `-p printer`: Specify the printer to configure.
- `-x printer`: Remove the specified printer.
- `-d printer`: Set the system default printer.
- `-E`: Enable the printer and accept jobs.
- `-D description`: Set a human-readable description.
- `-L location`: Set the physical location of the printer.
- `-m model`: Specify the PPD (PostScript Printer Description) file or driver model.
- `-v device-uri`: Set the device URI for the printer (e.g., `usb://...`, `socket://...`, `ipp://...`).
- `-P ppd-file`: Specify a PPD file to use.
- `-u allow:user-list` or `-u deny:user-list`: Set user access control.
- `-c class`: Add the printer to the specified class.
- `-r class`: Remove the printer from the specified class.

## Examples

```bash
lpadmin -p OfficePrinter -E -v socket://192.168.1.100:9100 -m everywhere
```

Add a network printer using the driverless `everywhere` model.

```bash
lpadmin -p MyPrinter -E -v usb://HP/Deskjet%20Ink%20Advantage%20K209a?serial=XXXX -m driver.ppd
```

Add a USB printer with a specific PPD file.

```bash
lpadmin -x OldPrinter
```

Remove a printer.

```bash
lpadmin -d OfficePrinter
```

Set `OfficePrinter` as the system default.

```bash
lpadmin -p OfficePrinter -u allow:alice,bob
```

Restrict printer access to specific users.

```bash
lpadmin -p OfficePrinter -D "Second floor, near break room" -L "Building A, Floor 2"
```

Set the description and location.

```bash
lpadmin -p OfficePrinter -c Marketing
```

Add the printer to the `Marketing` class.

## Practical Notes

- After adding a printer, verify it with `lpstat -p printer -l` or by printing a test page: `lp -d printer /etc/nsswitch.conf`.
- The `-m everywhere` option uses CUPS driverless printing with IPP Everywhere, which works with most modern network printers.
- PPD files are typically found in `/usr/share/ppd/` or can be downloaded from the printer manufacturer.
- To see all available driver models: `lpinfo -m`.

