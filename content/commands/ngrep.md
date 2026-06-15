---
name: ngrep
summary: Network grep; search network traffic for patterns.
category: Network
tags: network, grep, packet, capture, pcap, pattern
popular: false
---

## Additional Notes

`ngrep` (network grep) applies regular expressions to network packet payloads. It captures packets from a network interface or reads from a packet capture (pcap) file and prints matching packets, behaving like `grep` for network traffic.

It is useful for debugging network protocols, checking for specific strings in plaintext traffic, monitoring application-layer data, and analyzing captured traffic. It supports BPF (Berkeley Packet Filter) expressions for filtering.

## Syntax

```bash
ngrep [options] pattern [filter-expression]
```

## Parameters

- `pattern`: A regular expression to match against packet payloads.
- `filter-expression`: A BPF filter expression (e.g., `host 192.168.1.1`, `port 80`).

## Common Options

- `-i`: Ignore case when matching.
- `-w`: Match whole words only.
- `-x`: Show packet headers in hex dump format.
- `-X`: Show full packet hex dump (headers and payload).
- `-d interface`: Capture on the specified network interface.
- `-t`: Print timestamps.
- `-l`: Make stdout line-buffered (useful for piping).
- `-q`: Quiet mode; do not show packet headers.
- `-W format`: Output format (`normal`, `single`, `click`).
- `-n count`: Stop after capturing `count` packets.
- `-p`: Do not put the interface into promiscuous mode.
- `-s snaplen`: Set the packet snapshot length (default 65536).
- `-I file`: Read packets from a pcap file.
- `-O file`: Write captured packets to a pcap file.
- `-c`: Show packet counts.

## Examples

```bash
ngrep -d eth0 "password"
```

Capture packets on `eth0` and show those containing the string "password".

```bash
ngrep -i "login" port 80
```

Search for "login" (case-insensitive) on HTTP traffic.

```bash
ngrep -i "user" host 10.0.0.5
```

Search for "user" in traffic to or from `10.0.0.5`.

```bash
ngrep -I capture.pcap "error"
```

Search a saved pcap file for the pattern "error".

```bash
ngrep -t "GET" port 80
```

Show HTTP GET requests with timestamps.

```bash
ngrep -x "HTTP" port 80
```

Show matching HTTP traffic with hex dump.

## Practical Notes

- Root privileges are required to capture packets from a network interface.
- Regular expression syntax is PCRE-compatible (Perl Compatible Regular Expressions).
- For modern network analysis, `tcpdump` combined with `grep` or `tshark` (Wireshark's CLI) may be more capable.
- `ngrep` sees unencrypted payload only. TLS/HTTPS traffic appears as encrypted data.
- Use BPF filters to narrow the capture and avoid being overwhelmed by traffic.

