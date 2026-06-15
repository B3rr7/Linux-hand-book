---
name: return
summary: Return from a shell function.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`return` is a shell command used to return from a shell function. It exits a shell function with a specified exit status, allowing functions to signal success or failure.

`return` is a Bash builtin specified by POSIX. Use it to return from a function with an appropriate exit code, like `return 1` for failure.

## Syntax

```bash
return [arguments]
```

## Parameters

- `options`: Flags that change how `return` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
return --help
man return
```

## Practical Notes

Options can vary by distribution and package version. Use `man return`, `return --help`, or the package documentation for exact syntax.
