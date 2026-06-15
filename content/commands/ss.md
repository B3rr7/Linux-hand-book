---
name: ss
summary: Inspect network sockets and listening ports.
category: Network
tags: network, socket, port, listening, tcp, udp
popular: true
---

## Additional Notes

`ss` shows socket information: listening ports, established connections, TCP/UDP state, and process ownership when permitted.

It is the modern replacement for many `netstat` use cases and is usually faster.

## Syntax

```bash
ss [options]
```

## Parameters

- `options`: Flags that change how `ss` behaves.

## Common Options

- `-t`: TCP sockets.
- `-u`: UDP sockets.
- `-l`: Listening sockets.
- `-n`: Numeric addresses and ports.
- `-p`: Show process information.
- `-a`: Show listening and non-listening sockets.
- `-r`: Resolve hostnames.
- `-s`: Show socket summary.

## Examples

```bash
ss -tuln
```

Show listening TCP and UDP ports numerically.

```bash
sudo ss -tulnp
```

Show listening ports with process names.

```bash
ss -tan
```

Show all TCP sockets numerically.

```bash
ss -s
```

Show socket summary.

```bash
ss -tn state established
```

Show established TCP connections.

## Practical Notes

- Use `sudo` with `-p` when process names are hidden.
- `127.0.0.1:PORT` listens only locally; `0.0.0.0:PORT` listens on all IPv4 interfaces.
- Use `systemctl status service` after identifying a service port.
- `ss -tuln` is one of the quickest port-inspection commands on modern Linux.
