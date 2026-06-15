---
name: mtr
summary: Network diagnostic tool combining ping and traceroute.
category: Network
tags: network, ping, traceroute, diagnostic, latency
popular: false
---

## Additional Notes

`mtr` (My Traceroute) combines the functionality of `ping` and `traceroute` into a single diagnostic tool. It continuously probes each hop along the path to a destination and displays real-time statistics including packet loss and latency for each hop.

It provides a much clearer picture of network problems than ping or traceroute alone. By monitoring each hop, `mtr` can identify where packet loss or high latency is introduced in the route.

## Syntax

```bash
mtr [options] hostname
```

## Parameters

- `hostname`: The target hostname or IP address.

## Common Options

- `-r`, `--report`: Run in report mode (send 10 packets to each hop, then print statistics and exit).
- `-c count`, `--report-cycles count`: Set the number of packets sent per hop in report mode.
- `-i seconds`, `--interval seconds`: Set the interval between probes.
- `-n`, `--no-dns`: Show numeric IP addresses only, no DNS resolution.
- `-b`, `--show-ips`: Show both hostnames and IP addresses.
- `-s size`, `--psize size`: Set the packet size.
- `-t`, `--tcp`: Use TCP SYN packets instead of ICMP.
- `-u`, `--udp`: Use UDP datagrams instead of ICMP.
- `-4`: Use only IPv4.
- `-6`: Use only IPv6.
- `-o field-order`: Customize the output field order.
- `--report-wide`: Report mode with wider output.
- `-j`, `--json`: Output in JSON format.
- `-x`, `--xml`: Output in XML format.

## Examples

```bash
mtr google.com
```

Run interactive `mtr` to `google.com`. Use arrow keys to navigate, `q` to quit.

```bash
mtr -r -c 20 8.8.8.8
```

Run a report with 20 probes per hop to 8.8.8.8.

```bash
mtr -n 192.168.1.1
```

Run `mtr` without DNS resolution for faster results.

```bash
mtr -r -c 10 -i 1 example.com
```

Report mode with 10 probes and 1-second intervals.

```bash
mtr -t -r github.com
```

Use TCP SYN packets and run a report.

## Understanding Output

- `Loss%`: Packet loss percentage at each hop.
- `Snt`: Number of packets sent to that hop.
- `Last`: Latency of the last packet in ms.
- `Avg`: Average latency in ms.
- `Best`: Best (lowest) latency in ms.
- `Wrst`: Worst (highest) latency in ms.
- `StDev`: Standard deviation of latency.

## Practical Notes

- Packet loss at a hop may not indicate a problem with that router; routers often prioritize routing over ICMP responses.
- Packet loss at the final destination is the most significant indicator of connectivity issues.
- High latency at the first hop suggests a local network problem (cable, Wi-Fi interference, switch issue).
- Use `-r` mode for scripted diagnostics or when sharing results with support teams.
- Some networks block ICMP; use `-t` (TCP) or `-u` (UDP) to work around this.

