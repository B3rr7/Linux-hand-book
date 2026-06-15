---
name: tftp
summary: Trivial File Transfer Protocol client.
category: Network
tags: tftp, network, file transfer, udp
popular: false
---

## Additional Notes

`tftp` is a client for the Trivial File Transfer Protocol (TFTP), a simplified file transfer protocol that runs over UDP on port 69. Unlike FTP, TFTP has no authentication, no directory listing, and no encryption. It is commonly used for network booting, firmware updates, and configuration transfer on embedded devices.

TFTP supports only reading and writing files from a remote server. Because it uses UDP, it implements its own timeout and retransmission logic. The protocol is defined in RFC 1350 and supports block sizes, block number rollover, and transfer mode (netascii or octet/binary).

## Syntax

```bash
tftp [options] [host] [port]
```

## Parameters

- `host`: Remote TFTP server hostname or IP address.
- `port`: Remote TFTP server port (default 69).

## Common Options

- `-l`: Run in literal mode (do not map file names to lowercase).
- `-m mode`: Set the default transfer mode (`ascii` or `binary`).
- `-v`: Verbose, show debug messages.
- `-c command`: Run a single command and exit.

## Interactive Commands

- `connect host [port]`: Set the remote host.
- `get filename`: Download a file.
- `put filename`: Upload a file.
- `quit`: Exit the client.
- `verbose`: Toggle verbose mode.
- `trace`: Toggle packet tracing.
- `status`: Show current settings.
- `rexmt retransmission-timeout`: Set the per-packet retransmission timeout in seconds.
- `timeout total-timeout`: Set the total transmission timeout in seconds.
- `mode transfer-mode`: Set transfer mode (`ascii` or `binary`).

## Examples

```bash
tftp 192.168.1.100
tftp> get firmware.bin
tftp> quit
```

Download a firmware image from a TFTP server.

```bash
tftp -c get 192.168.1.100 config.txt
```

Download a file non-interactively.

```bash
echo -e "verbose\nmode binary\nget kernel.img\nquit" | tftp 192.168.1.100
```

Automate a binary file download via piped commands.

## Practical Notes

- TFTP has no security. Do not use it over untrusted networks.
- The maximum file size is limited by the protocol (32 MB with 512-byte blocks, more with block size negotiation).
- TFTP servers must have the file in their configured root directory. Path traversal is typically restricted.
- Many TFTP servers randomly listen on high ports for data transfer.
- For large files, use `mode binary` to avoid corruption from newline conversion.
