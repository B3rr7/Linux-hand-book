---
name: lftp
summary: Sophisticated file transfer program supporting FTP, HTTP, and other protocols.
category: Network
tags: ftp, sftp, http, download, upload, transfer
popular: false
---

## Additional Notes

`lftp` is a feature-rich command-line file transfer program that supports FTP, FTPS, HTTP, HTTPS, HFTP, FISH, SFTP, and Torrent protocols. It excels at handling unreliable connections through automatic retries, reconnection, and resume capabilities.

It offers both an interactive shell with tab completion and scripting capabilities for automated transfers. Key features include parallel transfers (segmented downloads), mirroring directories, bandwidth limiting, and job queuing. The `mirror` command is particularly powerful for synchronizing remote and local directories.

## Syntax

```bash
lftp [options] [host]
lftp -f script-file
```

## Parameters

- `host`: The server URL or hostname to connect to (e.g., `ftp://example.com`, `sftp://user@host`).

## Common Interactive Commands

- `open [host]`: Connect to a server.
- `get [file]`: Download a file.
- `put [file]`: Upload a file.
- `mget [pattern]`: Download multiple files matching a pattern.
- `mput [pattern]`: Upload multiple files matching a pattern.
- `mirror [remote] [local]`: Mirror a remote directory to local (or reverse with `-R`).
- `ls`: List remote directory contents.
- `cd [dir]`: Change remote directory.
- `lcd [dir]`: Change local directory.
- `pget [file]`: Download using multiple parallel connections.
- `queue`: Queue commands for sequential execution.
- `exit` or `quit`: Close the session.

## Common Options

- `-u user,pass`: Specify username and password.
- `-p port`: Specify the port number.
- `-e cmd`: Execute a command after connecting.
- `-f script`: Run commands from a script file.
- `-d`: Enable debug output.
- `--help`: Show help.

## Examples

```bash
lftp ftp://ftp.example.com
```

Open an interactive FTP session.

```bash
lftp -e "mirror /pub/docs ./docs; exit" ftp://ftp.example.com
```

Mirror a remote directory and exit.

```bash
lftp -u anonymous,user@example.com ftp://ftp.example.com
```

Connect with explicit anonymous login.

```bash
lftp -e "pget -n 4 large-file.iso; exit" ftp://ftp.example.com
```

Download a file with 4 parallel connections.

```bash
lftp sftp://user@example.com
```

Connect over SFTP.

```bash
lftp -f script.lftp
```

Run commands from a script file.

## Practical Notes

- Mirroring with `mirror --delete --only-newer` keeps local and remote directories in sync.
- Use `set net:max-retries 5` and `set net:timeout 30` for robust handling of slow connections.
- Parallel downloads with `pget` can significantly speed up transfers from servers that throttle single connections.
- `lftp` bookmarks can be stored in `~/.lftp/bookmarks`.

