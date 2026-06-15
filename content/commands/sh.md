---
name: sh
summary: The POSIX shell command interpreter.
category: Shell
tags: shell, command, interpreter, posix, scripting
popular: true
---

## Additional Notes

`sh` is the standard command language interpreter for POSIX-compliant Unix systems. On most Linux distributions, `/bin/sh` is a symbolic link to either `bash` (Bourne Again SHell) running in POSIX mode, `dash` (Debian Almquist Shell), or `ash`. The POSIX shell standard (IEEE 1003.1) defines the minimum functionality that all Unix shells must provide.

The shell is both an interactive command interpreter and a scripting language. It supports variables, control structures (if/else, for, while, case), functions, input/output redirection, pipelines, command substitution, and job control. As a scripting language, it is used for system initialization scripts, package management scripts, and automation tasks throughout the operating system.

## Syntax

```bash
sh [options] [script_file] [arguments...]
sh -c 'command_string' [arguments...]
```

## Parameters

- `script_file`: A file containing shell commands to execute.
- `command_string`: A string containing shell commands to execute (with `-c`).
- `arguments`: Arguments passed to the script or command string ($0, $1, $2, ...).

## Common Options

- `-c string`: Read commands from the specified string.
- `-s`: Read commands from standard input.
- `-i`: Interactive mode (with job control and prompt).
- `-l`, `--login`: Login shell (sources login profile files).
- `-x`: Print commands and their arguments as they are executed (debugging).
- `-e`: Exit immediately if a command exits with a non-zero status.
- `-n`: Read and parse commands but do not execute them (syntax check).
- `-u`: Treat unset variables as an error when substituting.
- `-f`: Disable pathname expansion (globbing).
- `-v`: Print shell input lines as they are read.
- `-a`: Mark variables that are modified or created for export.
- `--restricted`: Run in restricted mode (`rbash`, `rsh`).

## Examples

```bash
sh
```

Start an interactive POSIX shell session.

```bash
sh script.sh
```

Execute `script.sh` in a new shell.

```bash
sh -c 'echo "Hello, $USER"'
```

Execute a command string.

```bash
sh -n script.sh
```

Check `script.sh` for syntax errors without executing it.

```bash
sh -x script.sh
```

Run `script.sh` with debug tracing (shows each command before execution).

```bash
#!/bin/sh
echo "Hello, World!"
```

Standard POSIX script shebang line.

## Shell Scripting Basics

Variables:
```bash
name="World"
echo "Hello, $name"
```

Conditionals:
```bash
if [ -f "$file" ]; then
    echo "File exists"
fi
```

Loops:
```bash
for f in *.txt; do
    echo "$f"
done
```

Functions:
```bash
hello() {
    echo "Hello, $1"
}
hello "World"
```

## Practical Notes

- Scripts using `#!/bin/sh` should avoid bash-specific syntax like `[[ ]]`, arrays, and `(( ))`.
- The POSIX test command `[` requires spaces around operators and variables to be quoted.
- The `$()` command substitution syntax is POSIX-compliant (prefer it over backticks).
- Always quote variables (`"$var"`) to avoid word splitting and glob expansion.
- Use `set -e` for stricter error handling in scripts.
- The `dash` shell (Debian/Ubuntu default `/bin/sh`) is faster but has fewer features than bash.
