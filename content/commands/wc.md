---
name: wc
summary: Count lines, words, bytes, and characters.
category: Text
tags: text, count, lines, words, bytes
popular: true
---

## Additional Notes

`wc` counts text. The name means word count, but it can also count lines, bytes, and characters.

It is useful in scripts, pipelines, and quick checks such as counting log lines or files returned by another command.

## Syntax

```bash
wc [options] [file...]
```

## Parameters

- `options`: Flags that change how `wc` behaves.
- `file`: Text file to read or process.

## Common Options

- `-l`, `--lines`: Count lines.
- `-w`, `--words`: Count words.
- `-c`, `--bytes`: Count bytes.
- `-m`, `--chars`: Count characters.
- `-L`, `--max-line-length`: Show length of the longest line.

## Examples

```bash
wc file.txt
```

Show lines, words, bytes, and filename.

```bash
wc -l app.log
```

Count lines in a file.

```bash
grep "error" app.log | wc -l
```

Count matching log lines.

```bash
find . -type f | wc -l
```

Count files under the current directory.

```bash
wc -L file.txt
```

Show the longest line length.

## Practical Notes

- `wc -l` counts newline characters, which usually means lines.
- When reading from a pipe, `wc` does not print a filename.
- Use `wc -c` for byte size and `wc -m` for character count.
- For disk usage, use `du`, not `wc`.
