---
name: declare
summary: Declare Bash variables and attributes.
category: Shell
tags: bash, variable, shell, script
popular: false
---

## Additional Notes

`declare` is a Bash builtin for creating variables and setting attributes such as integer, array, readonly, export, or function display.

Use it in Bash scripts when variable type or scope matters.

## Syntax

```bash
declare [options] [name[=value] ...]
```

## Parameters

- `name`: Variable or function name.
- `value`: Optional value to assign.
- `options`: Attribute flags.

## Common Options

- `-i`: Treat variable as an integer.
- `-a`: Declare indexed array.
- `-A`: Declare associative array.
- `-r`: Make variable readonly.
- `-x`: Export variable to child processes.
- `-p`: Print variable declarations.
- `-f`: Show function definitions.
- `-g`: Create global variable inside a function on Bash versions that support it.

## Examples

```bash
declare -i count=10
count=count+5
echo "$count"
```

Use integer arithmetic assignment.

```bash
declare -A colors
colors[error]=red
```

Create an associative array.

```bash
declare -r app_name="linux-command"
```

Create a readonly variable.

```bash
declare -p PATH
```

Print a reusable declaration for a variable.

## Practical Notes

- `declare` is Bash-specific; plain `sh` may not support these features.
- Use `local` inside functions when you only need function-local variables.
- Arrays and associative arrays require Bash, not POSIX shell.
