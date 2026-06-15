---
name: ssh
summary: Connect securely to a remote machine.
category: Network
tags: ssh, remote, login, shell, key, network
popular: true
---

## Additional Notes

`ssh` opens a secure shell session on a remote machine. It encrypts traffic and is used for remote administration, server work, development, tunneling, and file-transfer workflows.

SSH can authenticate with passwords or keys. Key-based authentication is usually preferred for security and automation.

## Syntax

```bash
ssh [options] user@host
ssh [options] host
```

## Parameters

- `user`: Remote username.
- `host`: Remote hostname or IP address.
- No user: SSH uses your current local username.

## Common Options

- `-p PORT`: Connect to a custom SSH port.
- `-i KEYFILE`: Use a specific private key.
- `-v`: Verbose output for troubleshooting.
- `-X`: Enable X11 forwarding when supported.
- `-L LOCAL:HOST:PORT`: Local port forwarding.
- `-R REMOTE:HOST:PORT`: Remote port forwarding.
- `-N`: Do not run a remote command, useful for tunnels.
- `-T`: Disable pseudo-terminal allocation.
- `-o KEY=VALUE`: Set a configuration option.

## Examples

```bash
ssh rani@example.com
```

Connect as user `rani`.

```bash
ssh root@192.168.1.10
```

Connect to an IP address as root. Many systems disable root SSH login for safety.

```bash
ssh -p 2222 rani@example.com
```

Connect to a custom SSH port.

```bash
ssh -i ~/.ssh/lab_key rani@lab.local
```

Use a specific private key.

```bash
ssh -v rani@example.com
```

Show debugging information for connection problems.

```bash
ssh -L 8080:127.0.0.1:80 rani@example.com
```

Forward local port `8080` to port `80` from the remote side.

```bash
ssh rani@example.com "uptime"
```

Run one remote command and exit.

## SSH Config Example

You can save connection settings in `~/.ssh/config`:

```text
Host lab
  HostName 192.168.1.10
  User rani
  Port 2222
  IdentityFile ~/.ssh/lab_key
```

Then connect with:

```bash
ssh lab
```

## Practical Notes

- Keep private keys secret and set strict permissions, commonly `chmod 600 ~/.ssh/id_rsa`.
- Use `ssh-keygen` to create keys and `ssh-copy-id` to install a public key on a server.
- If login fails, check username, host, port, firewall, key permissions, and server SSH configuration.
- Use `scp`, `sftp`, or `rsync -e ssh` for file transfer.
- Avoid enabling password login on public servers when key-based login is available.
