---
name: fc
summary: Edit and rerun shell history commands.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`fc` is a shell command used to edit and rerun shell history commands. It lists, edits, and re-executes commands from the shell history. By default it opens the last history entries in an editor, then executes the edited result.

## Syntax

```bash
fc [arguments]
```

## Parameters

- `options`: Flags that change how `fc` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
fc --help
man fc
```

## Practical Notes

Options can vary by distribution and package version. Use `man fc`, `fc --help`, or the package documentation for exact syntax.
