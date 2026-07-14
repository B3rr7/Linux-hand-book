---
name: lsof
summary: List open files and the processes using them.
category: Processes
tags: files, process, ports, sockets, troubleshoot
popular: true
---

## Additional Notes

`lsof` lists open files and the processes using them. On Linux almost everything is a file: regular files, directories, pipes, devices, and sockets. That makes `lsof` an essential troubleshooting tool for finding which process holds a file, port, or device open.

`lsof` reads `/proc` and kernel structures. Some information is restricted to the file owner or requires root, so use `sudo` when process or network details are missing.

## Syntax

```bash
lsof [options] [file ...]
```

## Parameters

- `options`: Flags that change what `lsof` reports.
- `file`: Optional file, directory, device, or socket target to filter on.

## Common Options

- `-i`: Show network files (sockets).
- `-i :PORT`: Show processes using a TCP/UDP port.
- `-i @HOST`: Show sockets connected to a host.
- `-i TCP`: Show only TCP sockets.
- `-p PID`: Show files opened by a specific process.
- `-c NAME`: Show files opened by commands starting with `NAME`.
- `-u USER`: Show files opened by a user.
- `-U`: Show Unix domain sockets.
- `+D DIR`: Show open files under a directory (descends).
- `+r N` / `-r N`: Repeat the listing every `N` seconds.
- `-n`: Show numeric addresses instead of hostnames.
- `-P`: Show numeric port numbers instead of service names.
- `-t`: Terse output (just PIDs), useful for scripts.

## Examples

```bash
lsof -i :8080
```

Find the process listening on or using TCP port 8080.

```bash
sudo lsof -i :443 -nP
```

Show port 443 usage with numeric host and port, including process names.

```bash
lsof +D /mnt/usb
```

List processes with files open under `/mnt/usb` (helps explain a busy mount).

```bash
lsof -u www-data
```

Show files opened by the `www-data` user.

```bash
lsof -p 1234
```

Inspect every file descriptor held by PID 1234.

```bash
lsof -c nginx
```

List open files for all processes whose command starts with `nginx`.

```bash
sudo lsof -i TCP:80 -s TCP:LISTEN
```

Show only processes listening on TCP port 80.

## Practical Notes

- Use `sudo` when a port or process is not shown; many details are root-only.
- `lsof -i :PORT` is the fastest way to answer "what is using this port?".
- A busy filesystem that will not unmount usually has an open file found by `lsof +D /mount/point`.
- Combine with `-t` to pipe PIDs into `kill`, for example `kill $(sudo lsof -t -i :3000)`.
- `-nP` speeds up output by skipping DNS and service-name lookups.
