---
name: pidof
summary: Find the process ID of a running program.
category: Processes
tags: pid, process, running, find, proc
popular: true
---

## Additional Notes

`pidof` returns the process IDs (PIDs) of running programs that match the given name. It searches through the `/proc` filesystem to find processes whose executable name matches the specified program name.

System administrators use `pidof` in scripts to check if a program is running, send signals to processes by name, or get PIDs for monitoring tools. It is simpler than parsing the output of `ps` or `grep` and is available on most Linux systems as part of the `sysvinit-utils` or `procps-ng` packages.

## Syntax

```bash
pidof [options] [program-name...]
```

## Parameters

- `program-name`: The exact name of the program (or programs) whose PIDs to find.

## Common Options

- `-s`: Return only a single PID (the first one found).
- `-c`: Return only PIDs running with the same root directory. Useful in containers or chroot environments.
- `-x`: Also return PIDs of scripts started by the named program (shell scripts, etc.).
- `-o PID`: Omit the specified PID from the result. Can be used multiple times.
- `-q`: Quiet mode. Do not print PIDs, only set the exit status.
- `-S`: Separate PIDs with spaces instead of newlines (default behavior).
- `--help`: Show help and exit.
- `--version`: Show version information.

## Examples

```bash
pidof bash
```

Show the PID(s) of all running bash processes.

```bash
pidof -s nginx
```

Show only the first PID of the nginx master process.

```bash
pidof -o $$ systemd
```

Find systemd PIDs, excluding the current shell's PID (`$$` is the current shell PID).

```bash
pidof rsyslogd sshd cron
```

Find PIDs for multiple programs at once.

```bash
if pidof -q nginx; then echo "nginx is running"; fi
```

Check if nginx is running without printing PIDs.

```bash
kill -TERM $(pidof myapp)
```

Send SIGTERM to all processes named `myapp`.

## Practical Notes

- `pidof` matches the exact program name as shown in `/proc/PID/comm` or `/proc/PID/exe`. It is not affected by command-line arguments.
- For matching command lines with arguments, use `pgrep` which supports regular expressions and other advanced filters.
- `pidof -s` is useful when you need the main process PID (e.g., the nginx master process).
- The exit status is 0 if at least one PID was found, non-zero otherwise.
- Use `killall` to kill processes by name without needing `pidof` first.
