---
name: traceroute
summary: Show the network path packets take to a host.
category: Network
tags: network, route, latency, hops, troubleshoot
popular: true
---

## Additional Notes

`traceroute` shows the routers or hops between your machine and a destination. It helps locate where latency or packet loss may appear along a path.

Some networks block or rate-limit traceroute probes, so missing hops do not always mean a broken path.

## Syntax

```bash
traceroute [options] host
```

## Parameters

- `options`: Flags that change how `traceroute` behaves.
- `host`: Hostname, IP address, URL, or network target.

## Common Options

- `-n`: Do not resolve hostnames.
- `-I`: Use ICMP echo probes.
- `-T`: Use TCP SYN probes when supported.
- `-p PORT`: Use a destination port.
- `-m HOPS`: Set maximum hops.
- `-w SECONDS`: Set wait time for replies.

## Examples

```bash
traceroute example.com
```

Trace the path to a domain.

```bash
traceroute -n 8.8.8.8
```

Trace without DNS lookups.

```bash
traceroute -I example.com
```

Use ICMP probes.

```bash
traceroute -T -p 443 example.com
```

Use TCP probes to port 443.

## Practical Notes

- `* * *` means no reply for that hop, not always failure.
- Use `ping` first for basic reachability.
- Use `mtr` if installed for continuous traceroute-style monitoring.
- Routing can be asymmetric; the return path may differ from the shown path.
