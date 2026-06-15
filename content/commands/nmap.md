---
name: nmap
summary: Network exploration tool and security scanner.
category: Network
tags: network, scan, ports, security, discovery, reconnaissance, firewall
popular: true
---

## Additional Notes

`nmap` (Network Mapper) is an open-source tool for network discovery and security auditing. It uses raw IP packets to determine what hosts are available on a network, what services they offer, what operating systems they run, what firewall rules are in place, and hundreds of other attributes.

It is the standard tool for network reconnaissance and vulnerability assessment. System administrators use it for inventory management, service upgrade scheduling, and monitoring host or service uptime. Security professionals use it for penetration testing and attack surface analysis. `nmap` runs on all major operating systems and supports both command-line and graphical interfaces.

`nmap` uses techniques such as TCP SYN scan, TCP connect scan, UDP scan, SCTP scan, ICMP echo discovery, TCP ping sweep, and OS fingerprinting. It also includes a scripting engine (NSE) for advanced detection and exploitation tasks. Results can be output in plain text, XML, grepable format, or interactive mode.

## Syntax

```bash
nmap [scan-type] [options] [targets]
```

## Parameters

- `targets`: Hostnames, IP addresses, or CIDR network ranges. Use `192.168.1.1`, `192.168.1.0/24`, `scanme.nmap.org`, or `192.168.1.1-20`.
- `scan-type`: Defines the kind of scan to perform, such as TCP SYN stealth scan, TCP connect scan, or UDP scan.

## Scan Types

- `-sS`: TCP SYN stealth scan. The default and most popular scan type. Half-open scan that does not complete TCP handshakes.
- `-sT`: TCP connect scan. Completes full TCP handshakes. Used when SYN scan is not available due to lack of raw socket privileges.
- `-sU`: UDP scan. Slower than TCP scans because UDP is connectionless and retransmission is common.
- `-sA`: TCP ACK scan. Used to map firewall rules and determine if ports are filtered.
- `-sW`: TCP Window scan. Similar to ACK scan but can detect open ports in some firewall configurations.
- `-sM`: TCP Maimon scan. Uses FIN/ACK probes.
- `-sN`, `-sF`, `-sX`: TCP Null, FIN, and Xmas scans. Exploit RFC 793 behavior to identify closed ports.
- `-sV`: Version detection. Probes open ports to determine service and application version information.
- `-O`: OS fingerprinting. Attempts to determine the operating system of the target based on packet behavior.
- `-A`: Aggressive scan. Enables OS detection, version detection, script scanning, and traceroute.

## Common Options

- `-p ports`: Specify ports to scan. Use `-p 22`, `-p 80,443,8080`, `-p 1-1000`, or `-p-` for all 65535 ports.
- `-F`: Fast mode. Scans fewer ports (the top 100) than the default scan.
- `-n`: Do not perform DNS resolution on discovered IP addresses.
- `-R`: Always perform DNS resolution on target IP addresses.
- `-Pn`: Treat all hosts as online. Skip host discovery and begin scanning ports immediately.
- `-sn`: Ping sweep only. No port scan. Useful for discovering live hosts on a network.
- `-T paranoid|sneaky|polite|normal|aggressive|insane`: Timing template. Controls scan speed and stealth. `-T4` is a good balance for fast scans on reliable networks.
- `--open`: Show only open ports. Useful for reducing output noise.
- `-oN file`: Normal output to a file.
- `-oX file`: XML output for parsing by tools and scripts.
- `-oG file`: Grepable output for quick filtering.
- `-oA basename`: Output in all major formats (normal, XML, grepable) using the given basename.
- `-iL filename`: Read target list from a file.
- `--exclude hosts`: Exclude specified hosts from scanning.
- `--reason`: Display the reason why a port was determined to be open, closed, or filtered.
- `--script script-name`: Run NSE scripts. Use `--script default` for common scripts or `--script http-title` for specific ones.
- `-v`: Increase verbosity. Use `-vv` for even more detail.
- `-d`: Enable debugging output.

## Examples

```bash
nmap 192.168.1.1
```

Scan the most common 1000 ports on a single host.

```bash
nmap -sS -sV -O 192.168.1.1
```

Stealth SYN scan with version detection and OS fingerprinting.

```bash
nmap -sn 192.168.1.0/24
```

Ping sweep: discover which hosts are online in the subnet without scanning ports.

```bash
nmap -p 22,80,443 10.0.0.1
```

Scan specific ports on a single host.

```bash
nmap -p- -T4 192.168.1.1
```

Scan all 65535 ports with aggressive timing.

```bash
nmap -sU 192.168.1.1
```

Perform a UDP scan. Note that UDP scans take much longer than TCP scans.

```bash
nmap --script http-title scanme.nmap.org
```

Use an NSE script to fetch HTTP page titles.

```bash
nmap -A 192.168.1.1
```

Aggressive scan combining OS detection, version detection, script scanning, and traceroute.

```bash
nmap -sn -n 192.168.1.0/24 | grep "report for" | awk '{print $5}'
```

List only IP addresses of live hosts found in a ping sweep.

```bash
nmap -iL targets.txt -oN results.txt
```

Scan all hosts listed in `targets.txt` and save results to a file.

## Practical Notes

- Running `nmap` against hosts without permission is illegal in many jurisdictions. Always scan systems you own or have explicit written permission to test.
- Raw socket scans (`-sS`) typically require root privileges. Non-root users can use `-sT` for TCP connect scans.
- Firewalls and intrusion detection systems can detect and block `nmap` scans. Use timing templates (`-T2`, `-T1`) for stealthier scanning.
- The timing template `-T3` is the default. `-T4` assumes a reasonably fast and reliable network. `-T5` can cause packet loss and inaccurate results.
- Use `-Pn` when scanning hosts that do not respond to ping probes. This forces `nmap` to scan hosts regardless of whether they appear online.
- The Nmap Scripting Engine (NSE) extends functionality for vulnerability detection, brute-forcing, malware discovery, and service enumeration.
- For large network scans, use `--open` and `-oG` output format to produce concise, filterable results.
- `nmap` integrates with `zenmap` (graphical frontend) and `ndiff` (compare scan results) for more advanced workflows.
