---
name: tr
summary: Translate, squeeze, or delete characters from standard input.
category: Text
tags: text, characters, replace, delete
popular: true
---

## Additional Notes

`tr` is a text-processing command used to translate, squeeze, or delete characters from standard input. It performs character-level transformations like uppercasing, deleting characters, or collapsing repeated characters.

`tr` works on characters only, not words or regular expressions. Use `-d` to delete and `-s` to squeeze repeated characters.

## Syntax

```bash
tr [options] [file...]
```

## Parameters

- `options`: Flags that change how `tr` behaves.
- `file`: Text file to read or process.
- `set1`: Characters to translate, squeeze, or delete.

## Common Options

- `-d SET`: Delete characters in SET.
- `-s SET`: Squeeze repeated characters.
- `-c SET`: Use the complement of SET.

## Examples

```bash
echo "hello" | tr a-z A-Z
echo "a  b   c" | tr -s " "
echo "phone: 123-456" | tr -d "-"
```

## Practical Notes

`tr` works on characters, not words or regular expressions.
