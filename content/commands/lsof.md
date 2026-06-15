---
name: lsof
summary: List open files and the processes using them.
category: Processes
tags: files, process, ports, troubleshoot
popular: true
---

## Additional Notes

`lsof` is a process-management command used to list open files and the processes using them. It is an essential troubleshooting tool for identifying which process holds a file, port, or device open.

`lsof` requires read access to `/dev/fd` and `/proc` on Linux. Some information may be restricted to the file owner or require root privileges to view.

## Syntax

```bash
lsof [options] [file ...]
```

## Parameters

- `options`: Flags that change how `lsof` behaves.
- `file`: Optional file, directory, device, or socket target.

## Common Options

- `-i`: Show network files.
- `-i :PORT`: Show processes using a port.
- `+D DIR`: Show open files under a directory.
- `-u USER`: Show files opened by a user.

## Examples

```bash
lsof -i :8080
lsof +D /mnt/usb
lsof -u www-data
```

## Practical Notes

`lsof` helps explain why a port is busy or why a filesystem cannot be unmounted.
