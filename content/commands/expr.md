---
name: expr
summary: Evaluate expressions in shell scripts.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`expr` is a shell command used to evaluate expressions in shell scripts. It evaluates integer arithmetic, string comparisons, and regular expression matches in shell scripts. For most arithmetic, the $((...)) syntax is now preferred.

## Syntax

```bash
expr [arguments]
```

## Parameters

- `options`: Flags that change how `expr` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
expr --help
man expr
```

## Practical Notes

Options can vary by distribution and package version. Use `man expr`, `expr --help`, or the package documentation for exact syntax.
