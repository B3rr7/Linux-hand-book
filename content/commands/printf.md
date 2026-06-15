---
name: printf
summary: Print formatted text.
category: Shell
tags: print, format, shell, script
popular: false
---

## Additional Notes

`printf` is a shell command used to print formatted text. It gives predictable, portable formatted output and is safer than `echo` for complex formatting.

`printf` is defined by POSIX and behaves the same across shells. Unlike `echo`, its behavior does not vary with shell options or implementations.

## Syntax

```bash
printf [arguments]
```

## Parameters

- `options`: Flags that change how `printf` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `%s`: Format a string.
- `%d`: Format an integer.
- `\n`: Print a newline.

## Examples

```bash
printf "Hello\n"
printf "User: %s\n" "$USER"
printf "%04d\n" 7
```

## Practical Notes

`printf` is predictable in scripts because it does not vary as much between shells as `echo`.
