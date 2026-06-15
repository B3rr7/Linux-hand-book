---
name: test
summary: Evaluate conditional expressions.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`test` is a shell command used to evaluate conditional expressions. It evaluates conditional expressions and returns a zero or non-zero exit status for use in `if`, `while`, and `||`/`&&` constructs.

`test` is specified by POSIX. The `[` form is equivalent; use it for file tests (`-f`, `-d`), string comparisons, and numeric comparisons.

## Syntax

```bash
test [arguments]
```

## Parameters

- `options`: Flags that change how `test` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
test --help
man test
```

## Practical Notes

Options can vary by distribution and package version. Use `man test`, `test --help`, or the package documentation for exact syntax.
