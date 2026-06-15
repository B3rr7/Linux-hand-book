---
name: runlevel
summary: Show the current and previous system runlevel.
category: System
tags: runlevel, init, sysv, systemd
popular: false
---

## Additional Notes

`runlevel` displays the current and previous system runlevels as maintained by the init system. On SysV-init systems, runlevels are numbered 0 through 6, with common conventions: 0 (halt), 1 (single-user), 3 (multi-user with network), 5 (multi-user with GUI), and 6 (reboot).

On systemd-based systems, `runlevel` is a compatibility wrapper that maps systemd targets to traditional runlevel equivalents. The output includes two characters: the previous runlevel and the current runlevel. An `N` in the previous position means the runlevel has never changed since boot.

## Syntax

```bash
runlevel
```

## Parameters

None.

## Common Options

- `--help`: Show help.
- `--version`: Show version information.

## Examples

```bash
runlevel
```

Output: `N 5` (previous was N/none, current is runlevel 5).

```bash
runlevel
```

Output: `5 3` (previous was 5, current is 3).

## Practical Notes

- The previous runlevel is displayed first, followed by the current runlevel.
- `N` as the previous runlevel indicates the system booted directly into the current level.
- On systemd systems, `runlevel` is a symlink to `systemctl` and maps targets (e.g., `runlevel3.target`).
- Traditional runlevels: 0 (halt), 1 (single), 2 (multi-user without NFS), 3 (multi-user), 4 (unused), 5 (graphical), 6 (reboot).
- Use `who -r` for a more detailed view of the current runlevel and process status.
