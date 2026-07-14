---
name: printf
summary: Print formatted text.
category: Shell
tags: print, format, shell, script, escape
popular: false
---

## Additional Notes

`printf` prints formatted text using a format string and arguments, much like the C `printf` function. Unlike `echo`, it does not add a newline unless you ask for one, which makes it predictable in scripts.

The first argument is the format; remaining arguments fill its placeholders in order.

## Syntax

```bash
printf FORMAT [arguments ...]
```

## Parameters

- `FORMAT`: The format string with literal text and placeholders.
- `arguments`: Values substituted into the placeholders.

## Common Format Specifiers

- `%s`: String.
- `%d`, `%i`: Signed decimal integer.
- `%u`: Unsigned integer.
- `%x`, `%X`: Hexadecimal (lower/upper case).
- `%f`: Floating-point number.
- `%c`: A single character.
- `%b`: String that interprets backslash escapes.
- `%%`: A literal percent sign.

## Common Escapes

- `\n`: Newline.
- `\t`: Tab.
- `\\`: Backslash.
- `\"`: Double quote.

## Examples

```bash
printf "Hello, %s\n" "$USER"
```

Greet the current user, ending with a newline.

```bash
printf "Zero-padded: %05d\n" 42
```

Print `00042` with a fixed width.

```bash
printf "Hex: %x\n" 255
```

Print `ff` in hexadecimal.

```bash
printf "Pi: %.2f\n" 3.14159
```

Print `Pi: 3.14` with two decimals.

```bash
printf "%s: %s\n" name value
```

Print a simple `key: value` line.

```bash
printf "%.0f\n" "$((bytes / 1024))"
```

Print an integer division result without decimals.

## Practical Notes

- `printf` does not append a newline; add `\n` when you need one.
- `%b` expands `\n` and `\t` inside the argument; `%s` does not.
- Use `%05d` or `%8s` for aligned, padded columns in scripts.
- It is generally safer than `echo` when the input may start with `-` or contain backslashes.
