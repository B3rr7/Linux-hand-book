---
name: seq
summary: Print a sequence of numbers.
category: Shell
tags: numbers, sequence, loop, script, iterate
popular: false
---

## Additional Notes

`seq` prints a sequence of numbers, one per line, from a start value to an end value. It is handy for loops, repeated tasks, and generating numbered lists in scripts.

With one argument it counts from 1; with two it uses start and end; with three you add a step (which may be negative to count down).

## Syntax

```bash
seq [options] [FIRST] LAST
seq [options] FIRST INCREMENT LAST
```

## Parameters

- `options`: Flags that change output format.
- `FIRST`: Starting value (default 1).
- `INCREMENT`: Step between numbers (default 1; may be negative).
- `LAST`: Ending value (inclusive).

## Common Options

- `-s STRING`, `--separator=STRING`: Use a custom separator instead of newline.
- `-w`, `--equal-width`: Pad with leading zeros to equal width.
- `-f FORMAT`, `--format=FORMAT`: Use a `printf`-style format such as `%03g`.
- `--help`: Show usage help.

## Examples

```bash
seq 5
```

Print `1` through `5`, one per line.

```bash
seq 2 2 10
```

Print even numbers `2`, `4`, `6`, `8`, `10`.

```bash
seq 10 -1 1
```

Count down from `10` to `1`.

```bash
seq -s, 1 5
```

Print `1,2,3,4,5` on one line with comma separators.

```bash
seq -w 1 10
```

Print `01` through `10` with equal width.

```bash
seq -f "File %03g" 1 3
```

Print `File 001`, `File 002`, `File 003`.

## Practical Notes

- Use `seq` in `for` loops: `for i in $(seq 1 10); do ...; done`.
- Negative steps count downward; make sure FIRST is above LAST in that case.
- `-w` and `-f` make output line up nicely in reports.
- For very large ranges, consider a shell brace range like `{1..10}` which needs no command.
