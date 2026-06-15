---
name: route
summary: Show or change the legacy kernel routing table.
category: Network
tags: network, route, gateway, legacy
popular: false
---

## Additional Notes

`route` displays and modifies the kernel routing table using the older net-tools interface. It shows where packets go for local networks, default gateways, and specific destination routes.

Modern Linux systems usually prefer `ip route`. Keep `route` knowledge for older systems and legacy documentation.

## Syntax

```bash
route [options]
route add [route-options]
route del [route-options]
```

## Parameters

- `destination`: Network or host route to add or delete.
- `gateway`: Router address used as the next hop.
- `interface`: Interface such as `eth0` or `wlan0`.
- `options`: Output and route-modification flags.

## Common Options

- `-n`: Show numeric addresses instead of resolving names.
- `add default gw GATEWAY`: Add a default gateway.
- `del default`: Remove the default route.
- `add -net NETWORK netmask MASK gw GATEWAY`: Add a network route.
- `add -host HOST gw GATEWAY`: Add a host route.

## Examples

```bash
route -n
```

Show the routing table with numeric addresses.

```bash
sudo route add default gw 192.168.1.1
```

Add a default gateway.

```bash
sudo route del default
```

Remove the default route.

```bash
sudo route add -net 10.20.0.0 netmask 255.255.0.0 gw 192.168.1.254
```

Add a route for a private network through a gateway.

## Practical Notes

- Prefer `ip route` for modern systems: `ip route show`, `ip route add default via GATEWAY`.
- Temporary route changes usually do not survive reboot.
- A wrong default route can break internet access or remote SSH access.
