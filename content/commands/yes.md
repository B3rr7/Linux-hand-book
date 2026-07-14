---
name: yes
summary: Repeatedly print a string.
category: Shell
tags: shell, script, builtin, repeat
popular: false
---

## Additional Notes

`yes` repeatedly prints a string (default `y`) to standard output, as fast as the pipe will accept. It is classically used to auto-answer prompts that expect a repeated confirmation.

It keeps printing until the reading side closes the pipe, so it pairs well with commands that ask the same question many times.

## Syntax

```bash
yes [string ...]
```

## Parameters

- `string`: Text to repeat. If omitted, prints `y` (a single `y` per line).

## Examples

```bash
yes | head
```

Print a few `y` lines (use `head` to stop it in a demo).

```bash
yes | rm -r dir
```

Auto-confirm a recursive removal that asks `rm: remove ...?`.

```bash
yes "no" | command-that-prompts
```

Feed `no` repeatedly instead of `y`.

```bash
yes n | cp -i a b
```

Answer `n` to each interactive `cp` prompt.

```bash
for i in $(seq 1 3); do yes "line $i"; done | head -3
```

Build a repeating label inside a loop, then cap it with `head`.

## Practical Notes

- Without `head` or a reader that stops, `yes` runs forever; pipe it to something bounded.
- Use it for non-interactive installs that repeatedly prompt for confirmation.
- A safer habit is to prefer flags that skip prompts (such as `rm -rf` or `cp -n`) when available.
- `yes` is also handy for generating test data, such as `yes "test" | head -1000 > sample.txt`.
