---
name: ss
summary: Inspect network sockets and listening ports.
category: Network
tags: network, socket, port, listening, tcp, udp, process
popular: true
---

## Additional Notes

`ss` shows socket information: listening ports, established connections, TCP/UDP state, and process ownership when permitted. It is the modern replacement for many `netstat` use cases and is usually faster because it reads kernel data directly.

The most common check is "what is listening on my machine?" followed by "which process owns that port?".

## Syntax

```bash
ss [options] [filter]
```

## Parameters

- `options`: Flags that change what `ss` reports.
- `filter`: Optional state or address filter, such as `state established`.

## Common Options

- `-t`: TCP sockets.
- `-u`: UDP sockets.
- `-l`: Listening (server) sockets only.
- `-a`: Show listening and non-listening sockets.
- `-n`: Numeric addresses and ports (no DNS or service-name lookup).
- `-r`: Try to resolve hostnames.
- `-p`: Show the owning process and PID (needs privileges).
- `-s`: Show a socket summary by state.
- `-4` / `-6`: Limit to IPv4 or IPv6 sockets.
- `-o`: Show timers such as TCP keepalive state.
- `-i`: Show internal TCP information.

## Examples

```bash
ss -tuln
```

Show all listening TCP and UDP ports numerically.

```bash
sudo ss -tulnp
```

Show listening ports together with process names and PIDs.

```bash
ss -tan
```

Show every TCP socket numerically, including established connections.

```bash
ss -tunp state established
```

Show only established TCP and UDP connections with processes.

```bash
ss -tlnp '( sport = :443 )'
```

Show listeners on port 443 only.

```bash
ss -s
```

Print a summary count of sockets by state.

```bash
ss -tn dst 10.0.0.5
```

Show TCP sockets whose destination is `10.0.0.5`.

## Practical Notes

- Use `sudo` with `-p` when process names are hidden or shown as `-`.
- `127.0.0.1:PORT` listens only on the loopback interface; `0.0.0.0:PORT` listens on all IPv4 interfaces.
- Add `-4` or `-6` to limit noise on dual-stack hosts.
- After finding a service port, use `systemctl status SERVICE` to manage it.
- `ss -tuln` is one of the quickest port-inspection commands on modern Linux.
