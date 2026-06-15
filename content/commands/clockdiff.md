---
name: clockdiff
summary: Measure clock difference between hosts using network probes.
category: Network
tags: time, network, clock, diagnostics
popular: false
---

## Additional Notes

`clockdiff` estimates time difference between the local host and a remote host using ICMP timestamp-style probing when supported.

It is a diagnostic tool, not a replacement for NTP or chrony time synchronization.

## Syntax

```bash
clockdiff [options] host
```

## Parameters

- `host`: Remote host to compare against.
- `options`: Protocol and verbosity controls depending on implementation.

## Common Options

- `-o`: Use older ICMP timestamp request style on some versions.
- `-o1`: Use another old timestamp mode on some versions.
- `-v`: Verbose output.

## Examples

```bash
clockdiff time.example.com
```

Estimate time difference with a remote host.

```bash
timedatectl timesync-status
```

Check time synchronization on many systemd systems.

```bash
chronyc tracking
```

Check chrony synchronization status.

## Practical Notes

- Many networks block ICMP timestamp packets.
- Use NTP, chrony, or systemd-timesyncd for actual clock synchronization.
- Treat results as rough diagnostics.
