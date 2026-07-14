---
name: nc
summary: Read and write network connections from the command line.
category: Network
tags: network, port, tcp, udp, troubleshoot, transfer
popular: true
---

## Additional Notes

`nc` (netcat) reads and writes network connections from the command line. It is a versatile networking tool for port scanning, simple file transfers, ad-hoc chat, and debugging TCP/UDP services.

Multiple implementations exist (traditional, OpenBSD, GNU netcat, Nmap `ncat`). The OpenBSD version is the most common on Linux and does not support the `-e` flag for security reasons. Behavior of flags such as `-l` and `-e` can differ between builds, so test on your system.

## Syntax

```bash
nc [options] [host] [port]
```

## Parameters

- `options`: Flags that change how `nc` behaves.
- `host`: Hostname or IP address to connect to.
- `port`: TCP or UDP port number.

## Common Options

- `-z`: Scan mode; connect without sending data.
- `-v`: Verbose output; show connection details.
- `-l`: Listen for an incoming connection (server mode).
- `-u`: Use UDP instead of TCP.
- `-n`: Do not resolve hostnames; use numeric addresses.
- `-p PORT`: Use a specific source port (where supported).
- `-w SECONDS`: Connection timeout.
- `-k`: Keep listening after a client disconnects (with `-l`).
- `-4`, `-6`: Force IPv4 or IPv6.

## Examples

```bash
nc -zv example.com 443
```

Check whether TCP port 443 is open, with verbose output.

```bash
nc -zv example.com 20-30
```

Scan a small range of TCP ports.

```bash
nc -l 9000
```

Listen on port 9000 and print whatever a client sends.

```bash
echo "hello" | nc localhost 9000
```

Send a single line to a listening `nc`.

```bash
nc -u -l 9000
```

Listen for UDP packets instead of TCP.

```bash
nc -lvnp 9000 > received.bin
```

Receive a file over a raw TCP connection into `received.bin`.

```bash
nc -v example.com 80 < request.txt
```

Send the contents of `request.txt` to a service on port 80.

## Practical Notes

- Use `nc` for quick connectivity tests when `curl` or `telnet` is unavailable.
- For reliable file transfers, prefer `scp` or `rsync`; `nc` has no integrity checks.
- OpenBSD `nc` may require `-N` to close the connection after EOF.
- Firewalls, NAT, and cloud security groups can block the port you test.
- Only use `nc` against systems you own or are authorized to test.
