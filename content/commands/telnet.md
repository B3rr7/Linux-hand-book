---
name: telnet
summary: User interface to the Telnet remote login protocol.
category: Network
tags: telnet, remote, terminal, network, protocol
popular: false
---

## Additional Notes

`telnet` is a command-line client for the Telnet protocol (TCP port 23), used for remote terminal connections to other systems. Telnet is one of the oldest application-layer protocols on the Internet and was the standard method for remote shell access before SSH became widespread.

Telnet transmits all data, including usernames and passwords, in cleartext with no encryption. This makes it completely insecure for use over untrusted networks. Despite this, `telnet` remains useful as a generic TCP client for debugging text-based protocols (HTTP, SMTP, POP3, IMAP, etc.) and testing connectivity to arbitrary ports.

## Syntax

```bash
telnet [host [port]]
```

## Parameters

- `host`: The remote hostname or IP address to connect to.
- `port`: The TCP port number to connect to (default: 23 for Telnet).

## Interactive Commands

While connected, press `Ctrl+]` to enter the telnet command mode, then type:

- `close`: Close the current connection.
- `quit`: Exit telnet.
- `open host [port]`: Open a connection to a new host.
- `status`: Show current connection status.
- `send arguments`: Send special sequences (e.g., `send break`, `send escape`).
- `set variable value`: Set variables like `escape`, `term`, `echo`, etc.
- `unset variable`: Unset a variable.
- `mode type`: Try to enter line or character mode.
- `display`: Display operating parameters.

## Common Options

- `-4`: Force IPv4.
- `-6`: Force IPv6.
- `-a`: Attempt automatic login (uses the local username).
- `-b hostname`: Use a specific source address (for multihomed hosts).
- `-d`: Enable debug mode.
- `-e escape_char`: Set the escape character (default: `Ctrl+]`).
- `-l user`: Specify the remote user for automatic login.
- `-n tracefile`: Record network data to a trace file.
- `-K`: Do not automatically log in.
- `-r`: Use a user-interface similar to rlogin.

## Examples

```bash
telnet host.example.com
```

Connect to the Telnet service on the default port 23.

```bash
telnet mail.example.com 25
```

Connect to an SMTP server on port 25 for manual testing.

```bash
telnet web.example.com 80
```

Connect to an HTTP server to manually send HTTP requests.

```bash
telnet -l alice host.example.com
```

Connect to a Telnet server with automatic login as user `alice`.

```bash
telnet 192.168.1.1 22
```

Test whether SSH port 22 is open on the target host.

```bash
telnet -e ^C host.example.com
```

Use `Ctrl+C` as the escape character instead of `Ctrl+]`.

## Example HTTP Test

```bash
$ telnet web.example.com 80
Trying 93.184.216.34...
Connected to web.example.com.
Escape character is '^]'.
GET / HTTP/1.1
Host: web.example.com

HTTP/1.1 200 OK
...

```

## Practical Notes

- Telnet transmits everything in cleartext. Never use it for remote administration over public networks.
- The escape sequence (`Ctrl+]`) returns you to the telnet command prompt. Type `quit` to exit.
- Telnet is still an excellent tool for manual protocol debugging (SMTP, HTTP, POP3, IMAP, etc.).
- Most modern systems do not run a Telnet server. Use SSH for remote access.
- On many distributions, the Telnet client is not installed by default; install with `apt install telnet` or `yum install telnet`.
- For encrypted protocol debugging, use `openssl s_client` for TLS services or `ncat --ssl`.
- `telnet` can be used to quickly test if a TCP port is reachable: `telnet host port`.
- If the port is closed, telnet reports `Connection refused`. If filtered by a firewall, it hangs or times out.
