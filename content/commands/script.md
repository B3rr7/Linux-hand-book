---
name: script
summary: Record terminal sessions to a file.
category: Text
tags: terminal, record, typescript, session, tty
popular: false
---

## Additional Notes

`script` records everything displayed on a terminal session, including command output and prompts, into a file called `typescript` by default. It captures the raw terminal output, making it useful for creating session logs, documenting command sequences, or sharing troubleshooting steps with others.

The recording includes all terminal control characters by default. A separate timing file can be generated with the `--timing` option, which can be used with `scriptreplay` to replay the session at the same speed it was recorded.

## Syntax

```bash
script [options] [output_file]
```

## Parameters

- `output_file`: The file to write the session log to. Defaults to `typescript`.

## Common Options

- `-a`, `--append`: Append output to the file instead of overwriting.
- `-c`, `--command command`: Record only the specified command instead of a shell.
- `-e`, `--return`: Echo the exit status of child processes.
- `-f`, `--flush`: Flush output after each write (useful for remote monitoring).
- `-q`, `--quiet`: Suppress the "Script started" and "Script done" messages.
- `-t`, `--timing[=file]`: Output timing data to the specified file (or stderr).
- `--logging`: Force logging mode (useful inside tmux or screen).
- `-V`, `--version`: Show version information.

## Examples

```bash
script
```

Start recording a terminal session to `typescript`. Press `Ctrl+D` or type `exit` to stop.

```bash
script session.log
```

Record the session to `session.log`.

```bash
script -t timing.log session.log
```

Record timing data alongside the session output for later replay.

```bash
script -c "make" build.log
```

Record only the output of the `make` command.

```bash
script -a -q install.log
```

Append to an existing log file without showing start/stop messages.

## Practical Notes

- Exit the recorded session by typing `exit` or pressing `Ctrl+D`.
- The recorded file contains raw terminal output including escape codes.
- Use `cat typescript` to view the recorded output within a terminal.
- Timing files enable exact-speed replay via `scriptreplay`.
- Recorded files can be large for long sessions with a lot of output.
