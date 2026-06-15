---
name: netstat
summary: Show network connections, routing tables, and listening ports.
category: Network
tags: network, socket, port, route, legacy
popular: false
---

## Additional Notes

`netstat` shows network connections, listening ports, routing tables, and interface statistics. It is older and often replaced by `ss`, `ip`, and `route` equivalents on modern systems.

You will still see it in tutorials and older servers.

## Syntax

```bash
netstat [options]
```

## Parameters

- `options`: Flags that change how `netstat` behaves.

## Common Options

- `-t`: TCP.
- `-u`: UDP.
- `-l`: Listening sockets.
- `-n`: Numeric addresses and ports.
- `-p`: Show process/program information.
- `-a`: Show all sockets.
- `-r`: Show routing table.
- `-i`: Show interface table.

## Examples

```bash
netstat -tuln
```

Show listening TCP and UDP ports numerically.

```bash
sudo netstat -tulnp
```

Show listening ports with process names.

```bash
netstat -rn
```

Show routing table numerically.

```bash
netstat -i
```

Show network interface statistics.

## Practical Notes

- Prefer `ss -tuln` for listening sockets on modern Linux.
- Prefer `ip route` for routes.
- Some minimal systems do not install `netstat` by default.
- Use `sudo` when process names are hidden.
