---
name: rexec
summary: Execute commands on a remote host using the rexec protocol.
category: Network
tags: remote, execution, network, rsh, legacy
popular: false
---

## Additional Notes

`rexec` is a legacy command for executing commands on a remote system using the rexec protocol. It authenticates using a username and password sent over the network in cleartext, making it insecure for untrusted networks.

The rexec service listens on TCP port 512 and uses a simple authentication mechanism. Modern systems should use `ssh` instead, as rexec provides no encryption or strong authentication. Most distributions no longer include a rexec server by default.

## Syntax

```bash
rexec [-h hostname] [-u username] [-p password] [-n] command
```

## Parameters

- `hostname`: The remote host to connect to.
- `username`: Username for authentication on the remote host.
- `password`: Password for authentication.
- `command`: The command to execute on the remote host.

## Common Options

- `-a`: Use automatic login via the `RHOSTS` environment variable or `.netrc` file.
- `-d`: Enable debug output.
- `-h host`: Specify the remote hostname.
- `-l username`: Specify the remote username.
- `-n`: Redirect stdin from `/dev/null`.
- `-p password`: Provide the password on the command line.
- `-L localsock`: Bind a local Unix socket.
- `-N`: Do not start a remote command, useful for port forwarding.

## Examples

```bash
rexec -h remote.example.com -l alice "ls -la /tmp"
```

Run `ls -la /tmp` on the remote host as user `alice`.

```bash
echo "status" | rexec -h server01 -l admin
```

Pipe input to a command on the remote host.

## Practical Notes

- `rexec` is obsolete. Use `ssh` for any new deployments.
- The rexec protocol sends passwords in cleartext over the network.
- The rexec service is defined in `/etc/inetd.conf` or via systemd socket activation on older distributions.
- Most modern Linux distributions do not install the `rexec` client or server by default.
