---
name: uupick
summary: Process incoming UUCP files.
category: Network
tags: uucp, incoming, files, retrieve, public
popular: false
---

## Additional Notes

`uupick` is part of the UUCP suite and processes incoming files sent to a user via `uuto`. It provides an interactive way to browse pending incoming files, choose which ones to accept or reject, and place them into the desired directories.

When invoked, `uupick` checks the user's UUCP public directory (typically `/var/spool/uucppublic/receive/user/system/`) and presents each file for action. The user can accept it (moving it to the current directory), reject it (deleting it), or defer the decision. This tool is largely historical but still available on some systems.

## Syntax

```bash
uupick [options] [user]
```

## Parameters

- `user`: Process incoming files for a specific user (default: current user).

## Common Options

- `-s system`: Only show files from the specified remote system.
- `-x N`: Set debug level.

## Interactive Commands

- `Enter` (newline): Accept the file (move to current directory).
- `d`: Delete the file.
- `m [directory]`: Move the file to a specified directory (default: current).
- `q`: Quit `uupick`.
- `a`: Accept all remaining files.
- `p`: Print the file to standard output.
- `!command`: Execute a shell command.

## Examples

```bash
uupick
```

Browse and process incoming UUCP files interactively.

```bash
uupick -s remoteserver
```

Only process files from `remoteserver`.

## Practical Notes

- `uupick` works with files sent via `uuto`. Direct UUCP transfers with `uucp` do not use `uupick`.
- The incoming files reside in `/var/spool/uucppublic/receive/`.
- This tool is historical; UUCP is rarely used on modern Linux systems.
- Modern equivalents include email attachments, file sharing services, and SFTP.
