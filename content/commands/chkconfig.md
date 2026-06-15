---
name: chkconfig
summary: Manage SysV service startup links on older systems.
category: System
tags: service, sysvinit, startup, runlevel
popular: false
---

## Additional Notes

`chkconfig` manages service startup configuration on SysVinit-style systems, especially older RHEL, CentOS, and compatible distributions. It controls which services start in which runlevels.

On systemd systems, use `systemctl enable`, `systemctl disable`, and `systemctl is-enabled` instead.

## Syntax

```bash
chkconfig [options]
chkconfig service on|off|reset
chkconfig --level levels service on|off
```

## Parameters

- `service`: Init script service name.
- `levels`: Runlevel numbers such as `345`.
- `options`: Listing, add, delete, and level controls.

## Common Options

- `--list`: List service startup settings.
- `--add SERVICE`: Add a service to chkconfig management.
- `--del SERVICE`: Remove a service from chkconfig management.
- `--level LEVELS`: Select runlevels.

## Examples

```bash
chkconfig --list
```

List service startup settings.

```bash
sudo chkconfig httpd on
```

Enable a service for default runlevels.

```bash
sudo chkconfig --level 35 httpd on
```

Enable a service in runlevels 3 and 5.

```bash
systemctl is-enabled httpd
```

Modern systemd equivalent check.

## Practical Notes

- `chkconfig` is mostly legacy.
- Know whether the system uses SysVinit or systemd before changing service startup.
- Enabling startup does not necessarily start the service immediately.
