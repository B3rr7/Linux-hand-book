---
name: ftpcount
summary: Show current FTP server connection count.
category: Network
tags: ftp, server, connections, count, status
popular: false
---

## Additional Notes

`ftpcount` displays the number of current FTP connections to a ProFTPD server. It shows the total number of connected sessions and can optionally break down counts by virtual host or configuration class.

It is part of the ProFTPD distribution and queries the server's current session statistics. The output typically shows the number of connected users and any configured limits. If no FTP server is running or if ProFTPD is not installed, the command returns an error.

## Syntax

```bash
ftpcount [options]
```

## Parameters

- `options`: Flags that change how `ftpcount` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-h host`: Connect to the specified host's ftpcount socket.
- `-p port`: Use the specified port for the connection.
- `-S`: Show statistics by virtual server.
- `-C`: Show statistics by class.
- `-o`: Show output in an alternative format.
- `-?`: Display help.

## Examples

```bash
ftpcount
```

Show current FTP connection counts.

```bash
ftpcount -h localhost -p 4444
```

Connect to a local ProFTPD server on a custom status port.

```bash
ftpcount -S
```

Show per-virtual-server connection statistics.

## Practical Notes

- `ftpcount` is specific to ProFTPD. For vsftpd or Pure-FTPd, use their respective monitoring tools.
- The ProFTPD server must have the `mod_status` module loaded and the `SocketBindTight` and `ServerStatus` directives configured appropriately.
- This command is primarily used by administrators to monitor FTP load and enforce connection limits.
- For real-time monitoring, `ftptop` provides an interactive view similar to `top`.
