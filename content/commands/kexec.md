---
name: kexec
summary: Load and boot a new kernel from the currently running system.
category: System
tags: kernel, boot, kexec, reboot, crash
popular: false
---

## Additional Notes

`kexec` loads a new kernel into memory and boots it directly without going through the full firmware or bootloader cycle. This significantly reduces reboot time because the hardware initialization phase is skipped.

It is commonly used for fast reboots during kernel development, testing new kernels without full reboots, and setting up crash dump kernels (kdump) for capturing kernel panic information. The `kexec` system call is the underlying mechanism that tools like `systemd-kexec` use for fast reboots.

## Syntax

```bash
kexec [options] [kernel-image]
```

## Parameters

- `kernel-image`: The path to the kernel binary to load (e.g., `/boot/vmlinuz-linux`).

## Common Options

- `-l kernel`, `--load kernel`: Load the specified kernel for later execution.
- `-e`, `--exec`: Immediately execute the currently loaded kernel.
- `-u`, `--unload`: Unload the currently loaded kernel image.
- `-p`, `--load-panic`: Load a kernel for use as a crash dump kernel (kdump).
- `--initrd initrd`: Specify the initramfs image to use.
- `--command-line=string`: Set the kernel command line.
- `--reuse-cmdline`: Reuse the command line from the running kernel.
- `-t type`, `--type type`: Specify the kernel type (e.g., `bzImage`).

## Examples

```bash
kexec -l /boot/vmlinuz-linux --initrd=/boot/initramfs-linux.img --reuse-cmdline
kexec -e
```

Load a new kernel and immediately boot into it.

```bash
kexec -l /boot/vmlinuz-linux --initrd=/boot/initramfs-linux.img --command-line="root=/dev/sda1 ro quiet"
kexec -e
```

Load a kernel with a custom command line.

```bash
kexec -p /boot/vmlinuz-linux --initrd=/boot/initramfs-linux-fallback.img --reuse-cmdline
```

Load a panic/crash dump kernel for kdump.

```bash
kexec -u
```

Unload the currently loaded kexec kernel.

## Practical Notes

- Running `kexec -e` immediately boots the new kernel; save your work first.
- On UEFI systems, `kexec` may behave differently or require `efi-boot` support.
- For crash dumping, ensure the crash kernel is configured with the `crashkernel=` kernel parameter.
- `systemctl kexec` uses `kexec` under the hood and handles service shutdown gracefully.

