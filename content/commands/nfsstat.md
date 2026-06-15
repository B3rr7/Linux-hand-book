---
name: nfsstat
summary: Display NFS (Network File System) statistics.
category: Network
tags: nfs, stats, mount, performance, network
popular: false
---

## Additional Notes

`nfsstat` displays statistics for Network File System (NFS) operations on both client and server. It shows counts of NFS RPC calls, procedure calls per version, errors, latency information, and throughput data for various NFS operations.

It is used for monitoring NFS performance, diagnosing slow NFS mounts, spotting NFS errors, and tuning NFS parameters. It shows both client-side and server-side statistics depending on the options used.

## Syntax

```bash
nfsstat [options]
```

## Parameters

- `options`: Flags that change how `nfsstat` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `-s`, `--server`: Show server-side NFS statistics.
- `-c`, `--client`: Show client-side NFS statistics.
- `-a`, `--all`: Show both client and server statistics.
- `-n`, `--nfs`: Show NFS protocol statistics.
- `-r`, `--rpc`: Show RPC statistics.
- `-m`, `--mounts`: Show mounted NFS filesystem information.
- `-o items`: Select specific items to display (e.g., `-o all`, `-o proc`, `-o net`).
- `-2`, `-3`, `-4`: Show statistics for NFS version 2, 3, or 4.
- `-v`: Verbose output.
- `-l`: List NFS filesystems.
- `--live`: Query the kernel directly for live statistics.
- `--zero`: Reset statistics to zero after displaying.

## Examples

```bash
nfsstat
```

Show a summary of NFS and RPC statistics.

```bash
nfsstat -c
```

Show only client-side statistics.

```bash
nfsstat -s -n
```

Show only server-side NFS protocol statistics.

```bash
nfsstat -4
```

Show NFS version 4 statistics.

```bash
nfsstat -m
```

Show currently mounted NFS shares and their mount options.

```bash
nfsstat --live -c
```

Query live kernel statistics without reading from `/proc/net/rpc/`.

## Practical Notes

- NFS client statistics are stored in `/proc/net/rpc/nfs/`; server stats in `/proc/net/rpc/nfsd/`.
- A high number of `READ` or `WRITE` operations with errors can indicate network issues or server overload.
- `nfsstat -m` shows the actual mount options in effect, which is useful for troubleshooting mount issues.
- For real-time monitoring, combine with `watch nfsstat -c`.

