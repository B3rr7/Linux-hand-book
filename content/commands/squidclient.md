---
name: squidclient
summary: HTTP client for monitoring and managing Squid proxy.
category: Network
tags: squid, proxy, client, management, http
popular: false
---

## Additional Notes

`squidclient` is a command-line HTTP client specifically designed to interact with the Squid proxy cache manager interface. It can retrieve cache statistics, purge cached objects, and reconfigure Squid remotely via the cache manager (`cachemgr.cgi`) interface.

It is useful for administrators who need to monitor cache performance, check hit rates, view active connections, or purge stale objects without using a web browser. The cache manager interface is protected by ACLs in `squid.conf` and optionally by a password.

## Syntax

```bash
squidclient [options] [command]
```

## Parameters

- `options`: Flags that change how `squidclient` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-h host`: Connect to Squid on the specified host (default: `localhost`).
- `-p port`: Connect to Squid on the specified port (default: `3128`).
- `-m method`: HTTP method to use (`GET`, `POST`, `PURGE`, etc.).
- `-u user`: Username for cache manager authentication.
- `-w password`: Password for cache manager authentication.
- `-I ident`: Identification string for the request.
- `-U user_agent`: Custom User-Agent header.
- `-H header`: Add a custom HTTP header.
- `-d level`: Debug verbosity level.
- `-s`: Silent mode (suppress output).
- `-t timeout`: Set the connection timeout in seconds.
- `-v`: Verbose output (show HTTP headers).
- `-V`: Show version information.

## Cache Manager Commands

- `info`: General cache information.
- `menu`: Show available cache manager commands.
- `objects`: List cached objects.
- `squid.conf`: Show active Squid configuration.
- `server_list`: Show peer/server information.
- `parameter`: Show configurable parameters.
- `ipcache`: Show IP cache contents.
- `fqdncache`: Show FQDN cache contents.
- `storedir`: Show storage directory usage.
- `utilization`: Show resource utilization.
- `histogram`: Show request rate histogram.
- `pconn`: Show persistent connection data.
- `carp`: Show CARP (Cache Array Routing Protocol) data.

## Examples

```bash
squidclient cache_object://localhost/info
```

Show general cache information for the local Squid instance.

```bash
squidclient -p 8080 cache_object://proxy.example.com/menu
```

List available cache manager commands on a remote Squid at port 8080.

```bash
squidclient -m PURGE http://example.com/cached-page
```

Purge a specific cached object from Squid.

```bash
squidclient -h 10.0.0.1 -w secret cache_object://10.0.0.1/parameter
```

Connect to a remote Squid with authentication and show parameters.

## Practical Notes

- The cache manager interface must be enabled in `squid.conf` with appropriate ACLs.
- Many cache manager commands require authentication configured via `cachemgr_passwd` in `squid.conf`.
- The PURGE method requires the `http_access allow PURGE` ACL to be configured.
- On some distributions, `squidclient` is replaced by `squidclient -m` or a newer version with different syntax.
- The default port for Squid is 3128 unless changed in the configuration.
- Output from cache manager commands is plain text, suitable for parsing by monitoring tools.
