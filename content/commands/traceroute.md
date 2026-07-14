---
name: traceroute
summary: Show the network path packets take to a host.
category: Network
tags: network, route, latency, hops, troubleshoot, path
popular: true
---

## Additional Notes

`traceroute` shows the routers (hops) between your machine and a destination. It helps locate where latency or packet loss appears along a path by sending probes with increasing Time-To-Live (TTL) values.

Each hop is discovered by listening for ICMP "time exceeded" replies. Some networks block or rate-limit these probes, so missing hops do not always mean a broken path.

## Syntax

```bash
traceroute [options] host
```

## Parameters

- `options`: Flags that change how `traceroute` behaves.
- `host`: Hostname, IP address, or destination to trace.

## Common Options

- `-n`: Do not resolve hostnames; show numeric addresses only.
- `-I`: Use ICMP echo probes (like `ping`).
- `-T`: Use TCP SYN probes when supported.
- `-U`: Use UDP probes to a destination port.
- `-p PORT`: Set the base destination port.
- `-m HOPS`: Set the maximum number of hops (default 30).
- `-f HOPS`: Start probing at a given hop (skip early hops).
- `-w SECONDS`: Wait time for each reply.
- `-q N`: Number of probes per hop.
- `-4` / `-6`: Force IPv4 or IPv6.
- `-z MS`: Wait between probes (milliseconds).

## Examples

```bash
traceroute example.com
```

Trace the path to a domain using default UDP probes.

```bash
traceroute -n 8.8.8.8
```

Trace to an IP without DNS lookups.

```bash
traceroute -I example.com
```

Use ICMP echo probes, which often pass where UDP is filtered.

```bash
traceroute -T -p 443 example.com
```

Use TCP SYN probes toward port 443 (useful through firewalls).

```bash
traceroute -m 15 -q 1 example.com
```

Limit to 15 hops with a single probe per hop for a faster trace.

```bash
traceroute -4 example.com
```

Force an IPv4 trace.

## Practical Notes

- `* * *` means no reply for that hop, which is not always a failure; it may be filtered.
- Use `ping` first to confirm basic reachability before tracing.
- ICMP (`-I`) or TCP (`-T -p 443`/`-p 80`) probes often succeed where default UDP is blocked.
- Routing can be asymmetric; the return path may differ from the path shown.
- If installed, `mtr` gives continuous traceroute-style monitoring over time.
