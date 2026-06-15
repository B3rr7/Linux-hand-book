---
name: iftop
summary: Show live bandwidth usage by network connection.
category: Network
tags: network, bandwidth, monitor, traffic
popular: false
---

## Additional Notes

`iftop` is a network command used to show live bandwidth usage by network connection. It displays a real-time, ncurses-based view of bandwidth usage per host connection.

`iftop` requires root privileges or appropriate capabilities to monitor all traffic. Use `-i INTERFACE` to target a specific interface.

## Syntax

```bash
iftop [options]
```

## Parameters

- `options`: Flags that change how `iftop` behaves.
- `interface`: Network interface to monitor (e.g., `eth0`).

## Common Options

- `-i INTERFACE`: Monitor a specific interface.
- `-n`: Do not resolve hostnames.
- `-P`: Show ports.

## Examples

```bash
sudo iftop
sudo iftop -i eth0
sudo iftop -nP
```

## Practical Notes

`iftop` is useful for quickly seeing which connections are using bandwidth.
