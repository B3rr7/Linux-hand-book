---
name: ping6
summary: Send ICMP ECHO_REQUEST packets to IPv6 network hosts.
category: Network
tags: ipv6, ping, icmp, network, connectivity, diagnostic
popular: false
---

## Additional Notes

`ping6` is the IPv6-specific version of the `ping` command. It sends ICMPv6 Echo Request packets to an IPv6 address and waits for ICMPv6 Echo Reply packets, measuring round-trip time, packet loss, and network reliability.

On many modern Linux distributions, the `ping` command handles both IPv4 and IPv6 automatically. When given an IPv6 address, `ping` uses IPv6. However, `ping6` remains available on some systems for explicit IPv6 testing and in situations where the unified `ping` command is not configured for IPv6.

## Syntax

```bash
ping6 [options] [hostname-or-IPv6-address]
```

## Parameters

- `hostname-or-IPv6-address`: The IPv6 address or hostname to ping.

## Common Options

- `-c count`: Stop after sending a specified number of packets.
- `-i interval`: Wait `interval` seconds between packets (default 1).
- `-I interface`: Source interface or source address (e.g., `eth0` or a link-local address).
- `-s packetsize`: Specify the number of data bytes to send (default 56).
- `-t ttl`: Set the IPv6 hop limit.
- `-W timeout`: Time to wait for a response, in seconds.
- `-n`: Numeric output only; do not resolve hostnames.
- `-q`: Quiet output; show only summary lines.
- `-v`: Verbose output.
- `-4`/`-6`: Force IPv4 or IPv6 (on unified `ping`).

## Examples

```bash
ping6 ::1
```

Ping the IPv6 loopback address (localhost).

```bash
ping6 -c 4 2001:db8::1
```

Send 4 pings to an IPv6 address.

```bash
ping6 -I eth0 ff02::1
```

Ping the IPv6 all-nodes multicast address on a specific interface.

```bash
ping6 -c 10 -i 0.2 ipv6.google.com
```

Send 10 pings to google over IPv6, 0.2 seconds apart.

```bash
ping6 -n 2001:4860:4860::8888
```

Ping Google's IPv6 DNS server without hostname resolution.

## Practical Notes

- On modern distributions, just use `ping` with an IPv6 address. It detects the address family automatically.
- Some systems require `ping6` to be installed separately from the `iputils-ping` or `iputils` package.
- Link-local IPv6 addresses (starting with `fe80::`) require a scope ID: `ping6 fe80::1%eth0`.
- The `-I` flag is important when pinging link-local addresses to specify the egress interface.
- ICMPv6 is fundamental to IPv6 neighbor discovery and router advertisement protocols, not just ping.
- Firewalls may block ICMPv6 Echo Requests. Some networks allow ICMPv4 echo but block ICMPv6 echo.
