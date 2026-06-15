---
name: hostname
summary: Show or set the system hostname.
category: System
tags: hostname, system, network, identity
popular: false
---

## Additional Notes

`hostname` prints or sets the system hostname. The hostname identifies a machine in prompts, logs, local networks, and service discovery.

On systemd systems, `hostnamectl` is usually preferred for permanent hostname changes.

## Syntax

```bash
hostname [options] [name]
```

## Parameters

- `options`: Flags that change how `hostname` behaves.
- `'name'`: New hostname to set (optional).

## Common Options

- `-f`, `--fqdn`: Show fully qualified domain name when available.
- `-s`, `--short`: Show short hostname.
- `-d`, `--domain`: Show DNS domain name.
- `-I`: Show assigned IP addresses.
- `-i`: Show addresses for the hostname.

## Examples

```bash
hostname
```

Print the current hostname.

```bash
hostname -s
```

Print short hostname.

```bash
hostname -I
```

Print IP addresses assigned to the host.

```bash
sudo hostname temporary-name
```

Set a temporary hostname until reboot or service override.

## Practical Notes

- Use `hostnamectl set-hostname NAME` for persistent changes on systemd.
- Hostname changes can affect logs, prompts, monitoring, and local name resolution.
- Check `/etc/hostname` and `/etc/hosts` on many distributions.
