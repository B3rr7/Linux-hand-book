---
name: ssh-keyscan
summary: Gather SSH public host keys from remote servers.
category: Network
tags: ssh, keyscan, host-key, known-hosts, security
popular: false
---

## Additional Notes

`ssh-keyscan` collects SSH public host keys from remote servers without requiring a full SSH connection or authentication. It is used to populate `known_hosts` files, verify host key changes, and automate the setup of SSH trust relationships in scripts.

The tool sends SSH protocol messages to request the server's public host keys, supporting SSH protocol version 2 (and legacy version 1). It can scan multiple hosts in parallel and output keys in the format expected by `~/.ssh/known_hosts` or `/etc/ssh/ssh_known_hosts`.

## Syntax

```bash
ssh-keyscan [options] hostname [hostname...]
```

## Parameters

- `hostname`: Hostname or IP address of the SSH server to scan. Can also specify `hostname:port` or use `-p`.

## Common Options

- `-p port`: Specify the port to connect to (default: 22). Repeatable for multiple ports.
- `-4`: Use IPv4 addresses only.
- `-6`: Use IPv6 addresses only.
- `-t type`: Key type(s) to fetch: `rsa`, `ecdsa`, `ed25519`, `dsa`. Can be comma-separated or specified multiple times.
- `-D`: Do not print the host name in the output (useful for generating hashed known_hosts).
- `-H`: Hash the hostnames in the output (for privacy).
- `-c`: Output in a chroot-compatible format.
- `-T timeout`: Set a timeout in seconds for each connection attempt (default: 5).
- `-f file`: Read hostnames or `host:port` pairs from a file (one per line).
- `-v`: Verbose output (show debugging information).

## Examples

```bash
ssh-keyscan server.example.com
```

Fetch all host key types from `server.example.com`.

```bash
ssh-keyscan -t rsa,ed25519 server.example.com
```

Fetch only RSA and Ed25519 host keys.

```bash
ssh-keyscan -H -t ed25519 server.example.com >> ~/.ssh/known_hosts
```

Append hashed Ed25519 host key to the user's known_hosts file.

```bash
ssh-keyscan -p 2222 -t rsa server.example.com
```

Scan a server on port 2222 for its RSA host key.

```bash
ssh-keyscan -f servers.txt
```

Scan all hosts listed in the file `servers.txt`.

```bash
ssh-keyscan -T 10 -4 192.168.1.100
```

Scan an IPv4 address with a 10-second timeout.

## Practical Notes

- `ssh-keyscan` is non-interactive and does not prompt for passwords or confirmations.
- For automated provisioning, pipe the output directly into `/etc/ssh/ssh_known_hosts`.
- Hashed hostnames (`-H`) prevent disclosure of which hosts a user connects to.
- The first time a host is scanned, manually verify the key fingerprint out-of-band.
- The `-t` option with no argument fetches all key types supported by the server.
- Compromised host keys cannot be detected by `ssh-keyscan` alone; it retrieves whatever the server presents.
