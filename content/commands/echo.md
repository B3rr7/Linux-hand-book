---
name: echo
summary: Print text or shell variable values.
category: Shell
tags: shell, print, text, variable, script
popular: true
---

## Additional Notes

`echo` prints text to standard output. It is common in shell scripts, quick terminal messages, and simple variable checks.

For portable scripting, `printf` is often better because `echo` behavior can vary between shells.

## Syntax

```bash
echo [options] [text...]
```

## Parameters

- `options`: Flags that change how `echo` behaves.
- `arguments`: Values consumed by the shell builtin or script command.
- `command`: Command line to run, test, wrap, or control.

## Common Options

- `-n`: Do not print the final newline.
- `-e`: Enable backslash escape interpretation in many shells.
- `-E`: Disable backslash escape interpretation in many shells.

## Examples

```bash
echo hello
```

Print text.

```bash
echo "$HOME"
```

Print the value of a shell variable.

```bash
echo "Log started at $(date)"
```

Print text with command substitution.

```bash
echo "text" > file.txt
```

Write text to a file, replacing existing contents.

```bash
echo "more text" >> file.txt
```

Append text to a file.

## Practical Notes

- Quote variables to preserve spaces: `echo "$name"`.
- Use `printf` when exact formatting matters.
- Redirection with `>` overwrites files; `>>` appends.
- Some shells provide `echo` as a builtin.
