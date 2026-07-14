---
name: sftp
summary: Transfer files interactively over SSH.
category: Network
tags: ssh, transfer, files, remote, get, put
popular: true
---

## Additional Notes

`sftp` transfers files interactively over SSH. It provides interactive and batch-mode file transfer over an encrypted SSH connection, so it works wherever SSH works without extra setup.

`sftp` uses the same authentication and encryption as SSH. In an interactive session you use `get` to download and `put` to upload. Paths are relative to the remote home directory unless you change directory first.

## Syntax

```bash
sftp [options] [user@]host[:path]
```

## Parameters

- `options`: Flags that change how `sftp` behaves.
- `user`: Remote SSH username.
- `host`: Remote hostname or IP address.
- `path`: Optional remote directory to open on connect.

## Common Options

- `-P PORT`: Connect to a custom SSH port.
- `-i FILE`: Use a specific private key.
- `-b FILE`: Run commands from a batch file, then exit.
- `-o OPTION`: Pass an SSH option such as `Port=2222`.
- `-r`: Recurse into directories for `get`/`put`.

## Interactive Commands

- `ls`: List remote files.
- `lls`: List local files.
- `cd DIR`: Change the remote directory.
- `lcd DIR`: Change the local directory.
- `get FILE`: Download a file from remote to local.
- `get -r DIR`: Download a directory recursively.
- `put FILE`: Upload a file from local to remote.
- `put -r DIR`: Upload a directory recursively.
- `mget *.log`: Download multiple matching files.
- `rm FILE` / `mkdir DIR`: Remove files or make remote directories.
- `bye` or `exit`: Close the session.

## Examples

```bash
sftp user@example.com
```

Open an interactive session, then use `ls`, `get`, and `put`.

```bash
sftp -P 2222 user@example.com
```

Connect over a custom SSH port.

```bash
sftp -i ~/.ssh/deploy_key user@example.com
```

Authenticate with a specific key.

```bash
sftp -b batch.txt user@example.com
```

Run a list of transfer commands from `batch.txt` non-interactively.

```text
# batch.txt
cd /var/www
put site.tar.gz
ls -l
bye
```

```bash
sftp user@example.com:/backups
```

Connect and open the remote `/backups` directory immediately.

## Practical Notes

- Inside `sftp`, prefix a command with `l` (such as `lls`, `lcd`) to act on the local side.
- Use `-r` for directory transfers; a plain `put` copies only a single file.
- For scripting, `scp` and `rsync -e ssh` are often simpler than batch `sftp`.
- The connection reuses your SSH config, keys, and `known_hosts` trust.
