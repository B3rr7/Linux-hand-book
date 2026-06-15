---
name: ping
summary: Test network reachability with ICMP echo requests.
category: Network
tags: network, connectivity, latency, icmp, troubleshoot
popular: true
---

## Additional Notes

`ping` sends ICMP echo requests to a host and waits for replies. It is a basic tool for checking whether a host is reachable and roughly how much latency exists.

A failed ping does not always mean the host is down. Firewalls, routers, cloud providers, or local policy may block ICMP.

## Syntax

```bash
ping [options] host
```

## Parameters

- `options`: Flags that change how `ping` behaves.
- `host`: Hostname, IP address, URL, or network target.

## Common Options

- `-c N`: Send `N` packets, then stop.
- `-i SECONDS`: Wait between packets.
- `-4`: Use IPv4.
- `-6`: Use IPv6.
- `-W SECONDS`: Wait time for a reply.
- `-s SIZE`: Set packet payload size.
- `-q`: Quiet summary output.

## Examples

```bash
ping example.com
```

Ping a domain continuously until stopped.

```bash
ping -c 4 8.8.8.8
```

Send four packets to an IP address.

```bash
ping -4 example.com
```

Force IPv4.

```bash
ping -6 example.com
```

Force IPv6.

```bash
ping -c 3 -W 2 gateway.local
```

Send three packets with a two-second reply timeout.

## Reading Output

- `time=`: Round-trip latency.
- `ttl=`: Time-to-live value from the reply.
- Packet loss: Percentage of packets with no reply.
- Summary min/avg/max: Latency statistics.

## Practical Notes

- First test your gateway, then a public IP, then DNS names.
- If IP ping works but domain ping fails, suspect DNS.
- If ping fails but a web service works, ICMP may be blocked.
- Use `traceroute` to inspect the path when reachability is unclear.
