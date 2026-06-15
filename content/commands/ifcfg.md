---
name: ifcfg
summary: Configure network interface parameters via Wicd.
category: Network
tags: network, interface, wicd, configuration, wireless
popular: false
---

## Additional Notes

`ifcfg` is a command-line tool from the Wicd network manager for configuring network interfaces. Wicd is a lightweight network manager that handles both wired and wireless connections. The `ifcfg` command provides direct control over interface settings.

It can be used to set IP addresses, netmasks, wireless parameters, and other interface configurations. The command interacts with Wicd's configuration files and can be used as an alternative to `ifconfig` or `ip` for Wicd-managed interfaces.

## Syntax

```bash
ifcfg [options] interface [command]
```

## Parameters

- `interface`: The network interface to configure (e.g., `eth0`, `wlan0`).
- `command`: The action to perform.

## Common Commands

- `up`: Bring the interface up.
- `down`: Take the interface down.
- `status`: Show the current interface status.
- `info`: Show detailed interface information.
- `wireless`: Show wireless connection details.

## Common Options

- `-h`, `--help`: Display help.
- `-v`, `--verbose`: Show detailed output.

## Examples

```bash
ifcfg eth0 up
```

Bring the `eth0` interface up.

```bash
ifcfg wlan0 down
```

Take the `wlan0` interface down.

```bash
ifcfg eth0 status
```

Show the current status of `eth0`.

## Practical Notes

- `ifcfg` is specific to the Wicd network manager. Modern systems use `networkmanager` and `nmcli` instead.
- For direct interface configuration without a network manager, use `ip` or `ifconfig`.
- Wicd has not been actively maintained in recent years; most distributions now ship with NetworkManager.
- To check if Wicd is installed, look for `wicd-daemon` or `wicd-gtk` packages.
- The command is not related to `ifcfg-*` files in `/etc/sysconfig/network-scripts/` used by legacy Red Hat systems.
