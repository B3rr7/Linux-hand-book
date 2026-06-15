---
name: ip
summary: Show and manage network interfaces, addresses, routes, and neighbors.
category: Network
tags: network, interface, address, route, neighbor
popular: true
---

## Additional Notes

`ip` is a network command used to show and manage network interfaces, addresses, routes, and neighbors. Use it when checking connectivity, network configuration, remote access, or network services.

It has subcommands for links, addresses, routes, neighbors, rules, tunnels, and network namespaces.

## Syntax

```bash
ip [options] OBJECT COMMAND
```

## Parameters

- `options`: Flags that change how `ip` behaves.
- `OBJECT`: The ip object type such as `addr`, `link`, `route`, `neigh`, `rule`, or `netns`.
- `COMMAND`: Operation to perform on the object.

## Common Objects

- `addr`: IP addresses.
- `link`: Network interfaces.
- `route`: Routing table.
- `neigh`: Neighbor/ARP table.
- `rule`: Routing policy rules.
- `netns`: Network namespaces.

## Common Options

- `-br`: Brief output.
- `-c`: Color output when supported.
- `-s`: Show statistics.
- `-d`: Show detailed information.
- `-4`: Show IPv4 information.
- `-6`: Show IPv6 information.

## Examples

```bash
ip addr
```

Show network interfaces and addresses.

```bash
ip -br addr
```

Show a compact address summary.

```bash
ip link
```

Show interface link state.

```bash
sudo ip link set wlan0 up
```

Bring an interface up.

```bash
ip route
```

Show the routing table.

```bash
ip route get 8.8.8.8
```

Show which route would be used to reach an address.

```bash
ip neigh
```

Show neighbor table entries.

```bash
sudo ip addr add 192.168.1.50/24 dev eth0
```

Add an IP address to an interface.

## Practical Notes

- Use `ip -br addr` for a quick interface overview.
- Changing network state usually requires `sudo`.
- NetworkManager or systemd-networkd may overwrite manual changes.
- Use `ping`, `ss`, `traceroute`, and `resolvectl` with `ip` during troubleshooting.
- Be careful changing routes on a remote SSH session; you can disconnect yourself.
