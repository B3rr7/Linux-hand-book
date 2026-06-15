---
name: scp
summary: Copy files between machines over SSH.
category: Network
tags: ssh, copy, remote, files
popular: true
---

## Additional Notes

`scp` copies files between local and remote systems over SSH. It is simple and widely available, making it useful for quick transfers, one-off uploads, and basic server administration.

For repeated syncs, resumable transfers, deletes, or large directory trees, `rsync` is usually better because it can copy only changed data.

## Syntax

```bash
scp [options] source destination
scp [options] file user@host:/remote/path
scp [options] user@host:/remote/file local/path
```

## Parameters

- `source`: Local path or remote path in `user@host:path` form.
- `destination`: Local or remote destination.
- `user`: Remote username.
- `host`: Remote hostname or IP address.
- `options`: SSH and copy behavior flags.

## Common Options

- `-r`: Copy directories recursively.
- `-P PORT`: Connect to a custom SSH port. This is uppercase `P`.
- `-i FILE`: Use a specific private key.
- `-p`: Preserve modification times, access times, and modes.
- `-C`: Enable SSH compression.
- `-v`: Verbose SSH output for debugging.
- `-l LIMIT`: Limit bandwidth in Kbit/s.

## Examples

```bash
scp file.txt user@example.com:/tmp/
```

Copy a local file to a remote directory.

```bash
scp user@example.com:/var/log/app.log ./
```

Copy a remote file to the current local directory.

```bash
scp -r site/ user@example.com:/var/www/site
```

Copy a directory recursively.

```bash
scp -P 2222 -i ~/.ssh/deploy_key backup.tar.gz user@example.com:
```

Use a custom SSH port and key.

## Practical Notes

- `scp` uses SSH authentication and host-key checks.
- Quote remote paths that contain spaces or shell characters.
- For large deployments, prefer `rsync -avz` because it is restart-friendly and efficient.
