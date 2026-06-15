---
name: dhcpd
summary: DHCP server daemon for automatic IP address assignment.
category: Network
tags: dhcp, network, ip, server, protocol
popular: false
---

## Additional Notes

`dhcpd` is the Internet Systems Consortium DHCP server. It dynamically assigns IP addresses, subnet masks, default gateways, DNS servers, and other network parameters to clients using the Dynamic Host Configuration Protocol. It is the standard DHCP server on most Linux distributions.

The server reads its configuration from `/etc/dhcp/dhcpd.conf` and typically runs as a systemd service. It listens on UDP port 67 for client requests and manages address leases in `/var/lib/dhcp/dhcpd.leases`. Administrators configure subnets, address ranges, fixed assignments, and options such as lease time and DNS servers.

## Syntax

```bash
dhcpd [options] [interface...]
```

## Parameters

- `interface`: Network interface to listen on. If omitted, `dhcpd` listens on all interfaces with an IP address.

## Common Options

- `-f`: Run in the foreground (do not daemonize). Useful for debugging.
- `-d`: Send log messages to stderr instead of syslog.
- `-q`: Quiet startup, suppress copyright and version messages.
- `-t`: Test the configuration file syntax without starting the server.
- `-T`: Test the configuration file and lease database for correctness.
- `-p port`: Listen on an alternate UDP port.
- `-cf file`: Use an alternate configuration file instead of `/etc/dhcp/dhcpd.conf`.
- `-lf file`: Use an alternate lease file instead of `/var/lib/dhcp/dhcpd.leases`.
- `-4` or `-6`: Run as DHCPv4 or DHCPv6 server.

## Examples

```bash
dhcpd -t
```

Test the configuration file for syntax errors.

```bash
dhcpd -f eth0
```

Run `dhcpd` in the foreground on the `eth0` interface to monitor startup messages.

```bash
dhcpd -cf /etc/dhcp/custom.conf
```

Start the server with a custom configuration file.

## Practical Notes

- Always test configuration with the `-t` flag before restarting a production server.
- The server requires that each subnet section in `dhcpd.conf` matches a configured interface.
- Use `dhcpd -d -f` together to run interactively with verbose logging during troubleshooting.
- Lease file corruption can prevent startup; back up or truncate `/var/lib/dhcp/dhcpd.leases` carefully.
- For IPv6 DHCP, use `dhcpd -6` with a separate configuration file.
