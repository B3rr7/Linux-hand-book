---
name: lilo
summary: LInux LOader; install and manage the bootloader.
category: System
tags: bootloader, boot, lilo, mbr, kernel
popular: false
---

## Additional Notes

`lilo` (LInux LOader) is a bootloader for Linux that loads the kernel from a hard disk or floppy disk into memory at boot time. It was the primary bootloader for Linux before GRUB became the standard.

Unlike GRUB, LILO has no interactive command shell at boot and cannot read filesystems; it relies on pre-computed disk geometry and sector addresses written during installation. Any change to the kernel or boot configuration requires re-running `lilo` to update the boot sector. LILO is still used in some specialized or legacy environments.

## Syntax

```bash
lilo [options]
```

## Parameters

- `options`: Flags that change how `lilo` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-v`: Increase verbosity. Use multiple times for more detail.
- `-t`: Test mode; show what would be written without actually writing.
- `-q`: Query the currently installed boot map.
- `-r root-dir`: Perform the installation in a chroot environment.
- `-C file`: Use an alternative configuration file (default is `/etc/lilo.conf`).
- `-b device`: Install the boot loader on the specified device (e.g., `/dev/sda`).
- `-M device`: Write a Master Boot Record (MBR) to the specified device.
- `-u device`: Uninstall LILO from the specified device.

## Configuration (`/etc/lilo.conf`)

Key configuration directives in `/etc/lilo.conf`:

- `boot=/dev/sda`: Device where LILO is installed.
- `root=/dev/sda1`: Root filesystem partition.
- `image=/boot/vmlinuz`: Path to the kernel image.
- `label=Linux`: Label displayed at boot prompt.
- `initrd=/boot/initrd.img`: Initial RAM disk image.
- `read-only`: Mount root filesystem read-only initially.
- `append="param=value"`: Append kernel command-line parameters.
- `timeout=50`: Timeout in tenths of seconds before booting default.
- `default=Linux`: The default boot label.
- `lba32`: Use LBA32 addressing for disks over 1024 cylinders.

## Examples

```bash
lilo
```

Read `/etc/lilo.conf` and install the bootloader.

```bash
lilo -t
```

Test the configuration without writing anything.

```bash
lilo -q
```

Display the currently installed boot map.

```bash
lilo -C /etc/lilo.custom.conf -b /dev/sdb
```

Use a custom configuration file and install to a different disk.

```bash
lilo -M /dev/sda
```

Write a generic MBR to `/dev/sda`, removing LILO.

## Practical Notes

- A kernel change or a modified `lilo.conf` requires running `lilo` again. Forgetting this step can make the system unbootable.
- Keep a rescue disk or alternative boot method available when working with bootloader changes.
- LILO is limited to 16 boot images in older versions and may not handle very large disks without LBA32.
- Modern systems almost exclusively use GRUB2 or systemd-boot. LILO is primarily for legacy or minimal environments.

