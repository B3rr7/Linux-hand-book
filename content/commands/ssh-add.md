---
name: ssh-add
summary: Add private keys to the SSH authentication agent.
category: Network
tags: ssh, authentication, key, agent
popular: false
---

## Additional Notes

`ssh-add` adds private key identities to the `ssh-agent` (or other SSH agent), enabling passwordless authentication to remote hosts. Once a key is added (and its passphrase entered once), `ssh-agent` provides the private key for authentication without requiring the passphrase again.

The command operates by communicating with a running SSH agent via the `SSH_AUTH_SOCK` environment variable. If no agent is running, `ssh-add` will fail. Keys can be added from their default locations (`~/.ssh/id_rsa`, `~/.ssh/id_ecdsa`, `~/.ssh/id_ed25519`, `~/.ssh/id_dsa`) or specified explicitly.

## Syntax

```bash
ssh-add [options] [keyfile...]
```

## Parameters

- `keyfile`: Path to a private key file to add. Multiple keys can be specified.

## Common Options

- `-l`: List fingerprints of all identities currently stored in the agent.
- `-L`: List the full public key contents of all identities in the agent.
- `-d keyfile`: Remove a specific identity from the agent.
- `-D`: Remove all identities from the agent (delete all keys).
- `-c`: Require confirmation for each authentication using this key (via a dialog).
- `-t life`: Set a maximum lifetime in seconds for the identity (timeout).
- `-x`: Lock the agent with a password.
- `-X`: Unlock the agent with a password.
- `-E fingerprint_hash`: Specify the fingerprint hash algorithm (e.g., `md5`, `sha256`).
- `-s reader`: Add a PKCS#11 token from a smart card reader.
- `-e reader`: Remove a key provided by a PKCS#11 token.
- `-q`: Quiet mode (suppress output).
- `-K`: Load key into the macOS keychain (macOS only).
- `-A`: Add all keys from the default key locations (`~/.ssh/id_*`).

## Examples

```bash
ssh-add
```

Add all default keys (`~/.ssh/id_rsa`, `~/.ssh/id_ed25519`, etc.) to the agent.

```bash
ssh-add ~/.ssh/deploy_key
```

Add a specific private key file to the agent.

```bash
ssh-add -l
```

List fingerprints of all keys currently loaded in the agent.

```bash
ssh-add -D
```

Remove all keys from the agent.

```bash
ssh-add -t 3600 ~/.ssh/id_ed25519
```

Add a key with a 1-hour timeout (3600 seconds).

```bash
ssh-add -d ~/.ssh/id_rsa
```

Remove a specific key from the agent.

## Practical Notes

- `ssh-agent` must be running before `ssh-add` works. Start it with `eval $(ssh-agent)`.
- Keys are stored in memory by the agent and are lost when the agent process terminates.
- The `-t` option is useful for temporary sessions where keys should not persist indefinitely.
- Use `ssh-add -L` to get the public key strings for adding to `authorized_keys` files.
- For automated/scripted use, `sshpass` or `expect` can provide passphrases to `ssh-add`.
- `ssh-add -A` is useful at login to load keys from default locations automatically.
