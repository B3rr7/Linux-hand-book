---
name: telinit
summary: Change the system runlevel or send signals to init.
category: System
tags: init, runlevel, systemd, sysvinit
popular: false
---

## Additional Notes

`telinit` communicates with the init process (PID 1) to change the system's runlevel or send control signals. On SysV-init systems, it changes the operating mode by signaling the init daemon, which then starts or stops services according to the runlevel definitions in `/etc/inittab`.

On systemd-based systems, `telinit` is a compatibility wrapper that maps traditional runlevel requests to systemd targets. For example, `telinit 3` becomes `systemctl isolate multi-user.target`, and `telinit 5` maps to `graphical.target`. This allows scripts and administrators familiar with SysV commands to continue using `telinit` on modern systems.

## Syntax

```bash
telinit [runlevel | signal]
```

## Parameters

- `runlevel`: A single digit 0-6, or the characters `S`/`s` for single-user mode, `a`/`b`/`c` for custom runlevels.
- `signal`: Alternatives like `q` (reload configuration), `u` (re-exec init).

## Common Runlevels

- `0`: Halt/shutdown the system.
- `1` or `s`/`S`: Single-user mode (maintenance/rescue).
- `2`: Multi-user mode (without network, sometimes without GUI).
- `3`: Multi-user mode with networking (text mode).
- `4`: Undefined/custom.
- `5`: Multi-user mode with GUI (X11).
- `6`: Reboot the system.

## Special Options

- `q`: Have init re-examine `/etc/inittab` (SysV). On systemd, this is a no-op.
- `u`: Re-exec the init daemon (without changing runlevel).

## Examples

```bash
telinit 1
```

Switch to single-user maintenance mode.

```bash
telinit 3
```

Switch to multi-user text mode.

```bash
telinit 5
```

Switch to graphical mode.

```bash
telinit 6
```

Reboot the system.

```bash
telinit q
```

Have init re-read its configuration (SysV only).

```bash
telinit u
```

Re-exec the init process (for updating init itself without reboot).

## Practical Notes

- On systemd systems, `telinit` and `init` are symbolic links to `systemctl`.
- The `shutdown`, `halt`, `poweroff`, `reboot` commands are preferred for stopping the system.
- Runlevel 2 is distribution-specific: some treat it the same as 3, others do not.
- Use `runlevel` to check the current and previous runlevel.
- In container environments, `telinit` may not be available or may have no effect.
- The traditional `/etc/inittab` file is ignored by systemd.
