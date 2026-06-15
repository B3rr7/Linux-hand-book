---
name: dhcrelay
summary: Relay DHCP and BOOTP requests between subnets.
category: Network
tags: dhcp, relay, network, bootp, subnet
popular: false
---

## Additional Notes

`dhcrelay` forwards DHCP and BOOTP broadcast requests from clients on one subnet to DHCP servers on another subnet. It is useful when a single DHCP server must serve multiple subnets that are separated by routers that do not forward broadcast traffic.

The relay agent listens for DHCP/BOOTP broadcasts on directly connected subnets and forwards them as unicast to the configured server address. It then relays the server response back to the client. This allows centralized DHCP management without placing a server on every subnet.

## Syntax

```bash
dhcrelay [options] server-address...
```

## Parameters

- `server-address`: IP address of the upstream DHCP server to forward requests to.

## Common Options

- `-i interface`: Listen only on the specified interface. Repeat for multiple interfaces.
- `-u upstream`: Specify an upstream server address with a different format (used for DHCPv6).
- `-4` or `-6`: Run as DHCPv4 or DHCPv6 relay agent.
- `-d`: Run in the foreground with debug output.
- `-f`: Run in the foreground, do not daemonize.
- `-q`: Suppress non-error messages during startup.
- `-p port`: Listen on an alternate UDP port.
- `-m append|replace|forward`: Set the agent-option processing mode.
- `-c max-hop`: Set the maximum hop count for relayed packets.

## Examples

```bash
dhcrelay 192.168.1.10
```

Forward DHCP requests to a single upstream server.

```bash
dhcrelay -i eth0 -i eth1 10.0.0.5
```

Forward requests received on `eth0` and `eth1` to `10.0.0.5`.

```bash
dhcrelay -d 192.168.1.10
```

Run in the foreground with debugging output.

## Practical Notes

- The relay agent must be on the same broadcast domain as the clients it serves.
- Multiple upstream server addresses can be specified for redundancy.
- Use the `-i` option to limit which interfaces the relay listens on; otherwise it listens on all interfaces.
- For DHCPv6, use `dhcrelay -6` with appropriate upstream addresses.
- The relay adds agent-option information (giaddr field) to identify the originating subnet.
