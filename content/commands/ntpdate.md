---
name: ntpdate
summary: Set system time by synchronizing with NTP servers.
category: Network
tags: ntp, time, synchronization, clock, network
popular: false
---

## Additional Notes

`ntpdate` sets the local system clock by contacting one or more Network Time Protocol (NTP) servers. It performs a single time synchronization event, querying the servers for the correct time and adjusting the system clock to match. It is a one-shot alternative to running a full NTP daemon.

On many modern distributions, `ntpdate` has been deprecated in favor of `ntpd -q`, `chronyd -q`, `timedatectl`, or the `systemd-timesyncd` service. However, `ntpdate` remains useful for quick, manual time synchronization, especially during initial system setup, recovery from clock drift, or in environments where a persistent NTP daemon is not desired.

## Syntax

```bash
ntpdate [options] [server...]
```

## Parameters

- `server`: One or more NTP server hostnames or IP addresses.

## Common Options

- `-q`: Query only. Display the time offset without setting the clock.
- `-s`: Reduce output by logging via syslog instead of standard output.
- `-u`: Use unprivileged ports, which can bypass some firewall restrictions.
- `-b`: Step the time immediately with settimeofday (instead of gradually adjusting).
- `-B`: Force clock slew using adjtime even if the offset is large.
- `-t timeout`: Set the timeout for each NTP response in seconds (default 1).
- `-p samples`: Specify the number of NTP samples to get from each server (default 4).
- `-d`: Enable debug mode with verbose output.

## Examples

```bash
ntpdate pool.ntp.org
```

Synchronize the system clock with the NTP pool.

```bash
ntpdate -q pool.ntp.org
```

Query the time without changing the system clock.

```bash
ntpdate -s ntp.ubuntu.com pool.ntp.org
```

Synchronize with multiple servers, sending output to syslog.

```bash
ntpdate -u pool.ntp.org
```

Use unprivileged ports to synchronize, useful behind restrictive firewalls.

```bash
ntpdate -b pool.ntp.org
```

Force an immediate time step instead of a gradual slew.

## Practical Notes

- `ntpdate` requires either root privileges or the `CAP_SYS_TIME` capability to set the system clock.
- On systems running `systemd-timesyncd` or `chronyd`, running `ntpdate` concurrently can cause conflicts. Stop the time service first or use `timedatectl set-ntp false`.
- Most distributions now recommend `timedatectl` for time management: `timedatectl set-ntp true` enables automatic synchronization.
- For persistent NTP synchronization, use `chrony` (preferred on RHEL/CentOS/Fedora) or `ntpd` (traditional NTP daemon) instead of scheduling `ntpdate` via cron.
- The `-u` option is useful on systems where NTP port 123 is blocked by a firewall or already in use.
