---
name: mii-tool
summary: View and configure Media Independent Interface (NIC) settings.
category: Network
tags: network, nic, ethernet, link, speed, duplex
popular: false
---

## Additional Notes

`mii-tool` checks and configures the Media Independent Interface (MII) on Ethernet network interface cards. It displays link status, speed, duplex mode, and autonegotiation settings.

It is useful for diagnosing physical layer issues: a down link may indicate a disconnected cable, a duplex mismatch can cause poor performance, and inconsistent negotiation between the NIC and the switch can lead to connectivity problems. On modern systems, `ethtool` is the preferred replacement.

## Syntax

```bash
mii-tool [options] [interface...]
```

## Parameters

- `interface`: Network interface name (e.g., `eth0`). If omitted, all interfaces are shown.

## Common Options

- `-v`, `--verbose`: Show detailed MII information.
- `-V`, `--version`: Show version information.
- `-r`, `--restart`: Restart autonegotiation.
- `-F media`, `--force media`: Force the interface to a specific media type (e.g., `100baseTx-FD`, `10baseT-HD`).
- `-w`, `--watch`: Watch the interface for link status changes.
- `-p`, `--phy`: Show PHY (physical layer) register information.

## Examples

```bash
mii-tool
```

Show link status for all interfaces.

```bash
mii-tool eth0
```

Show status for `eth0`.

```bash
mii-tool -v eth0
```

Show detailed MII information.

```bash
mii-tool -F 100baseTx-FD eth0
```

Force 100 Mbps full-duplex mode.

```bash
mii-tool -r eth0
```

Restart autonegotiation on the interface.

```bash
mii-tool -w eth0
```

Monitor link status in real time.

## Practical Notes

- `mii-tool` works only with MII-compliant NICs. Many modern NICs do not support it.
- `ethtool` is the modern replacement and supports many more NICs and features.
- Forcing speed and duplex with `-F` disables autonegotiation. This can cause a mismatch if the switch does not match the forced settings.
- A link showing `no autonegotiation` and `link ok` is typical when the device is forced to a specific setting.

