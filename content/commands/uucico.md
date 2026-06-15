---
name: uucico
summary: UUCP file transfer daemon.
category: Network
tags: uucp, transfer, daemon, serial, network
popular: false
---

## Additional Notes

`uucico` is the daemon component of the UUCP (Unix-to-Unix Copy) system. It handles the actual file transfer between systems, typically over serial lines or TCP/IP connections. The name stands for "Unix-to-Unix Copy In/Call Out." It is started by the UUCP spooler when there are pending jobs and terminates when transfers are complete.

It can operate in master mode (calling out to initiate transfers) or slave mode (waiting for incoming connections). On modern systems, UUCP is rarely used, having been replaced by email, file sharing protocols, SSH, and rsync. It persists in some embedded or legacy environments.

## Syntax

```bash
uucico [options]
```

## Parameters

- `options`: Flags that change how `uucico` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-r role`: Set the role (`master` or `slave`).
- `-s system`: Call the named remote system.
- `-p port`: Use the specified port/device.
- `-D`: Run in debug mode with verbose output.
- `-x N`: Set debug level (`N` from 0 to 9).
- `-i type`: Use the specified interface protocol type.
- `-e`: Force the slave role (expect incoming).

## Examples

```bash
uucico -r master -s remotehost
```

Call out to `remotehost` as master and transfer pending jobs.

```bash
uucico -r slave
```

Run as a slave waiting for an incoming connection.

```bash
uucico -D -x5
```

Run in debug mode with verbosity level 5.

## Practical Notes

- UUCP is rarely used on modern systems. Consider SSH-based file transfer or rsync instead.
- The UUCP suite also includes `uucp`, `uux`, `uupick`, `uuto`, and `uustat`.
- Configuration files reside in `/etc/uucp/` (or `/etc/uucp/`), including `sys`, `port`, `dial`, and `dialcodes`.
- UUCP can still be found in some industrial automation and embedded Linux environments.
