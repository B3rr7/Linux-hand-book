---
name: ssh-copy-id
summary: Install a public SSH key on a remote host.
category: Network
tags: ssh, key, authentication, remote, install
popular: false
---

## Additional Notes

`ssh-copy-id` copies a public SSH key to a remote host's `~/.ssh/authorized_keys` file, enabling passwordless login via key-based authentication. It is the standard way to set up SSH key authentication for a remote server.

The tool connects to the remote host using password authentication, creates the `~/.ssh` directory and `authorized_keys` file if they do not exist, sets appropriate permissions, and appends the public key. It works with SSH keys of any type (RSA, ECDSA, Ed25519, DSA).

## Syntax

```bash
ssh-copy-id [options] [-i keyfile] user@hostname
```

## Parameters

- `keyfile`: The public key file to install. Defaults to `~/.ssh/id_rsa.pub` or similar.
- `user@hostname`: The remote user and host to install the key on.

## Common Options

- `-i keyfile`: Specify the identity file (public key) to install.
- `-p port`: Specify the SSH port on the remote host.
- `-f`: Force installation even if the key is already present (duplicates may be added).
- `-n`: Dry-run mode (do not actually copy the key, just show what would be done).
- `-s`: Use SFTP/SSH instead of executing remote commands via shell.
- `-o SSH_option`: Pass an option to SSH (e.g., `-o "Port 2222"`).
- `-H`: Hash known hostnames (for use with `-o HashKnownHosts`).
- `-u`: Uninstall mode (remove a key from authorized_keys).

## Examples

```bash
ssh-copy-id alice@server.example.com
```

Copy the default public key to `server.example.com` for user `alice`.

```bash
ssh-copy-id -i ~/.ssh/mykey.pub alice@server.example.com
```

Copy a specific public key file to the remote host.

```bash
ssh-copy-id -p 2222 alice@server.example.com
```

Connect to the remote host on a non-standard SSH port.

```bash
ssh-copy-id -n alice@server.example.com
```

Dry-run: show what would be done without actually copying the key.

```bash
ssh-copy-id -o "IdentityFile ~/.ssh/alternate_id_rsa" alice@server.example.com
```

Use a specific identity for the initial password authentication.

## Practical Notes

- Password authentication must be enabled on the remote host for the initial copy.
- The default public key file is searched in order: `id_ed25519.pub`, `id_ecdsa.pub`, `id_rsa.pub`, `id_dsa.pub`.
- After installation, test the connection with `ssh user@host` to verify passwordless login works.
- Ensure the remote user's home directory, `~/.ssh`, and `authorized_keys` have correct permissions (700, 700, 600).
- If `ssh-copy-id` is not available, manually append the public key with `ssh user@host "cat >> .ssh/authorized_keys"`.
