---
name: rcp
summary: Remote file copy (deprecated, use scp or rsync).
category: Network
tags: remote, copy, rsh, deprecated, file transfer
popular: false
---

## Additional Notes

`rcp` (remote copy) copies files and directories between local and remote systems. It uses the RSH (Remote Shell) protocol for transport, which transmits data and authentication credentials in cleartext.

`rcp` is deprecated and should not be used in modern environments. It has no encryption, no authentication beyond the `.rhosts` file, and is vulnerable to eavesdropping and session hijacking. It has been replaced by `scp` (Secure Copy, based on SSH) and `rsync` (which supports SSH and provides delta transfers, integrity checking, and more features). Most modern systems do not include `rcp` by default.

## Syntax

```bash
rcp [options] [source...] [destination]
```

## Parameters

- `source`: Local or remote file path. Remote paths use the format `host:path` or `user@host:path`.
- `destination`: Local or remote destination path.

## Common Options

- `-r`: Copy directories recursively.
- `-p`: Preserve file timestamps and modes.
- `-k`: Use Kerberos authentication (if supported).
- `-x`: Enable DES encryption (if supported).
- `-t`: Enable packet trace debugging.
- `-v`: Verbose output.
- `-D`: Disable interactive password prompting.

## Examples

```bash
rcp file.txt remotehost:/dest/
```

Copy `file.txt` to a remote host (deprecated).

```bash
rcp -r /local/dir remotehost:/dest/
```

Recursively copy a directory to a remote host (deprecated).

```bash
scp file.txt user@remotehost:/dest/
```

Modern secure replacement using `scp`.

```bash
rsync -avz /local/dir/ user@remotehost:/dest/
```

Modern replacement with compression and delta transfer using `rsync`.

## Practical Notes

- Do not use `rcp` on modern systems. Use `scp`, `rsync`, or `sftp` instead.
- The RSH protocol used by `rcp` sends all data, including passwords, in cleartext over the network.
- Many Linux distributions no longer ship `rcp` or the RSH suite. The `rsh-client` or `rsh-server` packages may provide it for legacy compatibility.
- Modern alternatives: `scp` for simple secure transfers, `rsync -avz` for efficient syncing, `sftp` for interactive transfers.
- If you encounter `rcp` in legacy scripts, update them to use `scp` or `rsync`.
