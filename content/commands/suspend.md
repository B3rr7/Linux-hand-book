---
name: suspend
summary: Suspend the current shell session.
category: Shell
tags: shell, suspend, job-control, builtin
popular: false
---

## Additional Notes

`suspend` is a shell builtin (not a standalone command) that suspends the current shell's execution by sending it a SIGTSTP signal. This stops the shell process, returning control to its parent process. It is typically used within a subshell or a shell spawned by another program (like `su`, `ssh`, or `sudo`).

Typing `suspend` at a normal interactive shell will suspend it, returning to the shell that launched it. From there, the suspended shell can be resumed with `fg` (foreground) or `bg` (background). The command is mainly useful when you need to temporarily return to a parent shell without exiting the current one.

## Syntax

```bash
suspend [-f]
```

## Parameters

None.

## Common Options

- `-f`: Force the suspension even if the shell is a login shell (which normally cannot be suspended).

## Examples

```bash
suspend
```

Suspend the current shell and return to the parent shell.

```bash
# From within a subshell
(sh -c 'while true; do read cmd; eval $cmd; done')
# Press Ctrl-Z outside the subshell, or type 'suspend' inside
```

Use `suspend` from within a script or subshell to pause execution.

```bash
sudo -i
# ... inside root shell, then:
suspend -f
```

Force-suspend a root login shell (returns to the original user shell).

## Practical Notes

- `suspend` is a shell builtin, not an external command. It is available in bash, zsh, dash, and other POSIX shells.
- Login shells cannot normally be suspended unless `-f` is used.
- To resume the suspended shell, type `fg` in the parent shell.
- Use `jobs` to see the suspended job's status.
- Not to be confused with system suspend (sleep/hibernate). Use `systemctl suspend` or `pm-suspend` for that.
