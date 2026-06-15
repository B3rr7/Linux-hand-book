---
name: dc
summary: Use a reverse Polish notation calculator.
category: Shell
tags: calculator, rpn, math, shell
popular: false
---

## Additional Notes

`dc` is an arbitrary precision calculator that uses reverse Polish notation, where operands come before operators. It is older and lower-level than `bc`.

Use it for quick stack-based calculations or scripts where RPN is convenient.

## Syntax

```bash
dc [options] [file]
```

## Parameters

- `file`: Optional file containing `dc` commands.
- Standard input: Commands and numbers to evaluate.

## Common Commands

- `p`: Print the top of the stack.
- `f`: Print the full stack.
- `+`: Add top two values.
- `-`: Subtract.
- `*`: Multiply.
- `/`: Divide.
- `k`: Set precision.
- `q`: Quit.

## Examples

```bash
echo '2 3 + p' | dc
```

Add 2 and 3.

```bash
echo '10 3 / p' | dc
```

Divide 10 by 3 with default precision.

```bash
echo '4 k 10 3 / p' | dc
```

Set precision to 4 and divide.

## Practical Notes

- Use `bc` if infix notation is easier for you.
- RPN is concise but unfamiliar to many users.
- `dc` can do more than basic math, including macros, but scripts can become hard to read.
