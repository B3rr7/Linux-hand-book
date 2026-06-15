---
name: ntsysv
summary: Configure which SysV services start at boot.
category: Administration
tags: services, init, boot, runlevel, systemd, chkconfig
popular: false
---

## Additional Notes

`ntsysv` is a text-based interface for managing SysV init service runlevels on Red Hat-based Linux distributions. It provides a simple menu showing all installed services and allows the administrator to enable or disable services for different runlevels using the space bar.

`ntsysv` modifies the same symbolic links in `/etc/rc.d/rc*.d/` directories that `chkconfig` manages. It is part of the `chkconfig` package and serves as an interactive alternative for users who prefer menu-driven configuration over command-line tools. On systems using systemd, `ntsysv` is deprecated and `systemctl` should be used instead.

## Syntax

```bash
ntsysv [--level levels] [--back]
```

## Parameters

- `options`: Flags that change how `ntsysv` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--level levels`: Specify runlevels to configure. Use `--level 3` or `--level 235`.
- `--back`: Show a Back button in the interface.
- `--help`: Show help and exit.

## Examples

```bash
ntsysv
```

Open the interactive service configuration for the current runlevel.

```bash
ntsysv --level 3
```

Configure services for runlevel 3 only.

```bash
ntsysv --level 35
```

Configure services for runlevels 3 and 5 simultaneously.

```bash
ntsysv --back
```

Open the interface with a Back button available.

## Practical Notes

- `ntsysv` requires root privileges. Run it with `sudo`.
- The Enter key confirms changes. Space bar toggles a service on or off.
- Runlevels on Red Hat systems: 0 (halt), 1 (single-user), 2 (multi-user without NFS), 3 (full multi-user), 4 (unused), 5 (graphical), 6 (reboot).
- On modern distributions using systemd, use `systemctl enable/disable service` and `systemctl set-default multi-user.target` instead.
- The package containing `ntsysv` is typically `ntsysv` or `chkconfig` on RHEL/CentOS/Fedora systems.
