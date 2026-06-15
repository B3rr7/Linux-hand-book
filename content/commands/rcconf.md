---
name: rcconf
summary: Debian runlevel configuration tool.
category: Administration
tags: services, runlevel, debian, sysv, init, service management
popular: false
---

## Additional Notes

`rcconf` is a Debian-specific text-based tool for managing which SysV init services start at each runlevel. It presents a menu of installed services and allows the administrator to enable or disable them using keyboard navigation.

It provides similar functionality to `update-rc.d` and `sysv-rc-conf` but with a friendlier interactive interface. On modern Debian systems using systemd, `rcconf` is deprecated, and `systemctl` should be used instead. However, `rcconf` may still be available for legacy SysV init compatibility.

## Syntax

```bash
rcconf [options]
```

## Parameters

- `options`: Flags that change how `rcconf` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--help`: Show help and exit.
- `--version`: Show version information.
- `--list`: List all available services.
- `--priority`: Show service priorities.
- `--purge`: Remove all rc.d links for a service.

## Examples

```bash
rcconf
```

Open the interactive service configuration menu.

```bash
rcconf --list
```

List all services and their current status.

```bash
rcconf --priority
```

Show services with their start/stop priorities.

## Practical Notes

- Use the space bar to toggle a service on or off in the menu. Tab moves between buttons.
- Changes take effect after the next reboot or by manually starting/stopping services.
- On systemd-based Debian systems (Debian 8+), use `systemctl` or `sysv-rc-conf` instead.
- `rcconf` requires root privileges. Run with `sudo`.
- The configuration it modifies is stored in `/etc/rc?.d/` symlinks.
- Install with `sudo apt install rcconf` if not already available.
