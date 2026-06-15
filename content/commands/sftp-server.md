---
name: sftp-server
summary: SFTP server subsystem for SSH.
category: Network
tags: sftp, ssh, file-transfer, server, subsystem
popular: false
---

## Additional Notes

`sftp-server` is the SFTP (SSH File Transfer Protocol) server subsystem that runs as part of `sshd`. It provides file transfer, directory listing, and remote filesystem operations over a secure SSH connection. It is automatically invoked by `sshd` when an SFTP client connects and requests the `sftp` subsystem.

The SFTP protocol (not to be confused with FTPS) runs entirely over the SSH transport layer, inheriting SSH's authentication, encryption, and integrity protections. The server is configured in `/etc/ssh/sshd_config` via the `Subsystem sftp` directive, which can point to the `sftp-server` binary or the newer `internal-sftp` implementation.

## Syntax

```bash
sftp-server [-d startdir] [-e] [-f log_facility] [-l log_level] [-P blacklisted_requests] [-p whitelisted_requests] [-u umask]
```

## Parameters

- `options`: Flags that change how `sftp-server` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-d startdir`: Change to the specified directory before starting the session.
- `-e`: Log to stderr instead of syslog.
- `-f facility`: Specify the syslog facility (default: `AUTH`).
- `-l level`: Specify the logging level (default: `INFO`).
- `-P requests`: Blacklist specific SFTP protocol requests (comma-separated).
- `-p requests`: Whitelist specific SFTP protocol requests (comma-separated).
- `-u umask`: Set the file creation umask for new files.
- `-R`: Reject rename operations.
- `-r`: Reject remote readlink operations (preserve link targets).

## Examples

```bash
sftp-server -d /srv/sftp -u 0027
```

Start an SFTP server session rooted at `/srv/sftp` with a restrictive umask.

```bash
sftp-server -l DEBUG
```

Start the SFTP server with debug-level logging.

## Practical Notes

- `sftp-server` is not intended to be run directly from the command line; it is invoked by `sshd`.
- The `internal-sftp` subsystem (configured in `sshd_config`) is a newer in-process implementation that avoids launching a separate process per SFTP connection.
- Chroot directories for SFTP users are configured with `ChrootDirectory` in `sshd_config`.
- SFTP-only accounts are typically set up with `Subsystem sftp internal-sftp` and forced internal SFTP with `ForceCommand internal-sftp`.
- Logging is directed to syslog by default under the AUTH facility.
