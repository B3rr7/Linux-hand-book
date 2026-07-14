---
name: service
summary: Run legacy init service scripts.
category: System
tags: service, init, system, legacy, script
popular: true
---

## Additional Notes

`service` runs legacy init (SysV) service scripts. It is the traditional way to start, stop, restart, and check services on SysV-based systems, and it wraps the `/etc/init.d/` scripts.

On systemd-based distributions, `service` usually redirects to `systemctl` for compatibility, so the same command works in older guides and newer systems alike.

## Syntax

```bash
service [options] SERVICE ACTION
```

## Parameters

- `options`: Flags that change how `service` behaves.
- `SERVICE`: Name of the service script to manage.
- `ACTION`: What to do: `start`, `stop`, `restart`, `reload`, `status`, and so on.

## Common Actions

- `SERVICE status`: Show whether the service is running.
- `SERVICE start`: Start the service now.
- `SERVICE stop`: Stop the service now.
- `SERVICE restart`: Stop then start the service.
- `SERVICE reload`: Ask the service to reload its config without a full restart.
- `SERVICE force-reload`: Reload, falling back to restart if reload is unsupported.
- `SERVICE condrestart`: Restart only if already running.

## Common Options

- `--status-all`: Show status of every init script.
- `--list`: List installed service scripts.
- `-h`, `--help`: Show usage help.
- `--version`: Print the version.

## Examples

```bash
sudo service ssh status
```

Check whether the SSH service is running.

```bash
sudo service nginx restart
```

Restart the nginx service.

```bash
sudo service cron stop
```

Stop the cron service.

```bash
sudo service apache2 reload
```

Reload Apache configuration without dropping connections.

```bash
sudo service --status-all
```

Print a running/stopped summary for all services.

```bash
service --list
```

List available service scripts on the system.

## Practical Notes

- Most actions need `sudo` because they change system state.
- On systemd systems, prefer `systemctl`; `service` still works through compatibility.
- Use `reload` (or `force-reload`) when the service supports it to avoid a full restart.
- `status` output varies by script; combine with `journalctl` or logs for detail on systemd hosts.
- `service --status-all` is handy for a quick overview during troubleshooting.
