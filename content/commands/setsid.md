---
name: setsid
summary: Run a command in a new session.
category: System
tags: process, session, daemon, process-group
popular: false
---

## Additional Notes

`setsid` runs a program in a new session, detaching it from the current terminal's session and process group. This is commonly used to properly daemonize processes, ensuring they are not tied to the controlling terminal and do not receive SIGHUP when the terminal closes.

A session is a collection of process groups. When a program runs with `setsid`, it becomes the session leader of a new session with no controlling terminal. This is similar to what daemon programs do internally when they call `setsid()` system call during initialization.

## Syntax

```bash
setsid [options] program [arguments...]
```

## Parameters

- `program`: The command or program to execute.
- `arguments`: Arguments to pass to the program.

## Common Options

- `-c`, `--ctty`: Set the controlling terminal to the current terminal.
- `-f`, `--fork`: Fork before executing the program (creates a child process that runs the command).
- `-w`, `--wait`: Wait for the program to exit before returning.
- `-V`, `--version`: Show version information.

## Examples

```bash
setsid daemon-process
```

Run `daemon-process` in a new session, detached from the terminal.

```bash
setsid -w mycommand
```

Run `mycommand` in a new session and wait for it to complete.

```bash
setsid -f myprogram &
```

Fork and run `myprogram` in the background, completely detached from the shell.

```bash
setsid ping 8.8.8.8
```

Run ping in a new session so it survives the terminal being closed.

## Practical Notes

- Without `setsid`, background jobs may receive `SIGHUP` when the terminal closes.
- The shell builtin `disown` is an alternative for keeping jobs running after logout.
- `setsid` is more reliable than using `nohup` for full daemonization.
- The `-f` flag combined with `&` is a common pattern for launching detached processes.
- Process monitoring tools like `supervisord` or `systemd` are preferred for production daemon management.
