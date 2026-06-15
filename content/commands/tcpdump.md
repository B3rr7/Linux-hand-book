---
name: tcpdump
summary: Capture and analyze network packets in real time.
category: Network
tags: packet, capture, network, analysis, sniffer, wireshark
popular: true
---

## Additional Notes

`tcpdump` is the premier command-line packet analyzer for Unix-like systems. It captures raw network packets from a network interface and displays their contents in a human-readable format, or saves them to a file (pcap) for later analysis with tools like Wireshark. It uses the `libpcap` library for packet capture and supports powerful BPF (Berkeley Packet Filter) expressions for filtering traffic.

`tcpdump` is indispensable for network troubleshooting, security analysis, protocol debugging, and performance monitoring. It can inspect headers at all layers: Ethernet, ARP, IP (v4/v6), TCP, UDP, ICMP, DNS, DHCP, HTTP, TLS handshakes, and hundreds of other protocols. Because it operates at the raw socket level, it requires root (or appropriate capabilities like `CAP_NET_RAW` and `CAP_NET_ADMIN`) to run.

Filter expressions use the BPF syntax, which can match by host, port, protocol, packet direction, packet size, and more. Complex expressions can combine conditions with `and`, `or`, and `not`. A comprehensive understanding of BPF filters enables precise traffic selection even on high-throughput links.

## Syntax

```bash
tcpdump [options] [filter_expression]
```

## Parameters

- `filter_expression`: A BPF (Berkeley Packet Filter) expression to select which packets to capture, such as `host 192.168.1.1`, `tcp port 80`, or `icmp`.

## Common Options

### Capture Behavior

- `-i interface`: Listen on the specified interface (use `-i any` for all interfaces).
- `-n`: Do not resolve hostnames (faster, avoids DNS lookups).
- `-nn`: Do not resolve hostnames or port names (shows raw IPs and port numbers).
- `-c count`: Capture only `count` packets, then exit.
- `-s snaplen`, `--snapshot-length=snaplen`: Capture `snaplen` bytes per packet (default: 262144). Use `-s 0` for default, `-s 96` for headers only.
- `-e`: Print the link-level header (Ethernet MAC addresses).
- `-v`, `-vv`, `-vvv`: Increase verbosity (more protocol details with each level).
- `-q`: Quiet output (less protocol information).
- `-t`: Do not print timestamps on each line.
- `-tttt`: Print human-readable timestamps with date and time.
- `-ttttt`: Print delta timestamps (time since previous packet).
- `-x`: Print packet data in hex.
- `-xx`: Print link-level header plus packet data in hex.
- `-X`: Print packet data in hex and ASCII.
- `-XX`: Print link-level header plus data in hex and ASCII.
- `-A`: Print packet data in ASCII only.
- `-U`: Output packets immediately (useful for real-time viewing or piping).

### Capture File Options

- `-w file`: Write raw packets to a pcap file (can be read by Wireshark, tshark, etc.).
- `-r file`: Read packets from a previously saved pcap file instead of a live interface.
- `-C file_size`: When writing with `-w`, rotate files after `file_size` megabytes.
- `-W count`: Used with `-C`, limits the number of rotated capture files.
- `-z command`: Used with `-C`, compress rotated files with the specified command.
- `-G rotate_seconds`: Rotate dump files every `rotate_seconds` seconds.
- `-F file`: Use a file containing the filter expression.

### Advanced Options

- `-p`: Do not put the interface into promiscuous mode.
- `-P`: Work with packets in promiscuous mode (default).
- `-L`: List known data link types for the interface.
- `-y datalinktype`: Set the data link type.
- `-d`: Dump the compiled packet-matching code (for debugging filters).
- `-S`: Print absolute TCP sequence numbers instead of relative.
- `-K`: Do not verify checksums (faster on fast links).
- `--direction=dir`: Capture only `in`, `out`, or `inout` packets.
- `-j timestamp_type`: Set the timestamp type (use `-J` to list available types).
- `-J`: List available timestamp types for the interface.

## Filter Expressions (BPF)

### Primitive Filters

- `host 192.168.1.1`: Match packets to or from the IP.
- `net 192.168.0.0/16`: Match packets to or from the network.
- `src host 10.0.0.1`: Match packets from a specific source.
- `dst host 10.0.0.1`: Match packets to a specific destination.
- `port 80`: Match packets with source or destination port 80.
- `src port 443`: Match packets with source port 443.
- `dst port 53`: Match packets with destination port 53.
- `portrange 8000-8080`: Match packets in a port range.
- `ip`: Match IPv4 packets only.
- `ip6`: Match IPv6 packets only.
- `arp`: Match ARP packets.
- `tcp`: Match TCP packets.
- `udp`: Match UDP packets.
- `icmp`: Match ICMP packets.
- `vlan`: Match 802.1Q VLAN-tagged packets.
- `mpls`: Match MPLS-tagged packets.

### Combined Filters

- `tcp and port 80`: Match TCP traffic on port 80.
- `host 10.0.0.1 and not port 22`: Match traffic to/from a host except SSH.
- `tcp[tcpflags] & tcp-syn != 0 and tcp[tcpflags] & tcp-ack == 0`: Match SYN-only packets (new connection attempts).
- `icmp[icmptype] = 8`: Match ICMP echo request (ping) packets only.
- `greater 500`: Match packets larger than 500 bytes.
- `less 64`: Match packets smaller than 64 bytes.

### Filter Keywords

Protocols: `ether`, `fddi`, `tr`, `wlan`, `ip`, `ip6`, `arp`, `rarp`, `decnet`, `tcp`, `udp`, `icmp`, `icmp6`, `igmp`, `pim`, `ah`, `esp`, `vrrp`.

Direction: `src`, `dst`, `src or dst`, `src and dst`.

Logical: `and` (`&&`), `or` (`||`), `not` (`!`).

## Examples

```bash
tcpdump -i eth0
```

Capture all packets on the `eth0` interface.

```bash
tcpdump -i any -n
```

Capture on all interfaces without resolving hostnames.

```bash
tcpdump -i eth0 -c 100 -nn
```

Capture exactly 100 packets on `eth0` with numeric IPs and ports.

```bash
tcpdump -i eth0 host 192.168.1.1
```

Capture traffic to or from `192.168.1.1`.

```bash
tcpdump -i eth0 tcp port 80
```

Capture HTTP traffic on port 80.

```bash
tcpdump -i eth0 port 443 -X
```

Capture HTTPS traffic on port 443 with hex and ASCII output (TLS handshake visible, payload encrypted).

```bash
tcpdump -i eth0 icmp
```

Capture only ICMP packets (ping and error messages).

```bash
tcpdump -i eth0 src 10.0.0.1 and tcp dst port 80
```

Capture TCP traffic from `10.0.0.1` to destination port 80.

```bash
tcpdump -i eth0 tcp[13] & 2 != 0
```

Capture only TCP SYN packets (connection initiation).

```bash
tcpdump -i eth0 -w capture.pcap
```

Write captured packets to a pcap file for later analysis.

```bash
tcpdump -r capture.pcap -nn
```

Read packets from a saved pcap file.

```bash
tcpdump -i eth0 -s 96 -nn port 53
```

Capture only the first 96 bytes of DNS packets (enough for headers).

```bash
tcpdump -i eth0 -nn -X udp port 67 or port 68
```

Capture DHCP traffic (ports 67/68) with hex dump.

```bash
tcpdump -i eth0 -v arp
```

Capture ARP packets with verbose output (shows MAC addresses and IPs).

```bash
tcpdump -i eth0 -n icmp and 'icmp[icmptype] = 8'
```

Capture only ICMP echo requests (outgoing pings).

```bash
tcpdump -i eth0 -w http.pcap -C 10 -W 5 port 80
```

Capture HTTP traffic, rotating files every 10MB, keeping at most 5 files.

```bash
tcpdump -i eth0 -nn net 10.0.0.0/8
```

Capture all traffic to or from the 10.0.0.0/8 network.

```bash
tcpdump -i any -p not broadcast and not multicast
```

Capture non-broadcast, non-multicast traffic on all interfaces.

## Practical Notes

- `tcpdump` requires root or `CAP_NET_RAW`/`CAP_NET_ADMIN` capabilities.
- On busy interfaces, capturing all packets can cause significant CPU load and packet loss.
- Use `-s 96` to capture only headers (reduces data volume and disk space).
- Always use `-n` or `-nn` in production to avoid DNS resolution delays.
- The `-w` file can be analyzed later with Wireshark, `tshark`, or replayed with `tcpreplay`.
- For high-throughput capturing, consider `dumpcap` (from Wireshark) which is optimized.
- BPF filters are compiled into kernel-level bytecode for efficiency.
- Use `tcpdump -L` to see supported data link types for an interface.
- Captured pcap files are portable across platforms and tools.
- To filter by application payload, use `tshark` or Wireshark which understand higher-level protocols.
- In containers, ensure the container has the necessary capabilities; `--privileged` may be needed.
- When investigating performance issues, pay attention to TCP flags, retransmissions, and window sizes.
