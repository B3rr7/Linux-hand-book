---
name: usernetctl
summary: Control user-managed network interfaces.
category: Network
tags: network, interface, user, control, ppp
popular: false
---

## Additional Notes

`usernetctl` controls the status of user-managed network interfaces on Linux systems. It allows non-root users to bring interfaces up or down when permitted by system policy. This command is part of the legacy `sysvinit` network scripts (specifically from the `sysvinit` or `initscripts` package) and is rarely needed on systems using `systemd-networkd` or `NetworkManager`.

It checks configuration in `/etc/sysconfig/network-scripts/` and `/etc/network/` to determine whether a user is allowed to change the interface state. If the interface is marked as user-controlled, ordinary users can use this command to start or stop the interface.

## Syntax

```bash
usernetctl <interface> <up|down|status>
```

## Parameters

- `interface`: Network interface name (e.g. `eth0`, `ppp0`).
- `up`: Bring the interface up.
- `down`: Bring the interface down.
- `status`: Show the current interface state.

## Examples

```bash
usernetctl ppp0 up
```

Bring up a user-controlled PPP interface.

```bash
usernetctl eth0 status
```

Check the status of `eth0`.

```bash
usernetctl wlan0 down
```

Bring down a user-controlled wireless interface.

## Practical Notes

- Not all interfaces allow user control. The interface must be configured as user-manageable in the network scripts.
- On modern distributions, `nmcli` or `systemctl` replace `usernetctl`.
- This command is part of the legacy network scripts, which may not be installed on minimal or systemd-only systems.
- For PPPoE or dial-up connections, `pon` and `poff` are more common alternatives.
