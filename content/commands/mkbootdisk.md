---
name: mkbootdisk
summary: Create a boot floppy disk for the current kernel.
category: Administration
tags: boot, floppy, rescue, kernel, recovery
popular: false
---

## Additional Notes

`mkbootdisk` creates a bootable floppy disk for the currently running Linux kernel. It writes the kernel image and a minimal initramfs to a floppy disk, allowing the system to boot if the hard drive bootloader fails or the boot configuration is corrupted.

This command was primarily used on older systems with floppy disk drives. It is largely obsolete on modern hardware but may still be available in some enterprise distributions for compatibility purposes.

## Syntax

```bash
mkbootdisk [options] kernel-version
```

## Parameters

- `kernel-version`: The kernel version string (e.g., `6.8.0-arch1-1`), as shown by `uname -r`.

## Common Options

- `--device device`: Write the boot image to the specified device (e.g., `/dev/fd0`).
- `--mkinitrd-args args`: Pass additional arguments to `mkinitrd`.
- `--noprompt`: Do not prompt before writing.
- `--verbose`: Show detailed progress.
- `--version`: Show version information.

## Examples

```bash
mkbootdisk --device /dev/fd0 $(uname -r)
```

Create a boot floppy for the current kernel.

```bash
mkbootdisk --noprompt --device /dev/fd0 5.10.0-20-amd64
```

Create a boot floppy without prompting.

```bash
mkbootdisk --verbose --device /dev/fd0 $(uname -r)
```

Create a boot floppy with verbose output.

## Practical Notes

- Floppy disks are unreliable and rarely used. For modern rescue media, create a bootable USB with tools like `dd`, `ventoy`, or distribution-specific live USB creators.
- If `mkbootdisk` is not available, check if your distribution provides `mkrescue` or similar tools.
- The kernel version argument is the same as the directory name under `/lib/modules/`.

