---
name: lftpget
summary: Download files using lftp with automatic protocol detection.
category: Network
tags: download, ftp, http, file, transfer
popular: false
---

## Additional Notes

`lftpget` is a simple download utility that comes with `lftp`. It automatically detects the protocol (HTTP, HTTPS, FTP, FTPS) from the URL and downloads the file using `lftp`'s transfer engine, which supports parallel connections, resuming, and retries.

It is a convenient alternative to `wget` or `curl` when you want `lftp`'s robust transfer features without entering the interactive `lftp` shell. It supports recursive downloads and can handle multiple URLs.

## Syntax

```bash
lftpget [options] url...
```

## Parameters

- `url`: One or more URLs to download. Protocols include `http://`, `https://`, `ftp://`, `ftps://`.

## Common Options

- `-c`: Continue or resume a partial download.
- `-d`: Enable debug output.
- `-v`: Verbose output showing transfer progress.
- `-O dir`: Save files to the specified directory.
- `-r`: Recursive download (follow directory listings on FTP).

## Examples

```bash
lftpget https://example.com/file.tar.gz
```

Download a file over HTTPS.

```bash
lftpget -c https://example.com/large-file.iso
```

Resume a partially downloaded file.

```bash
lftpget ftp://ftp.example.com/pub/README
```

Download a file over FTP.

```bash
lftpget -O /tmp https://example.com/file.zip
```

Download and save to `/tmp`.

## Practical Notes

- `lftpget` supports the same protocols as `lftp` but without the interactive shell.
- Resume works only if the server supports it (most HTTP and FTP servers do).
- For recursive FTP directory downloads, use `-r` or use `lftp` interactively with `mirror`.

