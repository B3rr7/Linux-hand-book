---
name: squid
summary: Squid caching proxy server.
category: Network
tags: proxy, cache, web, squid, forward-proxy, reverse-proxy
popular: false
---

## Additional Notes

Squid is a high-performance caching proxy server for HTTP, HTTPS, FTP, and other network protocols. It can be deployed as a forward proxy (caching frequently accessed web content for client LANs), a reverse proxy (accelerating web servers by caching their responses), or a content filter (controlling and monitoring web access). Squid is one of the most widely used proxy servers on Unix-like systems.

Squid improves performance by caching frequently requested content in memory and on disk, reducing bandwidth and response times. It supports access control lists (ACLs) for fine-grained traffic management, authentication via LDAP, NTLM, Kerberos, and basic auth, SSL/TLS interception, and advanced content filtering through Squid's redirector/rewriter framework and ICAP/eCAP protocols.

## Syntax

```bash
squid [options]
```

## Parameters

- `options`: Flags that change how `squid` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-a`: Disable the ICP (Internet Cache Protocol) port.
- `-C`: Do not catch fatal signals (useful for debugging).
- `-d level`: Enable debug output to stderr at the specified verbosity level (0-99).
- `-f configfile`: Use an alternative configuration file (default: `/etc/squid/squid.conf`).
- `-k signal`: Send a signal to the running Squid process. Signals: `reconfigure`, `rotate`, `shutdown`, `interrupt`, `kill`, `debug`, `check`, `parse`.
- `-l`: Use syslog for logging instead of cache.log.
- `-N`: Run in the foreground (do not daemonize).
- `-n service_name`: Specify a service name for logging purposes.
- `-s`: Enable syslog logging in addition to standard logs.
- `-u port`: Specify the ICP port number.
- `-v`: Show version information.
- `-z`: Create swap directories (initialize the cache directory structure).
- `-X`: Force full debugging (debug all sections).
- `-Y`: Disable memory caching for initial rebuild.

## Squid Configuration Examples

Basic forward proxy (in `/etc/squid/squid.conf`):

```bash
http_port 3128
acl localnet src 192.168.1.0/24
http_access allow localnet
http_access deny all
```

Basic reverse proxy:

```bash
http_port 80 accel defaultsite=example.com
cache_peer backend.example.com parent 80 0 no-query originserver
http_access allow all
```

## Examples

```bash
squid -z
```

Initialize Squid's cache directory structure (required before first start).

```bash
squid -N -d 1
```

Run Squid in the foreground with debug level 1.

```bash
squid -k reconfigure
```

Reload the configuration without restarting Squid.

```bash
squid -k rotate
```

Rotate the log files (close current logs, open new ones).

```bash
squid -k shutdown
```

Gracefully shut down Squid.

```bash
squid -f /etc/squid/custom.conf
```

Start Squid with an alternative configuration file.

```bash
squid -k parse
```

Check the configuration file for syntax errors without starting Squid.

## Practical Notes

- Squid's main configuration file is `/etc/squid/squid.conf`, which contains extensive documentation in comments.
- Access control is processed in order; the first matching rule determines access.
- Common ACL types: `src` (source IP), `dst` (destination IP), `dstdomain` (domain), `url_regex`, `time`, `port`, `method`.
- Squid logs are stored in `/var/log/squid/access.log`, `cache.log`, and `store.log`.
- Use `cachemgr.cgi` or `squidclient` for web-based management and statistics.
- For HTTPS inspection, Squid requires SSL certificate generation and configuration (`ssl_bump` feature).
- The `cache_mem` directive controls how much memory Squid uses for hot objects.
- Replacement policies: `heap LRU` (default), `heap GDSF`, `heap LFUDA`, or `heap M`-based algorithms.
- Squid's ICP and HTCP protocols enable hierarchical caching between multiple Squid servers.
