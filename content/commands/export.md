---
name: export
summary: Mark shell variables for child processes.
category: Shell
tags: shell, variable, environment, script, bash
popular: true
---

## Additional Notes

`export` makes a shell variable available to commands started from that shell. Without export, a variable may exist only inside the current shell.

It is usually a shell builtin.

## Syntax

```bash
export NAME=VALUE
export NAME
```

## Parameters

- `options`: Flags that change how `export` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Examples

```bash
export EDITOR=nano
```

Set and export `EDITOR`.

```bash
API_URL="https://api.example.com"
export API_URL
```

Assign first, then export.

```bash
export PATH="$HOME/bin:$PATH"
```

Add a personal bin directory to `PATH`.

```bash
export
```

List exported variables in many shells.

```bash
env | grep API_URL
```

Check whether a variable is in the environment.

## Practical Notes

- Use quotes around values containing spaces or shell characters.
- Exported variables are inherited by child processes, not parent shells.
- Avoid exporting secrets in shared terminals or logs.
- To make exports permanent, add them to shell startup files such as `~/.bashrc` when appropriate.
