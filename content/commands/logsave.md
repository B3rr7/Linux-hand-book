---
name: logsave
summary: Save command output to a log file while displaying on the terminal.
category: Administration
tags: log, output, tee, capture, script
popular: false
---

## Additional Notes

`logsave` runs a command and saves its output to a log file while simultaneously displaying it on the terminal. If the log file already exists, new output is appended. The tool also writes a timestamp header each time it runs.

It is similar to `tee`, but `logsave` is specifically designed for logging command output. It also responds to the `SIGUSR1` signal by flushing and reopening the log file, which is useful for log rotation.

## Syntax

```bash
logsave [options] logfile command [arguments...]
```

## Parameters

- `logfile`: Path to the log file where output will be saved.
- `command`: The command to execute.
- `arguments`: Arguments to pass to the command.

## Common Options

- `-a`, `--append`: Append to the log file instead of overwriting it.
- `-s`, `--skip-if-exists`: Skip logging if the log file already exists.
- `--help`: Display help and exit.

## Examples

```bash
logsave build.log make
```

Run `make`, show output on the terminal, and save it to `build.log`.

```bash
logsave -a install.log make install
```

Append output to `install.log` instead of overwriting it.

```bash
logsave output.log ./deploy.sh
```

Log the output of a deployment script.

```bash
logsave -s status.log systemctl status nginx
```

Log the status command only if `status.log` does not already exist.

## Practical Notes

- `logsave` is part of the `util-linux` package and is available on most Linux systems.
- Unlike `script`, `logsave` does not create a pseudo-terminal; it simply captures stdout and stderr.
- The timestamp format written by `logsave` is controlled by the `LOGSAVE_TIMESTAMP` environment variable.
- For simple logging, `command | tee logfile` is a more portable alternative.

