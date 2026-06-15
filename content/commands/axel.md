---
name: axel
summary: Download files using multiple connections.
category: Network
tags: download, http, ftp, accelerator, network
popular: false
---

## Additional Notes

`axel` is a command-line download accelerator. It can split a download across multiple connections, which may improve speed when a server and network allow it.

Use it for direct file URLs when `wget` or `curl` are too slow and resumable/multi-connection downloading is useful.

## Syntax

```bash
axel [options] url
```

## Parameters

- `url`: HTTP, HTTPS, or FTP URL to download.
- `options`: Connection count, output path, speed limit, and resume controls.

## Common Options

- `-n NUM`: Number of connections.
- `-o FILE`: Output filename or directory.
- `-a`: Alternate compact progress display.
- `-s SPEED`: Limit download speed.
- `-q`: Quiet mode.
- `-v`: More verbose output.

## Examples

```bash
axel https://example.com/file.iso
```

Download a file.

```bash
axel -n 8 https://example.com/file.iso
```

Use eight connections.

```bash
axel -o downloads/file.iso https://example.com/file.iso
```

Choose the output path.

## Practical Notes

- Multi-connection downloads can stress servers; use responsibly.
- Some servers block or throttle segmented downloads.
- For scripting APIs, `curl` is usually better; for simple downloads, `wget` is often enough.
