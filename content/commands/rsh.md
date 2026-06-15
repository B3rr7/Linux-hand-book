---
name: rsh
summary: Execute commands on a remote host via the rsh protocol.
category: Network
tags: remote, shell, network, legacy, rsh
popular: false
---

## Additional Notes

`rsh` (remote shell) executes a command on a remote host without establishing an interactive login session. It is part of the r-utilities suite and uses host-based authentication via `/etc/hosts.equiv` or `.rhosts` files.

Like other r-commands, `rsh` transmits all data including authentication tokens in cleartext. It does not provide encryption, making it unsuitable for use over untrusted networks. SSH should be used instead for all remote command execution.

## Syntax

```bash
rsh [-dn] [-l username] hostname [command]
```

## Parameters

- `hostname`: The remote host to connect to.
- `username`: The username to authenticate as on the remote host.
- `command`: The command to execute on the remote host.

## Common Options

- `-l username`: Log in as the specified user.
- `-d`: Enable debug output on the socket.
- `-n`: Redirect stdin from `/dev/null`.
- `-K`: Disable Kerberos authentication.
- `-x`: Enable DES encryption (if compiled in).

## Examples

```bash
rsh server01 df -h
```

Run `df -h` on `server01` and display the output locally.

```bash
rsh -l admin backup-server "tar czf /backup/etc.tgz /etc"
```

Run a tar backup command as user `admin` on the remote host.

## Practical Notes

- `rsh` is obsolete and insecure. Use `ssh user@host command` instead.
- The remote shell service runs on TCP port 514 via `rshd` or `in.rshd`.
- Authentication is based on IP address trust, which is trivially spoofed.
- Most distributions no longer ship an rsh server.
- The SSH equivalent is `ssh user@host command`.
