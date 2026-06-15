---
name: ufw
summary: Manage a simple firewall on Ubuntu and related systems.
category: Network
tags: firewall, security, ports, ubuntu
popular: true
---

## Additional Notes

`ufw` means uncomplicated firewall. It provides a simpler interface for allowing, denying, enabling, disabling, and checking firewall rules on Ubuntu and related systems.

Use `ufw` when you want host firewall rules without writing raw iptables or nftables rules. It is especially useful for server basics: allow SSH, allow HTTP/HTTPS, deny unwanted ports, then enable the firewall.

## Syntax

```bash
ufw command [rule]
sudo ufw command [rule]
```

## Parameters

- `command`: Operation such as `status`, `allow`, `deny`, `delete`, `enable`, or `disable`.
- `rule`: Port, protocol, service name, application profile, or source/destination rule.
- `options`: Flags that adjust output or rule behavior.

## Common Options

- `status`: Show firewall status.
- `status numbered`: Show rules with numbers for deletion.
- `allow PORT`: Allow traffic to a port.
- `allow PORT/PROTO`: Allow a specific protocol, such as `22/tcp`.
- `deny PORT`: Deny traffic to a port.
- `delete RULE`: Delete a rule.
- `enable`: Turn on the firewall.
- `disable`: Turn off the firewall.
- `app list`: List application profiles.

## Examples

```bash
sudo ufw status verbose
```

Show firewall status and defaults.

```bash
sudo ufw allow 22/tcp
```

Allow SSH before enabling the firewall remotely.

```bash
sudo ufw allow "Nginx Full"
```

Allow an application profile for HTTP and HTTPS.

```bash
sudo ufw deny 23/tcp
```

Deny Telnet traffic.

```bash
sudo ufw status numbered
sudo ufw delete 2
```

List numbered rules and delete one.

```bash
sudo ufw enable
```

Enable the firewall.

## Practical Notes

- Allow SSH before enabling UFW on a remote server.
- Use `status numbered` before deleting rules.
- UFW is a frontend; avoid mixing it casually with manual iptables/nftables edits unless you understand the underlying rule order.
