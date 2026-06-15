---
name: ppp-off
summary: Disconnect a PPP connection.
category: Network
tags: ppp, dialup, modem, connection, disconnect
popular: false
---

## Additional Notes

`ppp-off` is a script (typically a shell script) that terminates an active PPP (Point-to-Point Protocol) connection. It sends the appropriate signals to the PPP daemon (`pppd`) to disconnect the link, hang up the modem, and clean up network interfaces and routing table entries.

PPP is a data link protocol used to establish direct connections between two networking nodes. While largely replaced by broadband and mobile technologies, PPP is still used in DSL connections (PPPoE), dial-up access, serial console connections, and certain embedded systems. The `ppp-off` script is part of the `ppp` package on Linux systems.

## Syntax

```bash
ppp-off [device]
```

## Parameters

- `device`: The TTY device used by the PPP connection (e.g., `ttyS0`, `ttyUSB0`). If omitted, the default device is used.

## Examples

```bash
ppp-off
```

Disconnect the current PPP connection.

```bash
ppp-off ttyS0
```

Disconnect the PPP connection on serial port ttyS0.

```bash
ppp-off ttyUSB0
```

Disconnect a PPP connection on a USB modem.

## Practical Notes

- `ppp-off` is a script, not a binary. Its location varies: `/etc/ppp/ppp-off`, `/usr/sbin/ppp-off`, or `/usr/bin/ppp-off`.
- For PPPoE connections used in DSL, use `poff` (from `rp-pppoe`) instead.
- On modern systems, the `pppd` daemon can be managed with `killall pppd` or `systemctl stop pppd` as alternatives.
- Before running `ppp-off`, ensure the PPP interface is active. Check with `ifconfig ppp0` or `ip addr show ppp0`.
- The `pon` script starts a PPP connection; `ppp-off` terminates it.
