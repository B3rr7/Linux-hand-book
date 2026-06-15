---
name: sed
summary: Edit text streams using patterns and substitutions.
category: Text
tags: text, replace, stream, filter, script
popular: true
---

## Additional Notes

`sed` is a stream editor. It reads text, applies editing commands, and prints the result. It is often used for search-and-replace, deleting lines, printing selected lines, and simple text transformations.

By default, `sed` writes changed text to standard output. It does not modify the original file unless you use in-place editing.

## Syntax

```bash
sed [options] 'script' [file...]
```

## Parameters

- `options`: Flags that change how `sed` behaves.
- `file`: Text file to read or process.
- `script`: Sed editing command or script, such as `s/old/new/`.

## Common Options

- `-n`: Suppress automatic printing. Useful with explicit `p`.
- `-i`: Edit files in place.
- `-i.bak`: Edit in place and create backup files.
- `-E`: Use extended regular expressions.
- `-e SCRIPT`: Add a script command.
- `-f FILE`: Read sed commands from a file.

## Common Commands

- `s/old/new/`: Replace first match on each line.
- `s/old/new/g`: Replace all matches on each line.
- `p`: Print matching lines.
- `d`: Delete matching lines.
- `1,5p`: Print lines 1 through 5.
- `/pattern/p`: Print lines matching a pattern.
- `/pattern/d`: Delete lines matching a pattern.

## Examples

```bash
sed 's/http/https/' urls.txt
```

Replace the first `http` on each line.

```bash
sed 's/http/https/g' urls.txt
```

Replace every `http` on each line.

```bash
sed -n '1,20p' app.log
```

Print lines 1 through 20.

```bash
sed '/^#/d' config.conf
```

Remove comment lines from output.

```bash
sed '/^$/d' file.txt
```

Remove empty lines from output.

```bash
sed -i.bak 's/old-name/new-name/g' config.conf
```

Edit a file in place while creating `config.conf.bak`.

```bash
cat access.log | sed -n '/404/p'
```

Print only lines containing `404`.

## Practical Notes

- Quote sed scripts so the shell does not interpret special characters.
- Use `-i.bak` when learning in-place editing.
- The delimiter does not have to be `/`; for paths, `s#/old/path#/new/path#g` can be easier.
- For field-based processing, use `awk`.
- For simple fixed-string replacement in one file, a text editor may be safer.
