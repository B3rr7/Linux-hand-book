---
name: tcpreplay
summary: Replay network traffic from pcap files.
category: Network
tags: tcpreplay, packet, replay, pcap, testing
popular: false
---

## Additional Notes

`tcpreplay` is a suite of tools for replaying network traffic captured in pcap format. It can reconstruct captured packets and send them back onto a live network, allowing administrators to test network devices, intrusion detection systems (IDS), firewalls, and other network equipment with real traffic patterns.

The tcpreplay suite includes several utilities: `tcpreplay` (replay packets), `tcprewrite` (rewrite packet headers for different networks), `tcpcapinfo` (pcap file information), `tcpliveplay` (replay with TCP connection tracking), and others. These tools allow modifying source/destination MACs, IPs, and ports to adapt captured traffic to the test network topology.

## Syntax

```bash
tcpreplay [options] pcap_file [pcap_file...]
```

## Parameters

- `pcap_file`: One or more pcap files containing captured packets.

## Common Options

- `-i interface`, `--intf1=interface`: Specify the output interface for sending packets.
- `-I interface2`: Specify a second interface (for dual-port replay).
- `-l count`, `--loop=count`: Loop the replay `count` times (0 = infinite).
- `-t`, `--topspeed`: Replay packets as fast as possible (no timing delay).
- `-M mbps`, `--mbps=mbps`: Replay at a specific bitrate in Mbps.
- `-p pps`, `--pps=pps`: Replay at a specific rate in packets per second.
- `-x multiplier`, `--multiplier=multiplier`: Speed up replay by a multiplier (e.g., `-x 2.0` for double speed).
- `-c duration`, `--duration=duration`: Replay for a specified duration in seconds.
- `-L limit`, `--limit=limit`: Replay only the first `limit` packets.
- `-s skip`, `--skip=skip`: Skip the first `skip` packets.
- `-v`, `--verbose`: Show verbose statistics after replay.
- `-V`, `--version`: Show version information.
- `-q`, `--quiet`: Suppress normal output.
- `-o`, `--no-flow-stat`: Do not print flow statistics.
- `--stats`: Print statistics at the end of each loop.

## tcprewrite Options

- `--dstipmap=old:new`: Rewrite destination IP addresses.
- `--srcipmap=old:new`: Rewrite source IP addresses.
- `--enet-dmac=mac`: Rewrite destination MAC address.
- `--enet-smac=mac`: Rewrite source MAC address.
- `--portmap=old:new`: Rewrite TCP/UDP ports.
- `--seed=num`: Randomize IP addresses with a given seed.
- `-i input.pcap`: Input pcap file.
- `-o output.pcap`: Output pcap file.

## Examples

```bash
tcpreplay -i eth0 capture.pcap
```

Replay packets from `capture.pcap` on interface `eth0` at original timing.

```bash
tcpreplay -i eth0 -t capture.pcap
```

Replay packets as fast as possible (stress test).

```bash
tcpreplay -i eth0 -M 100 capture.pcap
```

Replay at a target rate of 100 Mbps.

```bash
tcpreplay -i eth0 -l 5 capture.pcap
```

Loop the replay 5 times.

```bash
tcprewrite --dstipmap=192.168.1.0/24:10.0.0.0/24 -i original.pcap -o rewritten.pcap
```

Rewrite destination IPs from the 192.168.1.x range to 10.0.0.x range, saving to a new file.

```bash
tcpreplay -i eth0 -x 2.0 capture.pcap
```

Replay at double the original speed.

```bash
tcpreplay -i eth0 --pps=1000 capture.pcap
```

Replay at 1000 packets per second.

## Practical Notes

- `tcpreplay` sends packets at the data-link layer, bypassing the kernel's network stack.
- Use `tcprewrite` to adapt captured traffic to your test network's IP addressing.
- For testing firewalls/IDS, rewrite MAC addresses to match your test equipment.
- The original packet timing is preserved by default unless `-t` or `-M` is used.
- High-speed replay may saturate the network interface; monitor interface counters.
- `tcpreplay` can craft packets with original checksums; disable checksum offloading on the NIC for accuracy.
- The `-t` (topspeed) mode is useful for performance testing and stress testing.
- Pcap files recorded with snaplen smaller than the packet will be truncated and may not replay correctly.
