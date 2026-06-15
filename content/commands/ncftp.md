---
name: ncftp
summary: Feature-rich FTP client with tab completion and batch features.
category: Network
tags: ftp, transfer, client, upload, download
popular: false
---

## Additional Notes

`ncftp` is a powerful FTP client that improves upon the standard `ftp` command with tab completion, directory bookmarks, recursive downloads, background transfers, and a more intuitive interface. It supports both interactive use and command-line batch operations.

It is particularly useful for managing FTP sites, automating uploads/downloads, and handling FTP-based deployment workflows. The `ncftpget` and `ncftpput` companion commands enable scripted file transfers without entering an interactive session.

## Syntax

```bash
ncftp [options] [hostname]
```

## Parameters

- `hostname`: The FTP server to connect to.

## Common Options

- `-u username`: Specify the login username.
- `-p password`: Specify the password (use with caution on shared systems).
- `-P port`: Specify an alternate port.
- `-r`: Use read-only mode.
- `-T`: Disable progress meter for scripting.
- `-x`: Run in debug mode.
- `-f .netrc`: Use a specific `.netrc` file for credentials.

## Interactive Commands

- `open hostname`: Connect to a server.
- `get file`: Download a file.
- `put file`: Upload a file.
- `mget pattern`: Download multiple files.
- `mput pattern`: Upload multiple files.
- `get -R directory`: Recursively download a directory.
- `put -R directory`: Recursively upload a directory.
- `ls`: List remote files.
- `cd dir`: Change remote directory.
- `lcd dir`: Change local directory.
- `pwd`: Show remote current directory.
- `bookmark name`: Bookmark the current connection.
- `bg`: Background the current transfer.
- `jobs`: Show background transfer jobs.
- `quit` or `exit`: Close the session.

## Companion Commands

```bash
ncftpget [options] url_or_host
ncftpput [options] host local-file
```

## Examples

```bash
ncftp ftp.example.com
```

Open an interactive FTP session.

```bash
ncftp -u anonymous ftp.example.com
```

Connect with anonymous login.

```bash
ncftp
open ftp.example.com
get README.txt
quit
```

Session commands entered interactively.

```bash
ncftpget -R ftp.example.com /pub/files ./downloads
```

Recursively download a directory.

```bash
ncftpput -R ftp.example.com /remote/dir ./local-dir
```

Recursively upload a directory.

## Practical Notes

- Bookmarks are stored in `~/.ncftp/bookmarks` and are a convenient way to avoid re-entering connection details.
- Use `bookmark -S` to view all stored bookmarks.
- Background transfers (`bg`) continue after disconnecting if the `ncftpbatch` daemon is running.
- For secure transfers, prefer SFTP/SCP or FTPS. `ncftp` does not natively support SFTP.

