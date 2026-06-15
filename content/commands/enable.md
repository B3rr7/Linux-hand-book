---
name: enable
summary: Enable or disable shell builtins.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`enable` is a shell command used to enable or disable shell builtins. It controls which shell builtins are available in the current shell session. Disabling a builtin causes the shell to search PATH for an external command of the same name.

## Syntax

```bash
enable [arguments]
```

## Parameters

- `options`: Flags that change how `enable` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
enable --help
man enable
```

## Practical Notes

Options can vary by distribution and package version. Use `man enable`, `enable --help`, or the package documentation for exact syntax.
