---
name: chsh
summary: Change a user's login shell.
category: Permissions
tags: shell, user, account, login
popular: false
---

## Additional Notes

`chsh` changes the login shell recorded for a user account. The login shell is the program started when the user logs in through normal login paths.

Use it when switching between shells such as `bash`, `zsh`, or `fish`.

## Syntax

```bash
chsh [options] [user]
```

## Parameters

- `user`: Account whose shell should be changed.
- `shell`: New shell path, usually selected with `-s`.
- `options`: Listing and shell-selection flags.

## Common Options

- `-s SHELL`: Set login shell.
- `-l`: List valid shells on some systems.

## Examples

```bash
chsh -s /bin/bash
```

Set your login shell to Bash.

```bash
sudo chsh -s /usr/bin/zsh alice
```

Change another user's shell.

```bash
cat /etc/shells
```

View allowed login shells.

```bash
getent passwd alice
```

Check the account entry and shell field.

## Practical Notes

- The shell normally must be listed in `/etc/shells`.
- Changes may apply on the next login, not to the current terminal.
- Use `usermod -s SHELL USER` as another administrative method.
