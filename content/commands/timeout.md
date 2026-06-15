---
name: timeout
summary: Run a command with a time limit.
category: Processes
tags: time, limit, process, script
popular: false
---

## Additional Notes

`timeout` runs another command with a time limit. If the command is still running when the limit is reached, `timeout` sends it a signal.

Use it in scripts, tests, network checks, downloads, and automation jobs where a command should not hang forever.

## Syntax

```bash
timeout [options] duration command [arguments...]
```

## Parameters

- `options`: Flags that change how `timeout` behaves.
- `duration`: Time limit such as `10s`, `2m`, `1h`, or `1d`. Seconds are the default.
- `command`: Command to run.
- `arguments`: Arguments passed to the command.

## Common Options

- `-s SIGNAL`: Send a specific signal when time expires.
- `-k DURATION`: Force kill after an additional delay.
- `--preserve-status`: Return the command's status when possible.
- `--foreground`: Let an interactive command use the foreground terminal.
- `-v`: Print a message when `timeout` sends a signal.

## Examples

```bash
timeout 10s curl https://example.com
```

Stop `curl` if it runs longer than 10 seconds.

```bash
timeout -k 5s 1m ./job.sh
```

Send the default timeout signal after 1 minute, then force kill 5 seconds later if needed.

```bash
timeout -s INT 30s ./server-test.sh
```

Send `INT` instead of the default `TERM` when time expires.

## Practical Notes

- Without `--preserve-status`, a timed-out command usually returns status `124`.
- Status `125` means `timeout` itself failed.
- Status `126` means the command was found but could not run.
- Status `127` means the command was not found.
- Status `137` usually means `KILL` was used.
- Put `timeout` options before the duration and command.
