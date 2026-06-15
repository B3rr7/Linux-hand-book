---
name: hostnamectl
summary: Show or set the system hostname and machine identity metadata.
category: System
tags: hostname, systemd, system, identity, machine
popular: false
---

## Additional Notes

`hostnamectl` manages hostname information on systemd systems. It can show static, transient, and pretty hostnames along with machine ID, boot ID, kernel, architecture, and operating system.

It is the clean modern way to change a persistent hostname on many Linux distributions.

## Syntax

```bash
hostnamectl [command] [value]
```

## Parameters

- `command`: Operation to perform (status, set-hostname, etc.).
- `'value'`: Command operand (e.g., the new hostname).

## Common Commands

- `status`: Show hostname and system identity information.
- `set-hostname NAME`: Set the system hostname.
- `set-hostname "Pretty Name" --pretty`: Set a human-readable pretty hostname.

## Examples

```bash
hostnamectl
```

Show hostname and system details.

```bash
sudo hostnamectl set-hostname web-01
```

Set persistent hostname to `web-01`.

```bash
hostnamectl status
```

Explicitly show status.

```bash
hostname
```

Confirm the active hostname.

## Practical Notes

- Hostname changes may appear in shell prompts, logs, and monitoring.
- Choose stable names for servers and lab machines.
- Some networks also need DNS or `/etc/hosts` updates.
- `hostnamectl` requires systemd.
