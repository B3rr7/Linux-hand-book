---
name: env
summary: Show or run commands with environment variables.
category: Shell
tags: environment, variable, shell, command, script
popular: true
---

## Additional Notes

`env` prints the current environment or runs a command with modified environment variables.

Environment variables are inherited by child processes and are often used for paths, credentials, editor choices, locale, and application configuration.

## Syntax

```bash
env [options] [NAME=VALUE...] [command [args...]]
```

## Parameters

- `options`: Flags that change how `env` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `-i`, `--ignore-environment`: Start with an empty environment.
- `-u NAME`, `--unset=NAME`: Remove a variable before running the command.
- `-0`, `--null`: End output entries with null characters.

## Examples

```bash
env
```

Print environment variables.

```bash
env | sort
```

Print variables in sorted order.

```bash
env DEBUG=1 ./app
```

Run a command with one extra variable.

```bash
env -u HTTP_PROXY curl https://example.com
```

Run a command with one variable removed.

```bash
env -i PATH=/usr/bin:/bin bash --noprofile --norc
```

Start a shell with a minimal environment.

## Practical Notes

- `env NAME=value command` affects only that command and its children.
- Use `export NAME=value` to make a shell variable part of the environment.
- Be careful printing environments because they may contain secrets.
- Many scripts use `/usr/bin/env python3` to find an interpreter from `PATH`.
