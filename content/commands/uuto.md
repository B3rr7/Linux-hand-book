---
name: uuto
summary: Send files to another user via UUCP.
category: Network
tags: uucp, send, files, user, public
popular: false
---

## Additional Notes

`uuto` is part of the UUCP suite and sends files to another user on a remote system. It copies the specified files to a public spool directory on the destination system, from which the recipient can retrieve them using `uupick`. It is a user-friendly wrapper around `uucp` that handles the directory structure and permissions.

The files are placed in `/var/spool/uucppublic/receive/recipient/system/` on the remote machine. The recipient is notified and can use `uupick` to retrieve the files interactively. This tool was once common for file sharing between Unix systems over dial-up connections.

## Syntax

```bash
uuto source_file... system!user
```

## Parameters

- `source_file`: One or more files or directories to send.
- `system!user`: Remote system and username to receive the files.

## Common Options

- `-p`: Copy the file to the spool directory before transfer (preserves the file if it is modified locally).
- `-m`: Notify the sender by mail when the transfer completes.

## Examples

```bash
uuto report.txt remotehost!jane
```

Send `report.txt` to user `jane` on `remotehost`.

```bash
uuto -m *.jpg remotehost!bob
```

Send all JPEG files to `bob` and get mail notification on completion.

```bash
uuto -p project/ remoteserver!alice
```

Send a directory to `alice`, copying to spool first.

## Practical Notes

- The recipient retrieves files using `uupick`.
- UUCP is largely obsolete. Use `scp`, `rsync`, or email attachments for modern file transfer.
- The UUCP suite must be configured (systems, ports, logins) for `uuto` to work.
- For direct file copy without the public spool mechanism, use `uucp`.
