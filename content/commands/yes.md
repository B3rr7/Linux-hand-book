---
name: yes
summary: Repeatedly print a string.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`yes` is a shell command used to repeatedly print a string. It outputs a string repeatedly until killed, commonly used to automate yes/no prompts in scripts.

`yes` is useful for piping 'y' to commands that ask for confirmation, like `yes | apt-get install`. Without arguments, it outputs `y`.

## Syntax

```bash
yes [arguments]
```

## Parameters

- `options`: Flags that change how `yes` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
yes --help
man yes
```

## Practical Notes

Options can vary by distribution and package version. Use `man yes`, `yes --help`, or the package documentation for exact syntax.
