---
name: wget
summary: Download files from the web.
category: Network
tags: download, web, http, mirror, recursive
popular: true
---

## Additional Notes

`wget` downloads files from URLs. It is commonly used for direct downloads, scripts, recursive downloads, and simple mirroring.

It is less focused on API testing than `curl`, but it is very convenient for saving files.

## Syntax

```bash
wget [options] URL
```

## Parameters

- `options`: Flags that change how `wget` behaves.
- `URL`: The URL of the file to download.

## Common Options

- `-O FILE`: Save as a specific filename.
- `-P DIR`: Save into a directory.
- `-c`: Continue a partial download.
- `-q`: Quiet mode.
- `--show-progress`: Show progress in quiet-friendly output.
- `-r`: Recursive download.
- `-np`: Do not ascend to parent directories during recursive download.
- `-N`: Timestamping; download only if remote is newer.
- `--limit-rate=RATE`: Limit download speed.
- `--user-agent=TEXT`: Set user agent.

## Examples

```bash
wget https://example.com/file.iso
```

Download a file.

```bash
wget -O ubuntu.iso https://example.com/download
```

Save with a chosen filename.

```bash
wget -P ~/Downloads https://example.com/file.zip
```

Save into `~/Downloads`.

```bash
wget -c https://example.com/big.iso
```

Continue a partial download.

```bash
wget --limit-rate=1M https://example.com/big.iso
```

Limit download speed.

```bash
wget -r -np -N https://example.com/docs/
```

Recursively mirror a documentation path without going to parent directories.

## Practical Notes

- Use `wget -c` for unreliable connections or large files.
- Be respectful with recursive downloads; they can stress servers.
- `wget` saves files by default, while `curl` prints responses by default.
- For APIs and custom HTTP headers, `curl` is usually better.
- Check file hashes after downloading security-sensitive files.
