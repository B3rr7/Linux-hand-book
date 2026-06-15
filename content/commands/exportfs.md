---
name: exportfs
summary: Maintain the NFS exports table.
category: Network
tags: nfs, export, network, filesystem, server
popular: false
---

## Additional Notes

`exportfs` manages the NFS exports table that controls which directories are available to NFS clients and with what options. It reads the `/etc/exports` file and applies changes to the running kernel's export table without restarting the NFS server.

The command can add, remove, or list exports. It is useful for applying changes to `/etc/exports` immediately, testing export syntax, and for debugging NFS mount issues. The NFS server daemon (`nfsd`) checks the export table maintained by `exportfs` each time a client requests a mount.

## Syntax

```bash
exportfs [options] [client:path]
```

## Parameters

- `client:path`: An export specification in the format `hostname:/exported/path`. For example, `*.example.com:/srv/nfs`.

## Common Options

- `-a`: Export or unexport all directories listed in `/etc/exports`.
- `-r`: Re-export all directories, synchronizing `/etc/exports` with the kernel's export table.
- `-u`: Unexport one or more directories.
- `-v`: Verbose output. Show the export options on each line.
- `-i`: Ignore `/etc/exports` and use command-line options and arguments only.
- `-o options`: Specify export options directly on the command line (e.g., `rw,sync,no_subtree_check`).
- `-s`: Show the current export list in a format suitable for `/etc/exports`.
- `-f`: Flush the export table completely.
- `--no-can-do`: Suppress the "can do" column in the output.

## Examples

```bash
sudo exportfs -a
```

Export all directories listed in `/etc/exports`.

```bash
sudo exportfs -r
```

Re-read `/etc/exports` and synchronize the kernel's export table.

```bash
sudo exportfs -u client:/srv/nfs
```

Unexport a specific directory from a specific client.

```bash
sudo exportfs -v
```

Show all currently exported directories with their options.

```bash
sudo exportfs -o rw,sync,no_subtree_check *:/srv/nfs
```

Export a directory with specific options without modifying `/etc/exports`.

```bash
sudo exportfs -s
```

Show the current export list in a format that can be copied into `/etc/exports`.

## Practical Notes

- Run `exportfs -r` after editing `/etc/exports` to apply changes without restarting the NFS server.
- The client specification can be a hostname, IP address, network wildcard (`*.example.com`), or CIDR range (`192.168.0.0/24`).
- Exports added with `-o` are not persistent across reboots unless added to `/etc/exports`.
- Common export options: `rw` (read-write), `ro` (read-only), `sync` (write changes to disk before replying), `no_subtree_check` (disable subtree checking for performance), `no_root_squash` (allow root access on client).
- Use `showmount -e localhost` to see what the NFS server is currently exporting.
- The export table is stored in `/var/lib/nfs/etab`.
