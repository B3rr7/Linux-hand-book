---
name: supervisord
summary: Process control system for managing background processes.
category: Administration
tags: supervisor, process, daemon, management, monitoring
popular: false
---

## Additional Notes

`supervisord` is the server daemon component of Supervisor, a process control system for Unix-like operating systems. It allows administrators to manage, monitor, and control multiple long-running application processes as if they were services. Supervisor is commonly used in server environments, container images, and development setups where systemd is not available or practical.

Supervisor manages processes specified in configuration files (typically under `/etc/supervisor/conf.d/`). It can automatically restart crashed processes, redirect process output to logs, send event notifications, and provide both a command-line (`supervisorctl`) and web interface for management. Each managed process runs as a subprocess of `supervisord`.

## Syntax

```bash
supervisord [options]
```

## Parameters

- `options`: Flags that change how `supervisord` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-c`, `--configuration file`: Specify the configuration file (default: `/etc/supervisord.conf`).
- `-n`, `--nodaemon`: Run in the foreground (do not daemonize).
- `-s`, `--silent`: Suppress most log output.
- `-u`, `--user user`: Run as the specified user after startup.
- `-l`, `--logfile file`: Set the log file location.
- `-j`, `--pidfile file`: Set the PID file location.
- `-d`, `--directory dir`: Change to this directory before running.
- `-q`, `--quiet`: Suppress all output except errors.
- `-v`, `--version`: Show version information.

## Configuration File Directives

Basic supervisor configuration in `/etc/supervisord.conf`:

```ini
[supervisord]
logfile=/var/log/supervisor/supervisord.log
pidfile=/var/run/supervisord.pid

[program:myapp]
command=/usr/bin/myapp --config /etc/myapp/config.ini
directory=/opt/myapp
user=myappuser
autostart=true
autorestart=true
startretries=3
stderr_logfile=/var/log/myapp/err.log
stdout_logfile=/var/log/myapp/out.log
environment=ENV=production
```

## Examples

```bash
supervisord
```

Start the Supervisor daemon using the default configuration file.

```bash
supervisord -c /etc/supervisor/custom.conf
```

Start with an alternative configuration file.

```bash
supervisord -n
```

Run in the foreground (useful for debugging or containers).

```bash
supervisord -u appuser
```

Run as user `appuser` after startup.

## Practical Notes

- Manage running processes with `supervisorctl status`, `start`, `stop`, `restart`.
- Configuration files support templating with `%(ENV_VAR)s` syntax.
- Process output can be rotated with `stdout_logfile_maxbytes` and `stdout_logfile_backups`.
- Supervisor can manage multiple programs, process groups, and dependent startup ordering.
- The web interface is configured with the `[inet_http_server]` section.
- For container environments, always use `-n` (nodaemon) to keep the container running.
- Event listeners provide hooks for notifications (email, webhooks, custom scripts).
