---
name: pwdx
summary: Show the current working directory of a process.
category: Processes
tags: process, working directory, cwd, proc
popular: false
---

## Additional Notes

`pwdx` reports the current working directory (cwd) of one or more running processes. It reads the symbolic link `/proc/PID/cwd` to determine where each process is operating.

System administrators use `pwdx` when troubleshooting processes that cannot find files, determining which directory a daemon started from, or investigating suspicious processes. It is simpler than reading `/proc/PID/cwd` manually and supports multiple PIDs at once.

## Syntax

```bash
pwdx [options] [pid...]
```

## Parameters

- `pid`: One or more process IDs.

## Common Options

- `-V`, `--version`: Show version information.
- `--help`: Show help and exit.

## Examples

```bash
pwdx 1234
```

Show the working directory of PID 1234.

```bash
pwdx $$
```

Show the working directory of the current shell.

```bash
pwdx 1
```

Show the working directory of the init/systemd process.

```bash
pwdx $(pidof nginx)
```

Show working directories of all nginx processes.

```bash
for pid in $(pgrep -u www-data); do pwdx $pid; done
```

Show working directories of all processes owned by `www-data`.

## Practical Notes

- `pwdx` is part of the `psmisc` package. It is available on all major Linux distributions.
- If the process is a zombie, `pwdx` reports an error because `/proc/PID/cwd` is no longer available.
- A process may change its working directory after startup. The cwd shown is the current value, not the startup directory.
- For a broader view, combine with `lsof -p PID` to see all open file descriptors, not just the working directory.
- The same information is available from `ls -l /proc/PID/cwd`.
