---
name: apachectl
summary: Control and inspect the Apache HTTP server.
category: System
tags: apache, httpd, web server, service
popular: false
---

## Additional Notes

`apachectl` is a control wrapper for the Apache HTTP Server. It can start, stop, restart, reload, and validate Apache configuration depending on the distribution.

Use it when working directly with Apache configuration. On systemd systems, `systemctl` is often used for service control, while `apachectl configtest` remains useful for syntax checks.

## Syntax

```bash
apachectl command
apachectl [options]
```

## Parameters

- `command`: Action such as `start`, `stop`, `restart`, `graceful`, or `configtest`.
- `options`: Apache control or pass-through options.

## Common Commands

- `start`: Start Apache.
- `stop`: Stop Apache.
- `restart`: Stop and start Apache.
- `graceful`: Reload configuration without immediately dropping active connections.
- `configtest`: Check configuration syntax.
- `status`: Show server status when status support is configured.

## Examples

```bash
sudo apachectl configtest
```

Check Apache configuration syntax.

```bash
sudo apachectl graceful
```

Reload Apache more gently after config changes.

```bash
sudo apachectl restart
```

Restart Apache.

```bash
systemctl status apache2
```

Check Apache status on many Debian/Ubuntu systems.

## Practical Notes

- Service names vary: Debian often uses `apache2`, while RHEL-like systems often use `httpd`.
- Run `configtest` before reloads or restarts.
- A graceful reload is usually safer than a hard restart on active servers.
