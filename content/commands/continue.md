---
name: continue
summary: Resume the next iteration of a shell loop.
category: Shell
tags: shell, loop, script, control flow
popular: false
---

## Additional Notes

`continue` is a shell builtin used inside loops. It skips the rest of the current loop body and starts the next iteration.

Use it when one item should be skipped but the loop should keep running.

## Syntax

```bash
continue [n]
```

## Parameters

- `n`: Optional number of nested loops to continue. Default is 1.

## Examples

```bash
for file in *; do
  [ -f "$file" ] || continue
  echo "file: $file"
done
```

Skip non-files and keep looping.

```bash
while read -r line; do
  [ -z "$line" ] && continue
  echo "$line"
done < input.txt
```

Skip blank lines.

```bash
for a in 1 2; do
  for b in 1 2; do
    continue 2
  done
done
```

Continue the next iteration of an outer loop.

## Practical Notes

- Use `break` when you want to leave the loop entirely.
- Overusing `continue` can make complex loops harder to read.
- This is a shell builtin, so behavior can vary slightly between shells.
