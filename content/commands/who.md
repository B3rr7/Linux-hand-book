---
name: who
summary: Show users currently logged in.
category: System
tags: user, login, session, system
popular: false
---

## Additional Notes

`who` displays information about users currently logged into the system, including their terminal, login time, and origin.

For a simpler list of usernames, use `users`. For detailed session activity, use `w`.

## Syntax

```bash
who [options]
who am i
```

## Parameters

- `options`: Flags that change how `who` behaves.

## Common Options

- `-a`: Show all available information.
- `-b`: Show last system boot time.
- `-q`: Show login names and count.

## Examples

```bash
who
who -b
who -q
```

## Practical Notes

Use `w` when you also want to see what logged-in users are doing.
