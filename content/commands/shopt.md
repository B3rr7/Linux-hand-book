---
name: shopt
summary: Set Bash shell options.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`shopt` is a shell command used to set Bash shell options. It manages Bash-specific shell options that control globbing, history, directory navigation, and other shell features.

`shopt` is specific to Bash and is not available in POSIX shells. Use `shopt -s OPTION` to enable and `shopt -u OPTION` to disable an option.

## Syntax

```bash
shopt [arguments]
```

## Parameters

- `options`: Flags that change how `shopt` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
shopt --help
man shopt
```

## Practical Notes

Options can vary by distribution and package version. Use `man shopt`, `shopt --help`, or the package documentation for exact syntax.
