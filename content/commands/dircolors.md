---
name: dircolors
summary: Configure colors used by ls.
category: Shell
tags: shell, script, builtin
popular: false
---

## Additional Notes

`dircolors` is a shell command used to configure colors used by ls. It outputs shell commands that set the LS_COLORS environment variable, which controls the color scheme used by ls. Run it in your shell init file to customize how file types are displayed.

## Syntax

```bash
dircolors [arguments]
```

## Parameters

- `options`: Flags that change how `dircolors` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `--help`: Show command help when supported.
- `--version`: Show version information when supported.

## Examples

```bash
dircolors --help
man dircolors
```

## Practical Notes

Options can vary by distribution and package version. Use `man dircolors`, `dircolors --help`, or the package documentation for exact syntax.
