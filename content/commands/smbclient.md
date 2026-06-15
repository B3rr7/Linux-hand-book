---
name: smbclient
summary: SMB/CIFS filesystem access client.
category: Network
tags: smb, cifs, samba, file-sharing, network
popular: false
---

## Additional Notes

`smbclient` is a client tool from the Samba suite that provides FTP-like access to SMB/CIFS shares on Windows and Samba servers. It can list shares, transfer files, and perform basic filesystem operations using the Server Message Block protocol, which is the standard network file sharing protocol used by Windows systems.

Beyond interactive file browsing, `smbclient` supports scripted file transfers, share discovery (`-L`), and authentication with both NTLM and Kerberos. It is useful for accessing network shares from the command line without mounting them, especially in automation scripts and troubleshooting scenarios.

## Syntax

```bash
smbclient [//server/share] [options]
```

## Parameters

- `//server/share`: The UNC path to the SMB share to connect to.

## Common Options

- `-U username[%password]`: Specify the username (and optionally password) for authentication.
- `-L server`: List all available shares on the server (does not connect to a specific share).
- `-I ip`: Connect to the specified IP address instead of resolving the hostname.
- `-N`: Suppress the password prompt (use for anonymous or guest access).
- `-P port`: Connect to the specified port (default: 445 or 139).
- `-d level`: Set debug level (0-10, higher is more verbose).
- `-W workgroup`: Specify the workgroup or domain.
- `-c command_string`: Execute a semicolon-separated list of commands without entering interactive mode.
- `-m max_protocol`: Set the maximum protocol level (NT1, SMB2, SMB3).
- `-A authfile`: Read credentials from a file in the format `username = user`, `password = pass`, `domain = domain`.
- `-k`: Use Kerberos authentication (ticket required).
- `-O socket_options`: Set TCP socket options.
- `-t terminal_code`: Set the terminal code page for displaying filenames.

## Interactive Commands

- `ls`: List files in the current remote directory.
- `cd dir`: Change remote directory.
- `get file [local]`: Download a file.
- `put file [remote]`: Upload a file.
- `mget pattern`: Download multiple matching files.
- `mput pattern`: Upload multiple matching files.
- `rm file`: Delete a remote file.
- `mkdir dir`: Create a remote directory.
- `rmdir dir`: Remove a remote directory.
- `prompt`: Toggle interactive prompting for multi-file operations.
- `recurse`: Toggle directory recursion for multi-file operations.
- `exit` or `quit`: Close the connection.

## Examples

```bash
smbclient -L //fileserver -U alice
```

List all available shares on `fileserver`.

```bash
smbclient //fileserver/shared -U alice
```

Connect interactively to the `shared` share on `fileserver`.

```bash
smbclient //server/share -U alice -c "ls; get report.pdf"
```

Connect, list files, download `report.pdf`, and exit.

```bash
smbclient //server/share -N
```

Connect anonymously (no password) to a guest-accessible share.

```bash
smbclient -L //192.168.1.100 -U alice -d 5
```

List shares with debug level 5 for troubleshooting.

## Practical Notes

- SMB port 445 (direct SMB) is preferred over port 139 (NetBIOS-based SMB).
- Use `-k` for Kerberos authentication when connected to an Active Directory domain.
- The `-c` option is useful for scripts; command strings use semicolons as separators.
- Anonymous access (`-N`) only works if the server allows guest connections.
- For mounting SMB shares persistently, use `mount -t cifs` instead.
- SMB2/3 protocol versions provide better performance and security than the older SMB1/CIFS.
- Use `smbclient -m SMB3` to force SMB3 protocol for encrypted connections.
