---
name: ftptop
summary: Real-time FTP server connection monitor.
category: Network
tags: ftp, server, monitor, connections, realtime
popular: false
---

## Additional Notes

`ftptop` provides a real-time, `top`-style display of current FTP connections to a ProFTPD server. It continuously updates to show active sessions, the connected user, remote host, transfer status, data transferred, and connection duration.

It is useful for monitoring FTP server activity, diagnosing performance issues, and observing transfer patterns. The display updates at a configurable interval and can be filtered by virtual host or class.

## Syntax

```bash
ftptop [options]
```

## Parameters

- `options`: Flags that change how `ftptop` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-h host`: Connect to the specified host's status socket.
- `-p port`: Use the specified port for the status connection.
- `-D delay`: Set the display refresh interval in seconds (default is 2).
- `-S`: Group output by virtual server.
- `-C`: Group output by connection class.
- `-o`: Show output in an alternative format.
- `-?`: Display help.

## Examples

```bash
ftptop
```

Start the real-time FTP connection monitor.

```bash
ftptop -D 5
```

Update the display every 5 seconds.

```bash
ftptop -h localhost -S
```

Monitor a local server with output grouped by virtual server.

```bash
ftptop -p 4444
```

Connect to the status port on a non-default port.

## Practical Notes

- `ftptop` is specific to ProFTPD and requires the `mod_status` module.
- Press `q` to quit the interactive display.
- The columns typically show PID, user, remote address, transfer direction, file, and speed.
- For a text-based snapshot of current connections, use `ftpwho` instead.
- The ProFTPD server must have `ServerStatus` and `SocketBindTight` configured.
