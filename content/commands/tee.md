---
name: tee
summary: Read standard input and write it to files and standard output.
category: Shell
tags: pipe, output, files, logging
popular: false
---

## Additional Notes

`tee` is a shell command used to read standard input and write it to files and standard output. It splits a command's output so you can see it on screen and save it to a file simultaneously.

Use `-a` to append to files instead of overwriting. `tee` is often used with `sudo` to write to protected files: `command | sudo tee file`.

## Syntax

```bash
tee [arguments]
```

## Parameters

- `options`: Flags that change how `tee` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `-a`: Append to files instead of overwriting.
- `-i`: Ignore interrupt signals.

## Examples

```bash
echo "hello" | tee output.txt
make | tee build.log
echo "line" | sudo tee -a /etc/example.conf
```

## Practical Notes

`tee` is useful when you want to see command output and save it at the same time.
