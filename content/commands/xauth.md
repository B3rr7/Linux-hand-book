---
name: xauth
summary: Manage X server authentication credentials.
category: System
tags: x11, auth, authentication, xserver, mit-magic-cookie
popular: false
---

## Additional Notes

`xauth` manages the `.Xauthority` file, which stores the authentication credentials (MIT-MAGIC-COOKIE-1 or other protocol entries) used to connect to X servers. The X server requires clients to present a matching cookie before allowing a connection, providing basic access control.

It is commonly used when forwarding X11 connections over SSH (where the cookie is automatically added and removed), when debugging "cannot open display" errors, or when manually setting up X11 access across a network. Each display on the system has a unique cookie stored in the user's `.Xauthority` file.

## Syntax

```bash
xauth [options] [command [args]]
```

## Commands

- `list`: Show all entries in the authority file.
- `add display protocol key`: Add a new authentication entry.
- `remove display`: Remove an entry for a specific display.
- `generate display`: Generate a new cookie for a display.
- `extract file display`: Copy an entry to a file.
- `merge file`: Merge entries from a file into the authority file.
- `info`: Show the authority file name and status.

## Parameters

- `options`: Flags that change how `xauth` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-f file`: Use an alternative authority file instead of `~/.Xauthority`.
- `-i`: Ignore authority file lock errors.
- `-b`: Break authority file locks.
- `-q`: Quiet mode (suppress warnings).

## Examples

```bash
xauth list
```

List all X authentication entries.

```bash
xauth add :0 . 0123456789abcdef0123456789abcdef
```

Add a MIT-MAGIC-COOKIE-1 key for display `:0`.

```bash
xauth generate :0 .
```

Generate a new random cookie for display `:0`.

```bash
xauth extract - :0 | ssh remote xauth merge -
```

Copy the current display's cookie to a remote host over SSH.

```bash
xauth remove :0
```

Remove the authentication entry for `:0`.

## Practical Notes

- The `.Xauthority` file is typically owned by the user and readable only by the user.
- SSH X11 forwarding (`ssh -X`) automatically manages the cookie — do not manually modify it on forwarded connections.
- If `xauth list` shows no entries, the display may be untrusted or the file may not exist.
- The cookie is a hexadecimal string; its length depends on the authentication protocol.
- The environment variable `XAUTHORITY` overrides the default `.Xauthority` file path.
