---
name: xargs
summary: Build command lines from standard input.
category: Shell
tags: pipe, arguments, command, files
popular: true
---

## Additional Notes

`xargs` is a shell command used to build command lines from standard input. It converts standard input into arguments for another command, enabling batch processing and parallel execution.

Use `-0` with null-separated input (from `find -print0`) to handle filenames with spaces. Use `-P N` for parallel execution with N processes.

## Syntax

```bash
xargs [arguments]
```

## Parameters

- `options`: Flags that change how `xargs` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `-0`: Read null-separated input.
- `-n N`: Use N arguments per command.
- `-I {}`: Replace a placeholder with each input item.
- `-r`: Do not run if input is empty.

## Examples

```bash
printf "%s\n" one two | xargs echo
find . -name "*.log" -print0 | xargs -0 rm
printf "%s\n" app db | xargs -I {} echo "restart {}"
```

## Practical Notes

Use null-separated input with `find -print0` and `xargs -0` when filenames may contain spaces or newlines.
