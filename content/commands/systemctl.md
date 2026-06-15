---
name: systemctl
summary: Inspect and control systemd services and units.
category: System
tags: systemd, service, start, stop, enable, logs, boot
popular: true
---

## Additional Notes

`systemctl` controls `systemd`, the service manager used by many Linux distributions. It starts, stops, restarts, enables, disables, and inspects services and other unit types.

A service can be running right now without being enabled at boot. Likewise, a service can be enabled at boot but currently stopped. This difference is important.

## Syntax

```bash
systemctl [command] [unit]
sudo systemctl [command] [unit]
```

## Parameters

- `command`: Action such as `status`, `start`, `stop`, `restart`, `enable`, or `disable`.
- `unit`: A systemd unit name, commonly a service such as `ssh.service` or `nginx.service`.

The `.service` suffix is often optional:

```bash
systemctl status ssh
systemctl status ssh.service
```

## Common Commands

- `status UNIT`: Show state, PID, recent logs, and whether the unit is enabled.
- `start UNIT`: Start a service now.
- `stop UNIT`: Stop a service now.
- `restart UNIT`: Stop and start a service.
- `reload UNIT`: Reload configuration without a full restart when supported.
- `enable UNIT`: Start automatically at boot.
- `disable UNIT`: Do not start automatically at boot.
- `is-active UNIT`: Print whether a unit is active.
- `is-enabled UNIT`: Print whether a unit is enabled for boot.
- `list-units`: Show active units.
- `list-unit-files`: Show installed unit files and enable state.
- `daemon-reload`: Reload systemd unit files after editing them.

## Examples

```bash
systemctl status nginx
```

Inspect the current state of `nginx`.

```bash
sudo systemctl start nginx
```

Start `nginx` now.

```bash
sudo systemctl restart ssh
```

Restart the SSH service.

```bash
sudo systemctl enable docker
```

Make Docker start automatically at boot.

```bash
sudo systemctl enable --now docker
```

Enable Docker at boot and start it immediately.

```bash
systemctl list-units --type=service
```

List active services.

```bash
systemctl list-unit-files --type=service
```

List installed service unit files and their enable/disable state.

```bash
journalctl -u ssh --since today
```

Read logs for a service. This uses `journalctl`, but it is often part of the same troubleshooting workflow.

## Practical Notes

- Most service changes need `sudo`.
- Run `systemctl status UNIT` before restarting important services.
- Use `restart` after many config changes, but use `reload` when the service supports reload and you want less disruption.
- After editing a unit file, run `sudo systemctl daemon-reload`.
- If a service fails, check `systemctl status UNIT` and `journalctl -u UNIT`.
