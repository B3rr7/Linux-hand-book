---
name: seq
summary: Print a sequence of numbers.
category: Shell
tags: numbers, sequence, loop, script
popular: false
---

## Additional Notes

`seq` is a shell command used to print a sequence of numbers. It generates sequences of numbers for use in loops, command substitution, or generating test data.

`seq` is part of GNU coreutils. Use `seq FIRST INCREMENT LAST` for custom step sizes, or `-w` to zero-pad output.

## Syntax

```bash
seq [arguments]
```

## Parameters

- `options`: Flags that change how `seq` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `-f FORMAT`: Use printf-style formatting.
- `-s SEP`: Use a custom separator.
- `-w`: Equalize width by padding with zeros.

## Examples

```bash
seq 5
seq 1 2 9
seq -w 1 12
```

## Practical Notes

`seq` is often used with command substitution or loops in shell scripts.
