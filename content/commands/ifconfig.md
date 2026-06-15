---
name: ifconfig
summary: Show or configure network interfaces on older systems.
category: Network
tags: network, interface, address, legacy
popular: true
---

## Additional Notes

`ifconfig` displays and changes network interface settings. It comes from the older net-tools package and is still seen in tutorials, recovery environments, embedded systems, and older distributions.

Modern Linux systems usually prefer the `ip` command: `ip addr`, `ip link`, and `ip route`. Learn `ifconfig` for compatibility, but use `ip` for current administration.

## Syntax

```bash
ifconfig [interface]
ifconfig interface [address] [options]
```

## Parameters

- `interface`: Network interface such as `eth0`, `ens33`, `wlan0`, or `lo`.
- `address`: IPv4 address to assign to the interface.
- `options`: Interface state, netmask, broadcast, MTU, and hardware-address settings.

## Common Options

- No arguments: Show active interfaces.
- `-a`: Show all interfaces, including inactive ones.
- `INTERFACE`: Show one interface.
- `up`: Bring an interface up.
- `down`: Bring an interface down.
- `netmask MASK`: Set an IPv4 netmask.
- `broadcast ADDRESS`: Set broadcast address.
- `mtu SIZE`: Set interface MTU.

## Examples

```bash
ifconfig
```

Show active network interfaces.

```bash
ifconfig -a
```

Show active and inactive interfaces.

```bash
ifconfig eth0
```

Inspect one interface.

```bash
sudo ifconfig eth0 192.168.1.50 netmask 255.255.255.0 up
```

Assign an address and bring the interface up.

```bash
sudo ifconfig eth0 down
```

Disable an interface temporarily.

## Practical Notes

- Changes made with `ifconfig` are usually temporary and disappear after reboot or network-manager restart.
- On modern systems, equivalent commands are often `ip addr show`, `ip link set dev eth0 up`, and `ip addr add ADDRESS dev eth0`.
- Be careful changing an interface over SSH; you can disconnect yourself.
