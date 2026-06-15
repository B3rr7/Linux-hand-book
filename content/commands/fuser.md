---
name: fuser
summary: Identify processes using files, directories, or sockets.
category: Processes
tags: process, files, port, troubleshoot
popular: false
---

## Additional Notes

`fuser` is a process-management command used to identify processes using files, directories, or sockets. It identifies which processes have a file, directory, or socket open. It is commonly used to find why a filesystem cannot be unmounted or which process is using a network port.

## Syntax

```bash
fuser [options] file|mount|port
```

## Parameters

- `options`: Flags that change how `fuser` behaves.
- `target`: File, mount point, filesystem, or port to inspect.

## Common Options

- `-v`: Verbose output.
- `-k`: Kill processes using the target.
- `-n tcp PORT`: Check a TCP port.
- `-m PATH`: Check a mounted filesystem.

## Examples

```bash
fuser -v /mnt/usb
fuser -n tcp 8080
sudo fuser -k /mnt/usb
```

## Practical Notes

Use `fuser` to find why a mount cannot be unmounted or why a port is busy.
