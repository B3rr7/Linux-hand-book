---
name: ftpwho
summary: Display current FTP server session details.
category: Network
tags: ftp, server, connections, users, status
popular: false
---

## Additional Notes

`ftpwho` shows detailed information about currently connected FTP sessions on a ProFTPD server. Unlike `ftptop`'s continuous display, `ftpwho` prints a single snapshot of active connections and exits.

The output typically includes the process ID, username, remote IP address, connection duration, and current transfer status for each session. It also shows a summary line with the total number of connected users.

## Syntax

```bash
ftpwho [options]
```

## Parameters

- `options`: Flags that change how `ftpwho` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-h host`: Connect to the specified host's status socket.
- `-p port`: Use the specified port for the status connection.
- `-S`: Group output by virtual server.
- `-C`: Group output by connection class.
- `-o`: Show output in an alternative format.
- `-?`: Display help.

## Examples

```bash
ftpwho
```

Show all currently connected FTP sessions.

```bash
ftpwho -S
```

Show connections grouped by virtual server.

```bash
ftpwho -h remote-server
```

Query the FTP status on a remote host.

## Practical Notes

- `ftpwho` is specific to ProFTPD and requires the `mod_status` module.
- For a continuously updating view, use `ftptop` instead.
- The command is useful for quick checks of who is connected and what they are transferring.
- If the output is empty or shows an error, verify that ProFTPD is running and has status reporting enabled.
