---
name: break
summary: Exit from a shell loop.
category: Shell
tags: shell, loop, script, control flow
popular: false
---

## Additional Notes

`break` is a shell builtin used inside loops. It exits the current loop, or multiple nested loops when given a numeric argument.

Use it in shell scripts when a condition means the loop should stop early.

## Syntax

```bash
break [n]
```

## Parameters

- `n`: Optional number of nested loops to exit. Default is 1.

## Examples

```bash
for file in *.log; do
  [ -e "$file" ] || break
  echo "$file"
done
```

Stop if the glob did not match a real file.

```bash
while true; do
  read -r answer
  [ "$answer" = "quit" ] && break
done
```

Exit an infinite loop when the user types `quit`.

```bash
for a in 1 2; do
  for b in 1 2; do
    break 2
  done
done
```

Exit two nested loops.

## Practical Notes

- `break` only makes sense inside loops.
- Use `continue` when you want the next iteration instead of leaving the loop.
- In scripts, clear loop conditions are usually easier to read than too many nested breaks.
