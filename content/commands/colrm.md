---
name: colrm
summary: Remove selected columns from text lines.
category: Text
tags: text, columns, filter, cut
popular: false
---

## Additional Notes

`colrm` removes character columns from each input line. It is useful for fixed-width text where you want to delete a column range.

It counts columns by character position, not CSV fields or whitespace-separated fields.

## Syntax

```bash
colrm [start [end]]
```

## Parameters

- `start`: First column to remove, starting at 1.
- `end`: Last column to remove. If omitted, removes through end of line.
- Standard input: Text to process.

## Examples

```bash
printf 'abcdef\n' | colrm 3
```

Remove from column 3 to the end, producing `ab`.

```bash
printf 'abcdef\n' | colrm 3 4
```

Remove columns 3 through 4, producing `abef`.

```bash
cat fixed-width.txt | colrm 1 8
```

Remove the first eight columns from fixed-width text.

## Practical Notes

- Use `cut -c` when you want to keep specific character ranges instead of removing them.
- Column counting can be confusing with tabs or wide Unicode characters.
- For delimited data, use `cut -d`, `awk`, or a structured parser.
