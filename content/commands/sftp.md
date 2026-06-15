---
name: sftp
summary: Transfer files interactively over SSH.
category: Network
tags: ssh, transfer, files, remote
popular: true
---

## Additional Notes

`sftp` is a network command used to transfer files interactively over SSH. It provides interactive and batch-mode file transfer over an encrypted SSH connection.

`sftp` uses the same authentication and encryption as SSH. Inside the interactive session, use `get` to download and `put` to upload files.

## Syntax

```bash
sftp [options] [user@]host[:path]
```

## Parameters

- `options`: Flags that change how `sftp` behaves.
- `user`: Remote SSH username.
- `host`: Remote hostname or IP address.

## Common Options

- `-P PORT`: Use a custom SSH port.
- `-i FILE`: Use a specific private key.
- `-b FILE`: Run commands from a batch file.

## Examples

```bash
sftp user@example.com
sftp -P 2222 user@example.com
sftp -i ~/.ssh/deploy_key user@example.com
```

## Practical Notes

Inside `sftp`, use commands like `put`, `get`, `ls`, `cd`, `lcd`, and `bye`.
