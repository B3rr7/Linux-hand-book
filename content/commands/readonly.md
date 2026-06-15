---
name: readonly
summary: Mark shell variables and functions as read-only.
category: System
tags: shell, variables, bash, readonly, constants
popular: false
---

## Additional Notes

`readonly` is a shell built-in command that marks variables or functions as read-only in the current shell session. Once marked, the variable or function cannot be changed or unset for the duration of the shell session.

It is used in shell scripts to define constants and protect important variables from accidental modification. Common uses include defining configuration values, paths, and flags that should remain unchanged throughout script execution.

## Syntax

```bash
readonly [options] [name[=value]...]
readonly -f [name...]
```

## Parameters

- `name`: Variable or function name to mark as read-only.
- `=value`: Optional assignment of value at the time of marking.

## Common Options

- `-p`: Print a list of all read-only variables and their values.
- `-f`: Operate on shell functions instead of variables.
- `-a`: Operate on indexed arrays.
- `-A`: Operate on associative arrays.

## Examples

```bash
readonly MAX_RETRIES=5
```

Declare a constant variable.

```bash
readonly CONFIG_FILE="/etc/myapp/config.ini"
```

Make a configuration path constant.

```bash
readonly -p
```

List all read-only variables and their values.

```bash
readonly -f myfunc
```

Mark a shell function as read-only.

```bash
declare -r VERSION="1.0.0"
```

Declare a read-only variable using the `declare` built-in (alternative syntax).

```bash
readonly PATH_SEPARATOR=":" IFS=" "
```

Mark multiple variables as read-only in one command.

```bash
readonly -a DAYS=(Mon Tue Wed Thu Fri Sat Sun)
```

Make an indexed array read-only.

## Practical Notes

- Once a variable is marked `readonly`, it cannot be modified with any assignment or unset with `unset`.
- `readonly` only affects the current shell session. Subshells and child processes inherit the value but not the read-only restriction.
- The `-p` option lists all read-only variables, useful for debugging.
- In bash scripts, use `readonly` or `declare -r` for constants at the top of the script.
- Attempting to modify a read-only variable results in an error: `bash: VAR: readonly variable`.
- The environment variables `PATH`, `HOME`, `UID`, `EUID`, `BASH_VERSINFO`, and others are automatically read-only.
