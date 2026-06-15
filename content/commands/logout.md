---
name: logout
summary: Exit a login shell or terminate a session.
category: Shell
tags: shell, exit, session, login
popular: false
---

## Additional Notes

`logout` is a shell built-in that exits a login shell. When used in a login shell, it terminates the session. In a non-login shell or a subshell, `logout` is not valid and `exit` should be used instead.

It is commonly used to end SSH sessions, exit from console logins, or terminate a `su -` session. The command honors the shell's job control and will warn about stopped jobs before logging out.

## Syntax

```bash
logout [n]
```

## Parameters

- `n`: Optional exit status (an integer). Defaults to the exit status of the last command executed.

## Examples

```bash
logout
```

Exit the current login shell.

```bash
logout 1
```

Exit with a non-zero status, indicating an error condition.

```bash
ssh user@host
# ... work ...
logout
```

End an SSH session.

## Practical Notes

- In a non-login shell, `logout` will fail with `not a login shell`. Use `exit` instead.
- `exit` works in both login and non-login shells and is the more universal command.
- Some shells prompt about stopped background jobs before allowing logout. Use `disown` or `kill` to handle them first.
- In bash, `logout` is equivalent to `exit` only when the shell is a login shell.

