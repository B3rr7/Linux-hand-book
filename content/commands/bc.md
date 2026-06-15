---
name: bc
summary: Run an arbitrary precision calculator language.
category: Shell
tags: calculator, math, shell, decimal
popular: false
---

## Additional Notes

`bc` is a calculator language for arbitrary precision arithmetic. It is useful in shell scripts because POSIX shell arithmetic only handles integers.

Use `bc` for decimal math, larger calculations, and quick terminal calculations.

## Syntax

```bash
bc [options] [file...]
```

## Parameters

- `file`: Optional file containing `bc` expressions.
- `expression`: Math expression read from standard input.
- `options`: Math library and mode flags.

## Common Options

- `-l`: Load the standard math library and set a useful default scale.
- `-q`: Quiet mode. Do not print the startup banner.
- `-s`: Standard POSIX mode.
- `-w`: Warn about non-standard extensions.

## Examples

```bash
echo "2 + 3" | bc
```

Add numbers.

```bash
echo "scale=2; 10 / 3" | bc
```

Divide with two decimal places.

```bash
echo "sqrt(81)" | bc -l
```

Use the math library.

```bash
result=$(echo "scale=4; $used / $total * 100" | bc)
```

Use `bc` in a shell script.

## Practical Notes

- Set `scale` when you need decimal division.
- Use `bc -l` for functions such as `sqrt` and trigonometry.
- Validate variables before inserting them into expressions in scripts.
