---
name: nc
summary: Read and write network connections from the command line.
category: Network
tags: network, port, tcp, troubleshoot
popular: true
---

## Additional Notes

`nc` is a network command used to read and write network connections from the command line. It is a versatile networking Swiss-army knife for port scanning, file transfers, and ad-hoc network connections.

Multiple implementations of `nc` exist (traditional, OpenBSD, GNU netcat, Nmap `ncat`). The OpenBSD version is the most common on Linux and does not support the `-e` flag for security reasons.

## Syntax

```bash
nc [options] [host] [port]
```

## Parameters

- `options`: Flags that change how `nc` behaves.
- `host`: Hostname or IP address to connect to.
- `port`: TCP/UDP port number.

## Common Options

- `-z`: Scan without sending data.
- `-v`: Verbose output.
- `-l`: Listen for an incoming connection.
- `-u`: Use UDP.

## Examples

```bash
nc -zv example.com 443
nc -l 9000
echo test | nc localhost 9000
```

## Practical Notes

`nc` implementations vary. Some systems provide it as `netcat`.
