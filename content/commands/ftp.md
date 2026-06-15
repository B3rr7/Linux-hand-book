---
name: ftp
summary: Transfer files with the File Transfer Protocol.
category: Network
tags: network, connectivity, admin
popular: false
---

## Additional Notes

`ftp` is a network command used to transfer files with the File Transfer Protocol. It provides an interactive command-line FTP client for transferring files to and from remote FTP servers. It supports both active and passive transfer modes.

## Syntax

```bash
ftp [options] [host]
```

## Parameters

- `options`: Flags that change how `ftp` behaves.
- `host`: Hostname or IP address of the FTP server.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
ftp --help
man ftp
```

## Practical Notes

Options can vary by distribution and package version. Use `man ftp`, `ftp --help`, or the package documentation for exact syntax.
