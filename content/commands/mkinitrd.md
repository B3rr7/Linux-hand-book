---
name: mkinitrd
summary: Create an initial RAM disk image for booting.
category: Administration
tags: initrd, initramfs, boot, kernel, modules
popular: false
---

## Additional Notes

`mkinitrd` creates an initial RAM disk (initrd) image for the Linux kernel. The initrd is a temporary root filesystem loaded into memory during boot that contains essential kernel modules and tools needed to mount the real root filesystem.

On modern systems, `mkinitrd` is often a wrapper around `mkinitcpio` (Arch), `dracut` (Fedora/RHEL), or `initramfs-tools` (Debian/Ubuntu). The initramfs handles loading storage drivers, filesystem modules, LVM, encryption, and other requirements before the real root filesystem is mounted.

## Syntax

```bash
mkinitrd [options] [image-name] [kernel-version]
```

## Parameters

- `image-name`: The output path for the initrd image (e.g., `/boot/initramfs-linux.img`).
- `kernel-version`: The kernel version string (e.g., `6.8.0-arch1-1`). Defaults to the currently running kernel.

## Common Options

- `-f`: Overwrite an existing initrd image without prompting.
- `-v`: Verbose output.
- `-k kernel-version`: Specify the kernel version.
- `-m module-list`: Comma-separated list of kernel modules to include.
- `-P`: Only print the configuration and exit (dry-run).
- `-b basedir`: Use an alternative base directory for boot files.
- `-preload module`: Preload a module before others.
- `-s`: Skip any initial setup commands.

## Examples

```bash
mkinitrd
```

Create an initrd for the current kernel with default settings.

```bash
mkinitrd /boot/initramfs-linux-fallback.img 6.8.0-arch1-1
```

Create an initrd with a specific name and kernel version.

```bash
mkinitrd -f /boot/initramfs-linux.img
```

Overwrite an existing initrd image.

```bash
mkinitrd -v -m "ext4,ata_piix,ehci_hcd"
```

Create an initrd with specific modules and verbose output.

## Practical Notes

- Each distribution has its own preferred tool: `dracut` (RHEL/Fedora), `mkinitcpio` (Arch), `update-initramfs` (Debian/Ubuntu).
- Always rebuild the initrd after adding new hardware controllers, changing filesystem types, or modifying kernel module configuration.
- A fallback or backup initrd image is recommended in case the primary image fails to boot.
- The kernel version corresponds to a directory under `/lib/modules/`.

