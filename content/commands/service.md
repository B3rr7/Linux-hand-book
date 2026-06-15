---
name: service
summary: Run legacy init service scripts.
category: System
tags: service, init, system, legacy
popular: true
---

## Additional Notes

`service` is a system command used to run legacy init service scripts. It runs init scripts and is the traditional way to start, stop, and check services on SysV systems.

On systemd-based distributions, `service` often redirects to `systemctl`. It remains widely used in older guides and compatibility contexts.

## Syntax

```bash
service [options] [arguments]
```

## Parameters

- `options`: Flags that change how `service` behaves.
- `'service'`: Name of the service to manage.
- `'command'`: Action (start, stop, restart, status, etc.).

## Common Options

- `SERVICE status`: Show service status.
- `SERVICE start`: Start a service.
- `SERVICE stop`: Stop a service.
- `SERVICE restart`: Restart a service.

## Examples

```bash
sudo service ssh status
sudo service nginx restart
sudo service cron stop
```

## Practical Notes

On systemd systems, prefer `systemctl`, but `service` remains common in older guides and compatibility scripts.
