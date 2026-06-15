---
name: showmount
summary: Show NFS server export and mount information.
category: Network
tags: nfs, mount, export, network, filesystem
popular: false
---

## Additional Notes

`showmount` queries the mount daemon on an NFS server to display information about exported filesystems and connected clients. It is part of the `nfs-utils` package and communicates with the remote `rpc.mountd` service using the RPC protocol.

The command can show which filesystems are exported (available for mounting), which clients have mounted exports, and the list of directories that the local host has mounted from a specific server. It is useful for diagnosing NFS connectivity issues and understanding what an NFS server provides.

## Syntax

```bash
showmount [options] [hostname]
```

## Parameters

- `hostname`: The NFS server to query. Defaults to `localhost` if not specified.

## Common Options

- `-a`, `--all`: List both the server export directory and the client hostname in the format `host:dir`.
- `-d`, `--directories`: List only directories that are currently mounted by clients.
- `-e`, `--exports`: Show the NFS server's export list (what is available to mount).
- `-h`, `--help`: Show usage information.
- `-v`, `--verbose`: Show verbose output (includes version of NFS protocol).
- `--no-headers`: Suppress headers in the output.

## Examples

```bash
showmount -e nfs-server
```

List all exports available from `nfs-server`.

```bash
showmount -d nfs-server
```

List directories on `nfs-server` that are currently mounted by clients.

```bash
showmount -a nfs-server
```

List all NFS mounts in the format `client:export`.

```bash
showmount -e
```

List exports from the local NFS server.

## Practical Notes

- The remote server must be running `rpc.mountd` and have the appropriate firewall rules.
- NFS export configuration is in `/etc/exports` on the server.
- `showmount -e` requires TCP/UDP port 111 (rpcbind) to be accessible on the server.
- If `showmount -e` hangs or fails, the rpcbind or nfs-server services may not be running.
- Modern NFSv4 exports are sometimes not reported by showmount; check `/etc/exports` directly.
- Use `mount -t nfs` to see what the local system has mounted from NFS servers.
