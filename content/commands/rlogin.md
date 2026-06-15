---
name: rlogin
summary: Connect to a remote host using the rlogin protocol.
category: Network
tags: remote, login, network, legacy, rsh
popular: false
---

## Additional Notes

`rlogin` is a legacy remote login command that establishes a terminal session on a remote host. It was part of the r-utilities (rlogin, rsh, rcp, rexec) developed at Berkeley for Unix systems.

Authentication relies on host-based trust via `/etc/hosts.equiv` or per-user `.rhosts` files, with all traffic transmitted in cleartext. This makes it entirely unsuitable for untrusted networks. The protocol is superseded by SSH for all modern use cases.

## Syntax

```bash
rlogin [-8EKLdx] [-e char] [-l username] host
```

## Parameters

- `host`: The remote hostname or IP address to connect to.

## Common Options

- `-l username`: Log in as a specific user on the remote host.
- `-8`: Allow eight-bit input data.
- `-d`: Enable socket-level debugging.
- `-E`: Do not use any character as the escape character.
- `-e char`: Set the escape character (default is `~`).
- `-K`: Disable Kerberos authentication.
- `-L`: Allow the session to be run without a controlling terminal.
- `-x`: Enable DES encryption (if supported).

## Examples

```bash
rlogin -l alice server.example.com
```

Log in to `server.example.com` as user `alice`.

```bash
rlogin backup-server
```

Log in to `backup-server` using the current local username.

## Practical Notes

- `rlogin` is obsolete. Use `ssh` for all remote logins.
- Host-based trust authentication is a major security risk.
- The `rlogin` protocol uses TCP port 513.
- Most modern distributions no longer include an rlogind server.
