---
name: ssh-keygen
summary: Generate, inspect, and manage SSH keys.
category: Network
tags: ssh, key, security, authentication
popular: true
---

## Additional Notes

`ssh-keygen` creates and manages SSH key pairs used for passwordless login, Git hosting, automation, deployment, and server administration. It can also show fingerprints, change passphrases, create known-host hashes, and generate key revocation data.

A key pair has a private key and a public key. Keep the private key secret. Copy the public key to servers or services that should trust it.

## Syntax

```bash
ssh-keygen [options]
ssh-keygen -t type -f keyfile -C comment
```

## Parameters

- `type`: Key type such as `ed25519` or `rsa`.
- `keyfile`: Output private key path. The public key is usually written with `.pub` appended.
- `comment`: Label stored in the public key, often an email or purpose.
- `options`: Generation, inspection, conversion, and passphrase flags.

## Common Options

- `-t TYPE`: Choose key type. `ed25519` is a common modern choice.
- `-f FILE`: Choose key file path.
- `-C COMMENT`: Add or replace a public-key comment.
- `-b BITS`: Set key size for key types that use bit length, such as RSA.
- `-N PASSPHRASE`: Set a new passphrase non-interactively.
- `-p -f FILE`: Change a private key passphrase.
- `-l -f FILE`: Show a key fingerprint.
- `-y -f FILE`: Print the public key from a private key.

## Examples

```bash
ssh-keygen -t ed25519 -C "me@example.com"
```

Create a modern SSH key with a useful comment.

```bash
ssh-keygen -t ed25519 -f ~/.ssh/deploy_key -C "deploy key"
```

Create a named key file for deployment.

```bash
ssh-keygen -l -f ~/.ssh/id_ed25519.pub
```

Show the fingerprint of a public key.

```bash
ssh-keygen -y -f ~/.ssh/id_ed25519 > ~/.ssh/id_ed25519.pub
```

Regenerate the public key from a private key.

```bash
ssh-keygen -p -f ~/.ssh/id_ed25519
```

Change a private key passphrase.

## Practical Notes

- Use a passphrase for keys that protect important systems.
- Do not share private keys. Share only `.pub` files.
- Keep permissions strict: `chmod 700 ~/.ssh` and `chmod 600 ~/.ssh/id_*` for private keys.
- Use `ssh-copy-id` or manual `authorized_keys` edits to install public keys on servers.
