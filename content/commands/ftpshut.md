---
name: ftpshut
summary: Schedule a ProFTPD server shutdown.
category: Network
tags: ftp, server, shutdown, schedule, maintenance
popular: false
---

## Additional Notes

`ftpshut` schedules the ProFTPD FTP server to shut down at a specified time. It creates a shutdown configuration file that the server reads to determine when and how to deny new connections and disconnect existing users.

When a shutdown is scheduled, new connections receive a message explaining that the server is going down. Existing connections are given a grace period before they are forcibly disconnected. The shutdown can be cancelled by removing the shutdown file.

## Syntax

```bash
ftpshut [options] time [warning-message]
```

## Parameters

- `time`: When to shut down. Can be `now`, `+minutes`, or a specific time in `HH:MM` format.
- `warning-message`: Optional message displayed to users before disconnect.

## Common Options

- `-l minutes`: Deny new connections this many minutes before the shutdown.
- `-d minutes`: Disconnect existing users this many minutes before the shutdown.
- `-R`: Restart the server instead of shutting down.
- `-V`: Remove an existing shutdown schedule and prevent the shutdown.

## Examples

```bash
sudo ftpshut now
```

Shut down the FTP server immediately.

```bash
sudo ftpshut +30 "Server maintenance in 30 minutes"
```

Schedule a shutdown 30 minutes from now with a warning message.

```bash
sudo ftpshut 23:00 -l 10 -d 5
```

Schedule a shutdown at 11:00 PM, denying new connections 10 minutes before and disconnecting active users 5 minutes before.

```bash
sudo ftpshut -R +10
```

Schedule a server restart in 10 minutes.

```bash
sudo ftpshut -V
```

Cancel a previously scheduled shutdown.

## Practical Notes

- `ftpshut` is specific to ProFTPD. Other FTP servers have their own shutdown mechanisms.
- The shutdown schedule is stored in the file `/etc/shutmsg` by default.
- To cancel a shutdown, either run `ftpshut -V` or manually remove `/etc/shutmsg`.
- The warning message is sent to connected users before the server disconnects them.
- Use `ftpshut` in maintenance scripts to gracefully bring down the FTP service.
