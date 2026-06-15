---
name: w
summary: Show logged-in users and what they are doing.
category: System
tags: user, login, process, load
popular: false
---

## Additional Notes

`w` displays a summary of logged-in users, their current activity, and system load. It combines the output of `who`, `uptime`, and `ps` into a single view.

The header shows the current time, uptime, user count, and load averages. Each user row shows login, terminal, origin, login time, idle time, and current command.

## Syntax

```bash
w [options] [user]
```

## Parameters

- `options`: Flags that change how `w` behaves.
- `user`: Show information only for the specified user.

## Common Options

- `-h`: Do not print the header.
- `-s`: Use short format.
- `USER`: Show one user.

## Examples

```bash
w
w -s
w deploy
```

## Practical Notes

`w` combines login session information with system load and each user's current process.
