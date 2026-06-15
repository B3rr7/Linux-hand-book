---
name: wall
summary: Broadcast a message to logged-in users.
category: System
tags: system, admin, inspect
popular: false
---

## Additional Notes

`wall` sends a message to all users who are currently logged in. The message can be provided as an argument or typed interactively after running the command.

It is useful for system administrators sending maintenance notices or shutdown warnings.

## Syntax

```bash
wall [message]
wall [options] [file]
```

## Parameters

- `message`: Text to broadcast. If not provided, `wall` reads from standard input.
- `file`: Read the message from a file.

## Common Options

- `-n`: Suppress the default banner.
- `-t TIMEOUT`: Abort if the message cannot be sent within TIMEOUT seconds.

## Examples

```bash
wall --help
man wall
```

## Practical Notes

Options can vary by distribution and package version. Use `man wall`, `wall --help`, or the package documentation for exact syntax.
