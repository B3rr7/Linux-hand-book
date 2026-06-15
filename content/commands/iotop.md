---
name: iotop
summary: Show live disk IO usage by process.
category: Processes
tags: disk, io, process, monitor
popular: false
---

## Additional Notes

`iotop` is a process-management command used to show live disk IO usage by process. It helps identify which processes are consuming disk I/O and causing system slowdowns.

`iotop` requires root privileges or `CAP_NET_ADMIN` to read per-process I/O statistics. Use `-o` to show only processes currently performing I/O.

## Syntax

```bash
iotop [options]
```

## Parameters

- `options`: Flags that change how `iotop` behaves.

## Common Options

- `-o`: Show only processes doing IO.
- `-a`: Accumulate IO instead of showing bandwidth.
- `-P`: Show processes only, not threads.

## Examples

```bash
sudo iotop
sudo iotop -o
sudo iotop -aP
```

## Practical Notes

`iotop` usually requires administrator privileges to read per-process IO details.
