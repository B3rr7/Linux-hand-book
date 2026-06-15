---
name: logname
summary: Print the login name of the current user.
category: System
tags: user, login, identity, whoami
popular: false
---

## Additional Notes

`logname` prints the name of the user who initially logged into the current terminal session. Unlike `whoami` (which returns the effective user ID) and `id -un` (which also returns the effective username), `logname` always shows the original login name, regardless of `su`, `sudo`, or other user-switching commands.

It works by reading the `/var/run/utmp` or `/var/log/wtmp` file, or by checking the `LOGNAME` environment variable.

## Syntax

```bash
logname [options]
```

## Parameters

- `options`: Flags that change how `logname` behaves.
- `target`: Optional file, device, interface, user, service, or command target when the command supports one.

## Common Options

- `--help`: Display help and exit.
- `--version`: Output version information and exit.

## Examples

```bash
logname
```

Output: `rani` (the original login user).

```bash
sudo su
logname
```

Even after switching to root, `logname` still shows the original login name.

```bash
echo $(logname)
```

Use in a command substitution to capture the login name.

## Practical Notes

- `logname` differs from `whoami` and `id -un` when privileges have been escalated. If you are root via `sudo`, `whoami` shows `root`, but `logname` shows the original user.
- If the login name cannot be determined, `logname` exits with a non-zero status and prints an error.
- The `LOGNAME` environment variable is set by the login process and is not always reliable if tampered with.

