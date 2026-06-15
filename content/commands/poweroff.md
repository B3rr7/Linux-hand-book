---
name: poweroff
summary: Power off the system.
category: Administration
tags: shutdown, poweroff, halt, reboot, system
popular: true
---

## Additional Notes

`poweroff` shuts down the system and powers it off. It sends a signal to the init system (systemd or SysV init) to begin an orderly shutdown sequence: running shutdown scripts, stopping services, unmounting filesystems, and finally powering off the hardware.

On modern Linux distributions using systemd, `poweroff` is equivalent to `systemctl poweroff`. On SysV init systems, it calls the `halt` or `shutdown` commands to perform the shutdown. The command requires root privileges or systemd-logind session permissions.

## Syntax

```bash
poweroff [options]
```

## Parameters

- `options`: Flags that change how `poweroff` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--help`: Show help and exit.
- `--version`: Show version information.
- `--no-wall`: Do not send a wall message before shutdown.
- `-f`, `--force`: Force immediate poweroff without calling shutdown scripts.
- `-i`, `--init`: Shut down using the init system (SysV compatibility).
- `-w`, `--wtmp-only`: Write wtmp record only; do not actually power off.

## Examples

```bash
poweroff
```

Power off the system immediately.

```bash
sudo poweroff
```

Power off as root (or via sudo for non-root users).

```bash
poweroff --no-wall
```

Power off without notifying logged-in users.

```bash
poweroff -f
```

Force immediate poweroff without service shutdown.

## Practical Notes

- Non-root users may need to be in the `wheel` or `sudo` group to run `poweroff`.
- On systemd systems, `poweroff` is the same as `systemctl poweroff`.
- To schedule a shutdown, use `shutdown -h +5` (shutdown in 5 minutes) instead of `poweroff`.
- Running `poweroff` from an SSH session may hang if the system does not handle the session properly; use `shutdown` or `systemctl` for cleaner remote shutdowns.
- The `-f` flag skips the shutdown process and forces immediate poweroff. Use it only if the system is unresponsive to normal shutdown.
- Use `reboot` instead of `poweroff` to restart the system.
