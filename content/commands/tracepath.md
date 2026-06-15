---
name: tracepath
summary: Trace the network path to a host with MTU discovery.
category: Network
tags: network, trace, route, mtu, path, discovery
popular: false
---

## Additional Notes

`tracepath` discovers the network path to a remote host and reports the MTU (Maximum Transmission Unit) at each hop. Unlike `traceroute`, it does not require superuser privileges by default, and it performs path MTU discovery alongside hop enumeration.

It sends UDP probes with increasing TTL values and reports each router that responds with ICMP Time Exceeded messages. It automatically detects the MTU at each hop, which is useful for diagnosing MTU-related connectivity issues. The output shows hop number, round-trip time, and the MTU at each point.

## Syntax

```bash
tracepath [options] destination [port]
```

## Parameters

- `destination`: Hostname or IP address to trace.
- `port`: Destination port for probes (defaults to 44444 or a random high port).

## Common Options

- `-n`: Show numeric IP addresses only (no DNS resolution).
- `-b`: Print both IP address and hostname.
- `-l packetlen`: Set the initial packet length.
- `-p port`: Use a specific destination port.
- `-m max_hops`: Set the maximum TTL (default 30).

## Examples

```bash
tracepath example.com
```

Trace the path and show MTU at each hop.

```bash
tracepath -n 8.8.8.8
```

Trace to Google DNS with numeric output (no DNS lookups).

```bash
tracepath -m 10 192.168.1.1
```

Limit the trace to 10 hops.

## Practical Notes

- `tracepath` does not need root, unlike `traceroute -I` (ICMP) or `traceroute` (UDP with high ports).
- Output lines without an IP address and showing only an MTU value indicate a link layer that may be fragmenting or a hop that does not respond.
- A sudden MTU drop often indicates a tunnel or PPPoE link in the path.
- `tracepath` is part of the `iputils` package on most distributions.
- For more detailed output and additional probe types, use `traceroute` or `mtr`.
